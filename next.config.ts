import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? '/p_katerina_semenova_next' : '',
  assetPrefix: './',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  }
};

export default nextConfig;