<template>
  <li class="skill-chip">{{ skill }}</li>
</template>

<script>
export default {
  name: 'SkillComponent',
  props: { skill: { type: String, required: true } }
}
</script>
