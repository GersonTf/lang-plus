import { MetadataRoute } from 'next'

// Add static configuration for export
export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      }
    ],
    sitemap: 'https://www.apluslanguages.eu/sitemap.xml',
    host: 'https://www.apluslanguages.eu'
  }
} 