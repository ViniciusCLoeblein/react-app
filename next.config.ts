import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  
  reactStrictMode: true,
  images: {
    domains: ['*'], 
  },
};

export default nextConfig;
