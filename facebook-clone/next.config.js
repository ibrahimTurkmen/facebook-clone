/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['upload.wikimedia.org','platform-lookaside.fbsbx.com', 'tr.wikipedia.org']
  }
}

module.exports = nextConfig
