export default () => {
  return {
    firstname: 'Mahdi',
    lastname: 'Farhang',
    position: 'Software Engineer',
    contacts: {
      phone: null,
      email: 'mafarhang76@gmail.com',
      links: {
        linkedIn: 'https://www.linkedin.com/in/mahdi-farhang-bb3ab3202',
        telegram: 'https://t.me/lVIahdi',
        // instagram: 'https://www.instagram.com/mahdifarhang76',
        // twitter: 'https://twitter.com/The_Mahdi_',
        gitlab: 'https://gitlab.com/mahdifarhang',
        github: 'https://github.com/mahdifarhang'
      }
    },
    about: `As a ${Math.floor((new Date().getTime() - new Date(1998, 0, 27)) / (1000 * 60 * 60 * 24 * 365.25))}-year-old programmer, I have done my Bachelor's in computer engineering and have worked in the field as well.
      I have collaborated on many projects (college, vocational, or self-defined) both individually or as a member of the executive team.
      I have met many challenges along the way, and I guess the most important thing that I can tell about myself is the ability to solve challenges and tackle problems, and my unstoppable passion to take the further step and learn more all the time.`,
    experiences: [
      {
        organization: 'Nobitex',
        mainTitle: 'Software Engineer',
        positions: [
          {
            title: 'Blockchain Developer',
            period: {
              start: 'Jun 2025',
              end: 'Present'
            },
            summary: 'After working for three years in Exchange team, I joined the Blockchain team, where I worked for around six months and continue to work, contributing to critical architectural changes. I was trusted with high-impact, sensitive code, including redesigning the withdrawal infrastructure and integrating two new blockchain networks, with a strong focus on security, correctness, and reliability.'
          },
          {
            title: 'Backend Django Developer',
            period: {
              start: 'Jun 2022',
              end: 'Jun 2025'
            },
            summary: `I worked for nearly three years at Nobitex, Iran’s largest cryptocurrency exchange, as part of the Back Office engineering team, building and maintaining internal systems used across the company. Given the platform’s scale (11M+ users) and its financial nature, data accuracy, transaction integrity, and system reliability were critical at all times.
            I worked extensively with large-scale datasets (billions of records), designing and optimizing high-performance database queries and backend logic to deliver fast and reliable results under heavy load. The system was used by executives, finance, product, marketing, operations, and support teams, making fine-grained access control, permissions, and data sensitivity a core part of the architecture.
            In parallel, I was deeply involved in API design and development, implementing and improving multiple internal and user-facing services. Our main stack was Django and Django REST Framework, supported by Celery, Redis, and Celery Beat for asynchronous processing and scheduling. I also worked with ELK for logging, Prometheus and Grafana for monitoring, and Sentry for error tracking, contributing to the observability and stability of high-traffic production systems.`
          }
        ]
      },
      {
        organization: 'Mozhan Negar Parsian',
        mainTitle: 'ERP & Full-Stack Developer',
        positions: [
          {
            title: 'ERP Developer',
            period: {
              start: 'Oct 2022',
              end: 'Mar 2022'
            },
            summary: 'Worked on Odoo development and localization for Persian (Farsi), designing and implementing custom modules to address the needs of Iranian businesses. I developed modules for Iranian (Jalali) calendar support and a localized accounting system aligned with Iranian tax regulations.'
          },
          {
            title: 'Full-Stack Developer',
            period: {
              start: 'Aug 2020',
              end: 'Oct 2022'
            },
            summary: 'Worked on a Django-based internal production automation system for a scarf manufacturing company as part of a very little team, forcing us to fix every issue on our own. I was responsible for redesigning and reimplementing the entire production workflow, including printing, cutting, sewing, and outsourced processes.\nIn addition to operator usage, the system included detailed reporting modules for management to monitor production status and performance.'
          }
        ]
      }
    ],
    categories: [
      {
        name: 'Backend Web Development',
        skills: [
          {
            name: 'Django',
            percentage: 100
          },
          {
            name: 'DRF',
            percentage: 100
          },
          {
            name: 'FastAPI',
            percentage: 60
          }
        ],
        others: [
          'Flask'
        ]
      },
      {
        name: 'Frontend Web Development',
        skills: [
          {
            name: 'Vue',
            percentage: 70
          },
          {
            name: 'Nuxt.js',
            percentage: 70
          }
        ],
        others: [
          'jquery',
          'React / Next.js'
        ]
      },
      {
        name: 'Applications & Tools',
        skills: [],
        others: [
          'Linux',
          'Redis',
          'Sentry',
          'Grafana',
          'ELK Stack'
        ]
      },
      {
        name: 'Databases',
        skills: [
          {
            name: 'PostgreSQL',
            percentage: 90
          }
        ],
        others: [
          'MySql',
          'MongoDB',
          'Elasticsearch'
        ]
      },
      {
        name: 'General Skills',
        skills: [
          {
            name: 'Git',
            percentage: 100
          },
          {
            name: 'Docker / Docker Compose',
            percentage: 80
          },
          {
            name: 'Nginx',
            percentage: 70
          }
        ],
        others: [
          'Software Architecture',
          'Design Patterns',
          'Writing Tests',
          'Documentation',
          'Agile/Scrum'
        ]
      },
      {
        name: 'Programming Languages',
        skills: [
          {
            name: 'Python',
            percentage: 90
          },
          {
            name: 'Java Script',
            percentage: 70
          }
        ],
        others: [
          'Go',
          'Typescript',
          'C / C++',
          'Java',
          'Rust'
        ]
      },
      {
        name: 'Languages',
        skills: [
          {
            name: 'Persian',
            percentage: 100
          },
          {
            name: 'English',
            percentage: 80
          },
          {
            name: 'Arabic',
            percentage: 50
          }
        ],
        others: []
      }
    ],
    educations: [
      {
        title: 'Bachelor of Computer Engineering',
        period: {
          start: '2016',
          end: '2021'
        },
        institutionName: 'University of Tehran, Tehran'
      },
      {
        title: 'Diploma in Mathematics & Physics Discipline',
        period: {
          start: '2012',
          end: '2016'
        },
        institutionName: 'Alavi Highschool, Tehran',
        summary: 'Graduated from high school with a national university entrance exam rank of 221'
      }
    ]
  }
}
