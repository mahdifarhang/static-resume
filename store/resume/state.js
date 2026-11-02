export default () => ({
  firstname: 'Mahdi',
  lastname: 'Farhang',
  position: 'Software Engineer',
  contacts: {
    phone: null,
    email: 'mafarhang76@gmail.com',
    links: {
      LinkedIn: 'https://www.linkedin.com/in/mahdi-farhang-bb3ab3202',
      GitHub: 'https://github.com/mahdifarhang',
      GitLab: 'https://gitlab.com/mahdifarhang',
      Telegram: 'https://t.me/lVIahdi'
    }
  },
  about: 'I’m a software engineer who enjoys understanding a problem end to end and turning it into useful, maintainable software. I’ve worked on backend services, full-stack applications, and business automation, from small-team projects to large production systems. Python, Django, and PostgreSQL are my main tools. I like digging into difficult bugs, improving how systems work, and learning new tools when a problem calls for them.',
  specialties: ['Python & Django', 'API design & integration', 'PostgreSQL & query optimization'],
  experiences: [
    {
      organization: 'Nobitex',
      mainTitle: 'Cryptocurrency exchange',
      period: { start: 'Jun 2022', end: 'Present' },
      positions: [
        {
          title: 'Blockchain Developer',
          period: { start: 'Jun 2025', end: 'Present' },
          summary: 'Moved into the Blockchain team after three years in backend engineering, contributing to critical infrastructure and architectural changes.',
          highlights: [
            'Contributed to the redesign of withdrawal infrastructure, with a focus on transaction correctness, security, and reliability.',
            'Integrated two new blockchain networks and worked on sensitive, high-impact production code.'
          ],
          technologies: ['Blockchain', 'Withdrawal systems', 'System design']
        },
        {
          title: 'Backend Django Developer',
          period: { start: 'Jun 2022', end: 'Jun 2025' },
          summary: 'Built and maintained Back Office services used by finance, operations, product, marketing, support, and executive teams.',
          highlights: [
            'Designed and optimized PostgreSQL queries and backend logic over datasets containing billions of records.',
            'Developed internal and user-facing APIs with Django and Django REST Framework, implementing fine-grained access controls for sensitive financial data.',
            'Built asynchronous tasks and scheduled workflows with Celery, Redis, and Celery Beat.',
            'Supported production observability with ELK, Prometheus, Grafana, and Sentry to investigate issues and improve service reliability.'
          ],
          technologies: ['Python', 'Django / DRF', 'PostgreSQL', 'Celery', 'Redis']
        }
      ]
    },
    {
      organization: 'Mozhan Negar Parsian',
      mainTitle: 'ERP & production automation',
      // Overall company dates from the original resume (commit b3ccd2f).
      // Individual role dates are unconfirmed, so they are intentionally omitted.
      period: { start: 'Aug 2020', end: 'Mar 2022' },
      positions: [
        {
          title: 'ERP Developer',
          highlights: [
            'Developed and localized Odoo modules for Iranian businesses, including Jalali calendar support and accounting workflows aligned with local tax requirements.'
          ],
          technologies: ['Python', 'Odoo']
        },
        {
          title: 'Full-Stack Developer',
          highlights: [
            'Redesigned and implemented a Django-based manufacturing workflow covering printing, cutting, sewing, and outsourced production.',
            'Worked across the stack in a small team, building operator tools and management reports for tracking production status and performance.'
          ],
          technologies: ['Django', 'Production workflows', 'Reporting']
        }
      ]
    }
  ],
  categories: [
    {
      name: 'Languages & backend',
      skills: ['Python', 'Django', 'Django REST Framework', 'Celery', 'FastAPI'],
      familiar: ['Go (Golang)', 'Flask']
    },
    {
      name: 'Data & storage',
      skills: ['PostgreSQL', 'SQL', 'Redis', 'Elasticsearch'],
      familiar: ['MySQL', 'MongoDB']
    },
    {
      name: 'Infrastructure & observability',
      skills: ['Docker / Compose', 'Linux', 'Git', 'Nginx', 'Prometheus', 'Grafana', 'Sentry', 'ELK Stack']
    },
    {
      name: 'Engineering',
      skills: ['API design', 'Software architecture', 'Design patterns', 'Testing', 'Documentation', 'Agile / Scrum']
    },
    {
      name: 'Frontend',
      skills: ['JavaScript', 'Vue.js', 'Nuxt.js'],
      familiar: ['TypeScript', 'React / Next.js']
    }
  ],
  projects: [
    {
      name: 'Norbitrage',
      type: 'Arbitrage system',
      status: 'In development',
      summary: 'A personal arbitrage system for collecting market data, identifying opportunities, and tracking orders.',
      highlights: [
        'Built the initial system in Python and Django, with Celery and Redis for background processing.',
        'Gradually moving components to Go, with working parts of the system now implemented in both Python and Go.'
      ],
      technologies: ['Python', 'Go (Golang)', 'Django', 'Celery', 'Redis']
    }
  ],
  languages: ['Persian', 'English', 'Arabic'],
  educations: [
    {
      title: 'B.Sc. in Computer Engineering',
      period: { start: '2016', end: '2021' },
      institutionName: 'University of Tehran'
    },
    {
      title: 'Diploma in Mathematics & Physics',
      period: { start: '2012', end: '2016' },
      institutionName: 'Alavi High School, Tehran',
      summary: 'National university entrance exam rank: 221.'
    }
  ]
})
