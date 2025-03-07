import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get current date for the lastModified field
  const currentDate = new Date()
  
  return [
    {
      url: 'https://www.apluslanguages.eu',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.apluslanguages.eu/about',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.apluslanguages.eu/classes',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add all your important pages here
    {
      url: 'https://www.apluslanguages.eu/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.apluslanguages.eu/blog',
      lastModified: currentDate,
      changeFrequency: 'weekly', 
      priority: 0.9,
    },
  ]
} 