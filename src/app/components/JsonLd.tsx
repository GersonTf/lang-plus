export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Aplus Languages',
    description: 'Expert online English and Spanish language classes',
    url: 'https://www.apluslanguages.eu',
    logo: 'https://www.apluslanguages.eu/images/aplusenglishLogo.jpg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EU'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      description: 'Free consultation available'
    },
    '@graph': [
      {
        '@type': 'Service',
        name: 'Online Language Classes',
        description: 'Professional online English and Spanish classes available worldwide',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Aplus Languages'
        },
        serviceType: ['Language Learning', 'Online Education'],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceType: 'Online',
          availableLanguage: ['English', 'Spanish']
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 