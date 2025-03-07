import type { Metadata } from 'next'
import './globals.css'
import JsonLd from './components/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.apluslanguages.eu'),
  title: {
    template: '%s | A+ Languages',
    default: 'A+ Languages - Online Language Learning',
  },
  description: 'Learn languages online with personalized lessons from expert teachers. Flexible scheduling and tailored curriculum for all levels.',
  keywords: ['language learning', 'online classes', 'language courses', 'professional teachers', 'flexible schedule'],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.apluslanguages.eu',
    title: 'A+ Languages - Online Language Learning',
    description: 'Learn languages online with personalized lessons from expert teachers. Flexible scheduling and tailored curriculum for all levels.',
    siteName: 'A+ Languages',
    images: [
      {
        url: 'https://www.apluslanguages.eu/og-image.jpg', // Update with your actual OG image
        width: 1200,
        height: 630,
        alt: 'A+ Languages',
      }
    ],
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
    <html lang="en">
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  )
}
