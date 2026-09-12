import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';
import { SEO } from '../components/SEO';
import { generateOrganizationSchema, generateWebSiteSchema, generateFAQSchema } from '../utils/schemaGenerator';
import { FAQ_ITEMS } from '../data/goldData';

interface HomePageProps {
  onOpenQuoteModal: (productSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [quoteName, setQuoteName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteCountry, setQuoteCountry] = useState('');
  const [quoteMessage, setQuoteMessage] = useState('');
  const [quoteSent, setQuoteSent] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSent(true);
  };

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateOrganizationSchema(),
      generateWebSiteSchema(),
      generateFAQSchema(FAQ_ITEMS.slice(0, 4)),
    ],
  };

  return (
    <div>
      <SEO
        title="Gold Africa | Buy 24K Gold Bars, Doré & Bullion Direct from Africa"
        description="Gold Africa (Reg: 80020000702132) connects serious international investors with certified 24K pure gold bars, unrefined doré, and bullion direct from African mines with live LBMA pricing, SGS assays, and Brinks insured delivery."
        canonical="/"
        keywords="buy gold in africa, african gold bullion, uganda gold exporters, kampala gold refinery, gold trading companies in africa, raw gold dore bars uganda, 24k gold bars for sale, buy gold direct from mine africa, gold export permits uganda, lbma gold bars africa, 1kg gold bar price, brinks insured gold shipping"
        schema={homeSchema}
      />
      {/* ════════════════════════════════
           HERO
      ════════════════════════════════ */}
      <section className="hero" aria-label="Gold Africa hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-veil" aria-hidden="true"></div>

        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Africa's Most Trusted Gold Bar Supplier
            </div>

            <h1>
              Buy <em>Pure Gold Bars</em><br />
              Direct from Africa
            </h1>

            <p className="hero-sub">
              Gold Africa connects serious investors and businesses worldwide with certified <strong style={{ color: '#fff' }}>24K, 22K, and 18K gold bars</strong>, gold nuggets, gold dust, and dore bars — sourced directly from Africa's richest mines with full assay documentation and insured global delivery.
            </p>

            <div className="hero-actions">
              <Link to="/gold-bars-for-sale" className="btn btn-gold">
                🪙 View Gold Bars for Sale
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Get a Free Quote →
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>24K</strong>
                <span>Pure Gold, 999 Fineness</span>
              </div>
              <div className="hero-stat">
                <strong>$139</strong>
                <span>Per Gram — Live Rate</span>
              </div>
              <div className="hero-stat">
                <strong>15+</strong>
                <span>African Countries Covered</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form Card */}
          <div className="hero-card">
            <h3>Contact Us</h3>
            <p className="sub">Send us your enquiry — we respond within 2 hours.</p>

            {!quoteSent ? (
              <form onSubmit={handleHeroSubmit}>
                <div style={{ fontSize: '15px', fontWeight: 600, textAlign: 'center', marginBottom: '12px', color: '#d4af37', textTransform: 'uppercase' }}>
                  Request a Gold Quote
                </div>

                <div className="fg">
                  <label>Your name</label>
                  <input
                    type="text"
                    required
                    value={quoteName}
                    onChange={(e) => setQuoteName(e.target.value)}
                    placeholder="Full name"
                  />
                </div>

                <div className="fg">
                  <label>Your email</label>
                  <input
                    type="email"
                    required
                    value={quoteEmail}
                    onChange={(e) => setQuoteEmail(e.target.value)}
                    placeholder="name@example.com"
                  />
                </div>

                <div className="fg">
                  <label>Country of Origin</label>
                  <input
                    type="text"
                    required
                    value={quoteCountry}
                    onChange={(e) => setQuoteCountry(e.target.value)}
                    placeholder="Destination country"
                  />
                </div>

                <div className="fg">
                  <label>Your message (optional)</label>
                  <textarea
                    rows={3}
                    value={quoteMessage}
                    onChange={(e) => setQuoteMessage(e.target.value)}
                    placeholder="Specify target weight (kg) or karat..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 10px', background: '#eaf5ee', borderRadius: '6px', color: '#1A3D28' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>✓</div>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Thank you, {quoteName}!</strong>
                <p style={{ fontSize: '13px', margin: 0 }}>
                  Your enquiry has been received. Our trade desk will respond to <strong>{quoteEmail}</strong> within 2 hours.
                </p>
              </div>
            )}

            <p className="card-note">
              ✓ No commitment &nbsp;·&nbsp; ✓ Reply within 2 hours &nbsp;·&nbsp; ✓ Certified & insured
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           TRUST BAR
      ════════════════════════════════ */}
      <div className="trust" role="complementary">
        <div className="trust-inner">
          <div className="trust-item">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Certified 999 Fineness
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Independent XRF Assay
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            24/7 Support
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            Insured Brinks Shipping
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Direct from African Mines
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            AML/KYC Compliant
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
           GOLD TYPES STRIP
      ════════════════════════════════ */}
      <section className="section section-fog" aria-labelledby="types-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="eyebrow">Our Gold Products</div>
            <h2 className="h2" id="types-title">
              Every Form of African Gold,<br />
              Certified and Ready to Ship
            </h2>
            <p className="lead" style={{ margin: '14px auto 0', textAlign: 'center' }}>
              From pure investment bars to natural gold nuggets and raw gold dust — Gold Africa covers every product category you need, direct from Africa's most productive mines.
            </p>
          </div>

          <div className="types-grid">
            <Link to="/24k-gold-bars-for-sale-africa" className="type-item">
              <span className="type-icon">🥇</span>
              <h4>24K Gold Bars</h4>
              <p>Pure 999.9 fineness investment bars from 1g to 1kg. Best for institutional and wholesale buyers.</p>
            </Link>
            <Link to="/22k-gold-for-sale" className="type-item">
              <span className="type-icon">🟡</span>
              <h4>22K Gold Bars</h4>
              <p>916 fineness bars ideal for jewellery manufacturing and cultural gold markets across the Middle East and Asia.</p>
            </Link>
            <Link to="/18k-gold-bars-for-sale" className="type-item">
              <span className="type-icon">✨</span>
              <h4>18K Gold Bars</h4>
              <p>750 fineness — the perfect balance of durability and gold content for jewellery-grade production.</p>
            </Link>
            <Link to="/buy-gold-nuggets-from-africa" className="type-item">
              <span className="type-icon">💎</span>
              <h4>Gold Nuggets</h4>
              <p>Natural placer gold nuggets from Africa's alluvial mining zones — collector-grade with provenance certificates.</p>
            </Link>
            <Link to="/buy-raw-gold-dust-online" className="type-item">
              <span className="type-icon">⚗️</span>
              <h4>Gold Dust & Dore</h4>
              <p>Raw artisanal gold dust and semi-refined dore bars for buyers with refining access — best acquisition cost per gram.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           FEATURED PRODUCTS
      ════════════════════════════════ */}
      <section className="section section-white" aria-labelledby="products-title">
        <div className="wrap">
          <div className="products-header">
            <div>
              <div className="eyebrow">Shop Gold Bars</div>
              <h2 className="h2" id="products-title">Premium African Gold Bars for Sale</h2>
              <p className="lead" style={{ marginTop: '12px' }}>
                Every bar ships with an independent assay certificate, Certificate of Origin, and full export documentation. Prices track the live LBMA spot rate — no hidden markups.
              </p>
            </div>
            <Link to="/gold-bars-for-sale" className="btn btn-outline btn-sm">
              All Gold Bars →
            </Link>
          </div>

          <div className="products-grid">
            {/* Product 1: 24K */}
            <article className="prod-card">
              <div className="prod-img-wrap">
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp?w=1200&ssl=1"
                  alt="24K pure gold bars for sale Africa — 999 fineness investment bars"
                  className="prod-img"
                  loading="lazy"
                />
                <span className="prod-badge">Best Seller</span>
              </div>
              <div className="prod-body">
                <span className="prod-purity">999 Fineness · 24 Karat</span>
                <h3>24K Pure Gold Bars — Africa</h3>
                <p>
                  Our flagship product: LBMA-grade 24K gold bars sourced directly from certified African refineries. Available from 1g to 1kg. Ideal for investment portfolios, central bank reserves, and institutional buyers who require 999.9 purity. Every bar includes SGS or Bureau Veritas assay documentation.
                </p>
                <div className="prod-footer">
                  <div className="prod-price">
                    <strong>From $139.39/g</strong>
                    <span>+ 1.5–3% premium above spot</span>
                  </div>
                  <Link to="/24k-gold-bars-for-sale-africa" className="prod-cta">
                    Buy Now →
                  </Link>
                </div>
              </div>
            </article>

            {/* Product 2: 22K */}
            <article className="prod-card">
              <div className="prod-img-wrap">
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/Buy-Gold-in-dubai-1.jpeg?w=1200&ssl=1"
                  alt="22K gold bars for sale Africa — 916 fineness jewellery grade gold"
                  className="prod-img"
                  loading="lazy"
                  style={{ filter: 'sepia(.15)' }}
                />
                <span className="prod-badge" style={{ background: 'var(--brown)' }}>Popular</span>
              </div>
              <div className="prod-body">
                <span className="prod-purity">916 Fineness · 22 Karat</span>
                <h3>22K Gold Bars — Jewellery Grade</h3>
                <p>
                  916 fineness gold bars — the preferred karat for Middle Eastern, Indian, and South Asian jewellery manufacturers. Available as minted bars or cast ingots in weights from 5g to 1kg. Competitive mine-direct pricing with full export documentation from Africa to any destination worldwide.
                </p>
                <div className="prod-footer">
                  <div className="prod-price">
                    <strong>From $127.81/g</strong>
                    <span>916 fineness · certified</span>
                  </div>
                  <Link to="/22k-gold-for-sale" className="prod-cta">
                    Buy Now →
                  </Link>
                </div>
              </div>
            </article>

            {/* Product 3: Dore */}
            <article className="prod-card">
              <div className="prod-img-wrap">
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-dore-bars-for-sale.jpeg?w=1200&ssl=1"
                  alt="Gold dore bars for sale — semi-refined African mine output"
                  className="prod-img"
                  loading="lazy"
                  style={{ filter: 'brightness(.85)' }}
                />
                <span className="prod-badge" style={{ background: 'var(--charcoal)' }}>Wholesale</span>
              </div>
              <div className="prod-body">
                <span className="prod-purity">70–95% · Semi-Refined Dore</span>
                <h3>Gold Dore Bars for Sale</h3>
                <p>
                  Semi-refined dore bars from Africa's artisanal and small-scale mining sector — available at 5–12% below the equivalent 999.9 spot price. Ideal for buyers with refinery access. Available in 500g, 1kg, 5kg, and 10kg weights with independent purity assay. Used as feedstock for high-purity bar production worldwide.
                </p>
                <div className="prod-footer">
                  <div className="prod-price">
                    <strong>Best Price/Gram</strong>
                    <span>dore bars · wholesale</span>
                  </div>
                  <Link to="/gold-dore-bars-for-sale" className="prod-cta">
                    Buy Now →
                  </Link>
                </div>
              </div>
            </article>

            {/* Product 4: 1 oz */}
            <article className="prod-card">
              <div className="prod-img-wrap">
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/1-oz-Gold-Bar-for-Sale.webp?w=1200&ssl=1"
                  alt="1 oz gold bar for sale Africa — one ounce investment bar"
                  className="prod-img"
                  loading="lazy"
                  style={{ filter: 'brightness(.9)' }}
                />
                <span className="prod-badge">Investment</span>
              </div>
              <div className="prod-body">
                <span className="prod-purity">999 Fineness · 1 Troy Oz</span>
                <h3>1 oz Gold Bar for Sale</h3>
                <p>
                  The world's most popular investment gold bar format. Our 1 troy ounce (31.1g) 24K gold bars are sourced from certified African refineries and priced at approximately <strong>$4,335 USD</strong> at spot rates. Each bar ships with an assay certificate and tamper-evident packaging. Perfect entry point for new gold investors.
                </p>
                <div className="prod-footer">
                  <div className="prod-price">
                    <strong>~$4,335 USD</strong>
                    <span>1 troy oz · 24K</span>
                  </div>
                  <Link to="/1-oz-gold-bar-for-sale" className="prod-cta">
                    Buy Now →
                  </Link>
                </div>
              </div>
            </article>

            {/* Product 5: 1 kg */}
            <article className="prod-card">
              <div className="prod-img-wrap">
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2026/05/Gold-Trading-Companies-in-Nigeria.webp?w=1200&ssl=1"
                  alt="1 kg gold bar price Africa — kilogram investment bar"
                  className="prod-img"
                  loading="lazy"
                  style={{ filter: 'sepia(.1) brightness(.9)' }}
                />
                <span className="prod-badge" style={{ background: '#8B1A1A' }}>Premium</span>
              </div>
              <div className="prod-body">
                <span className="prod-purity">999 Fineness · 1 Kilogram</span>
                <h3>1 kg Gold Bar — Best Value</h3>
                <p>
                  The 1 kilogram gold bar is the most cost-efficient investment format — carrying the lowest premium per gram. At current spot of <strong>$139,390 USD per kg</strong>, our African-sourced 1kg bars offer savings of $5,000–$13,000 versus equivalent US or UK retail dealer prices. Comes with full LBMA-grade documentation and Brinks shipping.
                </p>
                <div className="prod-footer">
                  <div className="prod-price">
                    <strong>~$139,390/kg</strong>
                    <span>1kg 24K · lowest premium</span>
                  </div>
                  <Link to="/1kg-gold-bars-for-sale" className="prod-cta">
                    Buy Now →
                  </Link>
                </div>
              </div>
            </article>

            {/* Product 6: Nuggets */}
            <article className="prod-card">
              <div className="prod-img-wrap">
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-nuggetd.jpeg?w=1200&ssl=1"
                  alt="African gold nuggets for sale — natural placer gold nuggets"
                  className="prod-img"
                  loading="lazy"
                  style={{ filter: 'sepia(.2)' }}
                />
                <span className="prod-badge" style={{ background: 'var(--stone)' }}>Collector</span>
              </div>
              <div className="prod-body">
                <span className="prod-purity">88–96% Natural Purity</span>
                <h3>African Gold Nuggets for Sale</h3>
                <p>
                  Authentic natural gold nuggets from Uganda, Tanzania, Ghana, and the DRC's alluvial mining regions. Purity 88–96%, with individual weights from 1g to 500g. Natural nuggets carry a 10–25% collector premium above melt value. Certified with provenance documentation and individually packaged for presentation or resale.
                </p>
                <div className="prod-footer">
                  <div className="prod-price">
                    <strong>From $145/g</strong>
                    <span>collector premium · provenance cert</span>
                  </div>
                  <Link to="/buy-gold-nuggets-from-africa" className="prod-cta">
                    Buy Now →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           PURITY COMPARISON TABLE
      ════════════════════════════════ */}
      <section className="section section-fog" aria-labelledby="purity-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="eyebrow">Gold Purity Guide</div>
            <h2 className="h2" id="purity-title">
              24K vs 22K vs 18K vs 14K Gold — Which Is Right for You?
            </h2>
            <p className="lead" style={{ margin: '14px auto 0', textAlign: 'center' }}>
              Understanding gold purity is the foundation of every smart gold investment. Gold Africa supplies all standard karat levels with certified assay documentation. Here is how each karat compares in June 2026.
            </p>
          </div>

          <div className="purity-table-wrap">
            <table className="purity-table" aria-label="Gold karat comparison table June 2026">
              <thead>
                <tr>
                  <th>Karat</th>
                  <th>Fineness</th>
                  <th>Purity %</th>
                  <th>Price/Gram (USD)</th>
                  <th>Price/Kg (USD)</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="purity-highlight">
                  <td><strong>24K ⭐</strong></td>
                  <td>999</td>
                  <td><strong>99.9%</strong></td>
                  <td><strong>$139.39</strong></td>
                  <td><strong>$139,390</strong></td>
                  <td>Investment bars, central banks</td>
                </tr>
                <tr>
                  <td><Link to="/22k-gold-for-sale" style={{ color: 'var(--gold)', fontWeight: 700 }}>22K Gold</Link></td>
                  <td>916</td>
                  <td>91.7%</td>
                  <td>$127.81</td>
                  <td>$127,810</td>
                  <td>Jewellery, cultural gold</td>
                </tr>
                <tr>
                  <td><Link to="/18k-gold-bars-for-sale" style={{ color: 'var(--gold)', fontWeight: 700 }}>18K Gold</Link></td>
                  <td>750</td>
                  <td>75.0%</td>
                  <td>$104.65</td>
                  <td>$104,650</td>
                  <td>Fine jewellery, mixed portfolios</td>
                </tr>
                <tr>
                  <td><span style={{ color: 'var(--gold)', fontWeight: 700 }}>14K Gold</span></td>
                  <td>585</td>
                  <td>58.3%</td>
                  <td>$81.35</td>
                  <td>$81,350</td>
                  <td>Everyday jewellery, durable wear</td>
                </tr>
                <tr>
                  <td><span style={{ color: 'var(--gold)', fontWeight: 700 }}>10K Gold</span></td>
                  <td>417</td>
                  <td>41.7%</td>
                  <td>$58.18</td>
                  <td>$58,180</td>
                  <td>Budget jewellery, US minimum</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: '16px', fontSize: '.8rem', color: 'var(--stone)' }}>
            *All prices based on LBMA spot $139.39/gram (June 16, 2026). The 24K row is highlighted as our primary investment product.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════
           WHERE WE SUPPLY — DESTINATIONS
      ════════════════════════════════ */}
      <section className="section section-white" aria-labelledby="dest-title">
        <div className="wrap">
          <div className="products-header">
            <div>
              <div className="eyebrow">African Gold Markets</div>
              <h2 className="h2" id="dest-title">Buy Gold from Africa's Richest Producing Nations</h2>
              <p className="lead" style={{ marginTop: '12px' }}>
                Gold Africa sources from licensed mines and certified exporters across Africa's top gold-producing countries, giving you direct access to mine-proximate pricing.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline btn-sm">All Dealers →</Link>
          </div>

          <div className="dest-grid">
            <Link to="/buy-gold-in-ghana" className="dest-card" aria-label="Buy gold in Ghana">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
                alt="Buy gold in Ghana — GoldBod certified dealers Accra Kumasi"
                fallbackCategory="bars"
                className="dest-img"
              />
              <div className="dest-veil"></div>
              <div className="dest-info">
                <span className="dest-tag">Africa's #1 Producer</span>
                <strong>Ghana</strong>
                <span>Accra · Kumasi · Tarkwa · GoldBod certified</span>
              </div>
            </Link>

            <Link to="/buy-gold-in-tanzania" className="dest-card" aria-label="Buy gold in Tanzania">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-nuggetd.jpeg"
                alt="Buy gold in Tanzania — TMC licensed dealers Dar es Salaam"
                fallbackCategory="nuggets"
                className="dest-img"
              />
              <div className="dest-veil"></div>
              <div className="dest-info">
                <span className="dest-tag">East Africa</span>
                <strong>Tanzania</strong>
                <span>Dar es Salaam · Mwanza · TMC regulated</span>
              </div>
            </Link>

            <Link to="/gold-for-sale-in-uganda" className="dest-card" aria-label="Buy gold in Uganda">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
                alt="Buy gold in Uganda — AGR certified Kampala Entebbe"
                fallbackCategory="kilobar"
                className="dest-img"
              />
              <div className="dest-veil"></div>
              <div className="dest-info">
                <span className="dest-tag">Pearl of Africa</span>
                <strong>Uganda</strong>
                <span>Kampala · Entebbe · DGSM licensed</span>
              </div>
            </Link>

            <Link to="/buy-raw-gold-in-congo" className="dest-card" aria-label="Buy gold in Congo DRC">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-dore-bars-for-sale.jpeg"
                alt="Buy raw gold in Congo DRC — Kinshasa OECD compliant exporter"
                fallbackCategory="dore"
                className="dest-img"
              />
              <div className="dest-veil"></div>
              <div className="dest-info">
                <span className="dest-tag">Central Africa</span>
                <strong>DRC / Congo</strong>
                <span>Kinshasa · Goma · OECD compliant</span>
              </div>
            </Link>

            <Link to="/buy-gold-bars-in-mali" className="dest-card" aria-label="Buy gold bars in Mali">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/1-oz-Gold-Bar-for-Sale.webp"
                alt="Buy gold bars in Mali — Bamako Kayes West Africa"
                fallbackCategory="bars"
                className="dest-img"
              />
              <div className="dest-veil"></div>
              <div className="dest-info">
                <span className="dest-tag">West Africa</span>
                <strong>Mali</strong>
                <span>Bamako · Kayes · Loulo-Gounkoto region</span>
              </div>
            </Link>

            <Link to="/buy-gold-in-south-africa" className="dest-card" aria-label="Buy gold in South Africa">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-in-south-africa.webp"
                alt="Buy gold in South Africa — Johannesburg Rand Refinery"
                fallbackCategory="handHoldingBar"
                className="dest-img"
              />
              <div className="dest-veil"></div>
              <div className="dest-info">
                <span className="dest-tag">Southern Africa</span>
                <strong>South Africa</strong>
                <span>Johannesburg · Rand Refinery · Krugerrand</span>
              </div>
            </Link>

            <Link to="/gold-bars-price-in-africa" className="dest-card" aria-label="Gold bars price across Africa">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
                alt="Gold bar prices in Africa — all countries comparison"
                fallbackCategory="bars"
                className="dest-img"
              />
              <div className="dest-veil"></div>
              <div className="dest-info">
                <span className="dest-tag">All Markets</span>
                <strong>Gold Bars Price in Africa</strong>
                <span>Live comparison across all producing nations</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           WHY CHOOSE US
      ════════════════════════════════ */}
      <section className="section section-pale" aria-labelledby="why-title">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-img-stack">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp?w=1200&ssl=1"
                alt="Certified gold bars Africa — Gold Africa assay verification"
                className="why-main-img"
              />
              <div className="why-badge-num">
                <strong>8+</strong>
                <span>Years in<br />Gold Trade</span>
              </div>
              <div className="why-inset">
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2026/02/50-grams-gold-bar-for-sale-1.webp?resize=300%2C158"
                  alt="Gold bar assay certificate Africa"
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div>
              <div className="eyebrow">Why Gold Africa</div>
              <h2 className="h2" id="why-title">
                Africa's Most Trusted Gold Bar Supplier — Here's Why
              </h2>
              <p className="lead" style={{ margin: '14px 0 32px' }}>
                We are not a broker or middleman. We source certified gold bars, nuggets, and dust directly from licensed African mines and refineries — giving buyers the real mine-direct pricing advantage that eliminates distribution markups.
              </p>

              <div className="features">
                <div className="feat">
                  <div className="feat-icon">🔬</div>
                  <div>
                    <h4>Independent XRF Assay on Every Shipment</h4>
                    <p>
                      Every gram of gold we ship is XRF-tested by SGS, Bureau Veritas, or an equivalent accredited laboratory. You receive the assay certificate before any payment is released — 999.9 fineness confirmed in advance.
                    </p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-icon">📄</div>
                  <div>
                    <h4>Complete Export Documentation</h4>
                    <p>
                      Certificate of Origin, assay certificate, commercial invoice, packing list, AML/KYC documentation, and all country-specific export permits — we handle every document needed for clean import clearance at your destination.
                    </p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-icon">🚛</div>
                  <div>
                    <h4>Insured Brinks Cargo to Any Destination</h4>
                    <p>
                      All gold shipments travel with Brinks International or Malca-Amit insured armoured cargo at full declared value. GPS tracking from mine to your door. Deliveries to the USA, UK, UAE, Europe, and Asia within 4–10 business days.
                    </p>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-icon">💰</div>
                  <div>
                    <h4>Mine-Direct Pricing — 1.5–3% Above LBMA Spot</h4>
                    <p>
                      Our direct mine relationships mean our gold bars are priced at 1.5–3% above the LBMA spot — versus 6–11% at US or UK retail dealers. On a 1kg bar at $139,390, this saves you $5,000–$11,000 USD per kilogram.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="btn btn-gold"
                >
                  Buy Direct from Miners →
                </button>
                <Link to="/about" className="btn btn-outline">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           PROCESS — HOW IT WORKS
      ════════════════════════════════ */}
      <section className="section section-dark" aria-labelledby="process-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="eyebrow" style={{ color: 'var(--gold-lt)', justifyContent: 'center' }}>
              How It Works
            </div>
            <h2 className="h2 h2-white" id="process-title">
              Buy African Gold Bars in 4 Simple Steps
            </h2>
            <p className="lead lead-white" style={{ margin: '14px auto 0', textAlign: 'center' }}>
              From first enquiry to gold at your door — our process is straightforward, documented, and designed to protect you at every stage.
            </p>
          </div>

          <div className="process-grid">
            <div className="step">
              <div className="step-num">1</div>
              <h4>Send Your Enquiry</h4>
              <p>Contact us with your required gold type, purity, weight, and destination. We respond within 2 hours with a live USD proforma invoice showing all costs itemised.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h4>Live XRF Video Assay</h4>
              <p>For orders above $5,000 USD, we conduct a live WhatsApp or Zoom XRF purity test on your specific consignment — you confirm 999.9 fineness before payment.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h4>Secure Bank Wire Payment</h4>
              <p>Pay via bank wire transfer to our registered company account in USD. Escrow via Escrow.com available for orders above $50,000 USD.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h4>Brinks Delivery to Your Door</h4>
              <p>Your gold ships with full insurance, GPS tracking, and complete export documentation. 4–10 business days to USA, UK, UAE, or Europe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           FAQ
      ════════════════════════════════ */}
      <section className="section section-fog" aria-labelledby="faq-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div className="eyebrow">Common Questions</div>
            <h2 className="h2" id="faq-title">
              Frequently Asked Questions About Buying Gold Bars from Africa
            </h2>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-q">How much do gold bars cost from Africa in 2026?</div>
              <p className="faq-a">
                As of June 16, 2026, the 24K gold bar price is $139.39/gram ($4,339/oz, $139,390/kg) at LBMA spot. Gold Africa prices at 1.5–3% above spot — approximately $141,410–$143,572 per kg all-in, including assay, documentation, and insured Brinks shipping. This is $5,000–$13,000 cheaper per kilogram than equivalent bars from US or UK retail dealers.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is it safe to buy gold bars from Africa?</div>
              <p className="faq-a">
                Yes — when purchasing from a licensed, documented dealer with independent assay certification, bank wire to a registered company account, and insured Brinks cargo. Gold Africa meets all these standards. We conduct live video XRF assay before every payment and provide the complete documentation package for US, EU, and UAE customs clearance.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">Can I ship gold to the USA from Africa?</div>
              <p className="faq-a">
                Yes — investment-grade gold bullion (HS code 7108.12) enters the USA duty-free. All shipments must be declared at US CBP port of entry with full documentation including Certificate of Origin, commercial invoice, and assay certificate — all of which Gold Africa provides.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">What is the difference between 24K, 22K, and 18K gold?</div>
              <p className="faq-a">
                24K (999 fineness) is 99.9% pure gold — best for investment and central bank reserves. 22K (916 fineness) is 91.7% gold — preferred for Middle Eastern and South Asian jewellery. 18K (750 fineness) is 75% gold — the most popular European jewellery karat. Gold Africa supplies all three with certified assay documentation.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">What is the best place to buy gold bars in Africa?</div>
              <p className="faq-a">
                Ghana offers the lowest formal export levy (~1.5–2% via GoldBod). Uganda and Tanzania provide competitive mine-direct pricing. South Africa offers LBMA-accredited Rand Refinery bars at the highest global liquidity. Gold Africa sources from all major African markets — advising buyers on the optimal country for their specific product and compliance requirements.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">Can I buy gold bars in Dubai from Africa?</div>
              <p className="faq-a">
                Yes. Dubai's DMCC is one of the world's largest gold trading hubs and a major re-export centre for African gold. Gold Africa exports to UAE buyers with DMCC-compliant documentation including Certificate of Origin, assay certificates, and chain-of-custody records.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">How can I buy gold online in Canada from Africa?</div>
              <p className="faq-a">
                Canadian buyers can purchase African gold bars through Gold Africa via bank wire transfer, with delivery by Brinks insured cargo from Africa to any Canadian city. All Canadian import requirements are fully met by our documentation package.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">What documents are required to buy gold from Africa?</div>
              <p className="faq-a">
                For import to most countries: a commercial invoice, Certificate of Origin, independent assay certificate, packing list, and AML/KYC documentation (passport/ID, proof of business). For US buyers: CBP import declaration. For EU buyers: OECD Due Diligence documentation if from conflict-affected areas. Gold Africa provides all documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           BLOG / GUIDES
      ════════════════════════════════ */}
      <section className="section section-white" aria-labelledby="blog-title">
        <div className="wrap">
          <div className="products-header">
            <div>
              <div className="eyebrow">Gold Investment Guides</div>
              <h2 className="h2" id="blog-title">Learn Before You Buy</h2>
            </div>
            <Link to="/products" className="btn btn-outline btn-sm">All Guides →</Link>
          </div>

          <div className="blog-grid">
            <Link to="/gold-bars-price-in-africa" className="blog-card">
              <div className="blog-img-wrap">
                <SafeImage
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
                  alt="Gold bars price in Africa 2026 — live market rates all countries"
                  fallbackCategory="bars"
                  className="blog-img"
                  loading="lazy"
                />
              </div>
              <div className="blog-body">
                <span className="blog-cat">Market Prices</span>
                <h3>Gold Bars Price in Africa 2026 — All Countries Compared</h3>
                <p>Live gold bar prices across Ghana, Uganda, Tanzania, South Africa, Mali, and the DRC — with USD and local currency rates, export levy comparison, and buyer recommendations.</p>
                <span className="blog-read">Read the guide →</span>
              </div>
            </Link>

            <Link to="/best-gold-dealers-in-africa" className="blog-card">
              <div className="blog-img-wrap">
                <SafeImage
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-in-south-africa.webp"
                  alt="Best gold dealers in Africa 2026 — licensed certified dealers"
                  fallbackCategory="handHoldingBar"
                  className="blog-img"
                  loading="lazy"
                />
              </div>
              <div className="blog-body">
                <span className="blog-cat">Buyer Guide</span>
                <h3>Best Gold Dealers in Africa 2026 — Who to Trust and Why</h3>
                <p>How to identify and verify legitimate licensed gold dealers in Africa. What credentials to check, what documents to demand, and how to avoid the most common gold buying scams.</p>
                <span className="blog-read">Read the guide →</span>
              </div>
            </Link>

            <Link to="/current-gold-spot-price-price-prediction" className="blog-card">
              <div className="blog-img-wrap">
                <SafeImage
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/1-oz-Gold-Bar-for-Sale.webp"
                  alt="Current gold spot price prediction 2026 — investment analysis"
                  fallbackCategory="oneOz"
                  className="blog-img"
                  loading="lazy"
                />
              </div>
              <div className="blog-body">
                <span className="blog-cat">Market Analysis</span>
                <h3>Current Gold Spot Price & 2026 Price Prediction</h3>
                <p>Gold hit an all-time high of $5,602/oz on January 28, 2026. Where is the gold price heading next? Our market analysis covers the key drivers and institutional forecasts for 2026–2027.</p>
                <span className="blog-read">Read the analysis →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           INTERNATIONAL BUYERS STRIP
      ════════════════════════════════ */}
      <section className="section section-fog" aria-labelledby="intl-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="eyebrow">Global Shipping</div>
            <h2 className="h2" id="intl-title">We Deliver African Gold to Buyers Worldwide</h2>
            <p className="lead" style={{ margin: '14px auto 0', textAlign: 'center' }}>
              Gold Africa ships certified African gold bars to international buyers in over 40 countries. Choose your destination for specific buying guides and local import requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="intl-grid">
            <Link to="/buying-gold-online-in-the-usa" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🇺🇸</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>United States</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>Duty-free gold import · CBP compliant</span>
            </Link>
            <Link to="/24k-gold-price-in-dubai" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🇦🇪</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>UAE / Dubai</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>DMCC compliant · tax-free</span>
            </Link>
            <Link to="/buy-gold-bars-uk" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🇬🇧</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>United Kingdom</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>VAT-exempt investment gold</span>
            </Link>
            <Link to="/buy-gold-online-in-canada" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🇨🇦</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>Canada</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>GST-exempt bullion · fast delivery</span>
            </Link>
            <Link to="/buy-gold-online-in-germany" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🇩🇪</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>Germany</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>EU Conflict Minerals compliant</span>
            </Link>
            <Link to="/gold-dealers-in-london" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🏛️</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>London</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>LBMA market · OECD compliant</span>
            </Link>
            <Link to="/gold-dealers-in-the-usa" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🏦</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>Houston / New Jersey</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>US dealer network partners</span>
            </Link>
            <Link to="/buy-gold-in-china-online" style={{ display: 'block', padding: '20px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', background: 'var(--white)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🇨🇳</div>
              <strong style={{ display: 'block', fontSize: '.88rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '3px' }}>China</strong>
              <span style={{ fontSize: '.73rem', color: 'var(--stone)' }}>SGE compliant · volume buyers</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
           CTA BANNER
      ════════════════════════════════ */}
      <section className="cta-banner" aria-label="Buy gold bars from Africa — call to action">
        <div className="cta-inner">
          <div>
            <h2>Ready to Buy Certified Gold Bars from Africa?</h2>
            <p>
              At today's LBMA spot of <strong style={{ color: 'var(--gold-lt)' }}>$139.39/gram ($139,390/kg)</strong>, African gold sourced through Gold Africa saves you $5,000–$13,000 per kilogram versus US or UK retail. Our live XRF assay, Brinks shipping, and full OECD-compliant documentation make your purchase safe, fast, and fully bankable.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
              <Link to="/gold-bars-for-sale" className="btn btn-gold">
                🪙 Shop Gold Bars Now
              </Link>
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-outline-white"
              >
                Buy Direct from Miners →
              </button>
            </div>
          </div>

          <div className="cta-actions">
            <div className="cta-phone">
              <div className="phone-ring">📞</div>
              <div>
                <strong>Contact Us Now</strong>
                <small>WhatsApp or Email — 24/7</small>
              </div>
            </div>
            <Link
              to="/contact"
              className="btn btn-gold"
              style={{ whiteSpace: 'nowrap', marginTop: '4px' }}
            >
              📋 Get a Free Quote
            </Link>
            <div
              style={{
                marginTop: '16px',
                background: 'rgba(201,150,43,.12)',
                border: '1px solid rgba(201,150,43,.3)',
                borderRadius: 'var(--r-md)',
                padding: '18px 22px',
                textAlign: 'center',
                maxWidth: '280px',
              }}
            >
              <p
                style={{
                  fontSize: '.73rem',
                  color: 'rgba(255,255,255,.5)',
                  letterSpacing: '.07em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                Response Time
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  margin: 0,
                }}
              >
                Under 2 Hours
              </p>
              <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.4)', marginTop: '3px', margin: 0 }}>
                All enquiries · 7 days a week
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
