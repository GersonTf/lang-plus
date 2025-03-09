import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import es from './locales/es.json';

/**
 * Supported locale codes
 */
export const locales = ['en', 'es', 'zh', 'ja', 'ko'] as const;

/**
 * Type representing valid locale codes
 */
export type Locale = (typeof locales)[number];

/**
 * A generic type for dictionary-like objects
 */
export type Dictionary<T> = Record<string, T>;

/**
 * Translation structure for the About section
 */
export interface AboutTranslation {
  title: string;
  description: string;
  benefits: string[];
}

/**
 * Translation structure for the Classes section
 */
export interface ClassesTranslation {
  title: string;
  types: Array<{
    title: string;
    description: string;
    cta?: string;
  }>;
  cta: {
    title?: string;
    description?: string;
    button?: string;
    benefits?: string;
  };
}

/**
 * Translation structure for the navigation menu
 */
export interface NavigationTranslation {
  about: string;
  classes: string;
  contact: string;
  home?: string;
}

/**
 * Translation structure for the page header
 */
export interface HeaderTranslation {
  title: string;
  langSwitch: string;
}

/**
 * Translation structure for the hero section
 */
export interface HeroTranslation {
  title: string;
  description: string;
  buttons: {
    consultation: string;
    explore: string;
  };
  trust: {
    bilingual?: string;
    tools?: string;
    rating?: string;
    title?: string;
    items?: string[];
  };
}

/**
 * Translation structure for the call-to-action section
 */
export interface CtaTranslation {
  title: string;
  description: string;
  button: string;
}

/**
 * Translation structure for the footer
 */
export interface FooterTranslation {
  contact: string;
  copyright: string;
}

/**
 * Translation structure for the statistics section
 */
export interface StatsTranslation {
  title: string;
  items: Array<{
    number: string;
    label: string;
  }>;
}

/**
 * Complete structure of the translation object
 * Contains all sections of the website with their translations
 */
export interface TranslationInterface {
  about: AboutTranslation;
  classes: ClassesTranslation;
  navigation: NavigationTranslation;
  header: HeaderTranslation;
  hero: HeroTranslation;
  cta: CtaTranslation;
  footer: FooterTranslation;
  stats: StatsTranslation;
  faq?: Dictionary<string>;
  [key: string]: unknown; // Allow for other properties
}

/**
 * Type alias for the full translation object
 */
export type TranslationObject = TranslationInterface;

/**
 * Human-readable names for each supported locale
 */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

/**
 * Flag emoji representations for each supported locale
 */
export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷',
};

/**
 * Map of all translation data by locale
 */
export const translations: Record<Locale, TranslationObject> = {
  en,
  es,
  zh,
  ja,
  ko,
};

/**
 * Get translations for a specific locale
 * Falls back to English if the requested locale isn't available
 */
export const getTranslation = (locale: Locale): TranslationObject => {
  return translations[locale] || translations.en;
};

/**
 * Extract the locale from a URL path
 * @returns The locale code or 'en' as fallback
 */
export const getLocaleFromPath = (path: string): Locale => {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  return 'en';
};

/**
 * Remove the locale prefix from a URL path
 * @returns The path without the locale prefix
 */
export const getPathWithoutLocale = (path: string): string => {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
};
