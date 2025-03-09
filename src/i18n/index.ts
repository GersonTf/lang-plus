import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import es from './locales/es.json';

export const locales = ['en', 'es', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];

// Define translation interfaces for specific sections
export interface AboutTranslation {
  title: string;
  description: string;
  benefits: string[];
}

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

export interface NavigationTranslation {
  about: string;
  classes: string;
  contact: string;
  home?: string;
}

export interface HeaderTranslation {
  title: string;
  langSwitch: string;
}

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

export interface CtaTranslation {
  title: string;
  description: string;
  button: string;
}

export interface FooterTranslation {
  contact: string;
  copyright: string;
}

export interface StatsTranslation {
  title: string;
  items: Array<{
    number: string;
    label: string;
  }>;
}

// A more generic type for dictionary-like objects
export type Dictionary<T> = Record<string, T>;

// Base interface for all translation objects
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

// Define the translation object type
export type TranslationObject = TranslationInterface;

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷',
};

export const translations: Record<Locale, TranslationObject> = {
  en,
  es,
  zh,
  ja,
  ko,
};

export const getTranslation = (locale: Locale) => {
  return translations[locale] || translations.en;
};

export const getLocaleFromPath = (path: string): Locale => {
  const segments = path.split('/').filter(Boolean);
  // Check if first segment is a locale
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  return 'en';
};

export const getPathWithoutLocale = (path: string): string => {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
};
