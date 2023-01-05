/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_RAZORPAY_ID: "rzp_live_hwlHvwkYUtPMUc",
    RAZORPAY_SECRET: "O5Lb3yN5dakG6D98257pDOR1",
  },
  reactStrictMode: false,
  images: {
    domains: ["akblsrgwrgpiowzqztyj.supabase.co"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
