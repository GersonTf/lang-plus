import type { Metadata, Viewport } from 'next';
import './globals.css';
import { roboto } from './fonts';

/**
 * Viewport configuration for responsive design
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Default metadata for the application
 * This provides fallback metadata for pages that don't generate their own
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.apluslanguages.eu'),
  title: {
    template: '%s | A+ Languages',
    default: 'A+ Languages - Professional English and Spanish Classes with Native Speaker',
  },
  description:
    'Professional online English and Spanish language lessons with A+ Languages. Personalized classes for individuals and businesses with a native speaker teacher. Online lessons using modern tools.',
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
    canonical: '/en',
  },
  authors: [{ name: 'A Plus Languages - Native Speaker Teacher' }],
  creator: 'A Plus Languages',
  publisher: 'A Plus Languages',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Next.js automatically uses these files from the app directory:
  // - favicon.ico (browser tab icon)
  // - icon.png (app icon for PWA, manifest)
  // - apple-icon.png (Apple touch icon)
  other: {
    preconnect: ['https://fonts.googleapis.com'],
    manifest: '/manifest.json',
    // Additional descriptions for better SEO
    description1:
      'Professional personalized English and Spanish classes with a native speaker teacher. Online lessons for companies and individuals.',
    description2:
      'A+ Languages: English and Spanish classes for companies with certified native teacher. Personalized online curriculum.',
    description3:
      'Aplus Languages offers professional language classes for companies. Online lessons with native speaker teacher.',
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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.apluslanguages.eu',
    title: 'A+ Languages - Professional English and Spanish Classes with Native Speaker',
    description:
      'Professional personalized English and Spanish classes with a native speaker teacher. Online lessons for companies and individuals.',
    siteName: 'A+ Languages | English and Spanish Classes | Personalized Language Learning',
    images: [
      {
        url: '/images/aplus-logo.svg',
        width: 512,
        height: 512,
        alt: 'A Plus Languages Logo',
      }
    ],
    alternateLocale: ['en_GB', 'es_ES', 'zh_CN', 'ja_JP', 'ko_KR'],
  },
  twitter: {
    card: 'summary',
    title: 'A+ Languages - Professional English and Spanish Classes',
    description:
      'A+ Languages: English and Spanish classes for companies with certified native teacher. Personalized online curriculum.',
    images: ['/images/aplus-logo.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  category: 'education',
  applicationName: 'A Plus Languages',
};

/**
 * Root layout component that wraps all pages
 * Provides the HTML structure and global styles
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD structured data for search engines
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'A Plus Languages',
    alternateName: ['A+ Languages', 'Aplus Languages', 'A + Languages', 'APlusLanguages'],
    description:
      'Professional online English and Spanish language lessons with a native speaker teacher. Personalized classes for individuals and businesses.',
    url: 'https://www.apluslanguages.eu',
    logo: 'https://www.apluslanguages.eu/images/aplus-logo.svg',
    keywords:
      'English classes, Spanish classes, professional language learning, native speaker teacher, online classes, classes for companies, business English, business Spanish',
    sameAs: ['https://www.apluslanguages.eu'],
    '@graph': [
      {
        '@type': 'Service',
        name: 'Professional Online Language Classes',
        description:
          'Professional online English and Spanish classes with a native speaker teacher. Fully online with modern tools like Google Meet and Miro boards. Personalized curriculum for individuals and companies.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'A Plus Languages',
          alternateName: ['A+ Languages', 'Aplus Languages', 'A + Languages'],
        },
        serviceType: [
          'Language Learning',
          'Online Education',
          'Business English',
          'Business Spanish',
          'Personalized Language Courses',
        ],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceType: 'Online',
          availableLanguage: ['English', 'Spanish'],
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'Companies and individuals seeking language learning',
        },
        serviceOutput: {
          '@type': 'Thing',
          name: 'Language Proficiency',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          description: 'Free consultation available to discuss your language learning needs',
          category: 'Personalized language classes with native speaker',
        },
      },
      {
        '@type': 'WebSite',
        name: 'A Plus Languages',
        url: 'https://www.apluslanguages.eu',
        description:
          'Professional online English and Spanish language lessons with a native speaker teacher. Classes for companies and individuals.',
      },
    ],
  };

  return (
    <html lang="en" className={roboto.variable}>
      <head>
        {/* Primary Meta Tags */}
        <link rel="canonical" href="https://www.apluslanguages.eu/en" />
        <meta name="theme-color" content="#3b82f6" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          border: 'none',
          outline: 'none',
          overflowX: 'hidden',
        }}
      >
        {children}

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning={true}
        />
      </body>
    </html>
  );
}
