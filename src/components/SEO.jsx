import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://sudharakapathiraja.me' // ← replace with your real domain
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`  // ← add a 1200×630 og image to /public

const SEO = ({
  title = 'Sudharaka Pathiraja | Associate Software Engineer',
  description = 'Associate Software Engineer specialising in full-stack development, Java, React, Spring Boot, and cloud technologies. Based in Sri Lanka.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}) => {
  const canonical = `${BASE_URL}${path}`

  // Person schema — tells Google who this site is about
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sudharaka Pathiraja',
    url: BASE_URL,
    jobTitle: 'Associate Software Engineer',
    description,
    image: DEFAULT_IMAGE,
    sameAs: [
      'https://www.linkedin.com/in/sudharaka-pathiraja-10646820b/',
      'https://github.com/Sudharaka200',
      'https://www.instagram.com/__su.zx/',
    ],
    knowsAbout: [
      'Java', 'Python', 'JavaScript', 'React.js', 'Spring Boot',
      'Node.js', 'MySQL', 'Firebase', 'Docker', 'AWS',
      'Full-Stack Development', 'Software Engineering',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'National Institute of Business Management (NIBM)',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK',
    },
  }

  return (
    <Helmet>
      {/* ── Primary ── */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Sudharaka Pathiraja" />
      <meta
        name="keywords"
        content="Sudharaka Pathiraja, Associate Software Engineer, Full Stack Developer, React Developer, Java Developer, Spring Boot, Sri Lanka Software Engineer, NIBM, Portfolio"
      />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#06070f" />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={type} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"   content="Sudharaka Pathiraja – Associate Software Engineer" />
      <meta property="og:site_name"   content="Sudharaka Pathiraja" />
      <meta property="og:locale"      content="en_US" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />
      <meta name="twitter:creator"     content="@sudharaka200" />

      {/* ── Person structured data ── */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  )
}

export default SEO