import type { NextConfig } from "next";

/**
 * Next.js configuration for the public showcase build.
 *
 * Differences from production:
 * - No `output: "standalone"` (showcase deploys to Vercel/Netlify, not Docker)
 * - Simplified headers (no production-specific CSP)
 * - Same image domains for YouTube thumbnails
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i3.ytimg.com" },
      { protocol: "https", hostname: "yt3.ggpht.com" },
      // picsum.photos used for demo thumbnail placeholders
      { protocol: "https", hostname: "picsum.photos" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",       value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
