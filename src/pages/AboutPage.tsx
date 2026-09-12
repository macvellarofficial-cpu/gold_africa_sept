import React from 'react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="about-page-wrapper">
      {/* ══════════════════════════════
           HERO / PAGE OPENER
      ══════════════════════════════════ */}
      <section className="page-hero" aria-label="About Gold Africa">
        <div className="ph-bg" aria-hidden="true"></div>
        <div className="ph-veil" aria-hidden="true"></div>

        <div className="ph-inner">
          <div>
            <div className="ph-badge">
              <span></span> Uganda's Premier Gold Bar Dealer · Reg. No: 80020000702132
            </div>
            <h1>
              The Gold Experts<br />
              <em>Africa Trusts.</em>
            </h1>
            <p className="ph-sub">
              Gold Africa (Reg. No: 80020000702132) is Uganda's most trusted certified gold bar dealer — based in Lubowa, Kampala, and serving investors, institutions, and jewellery manufacturers across Africa, the USA, UAE, and Europe with pure 24K, 22K, and 18K gold bars direct from Africa's richest mines.
            </p>
            <div className="ph-actions">
              <Link to="/gold-bars-for-sale" className="btn btn-gold">
                🪙 Shop Gold Bars
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Key stats card */}
          <div className="ph-card">
            <h3>Gold Africa</h3>
            <p className="sub">Reg. No: 80020000702132 · Lubowa, Kampala, Uganda</p>

            <div className="stat-row">
              <div className="stat-box">
                <strong>8+</strong>
                <span>Years Trading</span>
              </div>
              <div className="stat-box">
                <strong>40+</strong>
                <span>Countries Served</span>
              </div>
              <div className="stat-box">
                <strong>24K</strong>
                <span>Pure Gold, 999</span>
              </div>
              <div className="stat-box">
                <strong>24/7</strong>
                <span>Support Line</span>
              </div>
            </div>

            <div className="location-box">
              <div className="loc-icon">📍</div>
              <div>
                <div className="loc-title">Our Physical Office</div>
                <div className="loc-sub">
                  Acacia Mall, Kampala, Uganda<br />
                  East Africa's gold trading capital
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', marginTop: '18px', padding: '15px' }}
            >
              📋 Get a Free Gold Quote
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           NUMBERS BAND
      ══════════════════════════════════ */}
      <div className="numbers-band" role="complementary" aria-label="Key statistics">
        <div className="nb-inner">
          <div className="nb-item">
            <span className="nb-num">$139</span>
            <div className="nb-label">
              Per gram 24K gold<br />June 2026 live rate
            </div>
          </div>
          <div className="nb-item">
            <span className="nb-num">999</span>
            <div className="nb-label">
              Fineness on every<br />certified bar we supply
            </div>
          </div>
          <div className="nb-item">
            <span className="nb-num">4–10</span>
            <div className="nb-label">
              Business days delivery<br />USA, UAE, UK, Europe
            </div>
          </div>
          <div className="nb-item">
            <span className="nb-num">$5k+</span>
            <div className="nb-label">
              Saved per kilogram vs<br />US / UK retail dealers
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
           WHO WE ARE
      ══════════════════════════════════ */}
      <section className="section s-white" aria-labelledby="who-title">
        <div className="wrap">
          <div className="split">
            <div className="split-img">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
                alt="Gold Africa — certified gold bars Africa Uganda Kampala dealer"
                loading="lazy"
              />
              <div className="split-badge">
                <strong>A+</strong>
                <span>Rated Dealer<br />East Africa</span>
              </div>
            </div>

            <div>
              <div className="eyebrow">Who We Are</div>
              <h2 className="h2" id="who-title">
                Uganda's Trusted Gold Bar Supplier, Serving Investors Worldwide
              </h2>

              <p className="body-text" style={{ marginTop: '18px' }}>
                Gold Africa (Registration No: 80020000702132) is a licensed precious metals dealer headquartered in Lubowa, Kampala, Uganda — East Africa's most important gold trading hub. We have been connecting serious investors, institutions, and jewellery manufacturers with certified African gold bars since our founding, building a reputation as the region's most transparent, reliable, and well-documented gold supplier.
              </p>

              <div className="highlight-box">
                "We do not simply sell gold bars. We supply certainty — every gram independently assayed, every shipment insured, every document prepared to the standard that international banks and customs authorities require."
              </div>

              <p className="body-text">
                Our position in Kampala gives us direct access to Uganda's licensed gold mining and refinery network, including the African Gold Refinery (AGR) in Entebbe — East Africa's largest gold refining facility. This proximity means our clients receive <Link to="/gold-bars-for-sale" style={{ color: 'var(--gold)', fontWeight: 600 }}>certified 24K gold bars</Link> at mine-direct pricing, without the distribution markups that inflate the cost of gold at US or European retail dealers by 6–11%.
              </p>
              <p className="body-text">
                Beyond Uganda, our sourcing network spans Ghana, Tanzania, the DRC, Mali, and South Africa — giving international buyers access to <Link to="/gold-bars-for-sale" style={{ color: 'var(--gold)', fontWeight: 600 }}>the full African gold market</Link> through a single verified partner with a consistent documentation and compliance standard.
              </p>

              <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-gold">
                  Buy Direct from Miners →
                </Link>
                <Link to="/gold-bars-for-sale" className="btn btn-outline btn-sm">
                  Best Gold Dealers Africa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           OUR VALUES
      ══════════════════════════════════ */}
      <section className="section s-fog" aria-labelledby="values-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div className="eyebrow">Our Core Values</div>
            <h2 className="h2" id="values-title">What Makes Gold Africa Different</h2>
            <p className="lead" style={{ margin: '14px auto 0', textAlign: 'center', maxWidth: '600px' }}>
              Every licensed gold dealer in Africa claims to be trustworthy. Here is what Gold Africa does that most others do not.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="v-icon">🔬</div>
              <h3>Independent XRF Assay Before Payment</h3>
              <p>
                We conduct live video XRF purity testing on your specific gold consignment — you watch 999.9 fineness confirmed on screen via WhatsApp or Zoom before you send a single dollar. No other African gold dealer offers this as standard. This is our most important differentiator and the reason our clients reorder without hesitation.
              </p>
            </div>
            <div className="value-card">
              <div className="v-icon">📄</div>
              <h3>Complete Bankable Documentation</h3>
              <p>
                Certificate of Origin, independent assay certificate, commercial invoice, packing list, AML/KYC documentation, and all country-specific export permits — prepared to the exact standard required by US CBP, EU customs, UAE DMCC, and international banks. No missing documents. No import delays. Every time.
              </p>
            </div>
            <div className="value-card">
              <div className="v-icon">💰</div>
              <h3>Mine-Direct Pricing — 1.5–3% Above Spot</h3>
              <p>
                We price our certified African gold bars at 1.5–3% above the LBMA spot — compared to 6–11% at US or European retail dealers. On a 1kg gold bar at June 2026 prices of $139,390/kg, our pricing saves you <strong>$5,000–$11,000 USD per kilogram</strong>. This is the direct mine-supply advantage that our position in Kampala uniquely provides.
              </p>
            </div>
            <div className="value-card">
              <div className="v-icon">🚛</div>
              <h3>Insured Brinks Cargo to Your Door</h3>
              <p>
                All gold shipments travel with Brinks International or Malca-Amit insured armoured cargo, GPS-tracked from Entebbe International Airport to your delivery address. Full declared-value insurance through Lloyd's of London or equivalent. 4–10 business days to USA, UK, UAE, and Europe.
              </p>
            </div>
            <div className="value-card">
              <div className="v-icon">🌍</div>
              <h3>Pan-African Sourcing Network</h3>
              <p>
                Our supply relationships span Uganda, Ghana, Tanzania, the DRC, Mali, and South Africa — giving buyers access to every major African gold-producing nation through one verified partner. Whether you need Ghana's GoldBod-certified bars, Tanzania TMC-regulated gold, or DRC artisanal dore, we source it compliantly.
              </p>
            </div>
            <div className="value-card">
              <div className="v-icon">🛡️</div>
              <h3>Full AML & OECD Compliance</h3>
              <p>
                Every transaction we handle is AML/KYC compliant, with full counterparty verification and OECD Due Diligence documentation where required. Our compliance framework meets the standards of US FINCEN, EU AMLD, and UAE CBUAE — making our gold bankable in every regulated financial market on the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           MISSION STATEMENT
      ══════════════════════════════════ */}
      <section className="section s-dark" aria-labelledby="mission-title">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="split">
            <div>
              <div className="eyebrow" style={{ color: 'var(--gold-lt)' }}>Our Mission</div>
              <h2 className="h2 h2-w" id="mission-title">
                Making African Gold Investment Safe, Accessible, and Profitable
              </h2>
              <p className="lead-w" style={{ margin: '20px 0' }}>
                Our mission is to close the gap between Africa's extraordinary gold wealth and the international investors, jewellery manufacturers, and institutions who want to access it — safely, legally, and at the most competitive prices available anywhere in the world.
              </p>
              <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.78, marginBottom: '28px' }}>
                For too long, international buyers have paid 6–11% retail premiums to access African gold through Western distribution chains. For too long, they have been burned by unverified dealers, missing documentation, and customs complications. Gold Africa exists to solve all three problems simultaneously — with direct mine access, independent assay, and bankable compliance documentation as standard features of every transaction, not optional add-ons.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-md)', padding: '18px' }}>
                  <strong style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: 'var(--gold-lt)', display: 'block', marginBottom: '4px' }}>
                    $139.39
                  </strong>
                  <span style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.45)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                    Per gram 24K · June 2026
                  </span>
                </div>
                <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-md)', padding: '18px' }}>
                  <strong style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: 'var(--gold-lt)', display: 'block', marginBottom: '4px' }}>
                    999.9
                  </strong>
                  <span style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.45)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                    Fineness · LBMA Standard
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 'var(--r-lg)', height: '420px', overflow: 'hidden' }}>
                <img
                  src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-nuggetd.jpeg"
                  alt="Gold nuggets Africa — Gold Africa certified artisanal gold"
                  style={{ height: '100%', objectFit: 'cover', width: '100%', transition: 'transform .7s' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           OUR PRODUCTS
      ══════════════════════════════════ */}
      <section className="section s-white" aria-labelledby="products-title">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '44px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="eyebrow">What We Supply</div>
              <h2 className="h2" id="products-title">Our Gold Bar Products</h2>
              <p className="lead" style={{ marginTop: '12px', maxWidth: '540px' }}>
                Every product we supply is independently assayed, fully documented, and priced at 1.5–3% above the live LBMA spot rate.
              </p>
            </div>
            <Link to="/gold-bars-for-sale" className="btn btn-outline btn-sm">
              All Products →
            </Link>
          </div>

          <div className="products-strip">
            <Link to="/1kg-gold-bars-for-sale" className="ps-card">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
                alt="24K gold bars for sale Africa — 999 fineness investment bars from Uganda"
                loading="lazy"
              />
              <div className="ps-overlay"></div>
              <div className="ps-content">
                <span className="ps-tag">Best Seller</span>
                <strong>24K Gold Bars — 999 Fineness</strong>
                <span>From $139.39/gram · LBMA standard · all weights</span>
                <div className="ps-link">View product →</div>
              </div>
            </Link>

            <Link to="/22k-gold-for-sale" className="ps-card">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
                alt="22K gold bars for sale — 916 fineness jewellery grade African gold"
                loading="lazy"
              />
              <div className="ps-overlay"></div>
              <div className="ps-content">
                <span className="ps-tag" style={{ background: 'var(--brown)' }}>Jewellery Grade</span>
                <strong>22K Gold Bars — 916 Fineness</strong>
                <span>From $127.81/gram · ideal for manufacturing</span>
                <div className="ps-link">View product →</div>
              </div>
            </Link>

            <Link to="/buy-gold-nuggets-from-africa" className="ps-card">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-nuggetd.jpeg"
                alt="African gold nuggets for sale — natural placer gold Uganda Tanzania Ghana"
                loading="lazy"
              />
              <div className="ps-overlay"></div>
              <div className="ps-content">
                <span className="ps-tag" style={{ background: 'var(--stone)' }}>Natural</span>
                <strong>Gold Nuggets from Africa</strong>
                <span>88–96% natural purity · collector premium</span>
                <div className="ps-link">View product →</div>
              </div>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px', marginTop: '16px' }}>
            <Link
              to="/18k-gold-bars-for-sale"
              style={{ padding: '18px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', transition: 'all .2s', background: 'var(--white)' }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '7px' }}>✨</div>
              <strong style={{ fontSize: '.85rem', color: 'var(--dark)', display: 'block', fontWeight: 700, marginBottom: '2px' }}>
                18K Gold Bars
              </strong>
              <span style={{ fontSize: '.72rem', color: 'var(--stone)' }}>750 fineness · from $104.65/g</span>
            </Link>

            <Link
              to="/gold-dore-bars-for-sale"
              style={{ padding: '18px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', transition: 'all .2s', background: 'var(--white)' }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '7px' }}>⚗️</div>
              <strong style={{ fontSize: '.85rem', color: 'var(--dark)', display: 'block', fontWeight: 700, marginBottom: '2px' }}>
                Gold Dore Bars
              </strong>
              <span style={{ fontSize: '.72rem', color: 'var(--stone)' }}>Semi-refined · best price/gram</span>
            </Link>

            <Link
              to="/buy-raw-gold-dust-online"
              style={{ padding: '18px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', transition: 'all .2s', background: 'var(--white)' }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '7px' }}>💛</div>
              <strong style={{ fontSize: '.85rem', color: 'var(--dark)', display: 'block', fontWeight: 700, marginBottom: '2px' }}>
                Raw Gold Dust
              </strong>
              <span style={{ fontSize: '.72rem', color: 'var(--stone)' }}>Artisanal · for refiners</span>
            </Link>

            <Link
              to="/1-oz-gold-bar-for-sale"
              style={{ padding: '18px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)', textAlign: 'center', transition: 'all .2s', background: 'var(--white)' }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '7px' }}>🥇</div>
              <strong style={{ fontSize: '.85rem', color: 'var(--dark)', display: 'block', fontWeight: 700, marginBottom: '2px' }}>
                1 oz Gold Bar
              </strong>
              <span style={{ fontSize: '.72rem', color: 'var(--stone)' }}>~$4,335 · entry investment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           HOW WE WORK / PROCESS
      ══════════════════════════════════ */}
      <section className="section s-pale" aria-labelledby="process-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="eyebrow">Our Process</div>
            <h2 className="h2" id="process-title">How Buying Gold from Gold Africa Works</h2>
            <p className="lead" style={{ margin: '14px auto 0', textAlign: 'center', maxWidth: '580px' }}>
              A straightforward, documented, fraud-proof process — designed to protect your capital at every step from first contact to delivery.
            </p>
          </div>

          <div className="process-grid">
            <div className="pstep">
              <div className="pstep-num">1</div>
              <h4>Submit Your Enquiry</h4>
              <p>
                Contact us with your gold type, purity (24K, 22K, or 18K), weight, and destination country. We respond with a live USD proforma invoice within 2 hours, all costs itemised transparently.
              </p>
            </div>
            <div className="pstep">
              <div className="pstep-num">2</div>
              <h4>Live Video XRF Assay</h4>
              <p>
                Before any payment, we conduct a live WhatsApp or Zoom XRF purity test on your specific consignment. You watch 999.9 fineness confirmed in real time. Payment only follows your confirmation.
              </p>
            </div>
            <div className="pstep">
              <div className="pstep-num">3</div>
              <h4>Secure Bank Wire Payment</h4>
              <p>
                Bank wire transfer in USD to our registered company account. Escrow via Escrow.com available for orders above $50,000 USD. No informal payments, no cash transfers, no unverified channels.
              </p>
            </div>
            <div className="pstep">
              <div className="pstep-num">4</div>
              <h4>Insured Delivery to Your Door</h4>
              <p>
                Full export documentation prepared, then Brinks insured cargo from Entebbe Airport to your address. GPS tracking throughout. 4–10 business days to USA, UK, UAE, and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           EXPERTISE & TEAM
      ══════════════════════════════════ */}
      <section className="section s-white" aria-labelledby="expertise-title">
        <div className="wrap">
          <div className="expertise-grid">
            <div className="exp-img">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
                alt="Gold Africa team expertise Uganda Kampala gold trading"
                loading="lazy"
              />
            </div>
            <div>
              <div className="eyebrow">Our Expertise</div>
              <h2 className="h2" id="expertise-title">8 Years of African Gold Market Knowledge — At Your Service</h2>
              <p className="lead" style={{ margin: '16px 0 0' }}>
                Gold Africa was built by people who have spent their careers inside Africa's gold supply chain — from mine sites in Busia and Karamoja to export documentation offices in Kampala to delivery handoffs at Entebbe International Airport.
              </p>
              <div className="exp-list">
                <div className="exp-item">
                  <div className="exp-icon">⛏️</div>
                  <div>
                    <h4>Direct Mine Relationships — Uganda, Ghana, Tanzania, DRC</h4>
                    <p>
                      We maintain established sourcing relationships with licensed mines and cooperatives across Africa's four major gold-producing clusters. This means supply consistency, competitive pricing, and provenance documentation that informal brokers cannot provide.
                    </p>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-icon">🏛️</div>
                  <div>
                    <h4>Licensed Under Uganda's Mining and Minerals Act 2022</h4>
                    <p>
                      We operate under current DGSM (Directorate of Geological Survey and Mines) licensing, are fully registered with Uganda Revenue Authority, and comply with Uganda's AML Act — giving our documentation the legal standing that international banks require.
                    </p>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-icon">🌐</div>
                  <div>
                    <h4>International Market Intelligence</h4>
                    <p>
                      Our team tracks LBMA spot rates, USD/UGX exchange movements, African regulatory changes, and destination country import requirements for the USA, UK, UAE, Canada, and Germany — so your gold purchase is optimally timed and fully compliant at both ends.
                    </p>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-icon">🤝</div>
                  <div>
                    <h4>Multilingual Client Support — English, French, Arabic</h4>
                    <p>
                      Our support team handles enquiries in English, French, and Arabic — covering our primary buyer markets across East Africa, West Africa, the Gulf, and Europe. 24/7 availability via WhatsApp ensures no time zone is underserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           CERTIFICATIONS & COMPLIANCE
      ══════════════════════════════════ */}
      <section className="section s-fog" aria-labelledby="cert-title">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow">Compliance & Credentials</div>
            <h2 className="h2" id="cert-title">The Standards We Meet — So Your Gold Clears Customs Worldwide</h2>
            <p className="lead" style={{ margin: '14px auto 0', textAlign: 'center', maxWidth: '600px' }}>
              Certification is not a marketing claim at Gold Africa — it is the foundation of every transaction we execute.
            </p>
          </div>
          <div className="cert-grid">
            <div className="cert-card">
              <span className="cert-icon">🏅</span>
              <h4>DGSM Licensed Dealer</h4>
              <p>Full current licensing from Uganda's Directorate of Geological Survey and Mines — the primary mineral trading regulatory authority in Uganda.</p>
            </div>
            <div className="cert-card">
              <span className="cert-icon">🔬</span>
              <h4>SGS / Bureau Veritas Assay</h4>
              <p>Every shipment is independently XRF-tested by SGS or Bureau Veritas — internationally recognised accredited assay laboratories, not internal testing.</p>
            </div>
            <div className="cert-card">
              <span className="cert-icon">🌍</span>
              <h4>OECD Due Diligence</h4>
              <p>Full OECD Guidance supply chain documentation for conflict-affected area minerals — required for US, EU, and UAE regulated market import compliance.</p>
            </div>
            <div className="cert-card">
              <span className="cert-icon">🏦</span>
              <h4>AML/KYC Compliant</h4>
              <p>All transactions comply with Uganda's Anti-Money Laundering Act, US FINCEN standards, EU AMLD directives, and UAE CBUAE precious metals requirements.</p>
            </div>
            <div className="cert-card">
              <span className="cert-icon">📜</span>
              <h4>Certificate of Origin</h4>
              <p>Every gold shipment carries an authenticated Certificate of Origin confirming provenance — essential for duty-free import classification in the USA and EU.</p>
            </div>
            <div className="cert-card">
              <span className="cert-icon">🚚</span>
              <h4>Brinks / Malca-Amit Insured</h4>
              <p>All cargo ships with internationally recognised insured armoured courier services — full declared-value insurance, GPS tracking, and chain-of-custody documentation.</p>
            </div>
            <div className="cert-card">
              <span className="cert-icon">🤝</span>
              <h4>URA Tax Compliance</h4>
              <p>All export transactions are registered with Uganda Revenue Authority, with tax compliance documentation included in every shipment's documentation package.</p>
            </div>
            <div className="cert-card">
              <span className="cert-icon">🌐</span>
              <h4>ICGLR Chain of Custody</h4>
              <p>For minerals from the Great Lakes region, our supply chain meets ICGLR (International Conference of the Great Lakes Region) certification requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           FINAL CTA + CONTACT
      ══════════════════════════════════ */}
      <section className="final-cta" aria-label="Contact Gold Africa">
        <div className="fca-inner">
          <div>
            <h2>Ready to Buy Certified Gold Bars from Africa?</h2>
            <p>
              Gold Africa has connected hundreds of investors, jewellery manufacturers, and institutions with certified African gold bars at mine-direct pricing. At today's live rate of <strong style={{ color: 'var(--gold-lt)' }}>$139.39/gram ($139,390/kg)</strong>, gold remains one of the world's most compelling investment assets — and buying direct from Africa saves you thousands per kilogram versus Western retail channels.
            </p>
            <p>
              Whether you want to buy <Link to="/gold-bars-for-sale" style={{ color: 'var(--gold-lt)', fontWeight: 600 }}>24K gold bars</Link>, source <Link to="/buy-gold-nuggets-from-africa" style={{ color: 'var(--gold-lt)', fontWeight: 600 }}>gold nuggets from Africa</Link>, purchase <Link to="/gold-dore-bars-for-sale" style={{ color: 'var(--gold-lt)', fontWeight: 600 }}>gold dore bars for refining</Link>, or explore the full African gold catalog — our team is ready to build your custom quote today.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
              <Link to="/gold-bars-for-sale" className="btn btn-gold">
                🪙 Shop All Gold Bars
              </Link>
              <Link to="/services" className="btn btn-outline-white">
                Buy Direct from Miners →
              </Link>
            </div>
          </div>

          <div className="contact-panel">
            <h4>Get In Touch</h4>
            <div className="contact-row">
              <div className="cr-icon">📜</div>
              <div>
                <div className="cr-label">Company Registration</div>
                <div className="cr-val" style={{ fontFamily: 'monospace', fontWeight: 700 }}>80020000702132</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="cr-icon">📍</div>
              <div>
                <div className="cr-label">Physical Office</div>
                <div className="cr-val">Lubowa, Kampala, Uganda</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="cr-icon">📞</div>
              <div>
                <div className="cr-label">WhatsApp / Phone</div>
                <div className="cr-val">
                  <a href="https://wa.me/256754681378" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>+256 754 681378</a> (24/7 Available)
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="cr-icon">✉️</div>
              <div>
                <div className="cr-label">Email</div>
                <div className="cr-val">
                  <a href="mailto:info@goldafric.com" style={{ color: 'inherit' }}>info@goldafric.com</a>
                </div>
              </div>
            </div>
            <div className="contact-row" style={{ marginBottom: 0 }}>
              <div className="cr-icon">🌐</div>
              <div>
                <div className="cr-label">Global Shipping From</div>
                <div className="cr-val">Entebbe International Airport, Uganda</div>
              </div>
            </div>
            <div className="response-box">
              <strong>2 Hours</strong>
              <span>Response time on all enquiries</span>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '14px' }}
            >
              📋 Request Official Quote Now →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
