import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';

interface ContactPageProps {
  onOpenQuoteModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [product, setProduct] = useState('24K Gold Bars (999.9)');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="contact-page-wrapper">
      {/* ════════════════════════════════════════
           HERO BANNER
      ════════════════════════════════════════════ */}
      <section className="contact-hero" aria-label="Contact Gold Bar Suppliers Ltd">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Get in Touch</div>
          <h1>
            Contact <em>Gold Bar Suppliers</em> Ltd
          </h1>
          <p>
            Certified 24K, 22K &amp; 18K gold bar enquiries, export documentation, live pricing, and wholesale orders — our team responds within 2 hours.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Contact Us</span>
        </div>
      </nav>

      {/* ════════════════════════════════════════
           MAIN — FORM + INFO
      ════════════════════════════════════════════ */}
      <div className="contact-main">
        {/* ── LEFT: CONTACT FORM ── */}
        <div className="form-side">
          <div className="section-label">Send Us a Message</div>
          <h2>
            Enquire About Gold Bars,<br />Pricing &amp; Export
          </h2>
          <p className="sub">
            Whether you are a first-time gold investor, a wholesale buyer, a jewellery manufacturer, or an importer looking for certified African gold bars — fill in the form below and one of our gold specialists will respond within 2 hours with a live quote, assay details, and shipping options.
          </p>

          <div className="cf7-box">
            <div className="cf7-box-title">Request a Gold Quote</div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="wpcf7-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+256 700 000000"
                    />
                  </div>
                  <div className="form-group">
                    <label>Country of Origin / Destination *</label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Product of Interest</label>
                    <select
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                    >
                      <option value="24K Gold Bars (999.9)">24K Pure Gold Bars (999.9)</option>
                      <option value="1kg Gold Bars (Kilobars)">1kg Gold Bars (Kilobars)</option>
                      <option value="Gold Dore Bars (Semi-Refined)">Gold Doré Bars (Semi-Refined)</option>
                      <option value="22K Gold Bars (916 Fineness)">22K Gold Bars (916 Fineness)</option>
                      <option value="1 oz Minted Bar">1 oz Gold Bars</option>
                      <option value="African Gold Nuggets">African Gold Nuggets</option>
                      <option value="Raw Gold Dust">Raw Gold Dust</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Target Quantity (kg / oz)</label>
                    <input
                      type="text"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 1kg, 5kg, 20oz"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message (optional)</label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide any additional specifications, incoterm preference (CIF / FOB), or timeline..."
                  ></textarea>
                </div>

