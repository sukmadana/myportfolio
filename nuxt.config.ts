// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sukmadana - Portfolio',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  ssr: false,
  css: ["@/assets/scss/main.scss"],
  modules: ['@nuxt/ui', 'nuxt-svgo', "@nuxt/image", "@hypernym/nuxt-gsap"],
  ui: {
    global: true,
    icons: ['mdi', 'heroicons', 'simple-icons']
  }
})