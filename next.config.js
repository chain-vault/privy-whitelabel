/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/privy-whitelabel', // 👈 required for GitHub Pages
  assetPrefix: '/privy-whitelabel', // 👈 required for GitHub Pages
};

module.exports = nextConfig;