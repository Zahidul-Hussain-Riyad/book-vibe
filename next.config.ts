import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "***",
            },
        ],
    },
};

export default nextConfig;

// i.ibb.co.com