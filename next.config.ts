// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     productionBrowserSourceMaps: false,

// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hydeparkwinterwonderland.com",
      },
      {
        protocol: "https",
        hostname: "wembleypark.com",
      },
    ],
  },
};

module.exports = nextConfig;
