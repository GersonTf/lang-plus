import { MetadataRoute } from 'next'
import { locales } from '@/i18n'

// Helper function to format date for the sitemap
function formatDate(date: Date): string {
  return date.toISOString()
}

// Get the current date for lastModified
const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.apluslanguages.eu'
  
  // Core pages
  let routes = [
    {
      url: baseUrl,
      lastModified: formatDate(lastModified),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]
  
  // Generate routes for all supported languages
  for (const locale of locales) {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: formatDate(lastModified),
      changeFrequency: 'weekly' as const,
      priority: 1,
    })
  }

  return routes
} 