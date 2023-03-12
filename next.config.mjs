/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "https://pathway-plus-backend.vercel.app",
  },
};

export default nextConfig;