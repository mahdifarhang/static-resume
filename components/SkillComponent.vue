<template>
  <v-chip class="ma-1 skill-chip" :style="chipStyle">
    {{ skill.name }}
  </v-chip>
</template>

<script>
export default {
  name: 'SkillComponent',
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  computed: {
    chipStyle () {
      const theme = this.$vuetify.theme.dark ? 'dark' : 'light'
      const colors = this.$vuetify.theme.themes[theme]
      const fill = colors.success || '#4caf50'
      const empty = colors.secondBackground || '#2f2f2f'
      const pct = Math.max(0, Math.min(100, Number(this.skill.percentage) || 0))
      return {
        background: `linear-gradient(90deg, ${fill} ${pct}%, ${empty} ${pct}%)`,
        color: '#ffffff',
        border: `1px solid ${fill}`
      }
    }
  }
}
</script>

<style scoped>
.skill-chip {
  font-weight: 600;
}
</style>
