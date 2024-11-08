/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "via.placeholder.com",
          },
          {
            protocol: "https",
            hostname: "readymadeui.com",
          },
          {
            protocol: "https",
            hostname: "loremflickr.com",
          },
        ],
      }
};

export default nextConfig;
