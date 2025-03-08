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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e3a8a' },
    ],
  },
  other: {
    'preconnect': ['https://fonts.googleapis.com']
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
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
