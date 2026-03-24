import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us/our-story",
        destination: "/about/our-story",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/about/careers",
        permanent: true,
      },
      {
        source: "/about-us/careers",
        destination: "/about/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
