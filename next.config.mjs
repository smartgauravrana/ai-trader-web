/** @type {import('next').NextConfig} */

const { API_URL } = process.env;
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
