import React from 'react';
import { Link } from 'react-router-dom';

interface ServicesPageProps {
  onOpenQuoteModal?: (productSlug?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div>
      {/* ═══════════════════════════════════════
           HERO
      ═══════════════════════════════════════════ */}
      <section className="hero" aria-label="Orange Investments Company Limited Services">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-veil" aria-hidden="true"></div>

        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-dot"></span>Africa's Certified Gold Supplier
            </div>
            <h1>
              Every Gold Service<br />
              You Need — <em>Under One Roof.</em>
            </h1>
            <p className="hero-sub">
              Orange Investments Company Limited provides the complete African gold service: certified{' '}
              <Link to="/gold-bars-for-sale" style={{ color: 'var(--gold-lt)', fontWeight: 600 }}>
                24K, 22K, and 18K gold bars
              </Link>
              , gold nuggets, raw gold dust, dore bars, export documentation, independent assay, and insured Brinks shipping — from Uganda and across Africa to investors and buyers worldwide.
            </p>
            <div className="hero-btns">
              <Link to="/gold-bars-for-sale" className="btn btn-gold">🪙 Browse Gold Bars</Link>
              <Link to="/contact" className="btn btn-ghost-w">Get a Free Quote →</Link>
            </div>
            <div className="hero-stats">
              <div className="h-stat"><strong>8</strong><span>Core Services</span></div>
              <div className="h-stat"><strong>$139/g</strong><span>24K Live Rate</span></div>
              <div className="h-stat"><strong>40+</strong><span>Countries Served</span></div>
            </div>
          </div>

          {/* Quick-jump service nav */}
          <div className="hero-nav">
            <h3>Our Services</h3>
            <p className="sub">Jump directly to the service you need →</p>
            <div className="srv-jump">
              <a href="#gold-bars">🥇 Gold Bar Supply (24K · 22K · 18K) <span>→</span></a>
              <a href="#nuggets">💎 Gold Nuggets from Africa <span>→</span></a>
              <a href="#dust">⚗️ Raw Gold Dust & Dore Bars <span>→</span></a>
              <a href="#assay">🔬 Independent XRF Assay Service <span>→</span></a>
              <a href="#export">📄 Gold Export Documentation <span>→</span></a>
              <a href="#shipping">🚛 Insured Brinks Shipping <span>→</span></a>
              <a href="#wholesale">📦 Wholesale & Bulk Gold Orders <span>→</span></a>
              <a href="#sourcing">⛏️ Direct Mine Sourcing <span>→</span></a>
            </div>
            <div className="hero-cta-wrap">
              <button 
                className="btn-submit-full" 
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : window.location.href = '/contact'}
              >
                📋 Request a Service Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           TRUST BAR
      ═══════════════════════════════════════════ */}
      <div className="trust">
        <div className="trust-inner">
          <div className="ti">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            DGSM Licensed Uganda
          </div>
          <div className="tsep"></div>
          <div className="ti">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            SGS / Bureau Veritas Assay
          </div>
          <div className="tsep"></div>
          <div className="ti">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            24/7 Service Support
          </div>
          <div className="tsep"></div>
          <div className="ti">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            Brinks Insured Cargo
          </div>
          <div className="tsep"></div>
          <div className="ti">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            999 Fineness Certified
          </div>
          <div className="tsep"></div>
          <div className="ti">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            OECD & AML Compliant
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
           SERVICE 1 — GOLD BARS
      ═══════════════════════════════════════════ */}
      <section className="section s-white" id="gold-bars" aria-labelledby="gb-title">
        <div className="wrap">
          <div style={{ marginBottom: '48px' }}>
            <div className="eyebrow">Service 01</div>
            <h2 className="h2" id="gb-title">Certified Gold Bar Supply — 24K, 22K & 18K</h2>
            <p className="lead" style={{ marginTop: '14px', maxWidth: '640px' }}>
              Our flagship service: supplying certified investment-grade gold bars in all standard karats directly from Africa's most productive mining regions to investors, institutions, and jewellery manufacturers worldwide.
            </p>
          </div>

          <div className="srv-grid">
            <article className="srv-card">
              <div className="srv-card-img">
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2026/06/100-Grams-Gold-Bars-for-Sale-in-Ghana-.jpeg?resize=300%2C168" alt="24K gold bars for sale Africa 999 fineness certified bars" loading="lazy" />
                <span className="srv-tag">Best Seller</span>
              </div>
              <div className="srv-body">
                <span className="srv-icon">🥇</span>
                <h3>24K Gold Bars — 999 Fineness</h3>
                <p>
                  Pure investment-grade 24K gold bars sourced from certified African refineries — including the African Gold Refinery (AGR) in Entebbe. LBMA-standard 999.9 fineness, stamped with serial numbers and purity marks. Available from 1 gram to 1 kilogram. The most cost-efficient gold product for wealth preservation, central bank reserve building, and institutional portfolios.
                </p>
                <ul className="srv-list">
                  <li>999.9 fineness — LBMA standard</li>
                  <li>Available 1g · 5g · 10g · 50g · 100g · 1kg</li>
                  <li>SGS independent assay certificate included</li>
                  <li>From $139.39/gram (June 2026 LBMA spot)</li>
                </ul>
                <div className="srv-footer">
                  <div className="srv-price"><strong>From $139.39/g</strong><span>+1.5–3% premium</span></div>
                  <Link to="/gold-bars-for-sale" className="srv-link">Buy Now →</Link>
                </div>
              </div>
            </article>

            <article className="srv-card">
              <div className="srv-card-img">
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg?w=1200&ssl=1" alt="22K gold bars for sale Africa 916 fineness jewellery grade" loading="lazy" />
                <span className="srv-tag" style={{ background: 'var(--brown)' }}>Jewellery Grade</span>
              </div>
              <div className="srv-body">
                <span className="srv-icon">🟡</span>
                <h3>22K Gold Bars — 916 Fineness</h3>
                <p>
                  916 fineness gold bars are the gold jewellery industry's preferred raw material — used extensively in Middle Eastern, South Asian, and Southeast Asian jewellery manufacturing. At $127.81/gram (June 2026), our 22K African gold bars are significantly cheaper than equivalent material purchased through Dubai or European trade suppliers. Available as cast bars and minted bars.
                </p>
                <ul className="srv-list">
                  <li>916.7 fineness — international jewellery standard</li>
                  <li>Available 5g · 10g · 50g · 100g · 1kg</li>
                  <li>Independently assayed at Bureau Veritas</li>
                  <li>Preferred by UAE, India, and SE Asia manufacturers</li>
                </ul>
                <div className="srv-footer">
                  <div className="srv-price"><strong>From $127.81/g</strong><span>916 fineness</span></div>
                  <Link to="/gold-bars-for-sale" className="srv-link">Buy Now →</Link>
                </div>
              </div>
            </article>

            <article className="srv-card">
              <div className="srv-card-img">
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2026/05/Gold-Trading-Companies-in-Nigeria.webp?resize=300%2C200" alt="18K gold bars for sale 750 fineness durable jewellery gold" loading="lazy" style={{ filter: 'sepia(.1)' }} />
                <span className="srv-tag" style={{ background: 'var(--charcoal)' }}>Durable Grade</span>
              </div>
              <div className="srv-body">
                <span className="srv-icon">✨</span>
                <h3>18K Gold Bars — 750 Fineness</h3>
                <p>
                  750 fineness gold bars — the most popular karat in European jewellery markets and widely used across the USA for engagement rings and fine jewellery. 18K gold's 75% gold content delivers the richest colour visible to consumers while the 25% alloy content provides durability superior to 22K or 24K. Available in yellow, white, and rose gold configurations depending on alloy.
                </p>
                <ul className="srv-list">
                  <li>750 fineness — European jewellery standard</li>
                  <li>Available 5g · 10g · 50g · 100g · 1kg</li>
                  <li>Ideal for European and US jewellery makers</li>
                  <li>Independent assay certificate included</li>
                </ul>
                <div className="srv-footer">
                  <div className="srv-price"><strong>From $104.65/g</strong><span>750 fineness</span></div>
                  <Link to="/gold-bars-for-sale" className="srv-link">Buy Now →</Link>
                </div>
              </div>
            </article>
          </div>

          {/* Quick weights table */}
          <div style={{ marginTop: '36px', overflowX: 'auto' }}>
            <table className="mkt-table" aria-label="Gold bar weights and prices June 2026">
              <thead>
                <tr>
                  <th>Weight</th>
                  <th>24K Price (USD)</th>
                  <th>22K Price (USD)</th>
                  <th>18K Price (USD)</th>
                  <th>Best For</th>
                  <th>Product Page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 gram</strong></td>
                  <td>$139.39</td>
                  <td>$127.81</td>
                  <td>$104.65</td>
                  <td><span className="badge-g bg-inv">Entry / Retail</span></td>
                  <td><Link to="/gold-bars-for-sale" className="tlink">1 gram gold bar →</Link></td>
                </tr>
                <tr>
                  <td><strong>1 oz (31.1g)</strong></td>
                  <td>$4,335</td>
                  <td>$3,972</td>
                  <td>$3,251</td>
                  <td><span className="badge-g bg-inv">Investment</span></td>
                  <td><Link to="/gold-bars-for-sale" className="tlink">1 oz gold bar →</Link></td>
                </tr>
                <tr>
                  <td><strong>50 grams</strong></td>
                  <td>$6,970</td>
                  <td>$6,390</td>
                  <td>$5,233</td>
                  <td><span className="badge-g bg-jwl">Jewellery</span></td>
                  <td><Link to="/gold-bars-for-sale" className="tlink">50g gold bar →</Link></td>
                </tr>
                <tr>
                  <td><strong>100 grams</strong></td>
                  <td>$13,939</td>
                  <td>$12,781</td>
                  <td>$10,465</td>
                  <td><span className="badge-g bg-inv">Portfolio</span></td>
                  <td><Link to="/gold-bars-for-sale" className="tlink">100g gold bar →</Link></td>
                </tr>
                <tr className="hl-row">
                  <td><strong>1 kilogram ⭐</strong></td>
                  <td><strong>$139,390</strong></td>
                  <td><strong>$127,810</strong></td>
                  <td><strong>$104,650</strong></td>
                  <td><span className="badge-g bg-inv">Best Value</span></td>
                  <td><Link to="/product/1kg-gold-bar" className="tlink">1kg gold bar →</Link></td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '10px', fontSize: '.75rem', color: 'var(--stone)' }}>
              *All prices based on LBMA spot $139.39/gram (June 16, 2026). Retail includes 1.5–3% Orange Investments Company Limited premium.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           SERVICE 2 & 3 — NUGGETS & DUST
      ═══════════════════════════════════════════ */}
      <section className="section s-fog" id="nuggets" aria-labelledby="nug-title">
        <div className="wrap">
          <div className="fsplit">
            <div className="fsplit-img">
              <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/10/gold-nuggetd.jpeg?w=1200&ssl=1" alt="Gold nuggets from Africa — natural placer gold Uganda Tanzania Ghana" loading="lazy" />
              <div className="fs-badge">
                <strong>88–96%</strong>
                <span>Natural Purity<br />Certified</span>
              </div>
            </div>
            <div>
              <div className="eyebrow">Service 02 & 03</div>
              <h2 className="h2" id="nug-title">Gold Nuggets from Africa & Raw Gold Dust Online</h2>
              <p className="lead" style={{ margin: '14px 0 0' }}>
                Beyond refined bars, Orange Investments Company Limited supplies the full spectrum of natural and semi-refined African gold — from collector-grade natural nuggets to artisanal gold dust and semi-refined dore bars for wholesale refiners.
              </p>
              <div className="feat-list">
                <div className="feat-item" id="nuggets-detail">
                  <div className="fi-icon">💎</div>
                  <div>
                    <h4>African Gold Nuggets — Natural Placer Gold</h4>
                    <p>
                      We source authentic natural gold nuggets from Uganda's Karamoja and Busia alluvial mining zones, Tanzania's Lake Victoria Goldfields, and Ghana's Ashanti River placers. Natural purity 88–96%, individually weighed and assayed. Available 1g to 500g with provenance certificates.
                    </p>
                  </div>
                </div>
                <div className="feat-item" id="dust">
                  <div className="fi-icon">⚗️</div>
                  <div>
                    <h4>Raw Gold Dust Online — Fine Particle Artisanal Gold</h4>
                    <p>
                      Fine-particle placer gold dust from Africa's most productive artisanal mining areas — available at 5–12% below the 999.9 spot equivalent. Ideal for buyers with refinery access who want the lowest possible acquisition cost per gram of actual gold content. Purity 90–96% typical.
                    </p>
                  </div>
                </div>
                <div className="feat-item" id="dust-2">
                  <div className="fi-icon">🏭</div>
                  <div>
                    <h4>Gold Dore Bars — Semi-Refined Mine Output</h4>
                    <p>
                      Semi-refined dore bars from Africa's artisanal and small-scale mining sector at 70–95% purity — typically 5–12% below the refined spot equivalent. Available 500g, 1kg, 5kg, 10kg. Full OECD chain-of-custody documentation.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-gold">Buy Gold Nuggets →</Link>
                <Link to="/product/gold-dore-bars" className="btn btn-outline btn-sm">Shop Dore Bars</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           SERVICE 4, 5, 6 — ASSAY + EXPORT + SHIPPING
      ═══════════════════════════════════════════ */}
      <section className="section s-white" id="assay" aria-labelledby="comp-title">
        <div className="wrap">
          <div style={{ marginBottom: '48px' }}>
            <div className="eyebrow">Services 04 · 05 · 06</div>
            <h2 className="h2" id="comp-title">XRF Assay, Gold Export Documentation & Insured Shipping</h2>
            <p className="lead" style={{ marginTop: '14px', maxWidth: '660px' }}>
              The three compliance services that make every Orange Investments Company Limited transaction bankable, legally importable, and fraud-proof. These are not optional add-ons — they are standard features of every order we process.
            </p>
          </div>

          <div className="srv-grid">
            <article className="srv-card" id="assay-detail">
              <div className="srv-card-img">
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2026/02/Gold-IRA-Rollover-Guide.webp?resize=300%2C150" alt="Independent XRF assay service gold Africa — SGS Bureau Veritas purity test" loading="lazy" style={{ filter: 'brightness(.88)' }} />
                <span className="srv-tag">Fraud-Proof</span>
              </div>
              <div className="srv-body">
                <span className="srv-icon">🔬</span>
                <h3>Independent XRF Assay Service</h3>
                <p>
                  Before any payment is requested, Orange Investments Company Limited conducts a live WhatsApp or Zoom video XRF (X-ray fluorescence) purity test on your specific gold consignment — conducted by SGS Uganda, Bureau Veritas, or an equivalent DGSM-accredited laboratory. You watch 999.9 fineness confirmed in real time on screen.
                </p>
                <ul className="srv-list">
                  <li>Live video XRF before every payment</li>
                  <li>SGS or Bureau Veritas accredited testing</li>
                  <li>999.9 fineness confirmed on screen</li>
                  <li>Written assay certificate issued within 24 hours</li>
                </ul>
                <div className="srv-footer">
                  <div className="srv-price"><strong>Included</strong><span>on all orders $5k+</span></div>
                  <Link to="/contact" className="srv-link">Learn More →</Link>
                </div>
              </div>
            </article>

            <article className="srv-card" id="export">
              <div className="srv-card-img">
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg?w=1200&ssl=1" alt="Gold export documentation service Africa — DGSM permits Certificate of Origin AML" loading="lazy" style={{ filter: 'sepia(.08)' }} />
                <span className="srv-tag" style={{ background: 'var(--charcoal)' }}>Full Compliance</span>
              </div>
              <div className="srv-body">
                <span className="srv-icon">📄</span>
                <h3>Gold Export Documentation Service</h3>
                <p>
                  Every international gold shipment from Uganda requires a specific set of legal documents to clear customs at origin and destination. Orange Investments Company Limited prepares the complete documentation package — from DGSM export permit and Uganda Revenue Authority tax compliance to OECD Due Diligence records.
                </p>
                <ul className="srv-list">
                  <li>DGSM export permit</li>
                  <li>Certificate of Origin — Uganda</li>
                  <li>Commercial invoice + packing list</li>
                  <li>AML/KYC compliance documentation</li>
                  <li>OECD Due Diligence records where required</li>
                  <li>URA tax clearance receipts</li>
                </ul>
                <div className="srv-footer">
                  <div className="srv-price"><strong>Included</strong><span>on all orders</span></div>
                  <Link to="/contact" className="srv-link">Export Guide →</Link>
                </div>
              </div>
            </article>

            <article className="srv-card" id="shipping">
              <div className="srv-card-img">
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/12/Gold-Shipping-Companies.webp?resize=300%2C207" alt="Insured Brinks gold shipping Africa to USA UK UAE — GPS tracked armoured cargo" loading="lazy" style={{ filter: 'brightness(.85) sepia(.05)' }} />
                <span className="srv-tag" style={{ background: '#1A5276' }}>GPS Tracked</span>
              </div>
              <div className="srv-body">
                <span className="srv-icon">🚛</span>
                <h3>Insured Brinks Gold Shipping Worldwide</h3>
                <p>
                  All gold shipments from Orange Investments Company Limited travel with Brinks International or Malca-Amit insured armoured cargo — GPS-tracked from Entebbe International Airport (EBB) to your delivery address. Full declared-value insurance through Lloyd's of London or equivalent.
                </p>
                <ul className="srv-list">
                  <li>Brinks or Malca-Amit insured armoured cargo</li>
                  <li>Full declared-value insurance included</li>
                  <li>GPS tracking from Uganda to destination</li>
                  <li>4–10 business days to USA, UK, UAE, Europe</li>
                  <li>Route: Entebbe (EBB) → Dubai/Amsterdam → final destination</li>
                </ul>
                <div className="srv-footer">
                  <div className="srv-price"><strong>Worldwide</strong><span>40+ countries</span></div>
                  <Link to="/contact" className="srv-link">Shipping Guide →</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           WHOLESALE & DIRECT MINE SOURCING
      ═══════════════════════════════════════════ */}
      <section className="section s-pale" id="wholesale" aria-labelledby="whl-title">
        <div className="wrap">
          <div className="fsplit" style={{ gap: '56px' }}>
            <div>
              <div className="eyebrow">Services 07 & 08</div>
              <h2 className="h2" id="whl-title">Wholesale Gold Orders & Direct Mine Sourcing</h2>
              <p className="lead" style={{ margin: '16px 0 0' }}>
                For bulk buyers, institutional investors, and jewellery manufacturers who need consistent large-volume supply, Orange Investments Company Limited offers two high-value services that deliver maximum cost efficiency: wholesale pricing and direct mine access.
              </p>

              <div className="feat-list" style={{ marginTop: '28px' }}>
                <div className="feat-item">
                  <div className="fi-icon">📦</div>
                  <div>
                    <h4 id="wholesale-detail">Wholesale Gold Bar Orders — Volume Pricing</h4>
                    <p>
                      Buyers purchasing 5kg+ qualify for progressive volume discounts off our standard 1.5–3% premium above LBMA spot. At 50kg+, our all-in pricing drops to spot +1.5% — delivering approximately <strong>$5,000–$11,000 USD savings per kilogram</strong> versus equivalent certified bars from US or European retail dealers.
                    </p>
                  </div>
                </div>

                <div style={{ overflowX: 'auto', margin: '8px 0' }}>
                  <table className="mkt-table" style={{ fontSize: '.82rem' }}>
                    <thead>
                      <tr><th>Order Volume</th><th>Premium Above LBMA Spot</th><th>All-In Price (1kg 24K)</th><th>Saving vs US Retail</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1–4 kg</td><td>+3.0%</td><td>~$143,572</td><td>~$3,000–$11,000</td></tr>
                      <tr><td>5–9 kg</td><td>+2.5%</td><td>~$143,075</td><td>~$4,000–$12,000</td></tr>
                      <tr><td>10–49 kg</td><td>+2.0%</td><td>~$142,178</td><td>~$5,000–$13,000</td></tr>
                      <tr className="hl-row"><td><strong>50 kg+</strong></td><td><strong>+1.5%</strong></td><td><strong>~$141,411</strong></td><td><strong>~$6,000–$14,000</strong></td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="feat-item" id="sourcing">
                  <div className="fi-icon">⛏️</div>
                  <div>
                    <h4>Direct Mine Sourcing — Buy Gold Direct from Miners</h4>
                    <p>
                      For buyers who want maximum transparency and the deepest mine-proximate pricing, Orange Investments Company Limited connects international buyers directly with Uganda's licensed artisanal mining cooperatives in Karamoja, Mubende, and Busia.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-gold">Buy Direct from Miners →</Link>
                <Link to="/contact" className="btn btn-outline btn-sm">Get Wholesale Quote</Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderRadius: 'var(--r-lg)', height: '280px', overflow: 'hidden' }}>
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg?w=1200&ssl=1" alt="Wholesale gold bars Africa" loading="lazy" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--r-lg)', height: '220px', overflow: 'hidden' }}>
                <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/10/gold-nuggetd.jpeg?w=1200&ssl=1" alt="Direct mine sourcing gold Uganda" loading="lazy" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section className="section s-dark" aria-labelledby="proc-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="eyebrow eyebrow-w">Our Process</div>
            <h2 className="h2 h2-w" id="proc-title" style={{ marginTop: '4px' }}>
              How Every Gold Service Order Works — Start to Delivery
            </h2>
            <p className="lead-w" style={{ margin: '14px auto 0', textAlign: 'center', maxWidth: '580px' }}>
              Every Orange Investments Company Limited transaction follows the same documented, fraud-proof, bank-compliant process — regardless of order size.
            </p>
          </div>
          <div className="proc-grid">
            <div className="prc">
              <div className="prc-num">1</div>
              <h4>Contact & Specify</h4>
              <p>Submit your gold service requirement via our contact form or WhatsApp. Specify product type, purity, weight, and destination. We respond within 2 hours with a live USD proforma invoice.</p>
            </div>
            <div className="prc">
              <div className="prc-num">2</div>
              <h4>Live Video XRF Assay</h4>
              <p>For all orders above $5,000 USD: live WhatsApp or Zoom XRF purity test on your specific consignment. You confirm 999.9 fineness on screen before any payment is initiated.</p>
            </div>
            <div className="prc">
              <div className="prc-num">3</div>
              <h4>Secure Payment</h4>
              <p>Bank wire to our registered Ugandan company account in USD. Escrow via Escrow.com for orders above $50,000 USD. No informal payments.</p>
            </div>
            <div className="prc">
              <div className="prc-num">4</div>
              <h4>Brinks Delivery + Docs</h4>
              <p>Complete export documentation prepared; Brinks insured cargo dispatched from Entebbe Airport. GPS tracking from Uganda to your door. 4–10 business days internationally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           WHERE WE SUPPLY — MARKETS
      ═══════════════════════════════════════════ */}
      <section className="section s-white" aria-labelledby="markets-title">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '44px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="eyebrow">Our Gold Markets</div>
              <h2 className="h2" id="markets-title">Gold Sourced from Africa's Richest Producing Nations</h2>
              <p className="lead" style={{ marginTop: '12px', maxWidth: '560px' }}>
                Our services span Uganda, Ghana, Tanzania, the DRC, Mali, and South Africa — giving buyers access to every major African market through one verified, compliant partner.
              </p>
            </div>
            <Link to="/gold-bars-for-sale" className="btn btn-outline btn-sm">Compare Prices →</Link>
          </div>

          <div className="dest-mosaic">
            <Link to="/contact" className="dc big" aria-label="Buy gold direct from Uganda miners">
              <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg?w=1200&ssl=1" alt="Buy gold direct from miners Uganda Kampala certified dealer" loading="lazy" />
              <div className="dc-veil"></div>
              <div className="dc-info">
                <span className="dc-tag">Direct Mine Access</span>
                <strong>Uganda — Our Home Market</strong>
                <span>Kampala · Entebbe · Busia · Karamoja · African Gold Refinery</span>
              </div>
            </Link>
            <Link to="/contact" className="dc" aria-label="Buy gold bars in Ghana">
              <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/11/Ghana-Gold-Production-1.webp?resize=300%2C168" alt="Buy gold bars Ghana GoldBod certified Accra Kumasi" loading="lazy" style={{ filter: 'sepia(.1)' }} />
              <div className="dc-veil"></div>
              <div className="dc-info">
                <span className="dc-tag">Africa's #1 Producer</span>
                <strong>Ghana</strong>
                <span>GoldBod · Accra · Kumasi · Tarkwa</span>
              </div>
            </Link>
            <Link to="/contact" className="dc" aria-label="Buy gold in Tanzania">
              <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/10/gold-nuggetd.jpeg?w=1200&ssl=1" alt="Buy gold in Tanzania TMC regulated Dar es Salaam Mwanza" loading="lazy" />
              <div className="dc-veil"></div>
              <div className="dc-info">
                <span className="dc-tag">East Africa</span>
                <strong>Tanzania</strong>
                <span>TMC · Dar es Salaam · Mwanza</span>
              </div>
            </Link>
            <Link to="/contact" className="dc" aria-label="Buy gold in South Africa">
              <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/12/Gold-Coins-from-South-Africa.png?resize=300%2C195" alt="Buy gold South Africa Johannesburg Rand Refinery" loading="lazy" style={{ filter: 'brightness(.85)' }} />
              <div className="dc-veil"></div>
              <div className="dc-info">
                <span className="dc-tag">Southern Africa</span>
                <strong>South Africa</strong>
                <span>Rand Refinery · Johannesburg</span>
              </div>
            </Link>
            <Link to="/contact" className="dc" aria-label="Gold bar prices across all Africa">
              <img src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2025/11/gold-export-documents-South-Africa.jpeg?resize=300%2C201" alt="Gold bars price in Africa all countries comparison" loading="lazy" style={{ filter: 'sepia(.15) brightness(.88)' }} />
              <div className="dc-veil"></div>
              <div className="dc-info">
                <span className="dc-tag">All Markets</span>
                <strong>Pan-Africa Pricing</strong>
                <span>Live prices across all producing nations</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           FAQ
      ═══════════════════════════════════════════ */}
      <section className="section s-white" aria-labelledby="faq-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div className="eyebrow">Common Questions</div>
            <h2 className="h2" id="faq-title">Frequently Asked Questions About Our Gold Services</h2>
          </div>
          <div className="faq-cols">
            <div className="faq-item">
              <div className="fq">What gold services does Orange Investments Company Limited offer?</div>
              <p className="fa">We offer eight core services: (1) Certified 24K gold bar supply, (2) 22K gold bar supply, (3) 18K gold bar supply, (4) Gold nuggets from Africa, (5) Raw gold dust and dore bars, (6) Independent XRF assay, (7) Gold export documentation, and (8) Insured Brinks international shipping. All services are available remotely — no travel to Uganda required.</p>
            </div>
            <div className="faq-item">
              <div className="fq">How do I know the gold I'm buying is genuine?</div>
              <p className="fa">Before any payment, we conduct a live WhatsApp or Zoom video XRF purity test on your specific consignment — conducted by SGS or Bureau Veritas. You watch 999.9 fineness confirmed on screen. After payment, a written independent assay certificate is provided.</p>
            </div>
            <div className="faq-item">
              <div className="fq">Can I buy gold bars from Africa and ship to the USA?</div>
              <p className="fa">Yes. Investment-grade gold bullion (HS code 7108.12) enters the USA duty-free. All shipments must be declared at US CBP port of entry. Orange Investments Company Limited provides the complete documentation package — Certificate of Origin, assay certificate, commercial invoice — that CBP requires. Brinks delivers to US addresses in 4–7 business days from Entebbe.</p>
            </div>
            <div className="faq-item">
              <div className="fq">What is the minimum order for your gold services?</div>
              <p className="fa">Our minimum order for certified gold bars is 1 gram (approximately $139.39 at June 2026 prices). For wholesale pricing and the most competitive premiums (spot +1.5%), minimum order is 50kg. For gold nuggets, minimum is 1 gram with individual provenance. For gold dust, minimum order is 100 grams.</p>
            </div>
            <div className="faq-item">
              <div className="fq">How do you compare to other gold dealers in Africa?</div>
              <p className="fa">The key differences: (1) We conduct live video XRF assay before payment. (2) Our documentation is prepared to international bank compliance standards. (3) We ship with Brinks insured cargo, not unregistered couriers. (4) We price at 1.5–3% above spot, not the 5–10% margin informal dealers charge.</p>
            </div>
            <div className="faq-item">
              <div className="fq">What payment methods do you accept for gold services?</div>
              <p className="fa">Bank wire transfer (MT103) to our registered Ugandan company account in USD is our standard method. For orders above $50,000 USD, we recommend Escrow.com — funds are held by the platform and released on your confirmed delivery. We do not accept informal payment methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="cta-banner" aria-label="Contact Orange Investments Company Limited">
        <div className="cta-inner">
          <div>
            <h2>Every Gold Service You Need — One Trusted Partner.</h2>
            <p>
              Orange Investments Company Limited is Uganda's most documented, most transparent, and most internationally compliant gold service provider. Whether you want to buy certified 24K gold bars, source natural gold nuggets from Africa, purchase gold dore bars for your refinery, or access direct mine sourcing — our team builds your custom service package today.
            </p>
            <div className="cta-btns" style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
              <Link to="/gold-bars-for-sale" className="btn btn-gold">🪙 Shop Gold Bars Now</Link>
              <Link to="/contact" className="btn btn-ghost-w">Request Service Quote →</Link>
            </div>
          </div>
          <div className="cta-actions">
            <div className="cta-phone">
              <div className="phone-ring">📞</div>
              <div>
                <a href="https://wa.me/256754681378" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <strong>+256 754 681378</strong>
                </a>
                <small>WhatsApp & Calls · Mon–Sat 8am–6pm EAT</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
