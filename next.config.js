/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
     URL: 'https://api.findup.ai/api/futurePedia/',
     NEXT_PUBLIC_BASE_URL:"http://findup.ai"
  }
}

module.exports = nextConfig
