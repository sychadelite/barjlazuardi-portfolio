// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/img/icons/barj-favicon.svg' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '@/assets/scss/_main.scss'
  ],
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/eslint'],
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales/',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json', flag: 'gb' },
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json', flag: 'fr' },
      { code: 'ar', iso: 'ar-AR', name: 'العربية', file: 'ar.json', dir: 'rtl', flag: 'sa' },
      { code: 'id', iso: 'id-ID', name: 'Bahasa Indonesia', file: 'id.json', flag: 'id' },
      { code: 'cn', iso: 'zh-CN', name: '简体中文', file: 'cn.json', flag: 'cn' },
      { code: 'jp', iso: 'ja-JP', name: '日本語', file: 'jp.json', flag: 'jp' },
      { code: 'kr', iso: 'ko-KR', name: '한국어', file: 'kr.json', flag: 'kr' },
      { code: 'th', iso: 'th-TH', name: 'ไทย', file: 'th.json', flag: 'th' },
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe', file: 'tr.json', flag: 'tr' },
      { code: 'he', iso: 'he-IL', name: 'עברית', file: 'he.json', dir: 'rtl', flag: 'il' },
      { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json', flag: 'it' },
      { code: 'du', iso: 'nl-NL', name: 'Nederlands', file: 'du.json', flag: 'nl' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json', flag: 'de' },
      { code: 'gr', iso: 'el-GR', name: 'Ελληνικά', file: 'gr.json', flag: 'gr' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json', flag: 'ru' }
    ],
    strategy: 'prefix_except_default',
    vueI18n: '~/plugins/@core/i18n/config.ts'
  },
  plugins: [
    { src: '~/plugins/@core/helpers.ts', mode: 'client' }
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    config: {},
    viewer: true
  },
  ssr: false,
  spaLoadingTemplate: 'spa-loading-template.html',
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  compatibilityDate: '2025-08-27'
})