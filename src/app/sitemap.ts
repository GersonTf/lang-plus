import { MetadataRoute } from 'next'

// Helper function to format date for the sitemap
function formatDate(date: Date): string {
  return date.toISOString()
}

// Get the current date for lastModified
const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.apluslanguages.eu'
  
  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified: formatDate(lastModified),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // Home page with trailing slash variant (for consistency)
    {
      url: `${baseUrl}/`,
      lastModified: formatDate(lastModified),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // Add more routes as your site grows
    // Example:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: formatDate(lastModified),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.8,
    // },
  ]

  return routes
} 