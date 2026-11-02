# Mahdi Farhang — Resume

A static Nuxt 2 / Vue 2 resume for https://resume.mfarhang.ir/.

## Development

Dependencies use Yarn 3 (the version is pinned in `package.json`).

```sh
yarn install
yarn dev
```

## Generate and deploy

```sh
yarn generate
```

Deploy the **entire contents of `dist/`** to the existing resume web root.
The repository's Nginx configuration serves it from
`/var/www/mfarhang.ir/html`. No new hosting provider is required.

Static generation is required: it puts the resume, social tags, and JSON-LD
in the initial HTML so search engines and messaging crawlers can read them
without running JavaScript.

## Content and appearance

- `store/resume/state.js`: biography, work history, skills, self projects, education, and contacts.
- `site.config.js`: canonical URL, search description, and social preview metadata.
- `assets/resume.css`: responsive dark and light themes.
- `components/ResumePrint.vue` and `assets/print.css`: a dedicated two-page A4
  resume that inherits the selected dark or light theme. Page one contains the
  profile, contacts, and experience; page two contains skills, self projects,
  and education. The page background extends to the paper edges; content has
  internal padding. Zero page margins suppress the browser date/title furniture.
  Use **Print / PDF** at the bottom of the page to save a PDF. The stylesheet
  requests exact colors; if a browser suppresses backgrounds, enable its
  **Background graphics** print option.
- `static/social-preview.png`: 1200 × 630 social preview image.
- `static/robots.txt` and `static/sitemap.xml`: crawler discovery.

Go appears under **Also familiar with** alongside other skills. The **Self projects**
section describes Norbitrage, initially developed in Python and now being
incrementally migrated, with working components in both Python and Go.
Professional blockchain work is not described as Go work.
The Mozhan Negar Parsian company dates use the original resume's
August 2020–March 2022 range (commit `b3ccd2f`); individual role dates
are omitted because the later dates were inconsistent.

## Link previews and SEO

The page includes a canonical URL, title and description, Open Graph tags,
Twitter card tags, and ProfilePage/Person structured data. The preview
image is a local PNG served through an absolute HTTPS URL.

After deployment, check these public URLs:

- https://resume.mfarhang.ir/
- https://resume.mfarhang.ir/social-preview.png
- https://resume.mfarhang.ir/robots.txt
- https://resume.mfarhang.ir/sitemap.xml

Telegram must be able to fetch both the page and image without login or a
bot challenge. Existing messages or URLs may keep a cached preview; if you
still see an old one after deployment, test a fresh share URL such as
`https://resume.mfarhang.ir/?preview=2`. The canonical URL stays unchanged.
Preview display is ultimately controlled by the client and its cache.

If the public domain changes, update `site.config.js`, `robots.txt`,
`sitemap.xml`, the footer label in `pages/index.vue`, and the image generator.

To regenerate the code-drawn social image (optional, requires Python and Pillow):

```sh
python3 scripts/generate-social-preview.py
```

The generated image is committed; Python is not needed to build or serve the site.

References: [Open Graph](https://ogp.me/) and
[Google's profile-page structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/profile-page).
