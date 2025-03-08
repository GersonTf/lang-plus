import type { Metadata } from 'next'
import './globals.css'
import JsonLd from './components/JsonLd'
import { roboto } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.apluslanguages.eu'),
  title: {
    template: '%s | A+ Languages',
    default: 'A+ Languages - Online Language Learning',
  },
  description: 'Professional online English and Spanish language lessons with A+ Languages. Personalized classes for individuals and businesses with flexible scheduling and tailored curriculum for all levels.',
  keywords: [
    'language learning', 'online classes', 'language courses', 'professional teachers', 
    'flexible schedule', 'A Plus Languages', 'A+ Languages', 'Aplus Languages', 'A + Languages',
    'English lessons', 'Spanish lessons', 'online language teacher', 'learn languages online'
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'A+ Languages Team' }],
  creator: 'A+ Languages',
  publisher: 'A+ Languages',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Next.js will automatically look for these files in the app directory:
  // - favicon.ico
  // - icon.png
  // - apple-icon.png
  other: {
    'preconnect': ['https://fonts.googleapis.com'],
    'manifest': '/manifest.json'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.apluslanguages.eu',
    title: 'A+ Languages - Professional Online Language Learning',
    description: 'Learn languages online with personalized lessons from expert teachers. Flexible scheduling and tailored curriculum for all levels.',
    siteName: 'A+ Languages',
    images: [
      {
        url: '/images/aplus-logo.svg',
        width: 512,
        height: 512,
        alt: 'A Plus Languages Logo',
      },
      {
        url: '/og-image.jpg', // Fallback for platforms that don't support SVG
        width: 1200,
        height: 630,
        alt: 'A Plus Languages',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'A+ Languages - Online Language Learning',
    description: 'Learn languages online with personalized lessons from expert teachers.',
    images: ['/images/aplus-logo.svg'],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        {/* Primary Meta Tags */}
        <link rel="canonical" href="https://www.apluslanguages.eu/" />
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
        {children}
        <JsonLd />
      </body>
    </html>
  )
}
