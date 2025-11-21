import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/hyunwoo-portfolio/", //  레포 이름과 완전히 동일해야 함
  build: {
    outDir: "docs", //  GitHub Pages에서 쓰기 위해 docs로
  },
});
