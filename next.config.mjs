/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',  // Allow 'https' protocol
        hostname: '**',     // Allow any hostname (domain)
        pathname: '**',     // Allow any path
      },
      {
        protocol: 'http',   // Optionally, allow 'http' protocol if needed
        hostname: '**',     // Allow any hostname (domain)
        pathname: '**',     // Allow any path
      }
    ],
  },
};

export default nextConfig;

