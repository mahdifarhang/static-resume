<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="10" lg="8" xl="6">
      <v-card>
        <v-card-title class="">
          <span class="resume-title">{{ capitalize(getName()) }}</span>
        </v-card-title>
        <v-card-subtitle>{{ capitalize(position) }}</v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <span class="section-title">{{ capitalize("Contacts") }}</span>
              <v-row align="center">
                <v-btn icon :href="`tel:${contacts.email}`">
                  <v-icon>{{ icons.phone }}</v-icon>
                </v-btn>
                <span>{{ contacts.phone }}</span>
              </v-row>
              <v-row align="center">
                <v-btn icon :href="`mailto:${contacts.email}`">
                  <v-icon>{{ icons.email }}</v-icon>
                </v-btn>
                <span>{{ contacts.email }}</span>
              </v-row>
              <v-row>
                <v-btn
                  v-for="(value, key) in contacts.links"
                  :key="key"
                  icon
                  :href="value"
                >
                  <v-icon>
                    {{ icons[key] }}
                  </v-icon>
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="8">
              hello
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
  computed: {
    ...mapState('resume', ['position', 'contacts']),
    ...mapGetters('resume', ['getName', 'capitalize'])
  }
}
</script>

<style>
.resume-title {
  font-weight: 800;
  font-size: 2.5em;
  letter-spacing: 0.2em;
}

.section-title {
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 0.05em;
}
</style>
