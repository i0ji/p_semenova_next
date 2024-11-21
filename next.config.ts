import type { NextConfig } from 'next';

//OPTION
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  //OPTION
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: !isProd
  },
  //OPTION
  basePath: isProd ? '/p_katerina_semenova_next' : '',
  assetPrefix: isProd ? '/p_katerina_semenova_next' : '',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  }
};

export default nextConfig;
