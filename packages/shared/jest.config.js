const { resolve } = require('path');
const rootConfig = require('../../jest.config');

const packageRoot = resolve(__dirname);

/** @type {import('jest').Config} */
module.exports = {
    ...rootConfig,
    rootDir: packageRoot,
    // Adjust the setup files path to point to the root config
    setupFilesAfterEnv: ['../../jest.setup.js'],
    // Module name mapper with adjusted paths
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        '\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        // Handle CSS imports (without CSS modules)
        '\\.(css|sass|scss)$': '../../__mocks__/styleMock.js',
        // Handle image imports
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '../../__mocks__/fileMock.js',
    },
    // Specify where to find test files for this package
    testMatch: ['<rootDir>/**/__tests__/**/*.ts?(x)', '<rootDir>/**/?(*.)+(spec|test).ts?(x)'],
    transform: {
        // Use ts-jest for TypeScript files
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: 'tsconfig.json',
            babelConfig: {
                presets: [
                    ['@babel/preset-env', { targets: { node: 'current' } }],
                    '@babel/preset-typescript',
                    ['@babel/preset-react', { runtime: 'automatic' }],
                ],
            },
        }],
    },
}; 