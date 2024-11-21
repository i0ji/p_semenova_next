import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: '/p_katerina_semenova_next',
  assetPrefix: '/p_katerina_semenova_next',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  }
};

export default nextConfig;
