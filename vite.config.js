import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/tucheng-qingcao/", // GitHub Pages 部署路徑
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
