<template>
  <div class="print-resume">
    <section class="print-page" aria-label="Resume: profile and experience">
      <header class="print-header">
        <div>
          <p class="print-kicker">{{ position }}</p>
          <div class="print-name">{{ firstname }} <span>{{ lastname }}</span></div>
          <p class="print-specialties">{{ specialties.join(' · ') }}</p>
        </div>
        <img class="print-portrait" src="/profile.jpg" :alt="firstname + ' ' + lastname" width="86" height="86">
      </header>
      <p class="print-introduction">{{ about }}</p>
      <nav class="print-contacts" aria-label="Resume contact details">
        <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
        <a v-if="contacts.phone" :href="'tel:' + contacts.phone">{{ contacts.phone }}</a>
        <a v-for="(url, label) in contacts.links" :key="label" :href="url">{{ label }}</a>
      </nav>
      <section class="print-experience" aria-label="Professional experience">
        <h2 class="print-section-title">Experience</h2>
        <experience-group v-for="experience in experiences" :key="experience.organization" :experience="experience" />
      </section>
      <footer class="print-footer">
        <span>{{ firstname }} {{ lastname }} · {{ position }}</span>
        <a :href="siteUrl">resume.mfarhang.ir</a>
        <span>01 / 02</span>
      </footer>
    </section>

    <section class="print-page" aria-label="Resume: skills, self projects, and education">
      <header class="print-continuation">
        <div>
          <p class="print-kicker">{{ firstname }} {{ lastname }} · {{ position }}</p>
          <h2>Skills, projects & education</h2>
        </div>
        <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
      </header>
      <div class="print-details-grid">
        <div>
          <section aria-label="Technical skills">
            <h2 class="print-section-title">Technical skills</h2>
            <category-component />
          </section>
          <section class="print-languages" aria-label="Languages">
            <h2 class="print-section-title">Languages</h2>
            <p>{{ languages.join(' · ') }}</p>
          </section>
        </div>
        <div>
          <section aria-label="Self projects">
            <h2 class="print-section-title">Self projects</h2>
            <project-list />
          </section>
          <section class="print-education" aria-label="Education">
            <h2 class="print-section-title">Education</h2>
            <periodic-action v-for="education in educations" :key="education.title" :action="education" />
          </section>
        </div>
      </div>
      <footer class="print-footer">
        <span>{{ firstname }} {{ lastname }} · {{ position }}</span>
        <a :href="siteUrl">resume.mfarhang.ir</a>
        <span>02 / 02</span>
      </footer>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { site } from '~/site.config'

export default {
  name: 'ResumePrint',
  data: () => ({ siteUrl: site.url }),
  computed: {
    ...mapState('resume', ['firstname', 'lastname', 'position', 'about', 'specialties', 'contacts', 'experiences', 'educations', 'languages'])
  }
}
</script>
