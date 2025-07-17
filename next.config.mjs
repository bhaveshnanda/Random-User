/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://random-user-lemon-gamma.vercel.app/',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
