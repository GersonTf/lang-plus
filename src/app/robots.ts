import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/'],
    },
    sitemap: 'https://www.apluslanguages.eu/sitemap.xml',
    host: 'https://www.apluslanguages.eu'
  }
} 