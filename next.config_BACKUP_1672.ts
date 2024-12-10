import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? '/p_katerina_semenova_next' : '',
  assetPrefix: '.',
=======
  distDir: 'build',
  output: isProd ? 'export' : undefined,
  // basePath: '',
  // assetPrefix: '',
  basePath: '/p_katerina_semenova_next',
  assetPrefix: '',
>>>>>>> feature/slide_style
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  }
};

export default nextConfig;
