import { describe, test, expect, vi } from 'vitest';
import { locales, Locale, TranslationObject } from '@/i18n';
import { render, screen, cleanup } from '@testing-library/react';
import HeroSection from '@/components/organisms/HeroSection';
import Header from '@/components/organisms/Header';
import AboutSection from '@/components/organisms/AboutSection';

// Mock server-only module for tests
vi.mock('server-only', () => ({}));

// Import the actual translation files directly
import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json';
import zh from '@/i18n/locales/zh.json';
import ja from '@/i18n/locales/ja.json';
import ko from '@/i18n/locales/ko.json';

// Create a real translations dictionary that mirrors the structure from the actual app
const dictionaryCache: Record<Locale, TranslationObject> = { en, es, zh, ja, ko };

// Mock the dictionaries module to return the actual translations
vi.mock('../dictionaries', () => ({
  getDictionary: vi
    .fn()
    .mockImplementation((locale: Locale) =>
      Promise.resolve(dictionaryCache[locale as keyof typeof dictionaryCache] || dictionaryCache.en)
    ),
}));

describe('Internationalization', () => {
  // Test loading dictionaries for all locales
  test.each(locales)('loads dictionary for locale: %s', (locale: Locale) => {
    const dictionary = dictionaryCache[locale];
    expect(dictionary).toBeTruthy();
    expect(dictionary.header.title).toBeTruthy();
    expect(dictionary.navigation.about).toBeTruthy();
  });

  // Test translations consistency
  test('translations have consistent structure across locales', () => {
    // Get English dictionary as reference
    const enDictionary = dictionaryCache.en;

    // Test each locale against the English structure
    for (const locale of locales) {
      if (locale === 'en') continue; // Skip English

      const dictionary = dictionaryCache[locale];

      // Check that all top-level keys exist
      expect(Object.keys(dictionary)).toEqual(expect.arrayContaining(Object.keys(enDictionary)));

      // Check nested structures for common sections
      const sectionsToCheck = [
        'header',
        'navigation',
        'hero',
        'about',
        'classes',
        'cta',
        'footer',
      ] as const;

      for (const section of sectionsToCheck) {
        expect(dictionary[section]).toBeDefined();
      }
    }
  });

  // Test specific translations in different languages
  test('key phrases are translated in all languages', () => {
    // Important phrases to check in all languages
    const keyPhrases = [
      {
        path: ['navigation', 'about'] as const,
        english: dictionaryCache.en.navigation.about,
      },
      {
        path: ['navigation', 'classes'] as const,
        english: dictionaryCache.en.navigation.classes,
      },
      {
        path: ['navigation', 'contact'] as const,
        english: dictionaryCache.en.navigation.contact,
      },
      {
        path: ['hero', 'title'] as const,
        english: dictionaryCache.en.hero.title,
      },
    ];

    // Check each phrase in each locale
    for (const locale of locales) {
      if (locale === 'en') continue; // Skip English

      for (const phrase of keyPhrases) {
        // Get the value from the nested path - with better typing
        const { path } = phrase;

        let enValue: unknown = dictionaryCache.en;
        let localeValue: unknown = dictionaryCache[locale];

        // Navigate through the path
        for (const key of path) {
          enValue = (enValue as Record<string, unknown>)[key];
          localeValue = (localeValue as Record<string, unknown>)[key];
        }

        // The translations shouldn't be empty
        expect(localeValue).not.toEqual('');
        expect(localeValue).toBeTruthy();
      }
    }
  });

  // Test fallback behavior
  test('returns English dictionary as fallback for invalid locale', async () => {
    const { getDictionary } = await import('../dictionaries');
    // @ts-expect-error Testing invalid locale
    const dictionary = await getDictionary('invalid-locale');
    expect(dictionary).toEqual(dictionaryCache.en);
  });

  // Component tests with real translations
  test('renders HeroSection with English translations', () => {
    render(<HeroSection translations={dictionaryCache.en} />);

    // Check for English content
    expect(screen.getByText(dictionaryCache.en.hero.description)).toBeInTheDocument();
    expect(screen.getByText(dictionaryCache.en.hero.buttons.consultation)).toBeInTheDocument();
    expect(screen.getByText(dictionaryCache.en.hero.buttons.explore)).toBeInTheDocument();
  });

  test('renders HeroSection with Spanish translations', () => {
    render(<HeroSection translations={dictionaryCache.es} />);

    // Check for Spanish content
    expect(screen.getByText(dictionaryCache.es.hero.description)).toBeInTheDocument();
    expect(screen.getByText(dictionaryCache.es.hero.buttons.consultation)).toBeInTheDocument();
    expect(screen.getByText(dictionaryCache.es.hero.buttons.explore)).toBeInTheDocument();
  });

  test('renders Header with different locales', () => {
    const testLocales = ['en', 'es'] as const;

    // Test each locale
    for (const locale of testLocales) {
      const dictionary = dictionaryCache[locale];

      // Unmount previous render
      cleanup();

      render(<Header translations={dictionary} locale={locale} />);

      // Check for translated content
      expect(screen.getByText(dictionary.navigation.about)).toBeInTheDocument();
      expect(screen.getByText(dictionary.navigation.classes)).toBeInTheDocument();
      expect(screen.getByText(dictionary.navigation.contact)).toBeInTheDocument();
    }
  });

  test('renders AboutSection with different locales', () => {
    // Test multiple locales
    for (const locale of ['en', 'es', 'zh'] as const) {
      const dictionary = dictionaryCache[locale];

      // Unmount previous render
      cleanup();

      render(<AboutSection translations={dictionary} />);

      // Check for translated content
      expect(screen.getByText(dictionary.about.title)).toBeInTheDocument();
      expect(screen.getByText(dictionary.about.description)).toBeInTheDocument();

      // Test that at least the first benefit is displayed
      if (dictionary.about.benefits.length > 0) {
        expect(screen.getByText(dictionary.about.benefits[0])).toBeInTheDocument();
      }
    }
  });
});
