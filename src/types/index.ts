export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'bars' | 'dore' | 'nuggets' | 'dust' | 'coins';
  karat: string;
  fineness: string;
  purityPercent: number;
  pricePerGramUsd: number;
  unit: string;
  moq: string;
  description: string;
  fullSpecs: {
    grossWeight: string;
    dimensions?: string;
    packaging: string;
    assayDoc: string;
    origin: string;
    deliveryTerms: string;
  };
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  productType: string;
  quantityKg: number;
  deliveryTerm: 'CIF' | 'FOB';
  destinationAirport: string;
  message?: string;
}

export interface Refinery {
  name: string;
  city: string;
  country: string;
  capacityPerDay: string;
  accreditation: string[];
  status: 'Active' | 'Licensed' | 'Government Approved';
  description: string;
  services: string[];
}

export interface KaratComparisonItem {
  karat: string;
  fineness: string;
  purityPercent: string;
  pricePerGram: number;
  pricePerKg: number;
  bestFor: string;
  deliveryFormat: string;
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'pricing' | 'compliance' | 'shipping' | 'assay';
}
