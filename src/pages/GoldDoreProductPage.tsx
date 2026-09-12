import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface GoldDorePageProps {
  onOpenQuoteModal: (productSlug?: string) => void;
}

export const GoldDoreProductPage: React.FC<GoldDorePageProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '25kg',
    destination: 'Dubai (DMCC)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="section s-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        {/* Breadcrumb */}
        <div style={{ fontSize: '.82rem', color: 'var(--stone)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Home</Link>
          {' '}&rsaquo;{' '}
          <Link to="/gold-bars-for-sale" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Gold Bars for Sale</Link>
          {' '}&rsaquo;{' '}
          <span>Gold Doré Bars for Sale</span>
        </div>

        {/* 2-Column Product Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '64px' }} className="fsplit">
          <div>
            <div className="eyebrow">Wholesale Mine Output · 75%–98% Purity</div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--dark)', lineHeight: 1.15, margin: '12px 0 16px' }}>
              Gold Doré Bars for Sale: Pure African Gold at Best Prices
            </h1>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '20px' }}>
              <strong>Gold dore bars for sale:</strong> Discover premium gold doré bars for sale from Africa – 60–98% purity, competitive prices per kg, SGS-assayed, ethical sourcing from Uganda, Tanzania, Congo & more. Secure TT payments, fast global shipping via Brinks/DHL.
            </p>

            {/* Quick stats badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: 'var(--fog)', padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '.68rem', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>Typical Purity</span>
                <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--gold)' }}>75% – 98%</strong>
              </div>
              <div style={{ background: 'var(--fog)', padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '.68rem', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>Spot Discount</span>
                <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#27ae60' }}>2% – 5% Below</strong>
              </div>
              <div style={{ background: 'var(--fog)', padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '.68rem', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>Min. Order</span>
                <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--dark)' }}>10 kg MOQ</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuoteModal('gold-dore-bars')}
                className="btn btn-gold"
              >
                Request Doré Bar FCO →
              </button>
              <a
                href="https://wa.me/256754681378"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +256 754 681378</span>
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 20px 48px rgba(44,36,16,.12)' }}>
            <SafeImage
              src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-dore-bars-for-sale.jpeg"
              alt="gold dore bars for sale"
              fallbackCategory="dore"
              style={{ width: '100%', height: '420px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(26,18,0,.88)', backdropFilter: 'blur(8px)', color: 'white', padding: '14px 18px', borderRadius: 'var(--r-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '.68rem', color: 'var(--gold-lt)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Semi-Refined Mine Output</span>
                <strong style={{ display: 'block', fontSize: '.95rem' }}>Direct African Cooperative Provenance</strong>
              </div>
              <span style={{ background: 'var(--gold)', color: 'black', fontWeight: 700, padding: '4px 10px', borderRadius: '3px', fontSize: '.72rem' }}>
                75–98% PURITY
              </span>
            </div>
          </div>
        </div>

        {/* ── WHAT ARE GOLD DORE BARS ── */}
        <div style={{ maxWidth: '840px', margin: '0 auto 64px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: 'var(--dark)', marginBottom: '16px' }}>
            What Are Gold Doré Bars?
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
            Gold doré refers to unrefined gold bars produced at the mining site through basic smelting of gold ore concentrates. These bars are an alloy of gold and silver, with gold typically comprising 60–95% of the composition, the remainder being silver, copper, and trace impurities.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
            Unlike polished, 99.99% pure refined gold bars (often called Good Delivery bars), doré bars are raw and irregular in shape, weighing anywhere from 500g to 30kg each. This makes them ideal for refineries that specialize in further chemical purification and silver extraction.
          </p>

          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--dark)', marginTop: '36px', marginBottom: '14px' }}>
            Origin of Your Gold Doré
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
            Africa produces over 25% of the world's gold. Orange Investments Company Limited sources exclusively from verified, licensed operations across East, West, and Central Africa:
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '24px' }}>
            <li><strong>Uganda</strong>: Alluvial placer gold from Karamoja, Mubende, and Busia goldfields.</li>
            <li><strong>Tanzania</strong>: Industrial and artisanal mines in Geita and Mwanza yielding consistent 85–95% doré.</li>
            <li><strong>Democratic Republic of Congo (DRC)</strong>: Verified supply chains in Ituri and Kivu.</li>
            <li><strong>Ghana & Mali</strong>: Sourced in strict alignment with regional mining codes and ICGLR certification.</li>
          </ul>

          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--dark)', marginTop: '36px', marginBottom: '14px' }}>
            Standard Gold Doré Buying Procedure
          </h3>
          <ol style={{ paddingLeft: '20px', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '28px' }}>
            <li><strong>Inquiry & SCO</strong>: Buyer submits requirements (quantity, purity preference, destination airport). We issue a Soft Corporate Offer.</li>
            <li><strong>Sales Purchase Agreement (SPA)</strong>: Both parties sign the legal contract specifying CIF or FOB terms.</li>
            <li><strong>Independent Assay Inspection</strong>: Pre-dispatch inspection and XRF/Fire Assay conducted by SGS or Bureau Veritas in Kampala or Dar es Salaam. Live video verification provided.</li>
            <li><strong>Payment & Export Clearances</strong>: Payment via bank wire (MT103) or Escrow.com for orders above $50,000 USD. We obtain export permits, Certificate of Origin, and customs stamps.</li>
            <li><strong>Armoured Brinks Freight</strong>: Cargo loaded at Entebbe (EBB) with Brinks Global Services or Malca-Amit for direct transport to buyer's refinery.</li>
          </ol>
        </div>

        {/* ── INQUIRY FORM ── */}
        <div style={{ background: 'var(--fog)', padding: '48px', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'var(--dark)' }}>
              Request Gold Doré Wholesale Quotation
            </h3>
            <p style={{ fontSize: '.88rem', color: 'var(--stone)', marginTop: '6px' }}>
              Minimum Order Quantity: 10 Kilograms · Spot Discount: 2–5% Below LBMA
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: '20px', background: '#D4EDDA', color: '#155724', borderRadius: 'var(--r)', textAlign: 'center', fontSize: '.95rem' }}>
              Thank you. Your request has been received. Our trade desk will issue a formal SCO to your email address within 2 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="fg2">
                <div className="fg">
                  <label>Company / Buyer Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Refinery or Trade Entity Name"
                  />
                </div>
                <div className="fg">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="trader@refinery.com"
                  />
                </div>
              </div>

              <div className="fg2">
                <div className="fg">
                  <label>Direct Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                  />
                </div>
                <div className="fg">
                  <label>Desired Monthly Quantity</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  >
                    <option value="10kg">10 kg (Trial Batch)</option>
                    <option value="25kg">25 kg (Standard Parcel)</option>
                    <option value="50kg">50 kg (Commercial Allocation)</option>
                    <option value="100kg+">100 kg+ (Monthly Contract)</option>
                  </select>
                </div>
              </div>

              <div className="fg">
                <label>Destination Refinery Hub</label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                >
                  <option value="Dubai (DMCC)">Dubai (DMCC Free Zone / Almas Tower)</option>
                  <option value="Zurich (Argor-Heraeus / Valcambi)">Switzerland (Zurich Airport Bonded)</option>
                  <option value="Istanbul (IAR)">Turkey (Istanbul Gold Refinery)</option>
                  <option value="Hong Kong (HKIA)">Hong Kong (HKIA Free Zone)</option>
                  <option value="Entebbe (Local Free Zone Handover)">Entebbe / Kampala (Local Delivery)</option>
                </select>
              </div>

              <button type="submit" className="btn-form">
                Submit Doré Bar Request
              </button>
              <p className="form-note">
                ✓ Full legal documentation provided · ✓ DGSM Export Licensed · ✓ SGS Independent Assay Included
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
