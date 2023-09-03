// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    '@/assets/scss/_main.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
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
})
