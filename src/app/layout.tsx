import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aplus Languages - Professional Online English & Spanish Language Lessons',
  description: 'Expert online English and Spanish language lessons worldwide. Personalized one-on-one classes, small groups, and business training available worldwide.',
  metadataBase: new URL('https://www.apluslanguages.eu'),
  openGraph: {
    title: 'Aplus Languages - Expert Online English & Spanish Lessons',
    description: 'Transform your language skills with personalized online lessons. Professional one-on-one classes, small groups, and business training available worldwide.',
    url: 'https://www.apluslanguages.eu',
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
    title: 'Aplus Languages - Expert Online Language Training',
    description: 'Transform your language skills with personalized online lessons. Professional one-on-one classes, small groups, and business training available worldwide.',
    images: ['/images/aplusenglishLogo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
