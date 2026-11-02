export const personalSite = process.env.RESUME_PERSONAL === 'true'
const host = personalSite ? 'moments.mfarhang.ir' : 'resume.mfarhang.ir'

export const site = {
  host,
  url: `https://${host}/`,
  professionalUrl: 'https://resume.mfarhang.ir/',
  name: 'Mahdi Farhang',
  title: 'Mahdi Farhang | Software Engineer',
  description: 'Mahdi Farhang, software engineer working with Python, Django, and PostgreSQL. Experience in backend services, full-stack applications, and business automation.',
  image: `https://${host}/social-preview.png`,
  robots: personalSite ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
  imageAlt: 'Mahdi Farhang — Software Engineer. Backend development, full-stack applications, and business automation.'
}
