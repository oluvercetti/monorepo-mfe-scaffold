import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui', '@repo/shared'],
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {
                    tickets: `tickets@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                    adminSettings: `adminSettings@http://localhost:3003/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
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
                extraOptions: {
                    exposePages: true,
                    enableImageLoaderFix: true,
                    enableUrlLoaderFix: true,
                },
            })
        );
        return config;
    },
};

export default nextConfig; 