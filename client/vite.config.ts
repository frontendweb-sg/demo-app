import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://demo-app-six-lilac.vercel.app/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react()],
});
