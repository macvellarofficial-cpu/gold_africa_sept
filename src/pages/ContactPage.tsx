import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [product, setProduct] = useState('24K Gold Bars (999.9)');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ── HERO BANNER ── */}
      <section className="contact-hero" aria-label="Contact hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Get In Touch</div>
          <h1>
            Contact <em>Gold Bar Suppliers</em> Ltd
          </h1>
          <p>
            Whether you have questions about our gold purity, export documentation, pricing, or want to place an order — our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Contact</span>
        </div>
      </div>

      {/* ── MAIN CONTACT LAYOUT ── */}
      <div className="contact-main">
        {/* Form Side */}
        <div className="form-side">
          <div className="section-label">Direct Enquiry</div>
          <h2>Send Us a Message</h2>
          <p className="sub">
            Fill in the form below and a member of our trade team will respond within 2 hours with all the information you need.
          </p>

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
                    <option value="1kg Kilobars">1kg Gold Bars (Kilobars)</option>
                    <option value="Gold Dore Bars">Gold Doré Bars (Semi-Refined)</option>
                    <option value="22K Jewellery Bars">22K Gold Bars (916 Fineness)</option>
                    <option value="1 oz Minted Bar">1 oz Gold Bars</option>
                    <option value="Natural Gold Nuggets">African Gold Nuggets</option>
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
                <label>Your Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide any additional specifications, incoterm preference (CIF / FOB), or timeline..."
                ></textarea>
              </div>

              <input type="submit" value="Submit Enquiry →" />

              <div className="form-assurance">
                <div className="assurance-item">Response within 2 hours</div>
                <div className="assurance-item">No commitment required</div>
                <div className="assurance-item">Strict confidentiality (NDA)</div>
              </div>
            </form>
          ) : (
            <div style={{ padding: '24px', background: '#eaf5ee', border: '1.5px solid #2E6044', borderRadius: '8px', color: '#1A3D28' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem', fontWeight: 700 }}>
                ✓ Enquiry Successfully Received
              </h3>
              <p style={{ margin: 0, fontSize: '.92rem', lineHeight: 1.6 }}>
                Thank you, <strong>{name}</strong>. Your enquiry regarding <strong>{product}</strong> has been assigned to our senior trade officer. We will email your proforma to <strong>{email}</strong> within 2 hours.
              </p>
            </div>
          )}
        </div>

        {/* Info Side */}
        <div className="info-side">
          <div className="info-card">
            <div className="info-card-img">
              <img
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
                alt="Gold Bar Suppliers Kampala Office"
              />
            </div>

            <div className="info-card-body">
              <h3>Kampala Headquarters</h3>
              <p className="tagline">
                Licensed Gold Dealer & Exporter · Republic of Uganda
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-item-label">Physical Address</div>
                    <div className="contact-item-value">
                      Kajokya Street, Kamokya, Kampala, Uganda
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✈️</div>
                  <div>
                    <div className="contact-item-label">Departure Airport</div>
                    <div className="contact-item-value">
                      Entebbe International Airport (EBB, ~40km)
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-item-label">WhatsApp / Hotline</div>
                    <div className="contact-item-value">
                      <a href="https://wa.me/256730763340">+256 730 763340</a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <div className="contact-item-label">Email Address</div>
                    <div className="contact-item-value">
                      <a href="mailto:info@goldbarsuppliers.com">info@goldbarsuppliers.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-divider"></div>

              <div className="hours-table">
                <div className="contact-item-label" style={{ marginBottom: '8px' }}>
                  Office Hours (EAT)
                </div>
                <div className="hours-row">
                  <span>Monday – Friday</span>
                  <span>8:00 AM – 6:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span>9:00 AM – 2:00 PM</span>
                </div>
                <div className="hours-row" style={{ borderBottom: 'none' }}>
                  <span>Sunday / Online</span>
                  <span style={{ color: 'var(--gold-lt)' }}>24/7 WhatsApp Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
