// This is a marker used by Next.js to ensure this code only runs on the server
import 'server-only';
import { Locale } from '@/i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We're also using the `import()` function to dynamically import the dictionaries
const dictionaries = {
  en: () => import('@/i18n/locales/en.json').then(module => module.default),
  es: () => import('@/i18n/locales/es.json').then(module => module.default),
  zh: () => import('@/i18n/locales/zh.json').then(module => module.default),
  ja: () => import('@/i18n/locales/ja.json').then(module => module.default),
  ko: () => import('@/i18n/locales/ko.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() || dictionaries.en();
};
