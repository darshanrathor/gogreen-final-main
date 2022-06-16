/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["akblsrgwrgpiowzqztyj.supabase.co"],
    formats: ['image/avif', 'image/webp'],
    },
};

module.exports = nextConfig;
