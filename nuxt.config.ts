// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
        { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/img/icons/barj-favicon.svg' },
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js' }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    '@/assets/scss/_main.scss',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  i18n: {
    vueI18n: '~/plugins/@core/i18n/config.ts'
  },
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
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  }
})
