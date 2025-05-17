module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["dist/**/*", "node_modules/**/*"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    // Add any specific rules here
  },
};
