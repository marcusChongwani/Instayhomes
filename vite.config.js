import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Use a direct path
    },
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "9e5f1a12-77ef-4538-a7fb-7f6a5c83a863-00-4yvmltdb81h.janeway.replit.dev",
    ],
  },
});
