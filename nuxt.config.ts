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
    "@pinia/nuxt"
  ],
  pinia: {
    storesDirs: ["../stores/**"],
  },
  runtimeConfig: {
    YOUTUBE_API: process.env.YOUTUBE_API
  }
});
