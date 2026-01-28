<template>
  <div>
    <v-row v-for="category in categories" :key="category.name" class="pa-1 ma-0">
      <v-col class="ma-0 pa-0" cols="12">
        <h3 class="info--text">
          {{ category.name }}
        </h3>
        <v-row class="pa-0 ma-0">
          <skill-component v-for="skill in category.skills" :key="skill.name" :skill="skill" />
        </v-row>
        <p v-if="category.others.length && category.skills.length" class="mt-2 mb-1 caption">Also familiar with:</p>
        <v-row class="pa-0 ma-0">
          <v-chip
            v-for="skill in category.others"
            :key="skill"
            class="ma-1 chip-outline"
            color="success"
            outlined
          >
            {{ skill }}
          </v-chip>
        </v-row>
        <v-divider class="mb-5 mt-2 warning" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoryComponent',
  computed: {
    ...mapState('resume', ['categories'])
  }
}
</script>

<style scoped>

</style>
