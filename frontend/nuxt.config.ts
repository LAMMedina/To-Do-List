import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    devtools: { enabled: true },
    runtimeConfig: {
      public: {
        apiBase: 'http://localhost:3001/api'
      }
    }
  })