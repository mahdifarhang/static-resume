import { writeFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import { personalSite, site } from './site.config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  buildDir: personalSite ? '.nuxt-personal' : '.nuxt',
  env: {
    RESUME_PERSONAL: personalSite ? 'true' : 'false'
  },
  generate: {
    dir: personalSite ? 'dist-personal' : 'dist'
  },
  hooks: {
    'generate:done' (generator) {
      if (personalSite) {
        // Allow crawling so crawlers can read the noindex meta/header.
        writeFileSync(join(generator.distPath, 'robots.txt'), 'User-agent: *\nAllow: /\n')
        unlinkSync(join(generator.distPath, 'sitemap.xml'))
      }
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: site.title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: site.description
      },
      { name: 'author', content: site.name },
      { hid: 'robots', name: 'robots', content: site.robots },
      { name: 'theme-color', content: '#14201f' },
      { hid: 'og:type', property: 'og:type', content: 'profile' },
      { hid: 'og:title', property: 'og:title', content: site.title },
      { hid: 'og:description', property: 'og:description', content: site.description },
      { hid: 'og:url', property: 'og:url', content: site.url },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Mahdi Farhang — Resume' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image', property: 'og:image', content: site.image },
      { property: 'og:image:secure_url', content: site.image },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: site.imageAlt },
      { property: 'profile:first_name', content: 'Mahdi' },
      { property: 'profile:last_name', content: 'Farhang' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: site.title },
      { name: 'twitter:description', content: site.description },
      { name: 'twitter:image', content: site.image },
      { name: 'twitter:image:alt', content: site.imageAlt },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: site.url },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/resume.css',
    '~/assets/print.css'
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
    defaultAssets: false,
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
    extractCSS: true
  }
}
