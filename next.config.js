const isProd = process.env.NODE_ENV === 'production';
const repo = 'expertise';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}` : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
