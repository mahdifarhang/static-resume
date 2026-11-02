<template>
  <div class="skill-categories">
    <div v-for="category in categories" :key="category.name" class="skill-category">
      <h3>{{ category.name }}</h3>
      <ul class="skill-list">
        <skill-component v-for="skill in category.skills" :key="skill" :skill="skill" />
      </ul>
      <p v-if="category.familiar && category.familiar.length" class="familiar-skills">
        <span>Also familiar with</span>
        {{ category.familiar.join(' · ') }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoryComponent',
  computed: { ...mapState('resume', ['categories']) }
}
</script>
