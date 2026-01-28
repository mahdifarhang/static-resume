<template>
  <div class="experience-group mb-0">
    <h2 class="info--text mb-4">
      {{ experience.organization }}
    </h2>
    <h2 class="mb-3">{{ experience.mainTitle }}</h2>
    <div v-for="(position, index) in experience.positions" :key="position.title" class="mb-3 ml-3">
      <h3 class="mb-1">{{ position.title }}</h3>
      <p class="mb-1 ml-4">
        <span>{{ position.period.start }}</span> - <span>{{ position.period.end }}</span>
      </p>
      <p class="ma-0 position-summary ml-8 mt-2">{{ position.summary }}</p>
      <v-row
        v-if="index !== experience.positions.length - 1"
        justify="center"
        class="mb-1 mt-5"
      >
        <v-col cols="10" class="pa-0">
          <v-divider class="warning" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceGroup',
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.experience-group {
  margin-bottom: 16px;
}

.position-summary {
  white-space: pre-line;
  line-height: 1.4;
}

.experience-meta {
  white-space: nowrap;
}
</style>
