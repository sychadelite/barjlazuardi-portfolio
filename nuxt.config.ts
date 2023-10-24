// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js' }
      ],
    }
  },
  css: [
    '@/assets/scss/_main.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  plugins: [
    { src: '~/plugins/@core/helpers.ts', mode: 'client' },
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  ssr: false,
  spaLoadingTemplate: 'spa-loading-template.html',
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
})
