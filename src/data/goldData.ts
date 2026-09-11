import { Product, KaratComparisonItem, Refinery, FAQItem } from '../types';

export const LIVE_SPOT_DATA = {
  pricePerGram24K: 139.39,
  pricePerOz24K: 4335.20,
  pricePerKg24K: 139390.00,
  currency: 'USD',
  lastUpdated: 'Live LBMA Fix · Daily Continuous',
  mineDirectMarkupPct: 2.2, // 1.5% - 3%
  brinksAirFreightPerKg: 1450,
  insuranceRatePct: 0.45,
};

export const PRODUCTS: Product[] = [
  {
    id: 'prod-24k-bars',
    slug: '24k-gold-bars-for-sale',
    name: '24K Pure Gold Bars (999.9 Fineness)',
    category: 'bars',
    karat: '24K',
    fineness: '999.9',
    purityPercent: 99.99,
    pricePerGramUsd: 139.39,
    unit: 'Per Gram',
    moq: '1 Kilogram (1,000g)',
    description: 'Our flagship investment bullion. LBMA-grade 24K pure gold bars sourced directly from accredited African refineries. Sized from 100g to 1kg cast ingots. Each bar bears unique serial numbering, refinery hallmark, and comes with accredited SGS or Bureau Veritas assay certificates.',
    fullSpecs: {
      grossWeight: '100g, 250g, 500g, 1,000g',
      dimensions: '117mm x 53mm x 9mm (1kg Standard Ingot)',
      packaging: 'CertiCard tamper-evident vacuum blister with matching serial certificate',
      assayDoc: 'Independent XRF & Fire Assay Certificate (SGS / Bureau Veritas)',
      origin: 'Uganda / Ghana / Tanzania / DRC licensed production',
      deliveryTerms: 'CIF Airport (Brinks/Malca-Amit) or FOB Kampala/Entebbe Vault',
    },
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: 'prod-1kg-kilobar',
    slug: '1kg-gold-bars-for-sale',
    name: '1 Kilogram Pure Gold Bar (Kilobar)',
    category: 'bars',
    karat: '24K',
    fineness: '999.9',
    purityPercent: 99.99,
    pricePerGramUsd: 139.39,
    unit: 'Per Bar (1000g)',
    moq: '1 Bar (1kg)',
    description: 'The global standard institutional store of wealth. Carrying the lowest fabrication premium per gram over LBMA spot. African direct-mine sourcing saves investors $5,000 to $13,000 per bar compared to Western retail bullion brokers.',
    fullSpecs: {
      grossWeight: '1,000.00 Grams (32.15 Troy Ounces)',
      dimensions: '117mm Length x 53mm Width x 8.8mm Thickness',
      packaging: 'Heavy-gauge security seal with QR-traceable provenance',
      assayDoc: 'Double-blind XRF Spectrometry + Wet Fire Assay Certificate',
      origin: 'Ministry of Energy and Mineral Development (MEMD) Registered Mines',
      deliveryTerms: 'Brinks Global Armored Cargo (Door-to-Vault or Airport Customs Clearing)',
    },
    image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80',
    badge: 'Lowest Premium',
    featured: true,
  },
  {
    id: 'prod-gold-dore',
    slug: 'gold-dore-bars-for-sale',
    name: 'African Gold Doré Bars (Semi-Refined)',
    category: 'dore',
    karat: '18K - 23K',
    fineness: '700 - 950',
    purityPercent: 88.5,
    pricePerGramUsd: 122.40,
    unit: 'Per Gram (Pure Content)',
    moq: '5 Kilograms',
    description: 'Direct smelted unrefined gold doré bars from regional artisanal mining partnerships in Uganda, DRC, and Tanzania. Designed for international refineries and mints with processing capabilities. Priced at competitive discounts below spot.',
    fullSpecs: {
      grossWeight: 'Bars ranging from 1kg to 5kg cast blocks',
      dimensions: 'Cast conical/trapezoidal bars',
      packaging: 'Steel-banded insured transit containers',
      assayDoc: 'Preliminary XRF Assay Report + Final Settlement at Destination Refinery',
      origin: 'Alluvial & hard-rock concessions (ICGLR Chain-of-Custody Tagged)',
      deliveryTerms: 'CIF International Refinery or Freezone Escrow Delivery',
    },
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    badge: 'Wholesale B2B',
    featured: true,
  },
  {
    id: 'prod-22k-bars',
    slug: '22k-gold-bars-for-sale',
    name: '22K Gold Bars (Jewellery Grade - 916)',
    category: 'bars',
    karat: '22K',
    fineness: '916.7',
    purityPercent: 91.67,
    pricePerGramUsd: 127.81,
    unit: 'Per Gram',
    moq: '1 Kilogram',
    description: 'Specifically engineered for the high-end jewellery markets of Dubai, Mumbai, Singapore, and Istanbul. Contains 91.67% pure gold balanced with fine copper and silver alloys to ensure optimum metallurgical ductility and rich warm luster.',
    fullSpecs: {
      grossWeight: '500g and 1,000g Ingots',
      dimensions: 'Standard commercial cast bar format',
      packaging: 'Export grade vacuum sealed packing',
      assayDoc: 'Certified 916 Hallmarked Assay Sheet',
      origin: 'Kampala Refined Direct Output',
      deliveryTerms: 'CIF Dubai (DXB), London (LHR), Zurich (ZRH), Mumbai (BOM)',
    },
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
    badge: 'Jewellery Standard',
    featured: true,
  },
  {
    id: 'prod-1oz-minted',
    slug: '1-oz-gold-bar-for-sale',
    name: '1 Troy Ounce Gold Minted Bar (31.1g)',
    category: 'bars',
    karat: '24K',
    fineness: '999.9',
    purityPercent: 99.99,
    pricePerGramUsd: 139.39,
    unit: 'Per Bar (31.103g)',
    moq: '10 Bars (311g total)',
    description: 'The ultimate liquid private wealth bullion format. Recognized universally across all international exchanges and bullion dealers. Produced with mirror-finish proof minting and micro-engraved security anti-counterfeit ridges.',
    fullSpecs: {
      grossWeight: '31.1035 Grams (Exact 1.000 Troy Ounce)',
      dimensions: '41.6mm x 24.6mm x 1.7mm',
      packaging: 'Tamper-resistant blister pack with individual QR authentication',
      assayDoc: 'Assayer-signed blister certificate',
      origin: 'LBMA Compliant Partner Refineries in Africa',
      deliveryTerms: 'Worldwide Insured Courier or Air Freight',
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    badge: 'Global Standard',
    featured: true,
  },
  {
    id: 'prod-nuggets',
    slug: 'buy-gold-nuggets-from-africa',
    name: 'Natural African Gold Nuggets',
    category: 'nuggets',
    karat: '21K - 23K',
    fineness: '880 - 960',
    purityPercent: 92.0,
    pricePerGramUsd: 145.00,
    unit: 'Per Gram',
    moq: '500 Grams',
    description: 'Pristine, untouched natural placer gold nuggets dredged from the rich river basins of Karamoja (Uganda), Geita (Tanzania), and Kivu (DRC). Valued by collectors, museum curators, and luxury artisan jewelers for their geological uniqueness.',
    fullSpecs: {
      grossWeight: 'Assorted lots from 2g individual nuggets up to 250g specimens',
      dimensions: 'Natural organic shapes and crystallization patterns',
      packaging: 'Velvet-lined display vaults with provenance documentation',
      assayDoc: 'Density & XRF Purity Profile Certifications',
      origin: 'Ethical alluvial cooperatives with environmental restoration programs',
      deliveryTerms: 'Insured Armored Freight',
    },
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    badge: 'Collector Grade',
    featured: true,
  },
];

export const PURITY_COMPARISON_DATA: KaratComparisonItem[] = [
  {
    karat: '24 Karat',
    fineness: '999.9',
    purityPercent: '99.99%',
    pricePerGram: 139.39,
    pricePerKg: 139390,
    bestFor: 'Institutional Reserves, Central Banks, Bullion Investors',
    deliveryFormat: '1kg Kilobars, 100g Minted, 1 Troy Oz',
    isPopular: true,
  },
  {
    karat: '22 Karat',
    fineness: '916.7',
    purityPercent: '91.67%',
    pricePerGram: 127.81,
    pricePerKg: 127810,
    bestFor: 'High-end Jewellery Manufacturing, Asian/Middle-East Markets',
    deliveryFormat: 'Cast Bars, Granules, Sawn Ingots',
  },
  {
    karat: '18 Karat',
    fineness: '750.0',
    purityPercent: '75.00%',
    pricePerGram: 104.54,
    pricePerKg: 104540,
    bestFor: 'Western Fine Jewellery, Watchmaking, Durable Ornaments',
    deliveryFormat: 'Alloyed Cast Bars, Minted Stock',
  },
  {
    karat: '14 Karat',
    fineness: '585.0',
    purityPercent: '58.50%',
    pricePerGram: 81.54,
    pricePerKg: 81540,
    bestFor: 'Commercial Everyday Jewellery, Maximum Durability',
    deliveryFormat: 'Alloyed Bars & Sheet Metal',
  },
  {
    karat: '10 Karat',
    fineness: '417.0',
    purityPercent: '41.70%',
    pricePerGram: 58.12,
    pricePerKg: 58120,
    bestFor: 'Budget Fashion Retail, High Wear Resistance',
    deliveryFormat: 'Master Alloys & Cast Ingots',
  },
];

export const REFINERIES_DATA: Refinery[] = [
  {
    name: 'African Gold Refinery (AGR)',
    city: 'Entebbe',
    country: 'Uganda',
    capacityPerDay: '300 Kilograms / Day (~1 Tonne/Week)',
    accreditation: ['ISO 9001:2015', 'DGSM Certified', 'OECD Responsible Mineral Compliant'],
    status: 'Active',
    description: 'Located adjacent to Entebbe International Airport inside the Free Trade Zone, AGR was the first large-scale greenfield gold refinery established in East Africa. Equipped with modern induction melting furnaces, aqua regia chemical refining lines, and automated assay robotics.',
    services: ['Aqua Regia Refining to 999.9', 'Automated Bar Minting', 'Direct Airport Tarmac Vaulting', 'Fire Assay & ICP-OES Analysis']
  },
  {
    name: 'Simba Gold Refinery Ltd',
    city: 'Kampala',
    country: 'Uganda',
    capacityPerDay: '150 Kilograms / Day',
    accreditation: ['Uganda Mining Cadastre Registered', 'SGS Assayed Testing Partner'],
    status: 'Licensed',
    description: 'Headquartered in central Kampala, Simba Gold Refinery processes regional alluvial doré from artisanal cooperatives across Western Uganda and the Great Lakes Region into commercial grade 999 and 916 bullion.',
    services: ['Doré Smelting & Homogenization', 'XRF Spectrometry', 'Commercial Export Packaging', 'Custom Weight Bar Casting']
  },
  {
    name: 'Victoria Gold Star Refinery',
    city: 'Kampala',
    country: 'Uganda',
    capacityPerDay: '100 Kilograms / Day',
    accreditation: ['Ministry of Energy and Mineral Development Licensed', 'ICGLR Certified'],
    status: 'Government Approved',
    description: 'Specializing in conflict-free artisanal mineral aggregation, Victoria Gold Star provides complete chain-of-custody tracking from mine shaft to export crate, compliant with the Kimberley Process model and OECD guidelines.',
    services: ['Mineral Traceability Tagging', 'Smelting & Fire Assaying', 'Depository Storage', 'Tax & Customs Documentation Clearance']
  },
  {
    name: 'Metal Testing & Assaying Lab (MTL)',
    city: 'Entebbe & Kampala',
    country: 'Uganda',
    capacityPerDay: '200+ Assays / Day',
    accreditation: ['ISO/IEC 17025 Accredited Laboratory', 'Independent Third-Party'],
    status: 'Active',
    description: 'The premier independent third-party metallurgic testing facility in Uganda. Utilized by international buyers for pre-shipment double verification via wet chemical analysis, gravimetric cupellation, and dual-source X-ray fluorescence.',
    services: ['Live Video Witnessed XRF', 'Gravimetric Fire Assay', 'ICP Trace Element Profiling', 'Digital Vault Certificate Issuance']
  }
];

export const DESTINATION_HUBS = [
  {
    flag: '🇺🇸',
    country: 'United States',
    hubAirport: 'JFK (New York) / MIA (Miami) / IAH (Houston)',
    customsNotes: 'Duty-Free Import for Pure Bullion (HS Code 7108.12). CBP 7501 Declaration & Certificate of Origin included.',
    transitTime: '4 - 6 Business Days via Brinks Air Courier'
  },
  {
    flag: '🇦🇪',
    country: 'UAE / Dubai',
    hubAirport: 'DXB (Dubai International) / DWC',
    customsNotes: '0% Tax & 0% VAT inside DMCC Free Zone. Direct transfer to Transguard / Brinks Almas Tower Depository.',
    transitTime: '2 - 3 Business Days Direct Flight'
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    hubAirport: 'LHR (London Heathrow)',
    customsNotes: 'VAT-Exempt Investment Gold under HMRC Notice 701/21. Sourced to LBMA-compliant Good Delivery guidelines.',
    transitTime: '3 - 5 Business Days'
  },
  {
    flag: '🇩🇪',
    country: 'Germany / European Union',
    hubAirport: 'FRA (Frankfurt) / ZRH (Zurich)',
    customsNotes: 'EU Regulation 2017/821 compliant supply chain due diligence documentation provided with every parcel.',
    transitTime: '3 - 5 Business Days'
  },
  {
    flag: '🇨🇦',
    country: 'Canada',
    hubAirport: 'YYZ (Toronto Pearson)',
    customsNotes: 'GST/HST Zero-Rated precious metals bullion. Pre-cleared via CBSA compliant commercial invoices.',
    transitTime: '4 - 6 Business Days'
  },
  {
    flag: '🇨🇳',
    country: 'Hong Kong & China',
    hubAirport: 'HKG (Hong Kong International)',
    customsNotes: 'Duty-free bullion gateway to mainland Chinese institutional liquidity. Direct delivery to Malca-Amit HK Vault.',
    transitTime: '3 - 5 Business Days'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How are your gold bar prices calculated and how do you offer mine-direct discounts?',
    answer: 'Our pricing tracks the real-time London Bullion Market Association (LBMA) spot rate with a nominal refinery markup of only 1.5% to 3.0%. Unlike Western retail coin shops and brokers who mark up 6% to 12% over spot, we maintain direct contracts with licensed mining cooperatives and primary refiners in Uganda, Ghana, and Tanzania, eliminating secondary intermediary margins.',
    category: 'pricing'
  },
  {
    question: 'What is the step-by-step verification process before I transfer funds?',
    answer: 'We operate a strict, fraud-proof transaction protocol: 1) You issue a formal Letter of Intent (LOI) or request a Soft Corporate Offer (SCO); 2) We issue an official Proforma Invoice with bar serials; 3) We conduct a scheduled live video XRF assay test on your exact consignment via WhatsApp or Zoom; 4) Payment is transferred via MT103 bank wire or held in verified bank escrow; 5) The shipment is handed over to Brinks or Malca-Amit for armored transit.',
    category: 'compliance'
  },
  {
    question: 'How is international shipping handled and is the cargo insured?',
    answer: 'All international consignments are transported by Brinks Global Services or Malca-Amit Armored Air Logistics with 100% full-value insurance coverage. Shipments are packed in tamper-evident steel containers with high-security seals, accompanied by real-time GPS tracking codes from vault dispatch to destination customs handover.',
    category: 'shipping'
  },
  {
    question: 'Can I visit your offices and refineries in Kampala, Uganda?',
    answer: 'Yes, absolutely. We welcome verified prospective buyers and their legal/metallurgical representatives to our executive headquarters on Kajokya Street, Kamokya, Kampala. We facilitate facility inspections, on-site fire assays, and private boardroom contract signings following standard KYC compliance onboarding.',
    category: 'compliance'
  },
  {
    question: 'What documents are required to clear gold through international customs?',
    answer: 'Each shipment leaves Entebbe International Airport with a comprehensive legal clearance dossier including: 1) Commercial Proforma & Final Invoices; 2) Certificate of Origin from the Chamber of Commerce; 3) Mineral Export Permit issued by the Ministry of Energy & Mineral Development (MEMD); 4) Independent Laboratory Assay Certificate (SGS / Bureau Veritas); 5) Airway Bill (AWB); and 6) Proof of Paid Royalty & Customs Duty Receipts.',
    category: 'compliance'
  },
  {
    question: 'What is the difference between purchasing 24K Minted Bars versus Unrefined Gold Doré?',
    answer: '24K Minted Bars (999.9 purity) are investment-ready, hallmarked bullion suitable for immediate bank vaulting, treasury reserves, and private portfolios. Gold Doré is semi-refined raw mine output (typically 80%–92% gold content) designed specifically for commercial smelters and refiners seeking bulk discounts who can perform secondary chemical purification in their own jurisdictions.',
    category: 'assay'
  }
];
