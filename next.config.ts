import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  trailingSlash: githubPages,
  images: {
    unoptimized: githubPages,
  },
};

export default nextConfig;
