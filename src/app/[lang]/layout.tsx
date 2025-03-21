import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { Locale, locales } from '@/i18n';
import { getBaseOpenGraph, getBaseTwitter, baseRobots } from '../shared-metadata';
import { getDictionary } from './dictionaries';

/**
 * Viewport configuration for responsive design
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Generate metadata for the page based on the current language
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  // Properly await the params
  const { lang } = await params;
  const locale = (lang as Locale) || 'en';

  // Get the dictionary for the current locale
  const dictionary = await getDictionary(locale);

  const title = dictionary.header.title || 'A+ Languages';
  const description =
    dictionary.hero.description ||
    'Professional online English and Spanish language lessons with A+ Languages. Personalized classes for individuals and businesses with flexible scheduling and tailored curriculum for all levels.';

  // Multiple descriptions for better SEO and keyword targeting
  const enhancedDescriptions = [
    description,
    `Professional personalized ${locale === 'es' ? 'Spanish and English' : 'English and Spanish'} classes with a native speaker teacher. Online lessons for companies and individuals.`,
    `A+ Languages: ${locale === 'es' ? 'Spanish' : 'English'} classes for companies and individuals with certified native teacher. Personalized online lessons.`,
    `Aplus Languages offers professional ${locale === 'es' ? 'Spanish' : 'English'} classes for companies. Personalized curriculum with a native speaker.`,
  ];

  return {
    metadataBase: new URL('https://www.apluslanguages.eu'),
    title: {
      template: `%s | ${title}`,
      default: `${locale === 'es' ? 'Spanish' : 'English'} Classes with Native Speaker | ${title}`,
      absolute: `${locale === 'es' ? 'Spanish' : 'English'} Classes with Native Speaker | ${title}`,
    },
    description: enhancedDescriptions[0],
    keywords: [
      'language learning',
      'online classes',
      'language courses',
      'professional teachers',
      'flexible schedule',
      'A Plus Languages',
      'A+ Languages',
      'Aplus Languages',
      'A + Languages',
      'English lessons',
      'Spanish lessons',
      'online language teacher',
      'learn languages online',
      'English classes for companies',
      'Spanish classes for companies',
      'English for business',
      'Spanish for business',
      'personalized language classes',
      'native speaker teacher',
      'online language learning',
      'professional language courses',
      'one-on-one language lessons',
      'business English',
      'business Spanish',
      'certified language teacher',
      'tailored language courses',
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        es: '/es',
        zh: '/zh',
        ja: '/ja',
        ko: '/ko',
      },
    },
    authors: [{ name: 'A+ Languages - Native Speaker Teacher' }],
    creator: 'A+ Languages',
    publisher: 'A+ Languages',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      preconnect: ['https://fonts.googleapis.com'],
      manifest: '/manifest.json',
      description1: enhancedDescriptions[1],
      description2: enhancedDescriptions[2],
      description3: enhancedDescriptions[3],
    },
    icons: {
      icon: '/icon-192.png',
      shortcut: '/icon-192.png',
      apple: '/icon-192.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/icon-192.png',
        },
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: '#3b82f6',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          url: '/icon-512.png',
        },
      ],
    },
    openGraph: getBaseOpenGraph(
      locale,
      `${title} - ${locale === 'es' ? 'Spanish' : 'English'} Classes with Native Speaker`,
      enhancedDescriptions[1]
    ),
    twitter: getBaseTwitter(
      `${title} - Personalized ${locale === 'es' ? 'Spanish' : 'English'} Classes for Companies and Individuals`,
      enhancedDescriptions[2]
    ),
    robots: baseRobots,
    category: 'education',
    applicationName: 'A Plus Languages',
  };
}

/**
 * Generate static paths for all supported languages
 */
export async function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

/**
 * Layout for language-specific pages
 * Provides the layout structure with proper language attribute and dictionary
 */
export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Properly await the params
  const { lang } = await params;
  const locale = (lang as Locale) || 'en';
  const _dictionary = await getDictionary(locale);

  return (
    <main lang={locale} className="min-h-screen flex flex-col">
      {children}
    </main>
  );
}
