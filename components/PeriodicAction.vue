<template>
  <div class="education-entry">
    <h3>{{ action.title }}</h3>
    <p class="institution">{{ action.institutionName }}</p>
    <p class="date-range">{{ action.period.start }} — {{ action.period.end }}</p>
    <p v-if="action.summary" class="education-summary">{{ action.summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'PeriodicAction',
  props: { action: { type: Object, required: true } }
}
</script>
