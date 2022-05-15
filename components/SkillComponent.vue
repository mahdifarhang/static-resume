<template>
  <div class="ma-0 pa-0">
    <v-row class="ma-0 pa-1">
      <v-col class="ma-0 px-1" cols="4">
        <span class="error--text">{{ skill.name }}</span>
      </v-col>
      <v-col class="ma-0 px-1" cols="8">
        <v-progress-linear
          :value="skill.percentage"
          color="secondary"
          height="25"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SkillComponent',
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
