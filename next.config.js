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
