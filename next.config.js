/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  // Explicitly set compiler to remove any warnings
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: false,
  },
}

module.exports = nextConfig 