import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "money-tracker";

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
});
