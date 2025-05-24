/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint checking during build (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig