/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,

  // تنظیمات هدر برای manifest
  async headers() {
    return [
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable'
          }
        ]
      },
      {
        source: '/service-worker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0'
          }
        ]
      }
    ];
  },

  // تولید خودکار service worker
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      const { GenerateSW } = require('workbox-webpack-plugin');
      config.plugins.push(
        new GenerateSW({
          swDest: 'public/service-worker.js',
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 30 * 24 * 60 * 60 // 30 روز
                }
              }
            }
          ]
        })
      );
    }
    return config;
  }
};

module.exports = nextConfig;
