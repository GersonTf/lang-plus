import type { Metadata } from 'next';
import { Locale } from '@/i18n';

// Define the OpenGraph and Twitter types based on Metadata
type OpenGraph = NonNullable<Metadata['openGraph']>;
type Twitter = NonNullable<Metadata['twitter']>;
type Robots = NonNullable<Metadata['robots']>;

// Reusable OpenGraph images to ensure consistent image metadata
export const getOpenGraphImages = (locale: Locale, title: string) => [
  {
    url: 'https://www.apluslanguages.eu/images/aplus-logo.svg',
    width: 512,
    height: 512,
    alt: `${title || 'A Plus Languages'} Logo`,
  }
];

// Mapping for OpenGraph locales based on language
export const getOpenGraphLocale = (locale: Locale): string => {
  switch (locale) {
    case 'en':
      return 'en_GB';
    case 'es':
      return 'es_ES';
    case 'zh':
      return 'zh_CN';
    case 'ja':
      return 'ja_JP';
    case 'ko':
      return 'ko_KR';
    default:
      return 'en_GB';
  }
};

// Base OpenGraph configuration that can be extended
export const getBaseOpenGraph = (
  locale: Locale,
  title: string,
  description: string
): OpenGraph => ({
  type: 'website',
  locale: getOpenGraphLocale(locale),
  url: `https://www.apluslanguages.eu/${locale}`,
  title: title,
  description: description,
  siteName: 'A Plus Languages | English and Spanish Classes | Personalized Language Learning',
  images: getOpenGraphImages(locale, title),
  // Add additional properties for better SEO
  alternateLocale: ['en_GB', 'es_ES', 'zh_CN', 'ja_JP', 'ko_KR'],
});

// Base Twitter configuration that can be extended
export const getBaseTwitter = (title: string, description: string): Twitter => ({
  card: 'summary',
  title: title,
  description: description,
  images: ['https://www.apluslanguages.eu/images/aplus-logo.svg']
});

// Base robot configuration with correct typing
export const baseRobots: Robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1,
  },
};
