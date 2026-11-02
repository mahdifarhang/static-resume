<template>
  <v-app :class="['resume-app', { 'resume-light': !$vuetify.theme.dark }]">
    <a class="skip-link no-print" href="#main-content">Skip to resume</a>
    <div class="resume-shell">
      <div class="utility-bar no-print">
        <a class="wordmark" href="/" aria-label="Mahdi Farhang home"><span>mf.</span> <span class="wordmark-caption">The resume</span></a>
        <div class="utility-actions">
          <button type="button" class="utility-button theme-toggle" :aria-label="$vuetify.theme.dark ? 'Switch to light theme' : 'Switch to dark theme'" @click="toggleTheme">
            <svg v-if="$vuetify.theme.dark" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
            <svg v-else viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z" /></svg>
          </button>
        </div>
      </div>
      <main id="main-content" tabindex="-1"><Nuxt /></main>
      <div class="page-actions no-print">
        <p class="page-note">Built with care. Always learning.</p>
        <button type="button" class="utility-button" @click="printResume">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V8h16v9h-3M7 14h10v7H7z" /><path d="M16 11h1" /></svg>
          Print / PDF
        </button>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  mounted () {
    try {
      const theme = window.localStorage.getItem('resume-theme')
      if (theme === 'light' || theme === 'dark') {
        this.$vuetify.theme.dark = theme === 'dark'
      }
    } catch (_) {
      // Theme controls still work when browser storage is unavailable.
    }
  },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      try {
        window.localStorage.setItem('resume-theme', this.$vuetify.theme.dark ? 'dark' : 'light')
      } catch (_) {
        // Persistence is optional.
      }
    },
    printResume () {
      window.print()
    }
  }
}
</script>
