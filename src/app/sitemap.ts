import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.apluslanguages.eu',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.apluslanguages.eu/about',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.apluslanguages.eu/classes',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
} 