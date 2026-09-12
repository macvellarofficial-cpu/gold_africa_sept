import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface RefineriesDirectoryPageProps {
  onOpenQuoteModal: (productSlug?: string) => void;
}

export const RefineriesDirectoryPage: React.FC<RefineriesDirectoryPageProps> = ({ onOpenQuoteModal }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="section s-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        {/* Breadcrumb */}
        <div style={{ fontSize: '.82rem', color: 'var(--stone)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Home</Link>
          {' '}&rsaquo;{' '}
          <span>African Gold Refinery (AGR Uganda)</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="content-sidebar-layout">
          <main style={{ minWidth: 0 }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', color: 'var(--dark)', lineHeight: 1.2, marginBottom: '20px' }}>
              <b>African Gold Refinery Uganda: An Ultimate Guide 2026</b>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              <strong>African Gold Refinery Limited</strong> (AGR), often referred to as African Gold Refinery Uganda or AGR Uganda, is a gold refining company headquartered in Entebbe, Uganda. Established in 2014 and officially commissioned in 2017, AGR operates one of the region’s early large-scale precious metals processing facilities.
            </p>

            <div style={{ margin: '24px 0', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2026/02/African-Gold-Refinery.webp?resize=732%2C488"
                alt="African Gold Refinery"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.85rem', color: 'var(--dark)', marginTop: '40px', marginBottom: '16px' }}>
              <b>About African Gold Refinery</b>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              African Gold Refinery Limited was incorporated in Uganda in 2014 as a private company focused on precious metals. The facility, located at Plot No. M103 & 106, Sebugwawo Road, Entebbe, was officially inaugurated on February 20, 2017, by President Yoweri Museveni.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              With an initial capacity designed to refine up to 219 tonnes of gold annually, AGR transformed Uganda into the undisputed bullion refining and transit nexus of Central and East Africa.
            </p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: 'var(--dark)', marginTop: '30px', marginBottom: '14px' }}>
              <b>Services & Capabilities</b>
            </h3>
            <ul style={{ paddingLeft: '20px', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '24px' }}>
              <li><strong>Chemical & Electrolytic Refining</strong>: Purifying raw dore into 999.9 investment-grade bullion bars.</li>
              <li><strong>Induction Smelting & Ingot Casting</strong>: Homogenizing raw placer nuggets into standard assayable cast bars.</li>
              <li><strong>XRF Spectrometry & Gravimetric Fire Assay</strong>: Multi-element precision testing for institutional compliance.</li>
              <li><strong>Secure Depository Vaulting</strong>: Heavy-gauge steel vaults adjacent to Entebbe International Airport (EBB).</li>
            </ul>

            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: 'var(--dark)', marginTop: '30px', marginBottom: '14px' }}>
              <b>How to Purchase Verified AGR Bullion Through Us</b>
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              Orange Investments Company Limited works directly with accredited refiners and licensed dealers in Entebbe to facilitate transparent, documented purchases of certified African gold bars. Every bar comes with independent SGS / Bureau Veritas assay certificates, Certificate of Origin, and insured Brinks cargo logistics.
            </p>

            <div style={{ marginTop: '36px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/gold-bars-for-sale" className="btn btn-gold">Browse 24K Bars →</Link>
              <Link to="/contact" className="btn btn-outline">Inquire on Sourcing</Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside style={{ background: 'var(--fog)', padding: '28px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '2px solid var(--gold)' }}>
              Refinery Inquiries
            </h2>

            {sent ? (
              <div style={{ padding: '16px', background: '#D4EDDA', color: '#155724', borderRadius: 'var(--r)', fontSize: '.88rem' }}>
                Thank you for your inquiry. Our commercial desk will reply promptly.
              </div>
            ) : (
              <form onSubmit={handleInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="fg">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Your Name"
                  />
                </div>
                <div className="fg">
                  <label>Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="email@domain.com"
                  />
                </div>
                <div className="fg">
                  <label>Requirements</label>
                  <textarea
                    rows={4}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Specify target refining volume or bullion acquisition..."
                  />
                </div>
                <button type="submit" className="btn-form">
                  Send Message
                </button>
              </form>
            )}

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: 'var(--dark)', marginBottom: '14px' }}>
                Quick Links
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '.84rem' }}>
                <li><Link to="/gold-bars-for-sale" className="tlink">› Gold Bars for Sale</Link></li>
                <li><Link to="/product/1kg-gold-bar" className="tlink">› 1kg Gold Bars</Link></li>
                <li><Link to="/product/gold-dore-bars" className="tlink">› Gold Dore Bars</Link></li>
                <li><Link to="/how-to-buy-gold-in-uganda" className="tlink">› 1 Bar Gold Price in Uganda</Link></li>
                <li><Link to="/services" className="tlink">› Assaying & Export Clearances</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
