// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  router: {
    options: {
      strict: true
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    '@element-plus/nuxt',
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image"
  ],
  pinia: {
    storesDirs: ["../stores/**"],
  },
  runtimeConfig: {
    YOUTUBE_API: process.env.YOUTUBE_API,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID
  }
});