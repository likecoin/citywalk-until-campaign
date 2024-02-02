// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'preload', href: '/vendor/typekit.js', as: 'script' },
      ],
      script: [
        { src: '/vendor/typekit.js', type: 'text/javascript' },
      ],
    }
  },
  colorMode: {
    preference: 'dark',
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-gtag'],
})
