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
  // Everything outside the home page, the policy pages, About, Contact and Car Rental is
  // hidden for now. The page code is kept: delete a redirect here (and add the page back to
  // the nav and sitemap in src/config/site.ts / src/app/sitemap.ts) to bring it back.
  async redirects() {
    const hidden = ["/flights", "/hotels", "/travel-services", "/faq", "/manage-booking", "/disclaimer"];
    return [
      ...hidden.map((source) => ({ source, destination: "/", permanent: false })),
      { source: "/radio-services", destination: "/", permanent: false },
      { source: "/cancellation-policy", destination: "/refund-policy", permanent: false },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
