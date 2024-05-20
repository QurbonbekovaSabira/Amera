/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_URL: process.env.APP_URL,
    }
};

export default nextConfig;
