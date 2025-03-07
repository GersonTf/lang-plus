import { MetadataRoute } from 'next'

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://www.apluslanguages.eu',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.apluslanguages.eu/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.apluslanguages.eu/classes',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
} 