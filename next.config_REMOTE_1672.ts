import type { NextConfig } from 'next';

//OPTION
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  distDir: 'build',
  output: isProd ? 'export' : undefined,
  // basePath: '',
  // assetPrefix: '',
  basePath: '/p_katerina_semenova_next',
  assetPrefix: '',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  }
};

export default nextConfig;
