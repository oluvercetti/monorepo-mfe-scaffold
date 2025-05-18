import type { Config } from "tailwindcss";
import baseConfig from "../../packages/ui/tailwind.config";

const config = {
  ...baseConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../admin-settings/components/**/*.{js,ts,jsx,tsx}",
    "../admin-settings/pages/**/*.{js,ts,jsx,tsx}",
    "../tickets/components/**/*.{js,ts,jsx,tsx}",
    "../tickets/pages/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  
} satisfies Config;

export default config;
