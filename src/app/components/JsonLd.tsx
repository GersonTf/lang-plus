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
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What languages do you teach?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer professional online English and Spanish language lessons.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are the lessons one-on-one or in groups?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We provide personalized one-on-one lessons to ensure maximum focus on your specific learning needs.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does online language learning work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our online lessons use modern interactive tools like Google Meet and Miro boards to create an engaging learning environment that is as effective as in-person teaching.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you offer a free consultation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we offer a free consultation to discuss your language learning goals and create a personalized plan.'
            }
          }
        ]
      },
      {
        '@type': 'WebSite',
        name: 'A Plus Languages',
        url: 'https://www.apluslanguages.eu',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.apluslanguages.eu/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
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