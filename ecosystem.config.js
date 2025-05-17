module.exports = {
  apps: [
    {
      name: "repo-app",
      script: "pnpm",
      args: "run build-and-start",
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_API_BASE_URL: "https://api.dev.semanix.com/",
        TICKETS_URL: "http://localhost:3001",
        ADMIN_SETTINGS_URL: "http://localhost:3003",
        ALLOWED_ORIGINS: "*",
      },
    },
  ],
};
