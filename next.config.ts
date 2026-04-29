import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/github-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
