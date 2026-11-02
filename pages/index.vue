<template>
  <article id="resume" class="resume-sheet" aria-labelledby="resume-name">
    <header class="resume-header">
      <div class="intro">
        <p class="eyebrow">Software engineering · Resume</p>
        <h1 id="resume-name">{{ firstname }} <span>{{ lastname }}</span></h1>
        <p class="position">{{ position }}</p>
        <ul class="specialties" aria-label="Primary technical strengths">
          <li v-for="specialty in specialties" :key="specialty">{{ specialty }}</li>
        </ul>
      </div>
      <img class="portrait" src="/profile.jpg" :alt="firstname + ' ' + lastname" width="132" height="132">
      <p class="about-text">{{ about }}</p>
      <nav class="contact-links" aria-label="Contact and profiles">
        <a class="email-link" :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
        <a v-if="contacts.phone" :href="'tel:' + contacts.phone">{{ contacts.phone }}</a>
        <a v-for="(url, label) in contacts.links" :key="label" :href="url" target="_blank" rel="noopener noreferrer">
          {{ label }} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>

    <div class="resume-columns">
      <section class="experience-section" aria-labelledby="experience-heading">
        <div class="section-heading">
          <span class="section-index" aria-hidden="true">01</span>
          <h2 id="experience-heading">Experience</h2>
        </div>
        <experience-group v-for="experience in experiences" :key="experience.organization" :experience="experience" />
      </section>

      <aside class="resume-sidebar" aria-label="Skills, self projects, and education">
        <section class="skills-section" aria-labelledby="skills-heading">
          <div class="section-heading">
            <span class="section-index" aria-hidden="true">02</span>
            <h2 id="skills-heading">Technical skills</h2>
          </div>
          <category-component />
        </section>

        <section class="projects-section" aria-labelledby="projects-heading">
          <div class="section-heading">
            <span class="section-index" aria-hidden="true">03</span>
            <h2 id="projects-heading">Self projects</h2>
          </div>
          <project-list />
        </section>

        <section class="education-section" aria-labelledby="education-heading">
          <div class="section-heading">
            <span class="section-index" aria-hidden="true">04</span>
            <h2 id="education-heading">Education</h2>
          </div>
          <periodic-action v-for="education in educations" :key="education.title" :action="education" />
        </section>

        <section class="languages-section" aria-labelledby="languages-heading">
          <h2 id="languages-heading">Languages</h2>
          <p>{{ languages.join(' · ') }}</p>
        </section>
      </aside>
    </div>

    <footer class="resume-footer">
      <span>{{ firstname }} {{ lastname }} <span aria-hidden="true">/</span> {{ position }}</span>
      <a :href="siteUrl">resume.mfarhang.ir <span class="no-print" aria-hidden="true">↗</span></a>
    </footer>
    <resume-print />
  </article>
</template>

<script>
import { mapState } from 'vuex'
import { site } from '~/site.config'

export default {
  name: 'IndexPage',
  data: () => ({ siteUrl: site.url }),
  head () {
    return {
      script: [{
        hid: 'profile-schema',
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': site.url + '#profile',
          url: site.url,
          name: site.title,
          description: site.description,
          inLanguage: 'en',
          mainEntity: {
            '@type': 'Person',
            '@id': site.url + '#person',
            name: this.firstname + ' ' + this.lastname,
            jobTitle: this.position,
            description: this.about,
            url: site.url,
            image: site.url + 'profile.jpg',
            sameAs: Object.values(this.contacts.links),
            alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Tehran' },
            knowsAbout: ['Backend development', 'Python', 'Django', 'PostgreSQL', 'Blockchain', 'Go programming fundamentals']
          }
        }
      }]
    }
  },
  computed: {
    ...mapState('resume', ['firstname', 'lastname', 'position', 'contacts', 'about', 'specialties', 'experiences', 'educations', 'languages'])
  }
}
</script>
