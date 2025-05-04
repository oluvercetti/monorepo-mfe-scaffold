const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui', '@repo/shared'],
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'tickets',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './page': './pages/index.tsx',
                },
                shared: {
                    '@repo/ui': {
                        singleton: true,
                        requiredVersion: false,
                    },
                    '@repo/shared': {
                        singleton: true,
                        requiredVersion: false,
                    },
                },
            })
        );
        return config;
    },
};

module.exports = nextConfig; 