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
  ],
  prefix: "",
  

} satisfies Config;

export default config;
