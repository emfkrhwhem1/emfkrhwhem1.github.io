// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 추가

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/emfkrhwhem1.github.io/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' 를 'src' 폴더로 매핑
    },
  },
});
