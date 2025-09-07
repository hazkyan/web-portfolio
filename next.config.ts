import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ik.imagekit.io', 'img.shields.io'],
    remotePatterns: [
      { protocol: 'https', hostname: 'ik.imagekit.io', pathname: '/**', search: '' }
    ],
  },
};

export default nextConfig;
