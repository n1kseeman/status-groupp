import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: isGitHubPages,
  basePath: isGitHubPages ? "/status-groupp" : "",
  assetPrefix: isGitHubPages ? "/status-groupp" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
