import type { NextConfig } from 'next';

//OPTION
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  distDir: 'build',
  //OPTION
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: !isProd
  },
  //OPTION
  basePath: isProd ? 'https://github.com/i0ji/p_katerina_semenova_next/' : '',
  assetPrefix: isProd ? 'https://github.com/i0ji/p_katerina_semenova_next/' : '',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  }
};

export default nextConfig;
