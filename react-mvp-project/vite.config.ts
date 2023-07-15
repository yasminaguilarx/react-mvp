import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()], // Include the react plugin
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});

// https://vitejs.dev/config/
