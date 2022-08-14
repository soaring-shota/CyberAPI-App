import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VitePluginLinaria from "vite-plugin-linaria";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    vueJsx(),
    VitePluginLinaria(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          common: [
            "dayjs",
            "localforage",
            "debug",
            "lodash-es",
            "pretty-bytes",
            "ulid",
          ],
          ui: [
            "vue",
            "vue-router",
            "vue-i18n",
            "pinia",
          ],
          naive: [
            "naive-ui",
          ]
        },
      },
    },
  },
});
