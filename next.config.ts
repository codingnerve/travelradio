import path from "node:path";
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  // Lets the dev server be shown through a temporary tunnel (demo sharing).
  allowedDevOrigins: ["*.trycloudflare.com"],
  turbopack: {
    // Pin the workspace root; a stray lockfile higher up the tree would otherwise be picked.
    root: path.resolve(process.cwd()),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
  },
  // Hotels and car rentals are hidden for now. Remove these redirects (and restore the
  // nav, home sections and sitemap entries) to bring them back.
  async redirects() {
    return [
      { source: "/hotels", destination: "/", permanent: false },
      { source: "/car-rentals", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