                <input
                  type="submit"
                  disabled={isSubmitting}
                  value={isSubmitting ? 'Submitting...' : 'Submit Enquiry — Get Quote Within 2 Hours →'}
                />
              </form>
            ) : (
              <div style={{ padding: '24px', background: '#eaf5ee', border: '1.5px solid #2E6044', borderRadius: '8px', color: '#1A3D28' }}>
                <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem', fontWeight: 700 }}>
                  ✓ Enquiry Successfully Received
                </h3>
                <p style={{ margin: 0, fontSize: '.92rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{name}</strong>. Your enquiry regarding <strong>{product}</strong> has been assigned to our trade desk. We will email your itemised proforma to <strong>{email}</strong> within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '16px', background: 'transparent', border: '1px solid #2E6044', color: '#2E6044', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '.85rem' }}
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          <div className="form-assurance">
            <div className="assurance-item">Response within 2 hours</div>
            <div className="assurance-item">No commitment required</div>
            <div className="assurance-item">Live pricing provided</div>
            <div className="assurance-item">100% confidential</div>
          </div>
        </div>

        {/* ── RIGHT: CONTACT INFO CARD ── */}
        <div className="info-side">
          <div className="info-card">
            {/* Card hero image */}
            <div className="info-card-img">
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2026/06/Where-to-Buy-Gold-in-Sudan.webp"
                alt="Gold Bar Suppliers Ltd — Kajokya Street Kampala Uganda office"
                fallbackCategory="vault"
                loading="lazy"
              />
            </div>

            <div className="info-card-body">
              <h3>Gold Bar Suppliers Ltd</h3>
              <p className="tagline">
                Africa's certified gold bar dealer — connecting international investors with pure African gold since 2010.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">
                      <a href="mailto:info@goldbarsuppliers.com">info@goldbarsuppliers.com</a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-item-label">Phone / WhatsApp</div>
                    <div className="contact-item-value">
                      <a href="tel:+256730763340">+256 730 763340</a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-item-label">Office Address</div>
                    <div className="contact-item-value">
                      Kajokya Street, Kamokya<br />
                      Kampala, Uganda
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🌍</div>
                  <div>
                    <div className="contact-item-label">International Shipping</div>
                    <div className="contact-item-value">
                      USA · UK · UAE · Europe · Asia<br />
                      <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.45)' }}>
                        Brinks insured cargo · GPS tracked
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-divider"></div>

              {/* Office Hours */}
              <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-lt)', marginBottom: '12px' }}>
                Office Hours
              </div>
              <div className="hours-table">
                <div className="hours-row">
                  <span className="day">Monday – Friday</span>
                  <span className="time">8:00 AM – 6:00 PM EAT</span>
                </div>
                <div className="hours-row">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM – 4:00 PM EAT</span>
                </div>
                <div className="hours-row closed">
                  <span className="day">Sunday</span>
                  <span className="time">WhatsApp only</span>
                </div>
                <div className="hours-row" style={{ marginTop: '8px', borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: '10px' }}>
                  <span className="day" style={{ color: 'var(--gold-lt)', fontWeight: 700 }}>📞 Emergency / WhatsApp</span>
                  <span className="time">24/7 available</span>
                </div>
              </div>

              <div className="info-divider"></div>

              {/* Quick links */}
              <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-lt)', marginBottom: '14px' }}>
                Quick Product Links
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Link to="/gold-bars-for-sale" style={{ background: 'rgba(201,150,43,.15)', border: '1px solid rgba(201,150,43,.3)', color: 'var(--gold-lt)', fontSize: '.73rem', fontWeight: 600, padding: '5px 12px', borderRadius: '100px' }}>
                  24K Gold Bars
                </Link>
                <Link to="/22k-gold-for-sale" style={{ background: 'rgba(201,150,43,.15)', border: '1px solid rgba(201,150,43,.3)', color: 'var(--gold-lt)', fontSize: '.73rem', fontWeight: 600, padding: '5px 12px', borderRadius: '100px' }}>
                  22K Gold Bars
                </Link>
                <Link to="/18k-gold-bars-for-sale" style={{ background: 'rgba(201,150,43,.15)', border: '1px solid rgba(201,150,43,.3)', color: 'var(--gold-lt)', fontSize: '.73rem', fontWeight: 600, padding: '5px 12px', borderRadius: '100px' }}>
                  18K Gold Bars
                </Link>
                <Link to="/buy-gold-nuggets-from-africa" style={{ background: 'rgba(201,150,43,.15)', border: '1px solid rgba(201,150,43,.3)', color: 'var(--gold-lt)', fontSize: '.73rem', fontWeight: 600, padding: '5px 12px', borderRadius: '100px' }}>
                  Gold Nuggets
                </Link>
                <Link to="/gold-dore-bars-for-sale" style={{ background: 'rgba(201,150,43,.15)', border: '1px solid rgba(201,150,43,.3)', color: 'var(--gold-lt)', fontSize: '.73rem', fontWeight: 600, padding: '5px 12px', borderRadius: '100px' }}>
                  Dore Bars
                </Link>
                <Link to="/gold-bars-for-sale" style={{ background: 'rgba(201,150,43,.15)', border: '1px solid rgba(201,150,43,.3)', color: 'var(--gold-lt)', fontSize: '.73rem', fontWeight: 600, padding: '5px 12px', borderRadius: '100px' }}>
                  All Products
                </Link>
              </div>
            </div>
          </div>

          {/* Second info image card */}
          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
                alt="Certified African gold bars for international export — Gold Bar Suppliers Ltd"
                fallbackCategory="bars"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(26,18,0,.6) 0%,transparent 55%)' }}></div>
              <div style={{ position: 'absolute', bottom: '14px', left: '16px', right: '16px' }}>
                <span style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-lt)' }}>
                  Certified · Insured · Documented
                </span>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1rem', fontWeight: 700, color: '#fff', marginTop: '3px' }}>
                  Every shipment fully covered
                </p>
              </div>
            </div>
            <div style={{ padding: '20px', background: 'var(--gold-pale)' }}>
              <p style={{ fontSize: '.82rem', color: 'var(--stone)', lineHeight: 1.65 }}>
                All gold bars leave our facilities with an <strong style={{ color: 'var(--dark)' }}>independent SGS or Bureau Veritas assay certificate</strong>, Certificate of Origin, export documentation, and <strong style={{ color: 'var(--dark)' }}>Brinks insured cargo</strong> to your destination. Average delivery: 4–10 business days worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
           WHY CONTACT US STRIP
      ════════════════════════════════════════════ */}
      <section className="why-strip" aria-label="Why contact Gold Bar Suppliers Ltd">
        <div className="why-strip-inner">
          <div className="why-item">
            <span className="why-icon">⚡</span>
            <h4>2-Hour Response</h4>
            <p>Every enquiry receives a live USD quote with itemised costs within 2 business hours — 7 days a week.</p>
          </div>
          <div className="why-item">
            <span className="why-icon">🔬</span>
            <h4>Live Video Assay</h4>
            <p>For orders above $5,000 USD, we conduct a live WhatsApp XRF purity test before you send any payment.</p>
          </div>
          <div className="why-item">
            <span className="why-icon">📄</span>
            <h4>Full Documentation</h4>
            <p>Assay certificate, Certificate of Origin, AML/KYC docs, and all export permits included with every order.</p>
          </div>
          <div className="why-item">
            <span className="why-icon">🚛</span>
            <h4>Brinks Worldwide</h4>
            <p>Insured armoured cargo delivery with GPS tracking from Kampala to your door in 4–10 business days.</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           GOOGLE MAP
      ════════════════════════════════════════════ */}
      <section className="map-section" aria-labelledby="map-title">
        <div className="map-inner">
          <div className="map-header">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>
                <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'inline-block' }}></span>
                Find Us
              </div>
              <h2 id="map-title">Our Office Location</h2>
              <p>Kajokya Street, Kamokya, Kampala, Uganda &nbsp;·&nbsp; Near Kamokya Shopping Centre</p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kajokya+Street+Kamokya+Kampala+Uganda"
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions"
              aria-label="Get directions to Gold Bar Suppliers Ltd office"
            >
              📍 Get Directions
            </a>
          </div>

          <div className="map-frame-wrap">
            <iframe
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573!2d32.5698!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0e3e0f0001%3A0x6e0b0c0d0e0f0001!2sKajokya%20Street%2C%20Kamokya%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1718000000000!5m2!1sen!2sug"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gold Bar Suppliers Ltd office location — Kajokya Street Kampala Uganda"
              aria-label="Google Map showing Gold Bar Suppliers Ltd office at Kajokya Street, Kamokya, Kampala"
            ></iframe>
          </div>

          {/* Address cards below map */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginTop: '28px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>📍</span>
              <div>
                <strong style={{ display: 'block', fontSize: '.85rem', color: 'var(--dark)', marginBottom: '4px' }}>Street Address</strong>
                <span style={{ fontSize: '.8rem', color: 'var(--stone)', lineHeight: 1.6 }}>Kajokya Street, Kamokya<br />Kampala, Uganda</span>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>✈️</span>
              <div>
                <strong style={{ display: 'block', fontSize: '.85rem', color: 'var(--dark)', marginBottom: '4px' }}>Nearest Airport</strong>
                <span style={{ fontSize: '.8rem', color: 'var(--stone)', lineHeight: 1.6 }}>Entebbe International Airport (EBB)<br />~40 km from office</span>
              </div>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>🏦</span>
              <div>
                <strong style={{ display: 'block', fontSize: '.85rem', color: 'var(--dark)', marginBottom: '4px' }}>Nearby Landmark</strong>
                <span style={{ fontSize: '.8rem', color: 'var(--stone)', lineHeight: 1.6 }}>Kamokya Shopping Centre<br />Central Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           FAQ
      ════════════════════════════════════════════ */}
      <section className="faq-strip" aria-labelledby="faq-title">
        <div className="faq-inner">
          <div className="faq-header">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', justifyContent: 'center' }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'inline-block' }}></span>
              Common Questions
            </div>
            <h2 id="faq-title">Before You Contact Us</h2>
            <p>Quick answers to the most common questions from gold buyers worldwide.</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-q">What is the current gold bar price from Africa?</div>
              <p className="faq-a">
                As of June 2026, the 24K gold bar price is approximately $139.39/gram ($139,390/kg) at LBMA spot. Gold Bar Suppliers Ltd prices at 1.5–3% above spot. Contact us for a live quote — we update pricing in real time.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">How long does it take to receive a response?</div>
              <p className="faq-a">
                All enquiries submitted via the contact form or WhatsApp receive a response within 2 business hours Monday–Saturday. For urgent enquiries, WhatsApp (+256 730 763340) typically receives a faster response, often within 30 minutes during business hours.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">Can I visit your office in Kampala to buy gold?</div>
              <p className="faq-a">
                Yes — in-person buyers are welcome at our Kajokya Street, Kamokya, Kampala office. Please contact us to schedule an appointment before visiting. We recommend bringing a valid government ID and arriving during regular business hours (8 AM–6 PM EAT, Monday–Friday).
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">What information should I include in my enquiry?</div>
              <p className="faq-a">
                For a faster, more accurate quote: specify the gold type (24K/22K/18K), weight (grams/oz/kg), your destination country, intended use (investment/resale/jewellery), and your preferred payment and delivery timeline. The more detail you provide, the more precise the quote we can return within 2 hours.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">Do you offer wholesale pricing for large orders?</div>
              <p className="faq-a">
                Yes. Gold Bar Suppliers Ltd offers volume-based pricing for orders of 5kg and above. Orders of 50kg+ receive our most competitive rates — typically 1.5% above spot with reduced documentation fees. Contact us directly for wholesale pricing sheets and bulk order terms.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-q">What payment methods do you accept?</div>
              <p className="faq-a">
                We accept bank wire transfer (MT103) to our registered company account as the standard method. Escrow via Escrow.com is available for first-time buyers and orders above $50,000 USD. We do not accept informal payment methods (personal mobile money, unverified crypto) without full legal documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           CTA BOTTOM
      ════════════════════════════════════════════ */}
      <section className="cta-bottom" aria-label="Explore gold products">
        <div className="cta-bottom-inner">
          <div>
            <h2>Ready to Buy Certified African Gold Bars?</h2>
            <p>
              Browse our full range of certified 24K, 22K, and 18K gold bars, gold nuggets, gold dust, and dore bars — all sourced directly from Africa's most productive mines with full assay documentation and insured global delivery.
            </p>
          </div>
          <div className="cta-bottom-links">
            <Link to="/gold-bars-for-sale" className="cta-link-item">
              <span className="cta-link-icon">🥇</span>
              <div className="cta-link-text">
                <strong>24K Gold Bars for Sale Africa</strong>
                <span>999 fineness · investment grade · from $139.39/gram</span>
              </div>
            </Link>
            <Link to="/gold-bars-for-sale" className="cta-link-item">
              <span className="cta-link-icon">🪙</span>
              <div className="cta-link-text">
                <strong>All Gold Bars for Sale</strong>
                <span>24K, 22K, 18K · all weights · certified</span>
              </div>
            </Link>
            <Link to="/services" className="cta-link-item">
              <span className="cta-link-icon">⛏️</span>
              <div className="cta-link-text">
                <strong>Buy Gold Direct from Miners</strong>
                <span>Mine-direct pricing · best rates in Africa</span>
              </div>
            </Link>
            <Link to="/gold-bars-for-sale" className="cta-link-item">
              <span className="cta-link-icon">🌍</span>
              <div className="cta-link-text">
                <strong>Best Gold Dealers in Africa</strong>
                <span>Trusted network · licensed · OECD compliant</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
