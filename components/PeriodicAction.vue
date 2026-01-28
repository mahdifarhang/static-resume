<template>
  <div>
    <h3 class="info--text">
      {{ action.title }}
    </h3>
    <h4>{{ action.institutionName }}</h4>
    <p><span>{{ action.period.start }}</span> - <span>{{ action.period.end }}</span></p>
    <p v-if="action.summary" class="mb-0">{{ action.summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'PeriodicAction',
  props: {
    action: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
