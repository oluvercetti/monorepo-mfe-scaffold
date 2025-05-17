const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@repo/ui", "@repo/shared"],
    webpack(config, options) {
        const { isServer } = options;
        const ticketsUrl = process.env.TICKETS_URL;
        const adminSettingsUrl = process.env.ADMIN_SETTINGS_URL;
        config.plugins.push(
            new NextFederationPlugin({
                name: "host",
                filename: "static/chunks/remoteEntry.js",
                remotes: {
                    tickets: `tickets@${ticketsUrl}/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
                    adminSettings: `adminSettings@${adminSettingsUrl}/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
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
    experimental: {
        esmExternals: "loose",
    },
};

module.exports = nextConfig;
