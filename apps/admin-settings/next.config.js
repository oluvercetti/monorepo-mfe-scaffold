const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/shared"],
  // Add experimental configuration for ESM modules
  experimental: {
    esmExternals: "loose", // Enable ESM support in a more relaxed way
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "adminSettings",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./AdminApp": "./RemoteAdminApp.tsx",
        },
        shared: {
          "@repo/ui": {
            singleton: true,
            requiredVersion: false,
          },
          "@repo/shared": {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
  // Add headers for CORS support
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            // In production, you may want to restrict this to specific origins
            value: process.env.NODE_ENV === "production" ? process.env.ALLOWED_ORIGINS || "*" : "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
