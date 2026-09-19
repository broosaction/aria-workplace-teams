import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(githubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: "/aria-workplace-teams",
      }
    : {}),
};

export default nextConfig;
