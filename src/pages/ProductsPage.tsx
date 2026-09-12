import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../components/SafeImage';

interface ProductsPageProps {
  onOpenQuoteModal?: (productSlug?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="section s-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="wrap">
        {/* Breadcrumb */}
        <div style={{ fontSize: '.82rem', color: 'var(--stone)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Home</Link>
          {' '}&rsaquo;{' '}
          <span>Gold Bars for Sale</span>
        </div>

        {/* 2-Column Content Layout (Content + Sidebar) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }} className="content-sidebar-layout">
          {/* Main Article Content */}
          <main style={{ minWidth: 0 }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', color: 'var(--dark)', lineHeight: 1.2, marginBottom: '20px' }}>
              <b>Gold Bars for Sale | Buy 24K Gold Bars Online & Near You – Real Bullion & 1 oz Bars</b>
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              <strong>Gold Bars for Sale</strong>: In an era of economic uncertainty, inflation concerns, and volatile markets, investors worldwide are turning to tangible assets for wealth preservation.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '20px' }}>
              Gold bars for sale represent one of the most reliable and timeless forms of investment, offering intrinsic value that has endured for centuries. Whether you’re a first-time buyer searching for a single gold bar for sale or a seasoned investor eyeing gold bullion bars for sale in larger quantities, the appeal of pure gold bars for sale lies in their purity, liquidity, and global recognition.
            </p>

            <div style={{ margin: '24px 0', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/1-oz-Gold-Bar-for-Sale.webp"
                alt="Gold Bars for Sale"
                fallbackCategory="oneOz"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              At Gold Africa, we specialize in providing authentic <Link to="/gold-bars-for-sale" style={{ color: 'var(--gold)', fontWeight: 600 }}>24K gold bars</Link> for sale, ranging from affordable 1 gram gold bars to institutional-grade 400 oz gold bar for sale options.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              The global demand for gold bars for sale has surged, driven by central banks, hedge funds, and individual investors seeking to diversify portfolios.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              If you’re searching for real gold bars for sale, whether online or near you, this comprehensive guide covers everything you need to know about buying 24K gold bars for sale.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              From understanding different sizes like 1g gold bars for sale and 1 oz gold bars for sale to navigating trusted sources for gold bars for sale online, we’ll equip you with the knowledge to make informed decisions.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              Gold isn’t just a metal—it’s a hedge against currency devaluation, a store of value during geopolitical tensions, and a legacy asset passed down through generations.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              At Gold Africa, we pride ourselves on transparency, certification, and customer satisfaction. Our gold bars for sale come with assay certificates, hallmarks from recognized refineries, and insured shipping options.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              Whether you’re interested in a modest 1 ounce gold bars for sale or bulk gold bullion bars for sale, buying from a reputable supplier ensures you receive investment-grade pure gold bars for sale.
            </p>

            {/* Types of Gold Bars */}
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.85rem', color: 'var(--dark)', marginTop: '40px', marginBottom: '16px' }}>
              <b>Types of Gold Bars for Sale</b>
            </h2>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '16px' }}>
              Gold bars for sale come in a wide array of sizes, purities, and formats to suit every budget and investment strategy. Understanding these variations is crucial when selecting the right gold bar for sale for your needs.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '24px' }}>
              At Gold Africa, we offer an extensive inventory, including everything from tiny 1 gram gold bars for sale to massive bars of gold for sale used by institutions.
            </p>

