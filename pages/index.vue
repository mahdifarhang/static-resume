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
                  <v-icon>mdi-phone</v-icon>
                </v-btn>
                {{ contacts.phone }}
              </v-row>
              <v-row align="center">
                <v-btn icon :href="`mailto:${contacts.email}`">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                {{ contacts.email }}
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
        telegram: 'mdi-telegram',
        instagram: 'mdi-instagram',
        gitlab: 'mdi-gitlab',
        github: 'mdi-github',
        twitter: 'mdi-twitter',
        linkedIn: 'mdi-linkedin'
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
