/** @type {import('next').NextConfig} */

// PWA
const prod = process.env.NODE_ENV === 'production';
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: prod ? false : true,
  buildExcludes: [/middleware-manifest\.json$/],
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  minimumCacheTTL: 60,

  siteUrl: siteUrl,
  additionalSitemaps: [`/server-sitemap.xml`],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.5,
  robotsTxtOptions: {
    additionalSitemaps: [`/server-sitemap.xml`],
    policies: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: '*',
        disallow: ['/404'],
      },
    ],
  },

  images: {
    // unoptimized: false,
    domains: ['imagedelivery.net', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [600, 768, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
module.exports = withPWA(nextConfig);
