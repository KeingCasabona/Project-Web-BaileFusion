import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a595mqzcm2.ufs.sh",
      },
    ],
  }
  /* config options here */
};

export default nextConfig;
