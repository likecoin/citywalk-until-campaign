// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    preference: 'dark',
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-gtag'],
})
