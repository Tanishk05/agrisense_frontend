/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn3d.iconscout.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "5.imimg.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
