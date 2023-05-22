/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'sourcing-backend-production-d036.up.railway.app/'
  },
}

module.exports = nextConfig
