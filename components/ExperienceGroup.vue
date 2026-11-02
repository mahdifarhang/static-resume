<template>
  <section class="experience-group" :aria-label="experience.organization">
    <div class="company-heading">
      <h3>{{ experience.organization }}</h3>
      <p>{{ experience.mainTitle }}</p>
      <p v-if="experience.period" class="date-range">{{ experience.period.start }} — {{ experience.period.end }}</p>
    </div>
    <div class="experience-timeline">
      <section v-for="position in experience.positions" :key="position.title" class="experience-position">
        <div class="position-heading">
          <h4>{{ position.title }}</h4>
          <p v-if="position.period" class="date-range">{{ position.period.start }} — {{ position.period.end }}</p>
        </div>
        <p v-if="position.summary" class="position-summary">{{ position.summary }}</p>
        <ul v-if="position.highlights" class="achievement-list">
          <li v-for="highlight in position.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
        <ul class="technology-list" aria-label="Technologies and focus">
          <li v-for="technology in position.technologies" :key="technology">{{ technology }}</li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceGroup',
  props: { experience: { type: Object, required: true } }
}
</script>
