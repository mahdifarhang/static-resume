<template>
  <div>
    <p class="info--text">
      {{ action.title }}
    </p>
    <p>{{ action.institutionName }}</p>
    <p><span>{{ action.period.start }}</span> - <span>{{ action.period.end }}</span></p>
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
