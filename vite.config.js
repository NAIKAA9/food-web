import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/food-web/", // IMPORTANT for GitHub Pages
});
