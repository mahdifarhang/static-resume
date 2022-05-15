<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <!--    <v-app-bar fixed app />-->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <v-btn rounded text @click="toggleTheme">
        <v-icon v-if="theme === 'dark'">
          fas fa-sun
        </v-icon>
        <v-icon v-else>
          fas fa-moon
        </v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'Vuetify.js'
    }
  },
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
