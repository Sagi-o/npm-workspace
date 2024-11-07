import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Link packages for developement
      "@org/shared": path.resolve(__dirname, "../shared/src"),
    },
  },
});
