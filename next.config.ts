import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",
  images: {
    localPatterns: [
      {
        pathname: "/public/**",
        search: ""
      },
    ],
    //unoptimized: true // remove this
  },
  reactStrictMode: true,
};

export default nextConfig;
