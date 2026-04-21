import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.113",
    "192.168.56.1"
  ]
};

export default nextConfig;