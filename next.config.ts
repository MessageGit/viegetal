import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "viegetal";
const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
