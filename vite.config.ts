import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/lorenes-house/",
  build: {
    outDir: "build",
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: [
          "import",
          "if-function",
          "global-builtin",
          "color-functions",
          "abs-percent",
        ],
      },
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
});
