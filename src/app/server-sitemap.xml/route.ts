import { getServerSideSitemap } from 'next-sitemap';
import type { ISitemapField } from 'next-sitemap';
import { locales } from '@/i18n';

export async function GET() {
  // This is where you would dynamically fetch any content that changes frequently
  // For example, blog posts, products, or any database content
  // For now, we'll just create entries for each language

  const baseUrl = 'https://www.apluslanguages.eu';
  const currentDate = new Date().toISOString();

  // Create entries for each language page
  const languageEntries: ISitemapField[] = locales.map(locale => ({
    loc: `${baseUrl}/${locale}`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: 1.0,
  }));

  // You could add more dynamic entries here:
  // const blogEntries = await fetchBlogPosts().then(posts => posts.map(post => ({
  //   loc: `${baseUrl}/${post.locale}/blog/${post.slug}`,
  //   lastmod: post.updatedAt,
  //   changefreq: 'weekly',
  //   priority: 0.8,
  // })));

  return getServerSideSitemap([
    ...languageEntries,
    // ...blogEntries, // Uncomment when you have dynamic content
  ]);
}
