import { NextResponse } from 'next/server'

export async function GET() {
  // Format current date properly (YYYY-MM-DD)
  const today = new Date()
  const formattedDate = today.toISOString().split('T')[0]

  // Create XML sitemap manually
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.apluslanguages.eu</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

  // Return with explicit no-cache headers
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store',
      'X-Robots-Tag': 'noarchive', // Prevent archiving
    },
  })
} 