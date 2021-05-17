import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";
import ViteComponents, { VuetifyResolver } from "vite-plugin-components";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [createVuePlugin(), ViteComponents({ customComponentResolvers: VuetifyResolver() })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/scss/variables";',
      },
    },
  },
});

export default config;
