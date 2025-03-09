/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.apluslanguages.eu',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // Exclude server-side generated sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.apluslanguages.eu/server-sitemap.xml', // Add dynamic sitemap
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/_next', '/static'],
      },
    ],
  },
  // Multilingual URL configuration
  alternateRefs: [
    {
      href: 'https://www.apluslanguages.eu/en',
      hreflang: 'en',
    },
    {
      href: 'https://www.apluslanguages.eu/es',
      hreflang: 'es',
    },
    {
      href: 'https://www.apluslanguages.eu/zh',
      hreflang: 'zh',
    },
    {
      href: 'https://www.apluslanguages.eu/ja',
      hreflang: 'ja',
    },
    {
      href: 'https://www.apluslanguages.eu/ko',
      hreflang: 'ko',
    },
  ],
  transform: async (config, path) => {
    // Custom path transformations
    // Increase priority for home page and language roots
    if (
      path === '/' ||
      path === '/en' ||
      path === '/es' ||
      path === '/zh' ||
      path === '/ja' ||
      path === '/ko'
    ) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs || [],
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs || [],
    };
  },
};
