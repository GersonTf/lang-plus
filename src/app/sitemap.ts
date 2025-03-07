import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.apluslanguages.eu'

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#classes`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
} 