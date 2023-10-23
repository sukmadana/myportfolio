// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ["@/assets/scss/main.scss"],
  modules: ['@nuxt/ui', 'nuxt-svgo', "@nuxt/image", "@hypernym/nuxt-gsap"],
  ui: {
    global: true,
    icons: ['mdi', 'heroicons', 'simple-icons']
  }
})