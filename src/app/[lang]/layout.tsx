import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { roboto } from '../fonts'
import { Locale, locales } from '@/i18n'
import { TranslationProvider } from '../contexts/TranslationContext'
import { getBaseOpenGraph, getBaseTwitter, baseRobots } from '../shared-metadata'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  
  // Import the translations for the current locale
  const translations = (await import(`@/i18n/locales/${locale}.json`)).default;
  
  const title = translations.header.title || 'A+ Languages';
  const pageTitle = `${title} - ${translations.hero.title?.replace(/<highlight>|<\/highlight>/g, '') || 'Online Language Learning'}`;
  const description = translations.hero.description || 'Professional online English and Spanish language lessons with A+ Languages. Personalized classes for individuals and businesses with flexible scheduling and tailored curriculum for all levels.';
  
  // Enhanced SEO descriptions - multiple variations for better keyword matching
  const enhancedDescriptions = [
    description,
    `Professional personalized ${locale === 'es' ? 'Spanish and English' : 'English and Spanish'} classes with a native speaker teacher. Online lessons for companies and individuals.`,
    `A+ Languages: ${locale === 'es' ? 'Spanish' : 'English'} classes for companies and individuals with certified native teacher. Personalized online lessons.`,
    `Aplus Languages offers professional ${locale === 'es' ? 'Spanish' : 'English'} classes for companies. Personalized curriculum with a native speaker.`
  ];
  
  return {
    metadataBase: new URL('https://www.apluslanguages.eu'),
    title: {
      template: `%s | ${title}`,
      default: pageTitle,
      // Add alternate titles for better SEO
      absolute: `${locale === 'es' ? 'Spanish' : 'English'} Classes with Native Speaker | ${title}`
    },
    description: enhancedDescriptions[0],
    keywords: [
      'language learning', 'online classes', 'language courses', 'professional teachers', 
      'flexible schedule', 'A Plus Languages', 'A+ Languages', 'Aplus Languages', 'A + Languages',
      'English lessons', 'Spanish lessons', 'online language teacher', 'learn languages online',
      'English classes for companies', 'Spanish classes for companies', 'English for business',
      'Spanish for business', 'personalized language classes', 'native speaker teacher',
      'online language learning', 'professional language courses', 'one-on-one language lessons',
      'business English', 'business Spanish', 'certified language teacher', 'tailored language courses'
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
        'zh': '/zh',
        'ja': '/ja',
        'ko': '/ko',
      }
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
      'preconnect': ['https://fonts.googleapis.com'],
      'manifest': '/manifest.json',
      // Add alternate descriptions for better SEO
      'description1': enhancedDescriptions[1],
      'description2': enhancedDescriptions[2],
      'description3': enhancedDescriptions[3]
    },
    // Use the base utility functions but override specific fields
    openGraph: getBaseOpenGraph(locale, 
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
  }
}

export async function generateStaticParams() {
  // Return the supported locales for static generation
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  
  // Import translations for structured data
  const translations = (await import(`@/i18n/locales/${locale}.json`)).default;
  
  // Get appropriate FAQ questions based on locale
  const faqQuestions = [
    {
      '@type': 'Question',
      // Use translations if available, or fall back to English
      name: translations?.faq?.languages || 'What languages do you teach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: translations?.faq?.languagesAnswer || 'We offer professional online English and Spanish language lessons with a native speaker teacher of both languages.'
      }
    },
    {
      '@type': 'Question',
      name: translations?.faq?.format || 'How are the lessons structured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: translations?.faq?.formatAnswer || 'We provide fully personalized one-on-one online lessons tailored to your specific needs and goals, available for both individuals and companies.'
      }
    },
    {
      '@type': 'Question',
      name: translations?.faq?.tools || 'What tools do you use for teaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: translations?.faq?.toolsAnswer || 'Our online lessons use modern interactive tools like Google Meet for video conferencing and Miro boards for collaborative learning, creating an engaging and effective learning environment.'
      }
    },
    {
      '@type': 'Question',
      name: translations?.faq?.consultation || 'Do you offer a free consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: translations?.faq?.consultationAnswer || 'Yes, we offer a free consultation to discuss your language learning goals and create a personalized plan suited to your needs.'
      }
    }
  ];

  // JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: translations?.header?.title || 'A Plus Languages',
    alternateName: ['A+ Languages', 'Aplus Languages', 'A + Languages', 'APlusLanguages'],
    description: translations?.hero?.description || 'Professional online English and Spanish language lessons with a native speaker teacher of both languages. Personalized classes for individuals and businesses.',
    url: `https://www.apluslanguages.eu/${locale}`,
    logo: '/images/aplus-logo.svg',
    inLanguage: locale,
    sameAs: [
      'https://www.apluslanguages.eu',
    ],
    // Add keywords for better SEO
    keywords: 'English classes, Spanish classes, personalized language learning, native speaker teacher, online classes, classes for companies, business English, business Spanish',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      description: translations?.classes?.cta?.description?.replace(/<\/?strong>/g, '') || 'Free consultation available to discuss your language learning needs',
      // Add more offer details for better SEO
      category: 'Personalized language classes with native speaker',
      serviceType: 'Online language teaching'
    },
    '@graph': [
      {
        '@type': 'Service',
        name: translations?.classes?.title || 'Online Language Classes',
        description: translations?.hero?.description || 'Professional online English and Spanish classes available worldwide with a native speaker teacher of both languages.',
        provider: {
          '@type': 'EducationalOrganization',
          name: translations?.header?.title || 'A Plus Languages',
          alternateName: ['A+ Languages', 'Aplus Languages', 'A + Languages']
        },
        serviceType: ['Language Learning', 'Online Education', 'Business English', 'Business Spanish', 'Personalized Language Courses'],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceType: 'Online',
          availableLanguage: ['English', 'Spanish']
        },
        // Add additional service properties for better SEO
        audience: {
          '@type': 'Audience',
          audienceType: 'Companies and individuals seeking language learning'
        },
        serviceOutput: {
          '@type': 'Thing',
          name: 'Language Proficiency'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqQuestions
      },
      {
        '@type': 'WebSite',
        name: translations?.header?.title || 'A Plus Languages',
        url: `https://www.apluslanguages.eu/${locale}`,
        inLanguage: locale,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `https://www.apluslanguages.eu/${locale}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: translations?.navigation?.home || 'Home',
            item: `https://www.apluslanguages.eu/${locale}`
          }
        ]
      }
    ]
  };
  
  return (
    <html lang={locale} className={roboto.variable}>
      <head>
        {/* Primary Meta Tags */}
        <link rel="canonical" href={`https://www.apluslanguages.eu/${locale}`} />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        border: 'none', 
        outline: 'none',
        overflowX: 'hidden' 
      }}>
        <TranslationProvider locale={locale}>
          {children}
        </TranslationProvider>
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning={true}
        />
      </body>
    </html>
  )
} 