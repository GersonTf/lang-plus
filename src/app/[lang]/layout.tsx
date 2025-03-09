import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { Locale, locales } from '@/i18n';
import { TranslationProvider } from '../contexts/TranslationContext';
import { getBaseOpenGraph, getBaseTwitter, baseRobots } from '../shared-metadata';
import LangAttributeSetter from '../components/LangAttributeSetter';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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

  // Enhanced SEO descriptions - multiple variations for better keyword matching
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
      default: pageTitle,
      // Add alternate titles for better SEO
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
      // Add alternate descriptions for better SEO
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
    // Use the base utility functions but override specific fields
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

export async function generateStaticParams() {
  // Return the supported locales for static generation
  return locales.map(lang => ({ lang }));
}

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
      {/* Client component to set the HTML lang attribute */}
      <LangAttributeSetter lang={locale} />

      {/* Children components */}
      {children}

      {/* JSON-LD structured data script will be added during build */}
    </TranslationProvider>
  );
}
