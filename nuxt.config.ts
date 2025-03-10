// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.ts',
        name: 'english'
      },
      {
        code: 'nl',
        file: 'nl.ts',
        name: 'nederlands'
      }
    ],
    defaultLocale: 'en'
  }
})