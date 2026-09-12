import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Phone, Calculator, Lock } from 'lucide-react';
import { LIVE_SPOT_DATA } from '../data/goldData';
import { SafeImage } from '../components/SafeImage';

interface KilobarPageProps {
  onOpenQuoteModal: (productSlug?: string) => void;
}

export const KilobarProductPage: React.FC<KilobarPageProps> = ({ onOpenQuoteModal }) => {
  const [allocationKg, setAllocationKg] = useState<number>(5);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [destination, setDestination] = useState('Dubai (DXB Freezone)');
  const [barType, setBarType] = useState<'cast' | 'minted'>('cast');
  const [submitted, setSubmitted] = useState(false);

  // Spot calculation: spot + 1.5% (cast) or + 2.5% (minted)
  const premium = barType === 'cast' ? 0.018 : 0.025;
  const pricePerKgDirect = LIVE_SPOT_DATA.pricePerKg24K * (1 + premium);
  const pricePerKgWestern = LIVE_SPOT_DATA.pricePerKg24K * 1.075;
  const savingsPerKg = pricePerKgWestern - pricePerKgDirect;
  const totalSavings = savingsPerKg * allocationKg;
  const totalAllocationCost = pricePerKgDirect * allocationKg;

  const handleBulkSubmit = (e: React.FormEvent) => {
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
          <span>1kg Gold Bars for Sale</span>
        </div>

        {/* 2-Column Product Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '64px' }} className="fsplit">
          <div>
            <div className="eyebrow">Institutional Investment Tier · 999.9 Fineness</div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--dark)', lineHeight: 1.15, margin: '12px 0 16px' }}>
              1kg Gold Bars for Sale: Buy 99.99% Pure Gold in Africa
            </h1>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '20px' }}>
              At <strong>Orange Investments Company Limited</strong>, we supply certified, investment-grade <strong>1 kilogram gold bars</strong> directly from Africa's richest goldfields to institutional buyers and private investors across the USA, UK, UAE, Europe, and Asia.
            </p>

            {/* Quick stats badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: 'var(--fog)', padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '.68rem', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>Gross Weight</span>
                <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--dark)' }}>1,000.00g</strong>
              </div>
              <div style={{ background: 'var(--fog)', padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '.68rem', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>Fineness Purity</span>
                <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--gold)' }}>999.9 (24K)</strong>
              </div>
              <div style={{ background: 'var(--fog)', padding: '12px 14px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '.68rem', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>Est. Savings/kg</span>
                <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#27ae60' }}>~${savingsPerKg.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuoteModal('1kg-gold-bars-for-sale')}
                className="btn btn-gold"
              >
                Request Proforma / SCO for 1kg Bars →
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
              src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
              alt="1kg Pure Gold Bar Africa"
              fallbackCategory="kilobar"
              style={{ width: '100%', height: '420px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(26,18,0,.88)', backdropFilter: 'blur(8px)', color: 'white', padding: '14px 18px', borderRadius: 'var(--r-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '.68rem', color: 'var(--gold-lt)', textTransform: 'uppercase', letterSpacing: '.05em' }}>LBMA Good Delivery Standard</span>
                <strong style={{ display: 'block', fontSize: '.95rem' }}>Independently Assayed (SGS / BV)</strong>
              </div>
              <span style={{ background: 'var(--gold)', color: 'black', fontWeight: 700, padding: '4px 10px', borderRadius: '3px', fontSize: '.72rem' }}>
                999.9 PURE
              </span>
            </div>
          </div>
        </div>

        {/* ── INTERACTIVE VOLUME PRICING CALCULATOR ── */}
        <div style={{ background: 'var(--fog)', padding: '36px', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', marginBottom: '64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
            <div>
              <div className="eyebrow">Real-Time LBMA Spot Sourcing Engine</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', color: 'var(--dark)' }}>
                1kg Gold Bar Allocation & Arbitrage Calculator
              </h2>
              <p style={{ fontSize: '.9rem', color: 'var(--stone)', marginTop: '4px' }}>
                Calculate direct mine-to-vault wholesale savings vs Western bullion dealer markups.
              </p>
            </div>
            {/* Toggle Cast vs Minted */}
            <div style={{ display: 'flex', background: 'var(--white)', padding: '4px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <button
                onClick={() => setBarType('cast')}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--r)',
                  border: 'none',
                  fontSize: '.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: barType === 'cast' ? 'var(--gold)' : 'transparent',
                  color: barType === 'cast' ? 'white' : 'var(--dark)',
                }}
              >
                Cast Kilobar (+1.8%)
              </button>
              <button
                onClick={() => setBarType('minted')}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--r)',
                  border: 'none',
                  fontSize: '.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: barType === 'minted' ? 'var(--gold)' : 'transparent',
                  color: barType === 'minted' ? 'white' : 'var(--dark)',
                }}
              >
                Minted Kilobar (+2.5%)
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', alignItems: 'center' }}>
            <div>
              <label style={{ fontSize: '.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: '8px' }}>
                Select Allocation (Kilograms): <strong>{allocationKg} kg ({allocationKg * 32.15} oz)</strong>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={allocationKg}
                onChange={(e) => setAllocationKg(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.72rem', color: 'var(--stone)', marginTop: '4px' }}>
                <span>1 kg (Sample)</span>
                <span>10 kg</span>
                <span>25 kg</span>
                <span>50 kg (Wholesale Tier)</span>
              </div>
            </div>

            <div style={{ background: 'var(--white)', padding: '20px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <span style={{ fontSize: '.72rem', textTransform: 'uppercase', color: 'var(--stone)', display: 'block' }}>Total Direct Sourcing Cost</span>
              <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: 'var(--dark)' }}>
                ${totalAllocationCost.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD
              </strong>
              <span style={{ fontSize: '.76rem', color: 'var(--stone)', display: 'block', marginTop: '2px' }}>
                ${pricePerKgDirect.toLocaleString(undefined, { maximumFractionDigits: 0 })} / kg
              </span>
            </div>

            <div style={{ background: 'rgba(39,174,96,.08)', padding: '20px', borderRadius: 'var(--r-md)', border: '1px solid rgba(39,174,96,.3)' }}>
              <span style={{ fontSize: '.72rem', textTransform: 'uppercase', color: '#27ae60', display: 'block', fontWeight: 700 }}>Total Sourcing Savings vs Western Retail</span>
              <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#27ae60' }}>
                +${totalSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD
              </strong>
              <span style={{ fontSize: '.76rem', color: '#27ae60', display: 'block', marginTop: '2px' }}>
                ~${savingsPerKg.toLocaleString(undefined, { maximumFractionDigits: 0 })} saved per bar
              </span>
            </div>
          </div>
        </div>

        {/* ── FULL SPECIFICATIONS TABLE ── */}
        <div style={{ marginBottom: '64px' }}>
          <div className="eyebrow">Technical Audit & Conformity</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: 'var(--dark)', marginBottom: '20px' }}>
            Our 1kg Gold Bar — Full Specifications
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '24px' }}>
            At <strong>Orange Investments Company Limited</strong>, we supply only investment-grade 1 kilogram gold bars that meet or exceed LBMA (London Bullion Market Association) Good Delivery standards:
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="mkt-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Specification</th>
                  <th>Our 1kg Gold Bar Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Gross Weight</strong></td>
                  <td>1,000.000 grams (32.1507 troy ounces) exact</td>
                </tr>
                <tr>
                  <td><strong>Purity Fineness</strong></td>
                  <td>99.9% (999 fineness) minimum — guaranteed 99.99% (999.9) on refined stock</td>
                </tr>
                <tr>
                  <td><strong>Dimensions</strong></td>
                  <td>Approximately 117mm × 53mm × 8mm (standard cast bar)</td>
                </tr>
                <tr>
                  <td><strong>Bar Type</strong></td>
                  <td>Cast or minted bar depending on client preference</td>
                </tr>
                <tr>
                  <td><strong>Serial Number</strong></td>
                  <td>Individually unique, stamped or laser-engraved alphanumeric hallmark</td>
                </tr>
                <tr>
                  <td><strong>Refinery Hallmark</strong></td>
                  <td>African Gold Refinery (AGR), Rand Refinery, or accredited partner foundry</td>
                </tr>
                <tr>
                  <td><strong>Fineness Stamp</strong></td>
                  <td>999.9 or 999 stamped directly on bar face alongside exact weight</td>
                </tr>
                <tr>
                  <td><strong>Packaging</strong></td>
                  <td>Tamper-evident CertiCard blister seal (minted) or heavy velvet presentation casing (cast)</td>
                </tr>
                <tr>
                  <td><strong>Assay Certificate</strong></td>
                  <td>Independent SGS Uganda or Bureau Veritas laboratory certification included</td>
                </tr>
                <tr>
                  <td><strong>Certificate of Origin</strong></td>
                  <td>Government-issued (DGSM / MEMD) confirming legal East African provenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ── SOURCING & PROVENANCE ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '64px' }} className="fsplit">
          <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <SafeImage
              src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
              alt="African Gold Provenance"
              fallbackCategory="bars"
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div className="eyebrow">Supply Chain Authenticity</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.9rem', color: 'var(--dark)', marginBottom: '16px' }}>
              Where Our 1kg Gold Bars Come From — Sourcing & Provenance
            </h2>
            <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '14px' }}>
              Every kilogram gold bar we deliver originates from registered, environmentally conscious supply chains across East and West Africa:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--stone)', fontSize: '.92rem', marginBottom: '20px' }}>
              <li><strong>Uganda & Great Lakes Hub</strong>: Primary smelting and refining in Entebbe Free Zone, sourced from compliant artisanal mining cooperatives.</li>
              <li><strong>Rand Refinery (South Africa)</strong>: The LBMA-accredited benchmark of African bullion since 1920.</li>
              <li><strong>Ghana Gold Board (GoldBod)</strong>: Sourced in compliance with the Ghana Gold Board Act 2025.</li>
            </ul>
            <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--charcoal)' }}>
              Every shipment is backed by the full compliance dossier: DGSM export license, URA customs tax receipt, commercial invoice, airway bill, and insurance certificate.
            </p>
          </div>
        </div>

        {/* ── BULK QUOTE INQUIRY FORM ── */}
        <div style={{ background: 'var(--white)', padding: '48px', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', borderTop: '4px solid var(--gold)', boxShadow: '0 18px 52px rgba(44,36,16,.08)', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'var(--dark)' }}>
              Request Full Corporate Offer (FCO) for 1kg Gold Bars
            </h3>
            <p style={{ fontSize: '.88rem', color: 'var(--stone)', marginTop: '6px' }}>
              Direct reply from our Senior Commercial Bullion Desk within 2 hours with live locked rates.
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: '20px', background: '#D4EDDA', color: '#155724', borderRadius: 'var(--r)', textAlign: 'center', fontSize: '.95rem' }}>
              Thank you. Your request for {allocationKg}kg 24K bars has been submitted. A Senior Commodities Officer will contact you via WhatsApp / email shortly.
            </div>
          ) : (
            <form onSubmit={handleBulkSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="fg2">
                <div className="fg">
                  <label>Full Legal Name / Entity</label>
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="e.g. Alexander Vance / Vance Capital Ltd"
                  />
                </div>
                <div className="fg">
                  <label>Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="fg2">
                <div className="fg">
                  <label>Direct Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="fg">
                  <label>Delivery Airport / Free Zone</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="Dubai (DXB Freezone)">Dubai (DXB Freezone / DMCC Vaults)</option>
                    <option value="New York (JFK / Loomis / Brinks)">New York (JFK / Brinks Depository)</option>
                    <option value="London (LHR Freezone)">London (LHR Heathrow / Malca-Amit)</option>
                    <option value="Zurich (ZRH Kloten)">Zurich (ZRH Kloten Duty-Free)</option>
                    <option value="Singapore (SIN Le Freeport)">Singapore (Le Freeport Changi)</option>
                    <option value="Kampala / Entebbe Local Inspection">Kampala / Entebbe (In-Person Handover)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-form">
                Request Official FCO for {allocationKg} Kilogram(s)
              </button>
              <p className="form-note">
                ✓ No upfront fees required · ✓ Pre-payment live video XRF assay included · ✓ Insured Brinks worldwide delivery
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
