import type { NextConfig } from 'next';

const securityHeaders = [
  // Strict Transport Security - enforce HTTPS
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Prevent clickjacking
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Prevent MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Referrer policy for privacy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Permissions policy - restrict browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Cross-Origin policies for isolation
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin-allow-popups',
  },
  // Content Security Policy - comprehensive protection
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://consent.cookiebot.com https://consentcdn.cookiebot.com https://va.vercel-scripts.com https://vercel.live https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: http:",
      "font-src 'self' https://fonts.gstatic.com",
      "media-src 'self' blob: https://onbadqcmbugvszb0.public.blob.vercel-storage.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://consent.cookiebot.com https://consentcdn.cookiebot.com https://vitals.vercel-insights.com https://vercel.live wss://ws-us3.pusher.com https://api-js.mixpanel.com https://api.mixpanel.com",
      "frame-src 'self' https://www.googletagmanager.com https://consent.cookiebot.com https://consentcdn.cookiebot.com https://www.loom.com https://loom.com https://vercel.live https://calendly.com",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onbadqcmbugvszb0.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Consistent trailing slash behavior for SEO
  trailingSlash: false,
  // Skip type checking during build (faster deploys, assumes types checked in CI)
  typescript: {
    ignoreBuildErrors: false,
  },
  // Security and caching headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Aggressive caching for static assets (improves global load times)
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache HTML pages at edge for 1 hour (reduces TTFB globally)
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/compare',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/pricing',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  // Redirects for renamed blog posts
  async redirects() {
    return [
      {
        source: '/blog/detect-cheating-remote-interviews',
        destination: '/blog/ai-leadership-remote-interviews',
        permanent: true,
      },
      {
        source: '/blog/chatgpt-cheating-interviews-detection',
        destination: '/blog/ai-collaboration-interview-verification',
        permanent: true,
      },
      {
        source: '/blog/detect-deepfake-proxy-candidates',
        destination: '/blog/identity-verification-remote-hiring',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
