import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname: 'jobicy.com',}
    ],
  },
};

export default nextConfig;
