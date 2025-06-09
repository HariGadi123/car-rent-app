import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://carrental-150p.onrender.com/:path*',
      },
    ];
  },
};

export default nextConfig;
