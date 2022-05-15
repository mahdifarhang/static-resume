<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col cols="12" lg="8" md="10" sm="12" xl="6">
      <v-card :style="{background: $vuetify.theme.themes[theme].secondBackground}" elevation="4">
        <v-card-title class="ma-2">
          <span class="resume-title info--text">{{ capitalize(getName()) }}</span>
        </v-card-title>
        <v-card-subtitle class="ma-2">
          <span class="accent--text">{{ capitalize(position) }}</span>
        </v-card-subtitle>
        <v-card-text class="ma-2">
          <v-row class="pa-2" justify="center">
            <v-col
              cols="6"
              order="first"
              md="4"
              lg="4"
              xl="4"
              class="pa-3"
              sm="6"
            >
              <div class="pa-0 mt-1 mb-2">
                <span class="section-title accent--text">{{ capitalize("Contacts") }}</span>
              </div>
              <v-row align="center" class="pa-1 ma-0">
                <v-btn :href="`tel:${contacts.phone}`" color="primary" icon>
                  <v-icon>{{ icons.phone }}</v-icon>
                </v-btn>
                <span class="ml-2 info--text">{{ contacts.phone }}</span>
              </v-row>
              <v-row align="center" class="pa-1 ma-0">
                <v-btn :href="`mailto:${contacts.email}`" color="primary" icon>
                  <v-icon>{{ icons.email }}</v-icon>
                </v-btn>
                <span class="ml-2 info--text">{{ contacts.email }}</span>
              </v-row>
              <v-row class="pa-1 ma-0">
                <v-btn
                  v-for="(value, key) in contacts.links"
                  :key="key"
                  icon
                  :href="value"
                  color="primary"
                >
                  <v-icon>
                    {{ icons[key] }}
                  </v-icon>
                </v-btn>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="5"
              md="5"
              xl="5"
              class="pa-3"
              order="last"
              order-lg="second"
              order-md="second"
              order-sm="last"
              order-xl="second"
            >
              <div class="pa-0 mt-1 mb-2">
                <span class="section-title accent--text">{{ capitalize("About") }}</span>
              </div>
              <span class="info--text">{{ about }}</span>
            </v-col>
            <v-col
              class="pa-3"
              cols="6"
              lg="3"
              md="3"
              order="second"
              xl="3"
              order-lg="last"
              order-md="last"
              order-sm="second"
              order-xl="last"
              sm="6"
            >
              <v-row class="mt-10 mb-2" justify="center">
                <v-card max-width="150px" min-width="70px" style="border-radius: 50%;">
                  <v-img src="profile.jpg" />
                </v-card>
              </v-row>
            </v-col>
          </v-row>
          <v-divider class="my-2 warning" />
          <v-row class="pa-2">
            <v-col
              cols="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
              class="pa-3"
            >
              <v-row class="pa-0 ma-0">
                <v-col
                  class="pa-0 ma-0"
                  cols="6"
                  lg="12"
                  md="12"
                  sm="6"
                  xl="12"
                >
                  <div class="pa-0 mt-1 mb-2">
                    <span class="section-title accent--text">{{ capitalize("Educations") }}</span>
                  </div>
                  <v-row v-for="education in educations" :key="education.title" class="pa-1 ma-0">
                    <periodic-action :action="education" />
                  </v-row>
                  <v-divider class="my-2 warning" />
                </v-col>
                <v-col
                  class="pa-0 ma-0"
                  cols="6"
                  lg="12"
                  md="12"
                  sm="6"
                  xl="12"
                >
                  <div class="pa-0 mt-1 mb-2">
                    <span class="section-title accent--text">{{ capitalize("Experiences") }}</span>
                  </div>
                  <v-row v-for="experience in experiences" :key="experience.title" class="pa-1 ma-0">
                    <periodic-action :action="experience" />
                  </v-row>
                  <v-divider class="my-2 warning" />
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="8"
              lg="8"
              xl="8"
              class="pa-3"
            >
              <div class="pa-0 mt-1 mb-2">
                <span class="section-title accent--text">{{ capitalize("Skills") }}</span>
                <category-component />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  data: () => {
    return {
      icons: {
        phone: 'fa-solid fa-phone',
        email: 'fa-solid fa-envelope',
        telegram: 'fa-brands fa-telegram',
        instagram: 'fa-brands fa-instagram',
        gitlab: 'fa-brands fa-gitlab',
        github: 'fa-brands fa-github',
        twitter: 'fa-brands fa-twitter',
        linkedIn: 'fa-brands fa-linkedin'
      }
    }
  },
  head: () => {
    return {
      title: "Mahdi Farhang's resume"
    }
  },
  computed: {
    ...mapState('resume', ['position', 'contacts', 'educations', 'experiences', 'about']),
    ...mapGetters('resume', ['getName', 'capitalize']),
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>

<style>
.resume-title {
  font-weight: 800;
  font-size: 2em;
  letter-spacing: 0.2em;
}

.section-title {
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 0.05em;
}
</style>
