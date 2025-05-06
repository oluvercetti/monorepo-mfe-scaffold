import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui', '@repo/shared'],
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'adminSettings',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './AdminSettings': './pages/index.tsx',
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