import React from 'react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div>
      {/* ──────── HERO / OPENER ──────── */}
      <section className="page-hero" aria-label="About Gold Bar Suppliers Africa hero">
        <div className="ph-bg" aria-hidden="true"></div>
        <div className="ph-veil" aria-hidden="true"></div>

        <div className="ph-inner">
          <div>
            <div className="ph-badge">
              <span></span>
              Africa's Most Trusted Gold Bar Supplier
            </div>

            <h1>
              Africa's <em>Trusted</em><br />
              Gold Bar Supplier
            </h1>

            <p className="ph-sub">
              Based in Kampala, Uganda — Gold Bar Suppliers Ltd connects serious investors, jewelers, and institutions worldwide with certified, conflict-free African gold bars direct from the source.
            </p>

            <div className="ph-actions">
              <Link to="/gold-bars-for-sale" className="btn btn-gold">
                View Gold Bars
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Right side card */}
          <div className="ph-card">
            <h3>Gold Bar Suppliers Ltd</h3>
            <p className="sub">Kampala, Uganda · Registered Gold Exporter</p>

            <div className="stat-row">
              <div className="stat-box">
                <strong>8+</strong>
                <span>Years in Gold Trade</span>
              </div>
              <div className="stat-box">
                <strong>100%</strong>
                <span>Purity Guaranteed</span>
              </div>
            </div>

            <div className="location-box">
              <div className="loc-icon">📍</div>
              <div>
                <div className="loc-title">Office & Showroom</div>
                <div className="loc-sub">
                  Acacia Mall & Kajokya Street, Kamokya, Kampala, Uganda · Licensed by DGSM Uganda
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', marginTop: '18px', padding: '15px' }}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* ──────── WHO WE ARE ──────── */}
      <section className="section s-white">
        <div className="wrap">
          <div className="split">
            <div className="split-img">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
                alt="Certified African Gold Bars"
              />
              <div className="split-badge">
                <strong>8+</strong>
                <span>Years Serving<br />Global Buyers</span>
              </div>
            </div>

            <div>
              <div className="eyebrow">Who We Are</div>
              <h2 className="h2" style={{ marginBottom: '18px' }}>
                Connecting Global Wealth to Africa's Richest Gold Deposits
              </h2>
              <p className="body-text">
                Gold Bar Suppliers Ltd was founded to solve a major challenge facing international gold investors: how to buy genuine, certified gold bars directly from African producers safely, legally, and without extortionate intermediary broker markups.
              </p>
              <p className="body-text">
                Operating out of our executive offices in Kamokya, Kampala, we maintain direct contracts with artisanal mining cooperatives and commercial refiners in Uganda, Tanzania, Ghana, and the DRC. Every shipment undergoes independent XRF spectrometry and fire assay verification before funds are disbursed.
              </p>

              <div className="highlight-box">
                "We believe buying physical gold from Africa should be transparent, certified, and risk-free for international investors and bullion dealers."
              </div>

              <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
                <Link to="/gold-bars-for-sale" className="btn btn-gold">
                  Explore Products →
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Visit Our Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── NUMBERS BAND ──────── */}
      <section className="numbers-band">
        <div className="nb-inner">
          <div className="nb-item">
            <span className="nb-num">999.9</span>
            <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              Investment Purity
            </span>
          </div>
          <div className="nb-item">
            <span className="nb-num">40+</span>
            <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              Countries Served
            </span>
          </div>
          <div className="nb-item">
            <span className="nb-num">&lt;2h</span>
            <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              Response SLA
            </span>
          </div>
          <div className="nb-item">
            <span className="nb-num">100%</span>
            <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              OECD & AML Compliant
            </span>
          </div>
        </div>
      </section>

      {/* ──────── CORE VALUES ──────── */}
      <section className="section s-fog">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow">Our Principles</div>
            <h2 className="h2">Built on Integrity, Trust & Provenance</h2>
            <p className="lead" style={{ margin: '12px auto 0', textAlign: 'center' }}>
              We set the standard for African mineral exports through uncompromised compliance and professional international logistics.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="v-icon">🔬</div>
              <h3>Independent Laboratory Assays</h3>
              <p>
                We do not ask buyers to take our word for it. Every parcel is verified through dual-source XRF spectrometry and fire assay by accredited laboratories including SGS and Bureau Veritas.
              </p>
            </div>
            <div className="value-card">
              <div className="v-icon">📄</div>
              <h3>100% Clean Provenance</h3>
              <p>
                We enforce zero-tolerance for conflict minerals or child labor. All our consignments include certified Certificates of Origin and ICGLR regional tracking tags.
              </p>
            </div>
            <div className="value-card">
              <div className="v-icon">🚛</div>
              <h3>Insured Armored Cargo</h3>
              <p>
                Shipments are transported via Brinks Global Services or Malca-Amit with 100% replacement insurance underwritten by Lloyds, delivering safely to your destination airport.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
