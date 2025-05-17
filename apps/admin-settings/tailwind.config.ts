import type { Config } from "tailwindcss";
import baseConfig from "../../packages/ui/tailwind.config";

const config = {
  ...baseConfig,
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",

} satisfies Config;

export default config;
