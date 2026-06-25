// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import path from "node:path";

import alpine from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: node({ mode: "standalone" }),
  integrations: [alpine({ entrypoint: "/src/alpine-entry.ts" })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@components": path.resolve("./src/components"),
        "@data": path.resolve("./src/data"),
        "@db": path.resolve("./src/db"),
        "@layouts": path.resolve("./src/layouts"),
        "@lib": path.resolve("./src/lib"),
        "@mapsection": path.resolve("./mapsection"),
        "@pages": path.resolve("./src/pages"),
        "@sections": path.resolve("./src/sections"),
        "@styles": path.resolve("./src/styles"),
      },
    },
  },
  output: "server",
  build: {
    inlineStylesheets: "always",
  },
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
});