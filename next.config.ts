import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from local public folder
    unoptimized: false,
  },
};

export default nextConfig;
