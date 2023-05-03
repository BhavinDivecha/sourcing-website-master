/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'sourcing-backend-master-production-bc1b.up.railway.app/'
  },
}

module.exports = nextConfig
