<template>
  <div class="project-list">
    <section v-for="project in projects" :key="project.name" class="project-entry" :aria-label="project.name">
      <h3>{{ project.name }}</h3>
      <p class="project-meta">{{ project.type }} · {{ project.status }}</p>
      <p class="project-summary">{{ project.summary }}</p>
      <ul class="project-highlights">
        <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
      <ul class="skill-list" :aria-label="project.name + ' technologies'">
        <skill-component v-for="technology in project.technologies" :key="technology" :skill="technology" />
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProjectList',
  computed: { ...mapState('resume', ['projects']) }
}
</script>
