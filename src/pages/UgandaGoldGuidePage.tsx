import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

interface UgandaGoldGuideProps {
  onOpenQuoteModal: (productSlug?: string) => void;
}

export const UgandaGoldGuidePage: React.FC<UgandaGoldGuideProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="section s-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        {/* Breadcrumb */}
        <div style={{ fontSize: '.82rem', color: 'var(--stone)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Home</Link>
          {' '}&rsaquo;{' '}
          <span>1 Bar of Gold Price in Uganda (Updated Guide)</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="content-sidebar-layout">
          <main style={{ minWidth: 0 }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', color: 'var(--dark)', lineHeight: 1.2, marginBottom: '20px' }}>
              <b>1 Bar of Gold Price in Uganda Today – Updated 2026 Gold Rate</b>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              <strong>1 Bar of Gold Price in Uganda</strong>: The price of 1 bar of gold in Uganda is a topic of keen interest for investors, traders, and international buyers looking to diversify their portfolios or secure tangible assets amid economic uncertainties.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '20px' }}>
              With Uganda's gold exports surging to record highs, understanding local pricing vs international LBMA benchmarks is essential. Whether you’re considering a 1 kg gold bar—the standard "1 bar" often referred to in bullion trade—or fractional sizes, this guide breaks down live rates, taxes, export regulations, and safe buying procedures.
            </p>

            <div style={{ margin: '24px 0', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src="https://i0.wp.com/goldbarsuppliers.com/wp-content/uploads/2026/02/400-oz-Gold-Bar-.jpeg?resize=740%2C480"
                alt="1 Bar of Gold Price in Uganda"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.85rem', color: 'var(--dark)', marginTop: '40px', marginBottom: '16px' }}>
              <b>Current Gold Bar Rates in Uganda (UGX, USD, EUR)</b>
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: '28px' }}>
              <table className="mkt-table">
                <thead>
                  <tr>
                    <th>Gold Bar Unit</th>
                    <th>Approx Price (UGX)</th>
                    <th>Approx Price (USD)</th>
                    <th>Approx Price (EUR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hl-row">
                    <td><strong>1 Kilogram (1 kg) Bar</strong></td>
                    <td><strong>577,124,810 UGX</strong></td>
                    <td><strong>$162,800 USD</strong></td>
                    <td><strong>€137,250 EUR</strong></td>
                  </tr>
                  <tr>
                    <td><strong>1 Ounce (31.1g) Bar</strong></td>
                    <td>17,950,000 UGX</td>
                    <td>$5,065 USD</td>
                    <td>€4,270 EUR</td>
                  </tr>
                  <tr>
                    <td><strong>50 Grams Bar</strong></td>
                    <td>28,850,000 UGX</td>
                    <td>$8,140 USD</td>
                    <td>€6,860 EUR</td>
                  </tr>
                  <tr>
                    <td><strong>100 Grams Bar</strong></td>
                    <td>57,712,000 UGX</td>
                    <td>$16,280 USD</td>
                    <td>€13,725 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.85rem', color: 'var(--dark)', marginTop: '40px', marginBottom: '16px' }}>
              <b>How Gold Bar Prices are Determined in Uganda</b>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              Gold prices in Kampala and Entebbe track the international spot price (London Bullion Market Association), adjusted for:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '24px' }}>
              <li><strong>Local Refining & Smelting Premiums</strong>: Cast bars carry lower minting charges (1.5–2%) than European imported minted bars.</li>
              <li><strong>USD to UGX Currency Fluctuations</strong>: The Bank of Uganda interbank rate determines domestic conversion.</li>
              <li><strong>Export Duties & DGSM Clearances</strong>: Uganda imposes specific export levies which licensed dealers handle in the final commercial invoice.</li>
              <li><strong>Independent Assay Costs</strong>: SGS or Bureau Veritas testing certifying 999.9 purity.</li>
            </ul>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.85rem', color: 'var(--dark)', marginTop: '40px', marginBottom: '16px' }}>
              <b>Uganda Gold Export Clearances & Documentation</b>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              Every international gold export from Entebbe International Airport (EBB) requires official clearances to ensure compliance with international anti-money laundering (AML) and OECD Due Diligence frameworks:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '24px' }}>
              <li><strong>DGSM Export Permit</strong> issued by the Directorate of Geological Survey and Mines.</li>
              <li><strong>Certificate of Origin</strong> confirming African provenance.</li>
              <li><strong>Uganda Revenue Authority (URA)</strong> Customs export tax receipt.</li>
              <li><strong>Independent Laboratory Assay Report</strong> (XRF Spectrometry & Fire Assay).</li>
              <li><strong>Brinks / Malca-Amit Insured Air Waybill (AWB)</strong>.</li>
            </ul>

            <div style={{ marginTop: '36px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/gold-bars-for-sale" className="btn btn-gold">Explore Gold Bars for Sale →</Link>
              <Link to="/contact" className="btn btn-outline">Request Uganda Export Quote</Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside style={{ background: 'var(--fog)', padding: '28px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '2px solid var(--gold)' }}>
              Uganda Trade Desk
            </h2>
            <p style={{ fontSize: '.86rem', color: 'var(--stone)', lineHeight: 1.7, marginBottom: '20px' }}>
              Speak directly with our licensed commercial trade desk in Lubowa, Kampala, Uganda.
            </p>

            <div style={{ padding: '16px', background: 'var(--white)', borderRadius: 'var(--r)', border: '1px solid var(--border)', marginBottom: '24px' }}>
              <span style={{ fontSize: '.72rem', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, display: 'block' }}>Kampala Office · Reg: 80020000702132</span>
              <strong style={{ fontSize: '.92rem', color: 'var(--dark)', display: 'block', marginTop: '4px' }}>Lubowa, Kampala, Uganda</strong>
              <div style={{ marginTop: '10px', fontSize: '.84rem' }}>
                <a href="https://wa.me/256754681378" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dark)', textDecoration: 'none', fontWeight: 600 }}>📞 +256 754 681378</a>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: 'var(--dark)', marginBottom: '14px' }}>
                Essential Reading
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '.84rem' }}>
                <li><Link to="/gold-bars-for-sale" className="tlink">› Gold Bars for Sale</Link></li>
                <li><Link to="/product/1kg-gold-bar" className="tlink">› 1kg Gold Bar Price & Specs</Link></li>
                <li><Link to="/product/gold-dore-bars" className="tlink">› Gold Dore Wholesale</Link></li>
                <li><Link to="/gold-refineries-in-uganda" className="tlink">› African Gold Refinery (AGR)</Link></li>
                <li><Link to="/services" className="tlink">› Our 8 Core Services</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
