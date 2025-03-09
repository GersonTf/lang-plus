import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import es from './locales/es.json';

export const locales = ['en', 'es', 'zh', 'ja', 'ko'] as const;
export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  zh: '中文',
  ja: '日本語',
  ko: '한국어'
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷'
};

export const translations: Record<Locale, any> = {
  en,
  es,
  zh,
  ja,
  ko
};

export const getTranslation = (locale: Locale) => {
  return translations[locale] || translations.en;
};

export const getLocaleFromPath = (path: string): Locale => {
  const segments = path.split('/').filter(Boolean);
  // Check if first segment is a locale
  if (segments.length > 0 && locales.includes(segments[0] as any)) {
    return segments[0] as Locale;
  }
  return 'en';
};

export const getPathWithoutLocale = (path: string): string => {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as any)) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
}; 