            {/* Small Sized Bars */}
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: 'var(--dark)', marginTop: '28px', marginBottom: '12px' }}>
              <b>Small-Sized Gold Bars (1g to 10g)</b>
            </h3>
            <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '14px' }}>
              For beginners or those looking for affordability and portability, small gold bars are ideal. A 1g gold bar for sale typically weighs exactly 1 gram and is perfect for gifting, emergency funds, or gradual accumulation.
            </p>
            <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '20px' }}>
              These 1 gram gold bars for sale are often minted with intricate designs, making them collectible as well as investment-worthy. Prices for a 1g gold bar for sale start around $80–$100, depending on current spot prices and premiums.
            </p>

            {/* Medium Sized Bars */}
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: 'var(--dark)', marginTop: '28px', marginBottom: '12px' }}>
              <b>Medium-Sized Gold Bars (1 oz to 100g)</b>
            </h3>
            <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '14px' }}>
              The 1 oz gold bar for sale is arguably the most popular size worldwide. Also known as 1 ounce gold bars for sale or 1 ounce gold bar for sale, these bars strike a balance between affordability and substantial value.
            </p>
            <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '20px' }}>
              A standard 1 oz gold bars for sale weighs 31.1035 grams and is stamped with purity (usually 99.99% or 24K), weight, and refinery hallmarks.
            </p>

            {/* Large Sized Bars */}
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: 'var(--dark)', marginTop: '28px', marginBottom: '12px' }}>
              <b>Large-Sized Gold Bars (1kg to 400 oz)</b>
            </h3>
            <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '14px' }}>
              For serious commitments, larger gold bullion bars for sale dominate. The 1 kilo gold bar (approximately 32.15 oz) is a staple for wealth preservation. Even bigger is the 400 oz gold bar for sale, the London Good Delivery standard used by banks and vaults.
            </p>

            <div style={{ margin: '24px 0', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
                alt="Buy Gold Online in Canada"
                fallbackCategory="bars"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Table of Weights & Prices */}
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: 'var(--dark)', marginTop: '36px', marginBottom: '16px' }}>
              <b>Gold Bar Pricing & Investment Dynamics</b>
            </h3>
            <div style={{ overflowX: 'auto', marginBottom: '28px' }}>
              <table className="mkt-table">
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th>Purity</th>
                    <th>Average Price (USD)</th>
                    <th>Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1g</strong></td>
                    <td>24K (999.9)</td>
                    <td>$85–$105</td>
                    <td>Beginners, Gifts</td>
                  </tr>
                  <tr>
                    <td><strong>1 oz</strong></td>
                    <td>24K (999.9)</td>
                    <td>$2,450–$2,550</td>
                    <td>Individual Investors</td>
                  </tr>
                  <tr className="hl-row">
                    <td><strong>1 kg ⭐</strong></td>
                    <td>24K (999.9)</td>
                    <td>$78,000–$81,000</td>
                    <td>Serious Accumulators</td>
                  </tr>
                  <tr>
                    <td><strong>400 oz</strong></td>
                    <td>24K (999.9)</td>
                    <td>$980,000–$1,020,000</td>
                    <td>Institutions, Central Banks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ margin: '24px 0', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <SafeImage
                src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-in-south-africa.webp"
                alt="18K Gold Bars for Sale"
                fallbackCategory="bars"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Verification & Safety */}
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.85rem', color: 'var(--dark)', marginTop: '40px', marginBottom: '16px' }}>
              <b>How to Verify Authentic Gold Bars</b>
            </h2>
            <ul style={{ paddingLeft: '20px', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '24px' }}>
              <li><strong>Magnet Test</strong>: Pure gold is completely non-magnetic; attraction indicates fake plating or base metals.</li>
              <li><strong>Weight/Dimensions</strong>: Precision electronic scales and calipers verify the density matches 19.32 g/cm³.</li>
              <li><strong>Ping Acoustic Test</strong>: Genuine pure gold resonates with a distinct high-pitched sustained frequency.</li>
              <li><strong>XRF Spectrometry & Fire Assay</strong>: The definitive standard executed by accredited labs (SGS, Bureau Veritas).</li>
            </ul>

            {/* Quick Catalog Grid for Interactivity */}
            <div style={{ marginTop: '48px', paddingTop: '36px', borderTop: '2px solid var(--border)' }}>
              <div className="eyebrow">Available For Immediate Dispatch</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'var(--dark)', marginBottom: '20px' }}>
                Featured Certified Gold Bars
              </h2>
              <div className="srv-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div className="srv-card">
                  <div className="srv-card-img" style={{ height: '160px' }}>
                    <SafeImage
                      src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp"
                      alt="1kg Gold Bar"
                      fallbackCategory="kilobar"
                    />
                    <span className="srv-tag">Best Value</span>
                  </div>
                  <div className="srv-body">
                    <h3>1 Kilogram (1000g) 24K Bar</h3>
                    <p>LBMA 999.9 Good Delivery cast bar with unique serial number and assay dossier.</p>
                    <div className="srv-footer">
                      <div className="srv-price"><strong>1000g</strong><span>24K · 999.9</span></div>
                      <Link to="/product/1kg-gold-bar" className="srv-link">View Bar →</Link>
                    </div>
                  </div>
                </div>

                <div className="srv-card">
                  <div className="srv-card-img" style={{ height: '160px' }}>
                    <SafeImage
                      src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/1-oz-Gold-Bar-for-Sale.webp"
                      alt="1 oz Gold Bar"
                      fallbackCategory="oneOz"
                    />
                    <span className="srv-tag">Popular</span>
                  </div>
                  <div className="srv-body">
                    <h3>1 Ounce (31.1g) Minted Bar</h3>
                    <p>CertiCard tamper-evident blister seal with integrated security hologram.</p>
                    <div className="srv-footer">
                      <div className="srv-price"><strong>31.1035g</strong><span>24K · 999.9</span></div>
                      <button onClick={() => onOpenQuoteModal?.('1oz-gold-bar')} className="srv-link">Order →</button>
                    </div>
                  </div>
                </div>

                <div className="srv-card">
                  <div className="srv-card-img" style={{ height: '160px' }}>
                    <SafeImage
                      src="https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-dore-bars-for-sale.jpeg"
                      alt="Gold Dore Bar"
                      fallbackCategory="dore"
                    />
                    <span className="srv-tag" style={{ background: 'var(--brown)' }}>Wholesale</span>
                  </div>
                  <div className="srv-body">
                    <h3>Unrefined Gold Doré Bars</h3>
                    <p>88%–94% purity semi-refined cast bars direct from Ugandan & Tanzanian mines.</p>
                    <div className="srv-footer">
                      <div className="srv-price"><strong>Bulk B2B</strong><span>88–94% Purity</span></div>
                      <Link to="/product/gold-dore-bars" className="srv-link">View Dore →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside style={{ background: 'var(--fog)', padding: '28px', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '2px solid var(--gold)' }}>
              Request a Quote!
            </h2>

            {formSent ? (
              <div style={{ padding: '16px', background: '#D4EDDA', color: '#155724', borderRadius: 'var(--r)', fontSize: '.88rem', marginBottom: '20px' }}>
                Thank you for your message. It has been sent. Our trade desk will contact you within 2 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="fg">
                  <label>Your Name (required)</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name..."
                  />
                </div>

                <div className="fg">
                  <label>Your Email (required)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="corporate@company.com"
                  />
                </div>

                <div className="fg">
                  <label>Phone Number (required)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div className="fg">
                  <label>Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. 5kg 24K Bar Order"
                  />
                </div>

                <div className="fg">
                  <label>Your Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target weight, delivery country, and delivery timeline..."
                  />
                </div>

                <button type="submit" className="btn-form">
                  Submit Quote Request
                </button>
              </form>
            )}

            {/* Recent Posts Widget */}
            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: 'var(--dark)', marginBottom: '14px' }}>
                Recent Market Insights
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '.84rem' }}>
                <li>
                  <Link to="/gold-bars-for-sale" style={{ color: 'var(--charcoal)', textDecoration: 'none' }} className="tlink">
                    › Gold Refineries in Switzerland
                  </Link>
                </li>
                <li>
                  <Link to="/gold-bars-for-sale" style={{ color: 'var(--charcoal)', textDecoration: 'none' }} className="tlink">
                    › 100 pound of gold price today
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-buy-gold-in-uganda" style={{ color: 'var(--charcoal)', textDecoration: 'none' }} className="tlink">
                    › How Much Is 1 Pound of Gold?
                  </Link>
                </li>
                <li>
                  <Link to="/gold-refineries-in-uganda" style={{ color: 'var(--charcoal)', textDecoration: 'none' }} className="tlink">
                    › African Gold Refinery (AGR) Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/services" style={{ color: 'var(--charcoal)', textDecoration: 'none' }} className="tlink">
                    › DHL vs Brinks vs Malca-Amit for Gold Cargo
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
