import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(tailwindcss())],
  root: '.', 
  server: {
    port: 5173, // Default Vite port for frontend
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        // No rewrite needed, keep /api prefix
      },
    },
  },
});
