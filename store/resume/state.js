export default () => {
  return {
    firstname: 'Mahdi',
    lastname: 'Farhang',
    position: 'Fullstack Developer',
    contacts: {
      phone: '+989127234910',
      email: 'mafarhang76@gmail.com',
      links: {
        linkedIn: 'https://www.linkedin.com/in/mahdi-farhang-bb3ab3202',
        telegram: 'https://t.me/lVIahdi',
        // instagram: 'https://www.instagram.com/mahdifarhang76',
        gitlab: 'https://gitlab.com/mahdifarhang',
        github: 'https://github.com/mahdifarhang',
        twitter: 'https://twitter.com/The_Mahdi_'
      }
    },
    about: 'As a 24-year-old programmer, I have done my Bachelor\'s in computer engineering and have worked in the field as well. I have collaborated on many projects (college, vocational, or self-defined) both individually or as a member of the executive team. I have met many challenges along the way, and I guess the most important thing that I can tell about myself is the ability to solve challenges and tackle problems, and my unstoppable passion to take the further step and learn more all the time.',
    // about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    categories: [
      {
        name: 'Programming Languages',
        skills: [
          {
            name: 'C / C++',
            percentage: 70
          },
          {
            name: 'Python',
            percentage: 90
          },
          {
            name: 'Java Script',
            percentage: 70
          },
          {
            name: 'Java',
            percentage: 60
          },
          {
            name: 'Verilog',
            percentage: 50
          }
        ],
        others: [
          'Rust',
          'PHP',
          'Typescript',
          'Visual Basics'
        ]
      },
      {
        name: 'Backend Web Development',
        skills: [
          {
            name: 'Django',
            percentage: 80
          },
          {
            name: 'DRF',
            percentage: 90
          }
        ],
        others: [
          'Flask',
          'FastAPI',
          'Laravel',
          'Spring'
        ]
      },
      {
        name: 'Frontend Web Development',
        skills: [
          {
            name: 'Vue.js',
            percentage: 70
          },
          {
            name: 'Nuxt.js',
            percentage: 60
          },
          {
            name: 'HTML / CSS',
            percentage: 60
          }
        ],
        others: [
          'jquery',
          'React'
        ]
      },
      {
        name: 'Databases',
        skills: [
          {
            name: 'SQL',
            percentage: 80
          }
        ],
        others: [
          'PostgresQL',
          'MySql',
          'MongoDB',
          'Redis',
          'ElasticSearch'
        ]
      },
      {
        name: 'General Skills',
        skills: [
          {
            name: 'Agile / Scrum',
            percentage: 60
          },
          {
            name: 'Git',
            percentage: 90
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
          'Team Work',
          'Documentation'
        ]
      },
      {
        name: 'Applications & Tools',
        skills: [],
        others: [
          'Linux',
          'System Administration',
          'Jetbrains IDEs',
          'Jira',
          'JupyterLab'
        ]
      },
      {
        name: 'Languages',
        skills: [
          {
            name: 'English',
            percentage: 80
          },
          {
            name: 'Persian',
            percentage: 100
          }
        ],
        others: []
      }
    ],
    experiences: [
      {
        title: 'ERP & Full-Stack Developer',
        period: {
          start: 'Aug 2020',
          end: 'Mar 2022'
        },
        institutionName: 'Mozhan Negar Parsian'
      },
      {
        title: 'C++ Internship',
        period: {
          start: 'Jun 2018',
          end: 'Oct 2018'
        },
        institutionName: 'Noor Co.'
      }
    ],
    educations: [
      {
        title: 'Bachelor of Computer Engineering',
        period: {
          start: '2016',
          end: '2022'
        },
        institutionName: 'University of Tehran, Tehran'
      },
      {
        title: 'Diploma in Mathematics & Physics Discipline',
        period: {
          start: '2012',
          end: '2016'
        },
        institutionName: 'Alavi Highschool, Tehran'
      }
    ]
  }
}
