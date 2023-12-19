import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html"],
    },
  },
  plugins: [react()],
  preview: {
    host: true,
    port: 8080,
  },
});
