import type { NextConfig } from "next";
import path from "path";
const withVideos = require('next-videos')

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withVideos(nextConfig);
