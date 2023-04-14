/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'sourcing-backend-master-production.up.railway.app/'
  },
}

module.exports = nextConfig
