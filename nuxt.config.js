export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Mahdi Farhang is a Fullstack Developer, and has experience working with Django and Vue.js'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: { icons: 'fa' },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          background: '#191B1A', // Whole page background
          secondBackground: '#2B2C28', // Card Background
          primary: '#339989', // Icons
          accent: '#942939', // Titles
          secondary: '#99CAC2', // bars and chips
          info: '#E6EEED', // Writings.
          warning: '#E6EEED', // Dividers - Lines
          error: '#339989', // Skill Names
          success: '#339989' // Skill Chips
        },
        light: {
          background: '#ccc9c4', // Whole page background
          secondBackground: '#ffffff', // Card Background
          primary: '#867c81', // Icons
          accent: '#942939', // Titles
          secondary: '#867c81', // bars and chips
          info: '#27233A', // Writings.
          warning: '#27233A', // Dividers - Lines
          error: '#867c81', // Skill Names
          success: '#505168' // Skill Chips
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
