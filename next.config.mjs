/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        BASE_URL: 'https://mice.lumos.com.ge/'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mice.lumos.com.ge',
            },
        ],
    }
};

export default nextConfig;
