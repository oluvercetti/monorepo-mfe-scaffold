const { resolve } = require('path');
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/../../__mocks__/styleMock.js',
        // Handle image imports
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/../../__mocks__/fileMock.js',
        // Handle module aliases
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['<rootDir>/**/__tests__/**/*.ts?(x)', '<rootDir>/**/?(*.)+(spec|test).ts?(x)'],
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.next/',
    ],
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

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig); 