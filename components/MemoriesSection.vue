<template>
  <section v-if="lovedOne && lovedOne.dates.length" class="memories-section no-print" dir="rtl" lang="fa" aria-labelledby="memories-heading">
    <header class="memories-heading">
      <h2 id="memories-heading">{{ lovedOne.heading }}</h2>
      <p>{{ lovedOne.name }}</p>
    </header>
    <ol class="memories-list">
      <li v-for="date in lovedOne.dates" :key="date.id" class="memory-card">
        <h3>{{ date.place }}</h3>
        <p class="memory-date"><span>{{ date.date }}</span><span v-if="date.time">{{ date.time }}</span></p>
        <blockquote v-if="date.quote">{{ date.quote }}</blockquote>
      </li>
    </ol>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MemoriesSection',
  computed: { ...mapState('resume', ['lovedOne']) }
}
</script>
