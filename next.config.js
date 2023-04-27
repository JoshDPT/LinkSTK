/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@tremor/react'],
  },
  images: {
    domains: ['source.unsplash.com'],
  },
  
}

module.exports = nextConfig
