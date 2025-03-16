import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import HomePage from '@/app/[lang]/page';
import { Locale, TranslationObject } from '@/i18n';

// Import actual translations
import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json';

// Mock the components to verify they receive the correct props
vi.mock('@/components/organisms/HeroSection', () => ({
  default: ({ translations }: { translations: TranslationObject }) => (
    <div data-testid="hero-section">{translations.hero.title}</div>
  ),
}));

vi.mock('@/components/organisms/AboutSection', () => ({
  default: ({ translations }: { translations: TranslationObject }) => (
    <div data-testid="about-section">{translations.about.title}</div>
  ),
}));

vi.mock('@/components/organisms/ClassesSection', () => ({
  default: ({ translations }: { translations: TranslationObject }) => (
    <div data-testid="classes-section">{translations.classes.title}</div>
  ),
}));

vi.mock('@/components/organisms/StatsSection', () => ({
  default: ({ translations }: { translations: TranslationObject }) => (
    <div data-testid="stats-section">{translations.stats.title}</div>
  ),
}));

vi.mock('@/components/organisms/CtaSection', () => ({
  default: ({ translations }: { translations: TranslationObject }) => (
    <div data-testid="cta-section">{translations.cta.title}</div>
  ),
}));

vi.mock('@/components/organisms/Header', () => ({
  default: ({ translations, locale }: { translations: TranslationObject; locale: Locale }) => (
    <div data-testid="header" data-locale={locale}>
      {translations.header.title}
    </div>
  ),
}));

vi.mock('@/components/organisms/Footer', () => ({
  default: ({ translations, locale }: { translations: TranslationObject; locale: Locale }) => (
    <div data-testid="footer" data-locale={locale}>
      {translations.footer.copyright}
    </div>
  ),
}));

// Mock the scroll button client component
vi.mock('@/components/client/ScrollButtonWrapper', () => ({
  default: () => <div data-testid="scroll-button-wrapper">Scroll Button</div>,
}));

// Mock server-only module for tests
vi.mock('server-only', () => ({}));

// Use real translations for testing
const translations = {
  en,
  es,
};

// Mock the dictionaries module to use real translations
vi.mock('@/app/[lang]/dictionaries', () => ({
  getDictionary: vi.fn().mockImplementation((locale: Locale) => {
    return Promise.resolve(translations[locale as keyof typeof translations] || translations.en);
  }),
}));

describe('Home Page', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders the home page with English translations', async () => {
    // Create a Promise that resolves to the params object
    const paramsPromise = Promise.resolve({ lang: 'en' as Locale });

    // Pass the Promise as params
    const page = await HomePage({ params: paramsPromise });
    render(page);

    // Check for English content in the components
    expect(screen.getByTestId('hero-section')).toHaveTextContent(en.hero.title);
    expect(screen.getByTestId('about-section')).toHaveTextContent(en.about.title);
    expect(screen.getByTestId('classes-section')).toHaveTextContent(en.classes.title);
    expect(screen.getByTestId('stats-section')).toHaveTextContent(en.stats.title);
    expect(screen.getByTestId('cta-section')).toHaveTextContent(en.cta.title);

    // Check that the header and footer have the correct locale
    expect(screen.getByTestId('header')).toHaveAttribute('data-locale', 'en');
    expect(screen.getByTestId('footer')).toHaveAttribute('data-locale', 'en');
  });

  it('renders the home page with Spanish translations', async () => {
    // Create a Promise that resolves to the params object
    const paramsPromise = Promise.resolve({ lang: 'es' as Locale });

    // Pass the Promise as params
    const page = await HomePage({ params: paramsPromise });
    render(page);

    // Check for Spanish content in the components
    expect(screen.getByTestId('hero-section')).toHaveTextContent(es.hero.title);
    expect(screen.getByTestId('about-section')).toHaveTextContent(es.about.title);
    expect(screen.getByTestId('classes-section')).toHaveTextContent(es.classes.title);
    expect(screen.getByTestId('stats-section')).toHaveTextContent(es.stats.title);
    expect(screen.getByTestId('cta-section')).toHaveTextContent(es.cta.title);

    // Check that the header and footer have the correct locale
    expect(screen.getByTestId('header')).toHaveAttribute('data-locale', 'es');
    expect(screen.getByTestId('footer')).toHaveAttribute('data-locale', 'es');
  });
});
