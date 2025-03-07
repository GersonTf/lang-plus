import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.apluslanguages.eu'),
  title: {
    template: '%s | Aplus Languages',
    default: 'Aplus Languages - Expert Online English & Spanish Language Classes',
  },
  description: 'Transform your language skills with personalized online English and Spanish lessons from native-speaking teachers. Learn from anywhere in the world.',
  keywords: ['online language classes', 'English lessons', 'Spanish lessons', 'language learning', 'online tutoring', 'ESL', 'language teacher'],
  authors: [{ name: 'Aplus Languages' }],
  creator: 'Aplus Languages',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.apluslanguages.eu',
    title: 'Aplus Languages - Expert Online English & Spanish Language Classes',
    description: 'Transform your language skills with personalized online English and Spanish lessons from native-speaking teachers.',
    siteName: 'Aplus Languages',
    images: [
      {
        url: '/images/aplusenglishLogo.jpg',
        width: 600,
        height: 600,
        alt: 'Aplus Languages Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplus Languages - Expert Online English & Spanish Language Classes',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
