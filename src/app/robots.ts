import { MetadataRoute } from 'next'
import { locales } from '@/i18n'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.apluslanguages.eu'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', ...locales.map(locale => `/${locale}`)],
        disallow: [
          '/_next/',
          '/api/',
          '/admin/',
          '*.json',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', ...locales.map(locale => `/${locale}`)],
        disallow: [
          '/_next/',
          '/api/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 