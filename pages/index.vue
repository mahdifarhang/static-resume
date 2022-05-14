<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="10" lg="8" xl="6">
      <v-card>
        <v-card-title class="">
          <span class="resume-title">{{ capitalize(getName()) }}</span>
        </v-card-title>
        <v-card-subtitle>{{ capitalize(position) }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState('resume', ['position']),
    ...mapGetters('resume', ['getName', 'capitalize'])
  }
}
</script>

<style>
.resume-title {
  font-weight: 800;
  font-size: 2em;
  letter-spacing: 0.2em;
}
</style>
