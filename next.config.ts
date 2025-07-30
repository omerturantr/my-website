import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true
};

export default withContentlayer(nextConfig);
