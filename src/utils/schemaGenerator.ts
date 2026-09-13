/**
 * Structured Data (JSON-LD) generators conforming to Schema.org and Google Search Console Rich Snippets guidelines
 */

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'FinancialService', 'WholesaleStore'],
  '@id': 'https://www.goldafric.com/#organization',
  name: 'Gold Africa',
  legalName: 'Gold Africa Company Limited',
  alternateName: 'Gold Africa Bullion Trading',
  url: 'https://www.goldafric.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.goldafric.com/gold-africa-logo.png',
    width: 600,
    height: 180,
  },
  image: 'https://www.goldafric.com/gold-africa-logo.png',
  description:
    'Gold Africa is a premier licensed African gold trading and export enterprise connecting international bullion investors, mints, and refiners with certified 24K pure gold bars, unrefined gold doré, and natural nuggets sourced directly from accredited mining concessions in Uganda and East Africa.',
  telephone: '+256762079775',
  email: 'info@goldafric.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lubowa, Entebbe Road',
    addressLocality: 'Kampala',
    addressRegion: 'Central Region',
    addressCountry: 'UG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '0.2458',
    longitude: '32.5644',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$$$',
  currenciesAccepted: 'USD, EUR, GBP, AED',
  paymentAccepted: 'Bank Wire Transfer (SWIFT MT103), Bank Escrow',
  taxID: '80020000702132',
  knowsAbout: [
    'Physical Gold Bullion Trading',
    'Gold Dore Refining',
    'LBMA Good Delivery Standards',
    'XRF Assay Spectrometry',
    'ICGLR Conflict-Free Traceability',
    'Armored Precious Metals Air Cargo',
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Worldwide',
  },
});

export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.goldafric.com/#website',
  url: 'https://www.goldafric.com',
  name: 'Gold Africa',
  description: 'Buy Certified 24K Gold Bars, Doré & Bullion Direct from African Refineries',
  publisher: {
    '@id': 'https://www.goldafric.com/#organization',
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.goldafric.com/products?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  slug: string;
  pricePerGramUsd: number;
  karat: string;
  fineness: string;
  moq: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  category: 'Bullion & Investment Precious Metals',
  sku: `GA-${product.slug.toUpperCase()}`,
  mpn: `GA-GOLD-${product.karat}`,
  brand: {
    '@type': 'Brand',
    name: 'Gold Africa',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Gold Africa Refinery Network',
  },
  material: `Gold (${product.karat} / ${product.fineness} Fineness)`,
  offers: {
    '@type': 'Offer',
    url: `https://www.goldafric.com/${product.slug}`,
    priceCurrency: 'USD',
    price: product.pricePerGramUsd.toFixed(2),
    priceValidUntil: '2026-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Gold Africa',
    },
    eligibleQuantity: {
      '@type': 'QuantitativeValue',
      value: product.moq,
    },
  },
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (crumbs: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url.startsWith('http') ? crumb.url : `https://www.goldafric.com${crumb.url}`,
  })),
});

export const generateArticleSchema = (article: {
  title: string;
  subtitle?: string;
  metaDescription: string;
  featuredImage: string;
  author: string;
  date: string;
  slug: string;
  category: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': ['Article', 'NewsArticle'],
  headline: article.title,
  description: article.metaDescription,
  image: [article.featuredImage],
  datePublished: '2026-05-01T08:00:00+03:00',
  dateModified: '2026-09-13T08:00:00+03:00',
  author: {
    '@type': 'Organization',
    name: 'Gold Africa Trading Intelligence Desk',
    url: 'https://www.goldafric.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Gold Africa',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.goldafric.com/gold-africa-logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://www.goldafric.com/${article.slug}`,
  },
  articleSection: article.category,
  keywords: [
    'Gold Trading Africa',
    'Uganda Gold Exporters',
    'African Gold Bullion',
    'Gold Dore Refining',
    'LBMA Standards',
    'Precious Metals Sourcing',
  ],
});
