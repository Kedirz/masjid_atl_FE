/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.stack.imgur.com", "i.ibb.co"],
  },
}

module.exports = nextConfig
