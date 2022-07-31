/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['challenge.agenciaego.tech'],
  },
};

module.exports = nextConfig;
