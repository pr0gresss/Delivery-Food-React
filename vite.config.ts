import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@interfaces": path.resolve(__dirname, "src/app/shared/interfaces"),
      "@components": path.resolve(__dirname, "src/app/components"),
      "@types": path.resolve(__dirname, "src/app/shared/types"),
      "@contexts": path.resolve(__dirname, "src/app/shared/contexts"),
      "@hooks": path.resolve(__dirname, "src/app/shared/hooks"),
      "@utils": path.resolve(__dirname, "src/app/shared/utils"),
      "@services": path.resolve(__dirname, "src/app/shared/services"),
    },
  },
});
