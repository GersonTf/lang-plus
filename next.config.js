/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable standard image optimization
    formats: ['image/webp'],
    
    // Cache optimized images for 1 week
    minimumCacheTTL: 60 * 60 * 24 * 7,
    
    // Enable SVG support
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
  // Explicitly set compiler to remove any warnings
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: false,
  },
}

module.exports = nextConfig 