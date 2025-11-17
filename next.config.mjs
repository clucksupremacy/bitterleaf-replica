/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'znqoapsrcuupvjssxapy.supabase.co',
      },
    ],
  },
};

export default nextConfig;
