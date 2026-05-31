export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Claudia González - Psicóloga General Sanitaria',
    description: 'Psicóloga especializada en terapia online para adultos, adolescentes y familias',
    image: 'https://cgapsicologia.com/cgapsicologia.png',
    url: 'https://cgapsicologia.com',
    telephone: '+34682638679',
    email: 'info@cgapsicologia.com',
    priceRange: '€€',
    areaServed: 'ES',
    serviceType: [
      'Terapia individual adultos',
      'Asesoramiento familiar',
      'Terapia adolescentes',
    ],
    knowsAbout: [
      'Psicología clínica',
      'Terapia cognitivo-conductual',
      'Mindfulness',
      'Terapia de aceptación y compromiso',
      'Teoría del apego',
    ],
    founder: {
      '@type': 'Person',
      name: 'Claudia González Álvarez',
      jobTitle: 'Psicóloga General Sanitaria',
    },
    sameAs: [
      'https://www.linkedin.com/in/claudia-gonzalez-psicologia',
      'https://www.instagram.com/cgapsicologia',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
