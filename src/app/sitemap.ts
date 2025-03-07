import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Format current date properly for sitemap (YYYY-MM-DD)
  const today = new Date()
  const formattedDate = today.toISOString().split('T')[0]
  
  return [
    {
      url: 'https://www.apluslanguages.eu',
      lastModified: formattedDate,
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
} 