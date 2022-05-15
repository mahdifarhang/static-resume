import colors from 'vuetify/es5/util/colors'

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
      dark: false,
      themes: {
        dark: {
          background: '#38383a',
          secondBackground: '#1e1e1e',
          primary: colors.teal.base,
          accent: colors.teal.lighten3,
          secondary: colors.teal.base,
          info: colors.teal.lighten5,
          warning: colors.blue.lighten5,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
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
