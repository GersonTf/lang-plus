import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { Locale, locales } from '@/i18n';
import { TranslationProvider } from '../contexts/TranslationContext';
import { getBaseOpenGraph, getBaseTwitter, baseRobots } from '../shared-metadata';
import LangAttributeSetter from '../components/LangAttributeSetter';

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
  const { lang } = await params;
  const locale = lang as Locale;

  // Import the translations for the current locale
  const translations = (await import(`@/i18n/locales/${locale}.json`)).default;

  const title = translations.header.title || 'A+ Languages';
  const pageTitle = `${title} - ${translations.hero.title?.replace(/<highlight>|<\/highlight>/g, '') || 'Online Language Learning'}`;
  const description =
    translations.hero.description ||
    'Professional online English and Spanish language lessons with A+ Languages. Personalized classes for individuals and businesses with flexible scheduling and tailored curriculum for all levels.';

  // Multiple descriptions for better SEO and keyword targeting
  const enhancedDescriptions = [
    description,
    `Professional personalized ${locale === 'es' ? 'Spanish and English' : 'English and Spanish'} classes with a native speaker teacher. Online lessons for companies and individuals.`,
    `A Plus Languages (A+): ${locale === 'es' ? 'Spanish' : 'English'} classes for companies and individuals with certified native teacher. Personalized online lessons.`,
    `A Plus Languages offers professional ${locale === 'es' ? 'Spanish' : 'English'} classes for companies. Personalized curriculum with a native speaker.`,
  ];

  return {
    metadataBase: new URL('https://www.apluslanguages.eu'),
    title: {
      template: `%s | ${title}`,
      default: pageTitle,
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
    authors: [{ name: 'A Plus Languages - Native Speaker Teacher' }],
    creator: 'A Plus Languages',
    publisher: 'A Plus Languages',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      preconnect: ['https://fonts.googleapis.com'],
      manifest: 'https://www.apluslanguages.eu/manifest.json',
      description1: enhancedDescriptions[1],
      description2: enhancedDescriptions[2],
      description3: enhancedDescriptions[3],
    },
    icons: {
      icon: 'https://www.apluslanguages.eu/icon-192.png',
      shortcut: 'https://www.apluslanguages.eu/icon-192.png',
      apple: 'https://www.apluslanguages.eu/icon-192.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: 'https://www.apluslanguages.eu/icon-192.png',
        },
        {
          rel: 'mask-icon',
          url: 'https://www.apluslanguages.eu/safari-pinned-tab.svg',
          color: '#3b82f6',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          url: 'https://www.apluslanguages.eu/icon-512.png',
        },
      ],
    },
    openGraph: getBaseOpenGraph(
      locale,
      `${title} - Professional ${locale === 'es' ? 'Spanish' : 'English'} Classes with Native Speaker`,
      enhancedDescriptions[1]
    ),
    twitter: getBaseTwitter(
      `${title} - Professional ${locale === 'es' ? 'Spanish' : 'English'} Classes for Companies and Individuals`,
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
 * Wraps children in TranslationProvider to provide localized content
 */
export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  return (
    <TranslationProvider locale={locale}>
      <LangAttributeSetter lang={locale} />
      {children}
    </TranslationProvider>
  );
}
