import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.apluslanguages.eu'),
  title: 'Aplus Languages - Professional Online English & Spanish Language Lessons',
  description: 'Expert online English and Spanish language lessons worldwide. Learn with a native-speaking teacher using proven virtual teaching methods.',
  keywords: ['online language classes', 'English lessons', 'Spanish lessons', 'language learning', 'online tutoring'],
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
  openGraph: {
    title: 'Aplus Languages - Expert Online English & Spanish Lessons',
    description: 'Transform your language skills with personalized online lessons. Professional one-on-one classes and group training available worldwide.',
    url: 'https://www.apluslanguages.eu',
    siteName: 'Aplus Languages',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/images/aplusenglishLogo.jpg',
      width: 800,
      height: 600,
      alt: 'Aplus Languages Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplus Languages - Expert Online Language Training',
    description: 'Transform your language skills with personalized online lessons. Learn English or Spanish from anywhere in the world.',
    images: ['/images/aplusenglishLogo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-site-verification', // Add this if you have Google Search Console verification
  },
  alternates: {
    canonical: 'https://www.apluslanguages.eu',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
