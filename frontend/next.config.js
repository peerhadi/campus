/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        '@mui/icons-material',
        '@mui/material',
        '@mui/x-date-pickers',
    ],
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8080/api/:path*', // Proxy to Backend
            },
        ]
    },
}

module.exports = nextConfig
