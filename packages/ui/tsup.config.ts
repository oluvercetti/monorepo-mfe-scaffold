import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react"],
  inject: ["src/react-shim.js"],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      ".css": "copy",
    };
  },
});
