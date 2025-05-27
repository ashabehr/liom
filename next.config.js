/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,

  swcMinify: false, // swc ممکنه syntax جدید نگه داره
  transpilePackages: [],

  experimental: {
    legacyBrowsers: true,
    modern: false,
    forceSwcTransforms: true,
  },

  async headers() {
    return [
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
