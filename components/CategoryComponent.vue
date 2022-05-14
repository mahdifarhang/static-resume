<template>
  <div>
    <v-row v-for="category in categories" :key="category.name" class="pa-1 ma-0">
      <v-col class="ma-0 pa-0" cols="12">
        <v-divider class="mb-4" />
        <p>{{ category.name }}</p>
        <skill-component v-for="skill in category.skills" :key="skill.name" :skill="skill" class="pa-1 ma-1" />
      </v-col>
      <v-col class="ma-0 pa-0" cols="12">
        <v-row class="pa-1 ma-0">
          <v-chip v-for="skill in category.others" :key="skill" class="mx-1">
            {{ skill }}
          </v-chip>
        </v-row>
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
