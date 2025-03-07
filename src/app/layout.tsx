import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.apluslanguages.eu'),
  title: 'Aplus Languages | Expert Online English & Spanish Classes',
  description: 'Transform your language skills with personalized online English and Spanish lessons. Native speaker, certified teacher offering one-on-one, group, and business language training.',
  keywords: 'online English classes, Spanish lessons, language learning, online tutoring, business English, ESL, language courses, virtual classes',
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
  openGraph: {
    title: 'Aplus Languages | Expert Online English & Spanish Classes',
    description: 'Transform your language skills with personalized online English and Spanish lessons from a certified native speaker.',
    url: 'https://www.aplus-languages.com',
    siteName: 'Aplus Languages',
    images: [
      {
        url: '/images/aplusenglishLogo.jpg',
        width: 800,
        height: 600,
        alt: 'Aplus Languages Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplus Languages | Expert Online English & Spanish Classes',
    description: 'Transform your language skills with personalized online English and Spanish lessons.',
    images: ['/images/aplusenglishLogo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://www.aplus-languages.com',
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
        <link rel="icon" href="/images/aplusenglishLogo.jpg" />
        <link rel="apple-touch-icon" href="/images/aplusenglishLogo.jpg" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Aplus Languages",
              "description": "Expert online English and Spanish language classes",
              "url": "https://www.aplus-languages.com",
              "logo": "/images/aplusenglishLogo.jpg",
              "sameAs": [
                // Add your social media links here
              ],
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free consultation available"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
