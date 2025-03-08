'use client';

import React from 'react';

const JsonLd: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'A Plus Languages',
    alternateName: ['A+ Languages', 'Aplus Languages', 'A + Languages', 'APlusLanguages'],
    description: 'Professional online English and Spanish language lessons for individuals and businesses.',
    url: 'https://www.apluslanguages.eu',
    logo: '/images/aplus-logo.svg',
    sameAs: [
      'https://www.apluslanguages.eu',
      // Add your social media profiles here if you have any
      // 'https://facebook.com/apluslanguages',
      // 'https://linkedin.com/company/apluslanguages',
    ],
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
          name: 'A Plus Languages',
          alternateName: ['A+ Languages', 'Aplus Languages', 'A + Languages']
        },
        serviceType: ['Language Learning', 'Online Education'],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceType: 'Online',
          availableLanguage: ['English', 'Spanish']
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      suppressHydrationWarning={true}
    />
  );
};

export default JsonLd; 