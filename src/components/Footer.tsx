import React from 'react';
import { Link } from 'react-router-dom';
import { GoldAfricaLogo } from './GoldAfricaLogo';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="gb-footer">
      <div className="gb-footer__inner">
        <hr className="gb-footer__rule" />

        {/* TOP GRID */}
        <div className="gb-footer__grid">
          {/* Brand Column */}
          <div>
            <div className="mb-3">
              <GoldAfricaLogo variant="light" showTagline={true} height={52} />
            </div>
            <div className="gb-footer__tagline">Lubowa, Kampala, Uganda · Reg. No: 80020000702132</div>
            <p className="gb-footer__brand-desc">
              Gold Africa connects serious investors and
              businesses worldwide with certified 24K, 22K, and 18K gold bars,
              nuggets, and dore — sourced directly from Africa's richest mines
              with full assay documentation and insured global delivery.
            </p>
            <ul className="gb-footer__badges">
              <li>✓ Registration No: 80020000702132</li>
              <li>✓ Location: Lubowa, Kampala, Uganda</li>
              <li>✓ XRF Assay Certified</li>
              <li>✓ Brinks Insured Global Delivery</li>
              <li>✓ AML/KYC & OECD Compliant</li>
            </ul>
            <div className="gb-footer__contact">
              📍 Lubowa, Kampala, Uganda<br />
              📞 <a href="https://wa.me/256762079775" target="_blank" rel="noopener noreferrer">WhatsApp: +256 762 079775</a><br />
              ✉ <a href="mailto:info@goldafric.com">info@goldafric.com</a><br />
              ⏱ Response within 2 hours · 7 days a week
            </div>

            {/* Live Price Mini-Ticker */}
            <div className="gb-footer__ticker">
              <div className="gb-footer__ticker-label">🪙 Live Gold Spot Rate</div>
              <div className="gb-footer__ticker-row">
                <div className="gb-footer__ticker-price">$139.39 / g</div>
                <div className="gb-footer__ticker-meta">
                  24K · LBMA<br />June 2026
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="gb-footer__cta"
            >
              Get a Free Quote →
            </button>
          </div>

          {/* Gold Products Column */}
          <div className="gb-footer__col">
            <span className="gb-footer__col-heading">Gold Products</span>
            <ul>
              <li><Link to="/gold-bars-for-sale">Gold Bars for Sale</Link></li>
              <li><Link to="/24k-gold-bars-for-sale-africa">24K Gold Bars</Link></li>
              <li><Link to="/22k-gold-for-sale">22K Gold Bars</Link></li>
              <li><Link to="/18k-gold-bars-for-sale">18K Gold Bars</Link></li>
              <li><Link to="/gold-dore-bars-for-sale">Gold Dore Bars</Link></li>
              <li><Link to="/buy-gold-nuggets-from-africa">African Gold Nuggets</Link></li>
              <li><Link to="/buy-raw-gold-dust-online">Raw Gold Dust</Link></li>
              <li><Link to="/1-oz-gold-bar-for-sale">1 oz Gold Bar</Link></li>
              <li><Link to="/1kg-gold-bars-for-sale">1 kg Gold Bar</Link></li>
              <li><Link to="/buy-gold-direct-from-miners">Buy Direct from Miners</Link></li>
            </ul>
          </div>

          {/* African Markets Column */}
          <div className="gb-footer__col">
            <span className="gb-footer__col-heading">African Markets</span>
            <ul>
              <li><Link to="/buy-gold-in-ghana">Buy Gold in Ghana</Link></li>
              <li><Link to="/buy-gold-in-tanzania">Buy Gold in Tanzania</Link></li>
              <li><Link to="/gold-for-sale-in-uganda">Buy Gold in Uganda</Link></li>
              <li><Link to="/buy-raw-gold-in-congo">Buy Gold in DRC / Congo</Link></li>
              <li><Link to="/buy-gold-bars-in-mali">Buy Gold in Mali</Link></li>
              <li><Link to="/buy-gold-in-south-africa">Buy Gold in South Africa</Link></li>
              <li><Link to="/best-gold-dealers-in-africa">Best Gold Dealers Africa</Link></li>
              <li><Link to="/gold-bars-price-in-africa">Gold Bar Prices in Africa</Link></li>
            </ul>
          </div>

          {/* Global Delivery Column */}
          <div className="gb-footer__col">
            <span className="gb-footer__col-heading">Global Delivery</span>
            <ul>
              <li><Link to="/buying-gold-online-in-the-usa">🇺🇸 United States</Link></li>
              <li><Link to="/24k-gold-price-in-dubai">🇦🇪 UAE / Dubai</Link></li>
              <li><Link to="/buy-gold-bars-uk">🇬🇧 United Kingdom</Link></li>
              <li><Link to="/buy-gold-online-in-canada">🇨🇦 Canada</Link></li>
              <li><Link to="/buy-gold-online-in-germany">🇩🇪 Germany</Link></li>
              <li><Link to="/gold-dealers-in-london">🏛️ London</Link></li>
              <li><Link to="/gold-dealers-in-the-usa">🏦 Houston / New Jersey</Link></li>
              <li><Link to="/buy-gold-in-china-online">🇨🇳 China</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="gb-footer__col">
            <span className="gb-footer__col-heading">Company</span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/african-gold-market-today">Gold Investment Guides</Link></li>
              <li><Link to="/current-gold-spot-price-price-prediction">Gold Price Analysis</Link></li>
              <li><Link to="/documents-required-to-buy-gold">Required Documents</Link></li>
              <li><Link to="/10k-vs-14k-vs-18k-vs-24k-gold">Karat Comparison Guide</Link></li>
              <li><Link to="/can-i-ship-gold-to-the-usa">Can I Ship Gold to USA?</Link></li>
              <li><Link to="/gold-refineries-in-dubai">Gold Refineries in Dubai</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="gb-footer__bottom">
          <span>© 2026 Gold Africa. All rights reserved. · Reg. No: 80020000702132 · Lubowa, Kampala, Uganda</span>
          <div className="gb-footer__bottom-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/documents-required-to-buy-gold">Legal Docs</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p className="gb-footer__disclaimer">
            Gold Africa (Registration No: 80020000702132) is a licensed precious metals trading company headquartered in Lubowa, Kampala, Uganda. All transactions are subject to full AML/KYC verification and applicable national and international export regulations.
            Gold prices quoted reflect live LBMA spot rates and are subject to change without notice. Past performance of gold prices does not guarantee future results.
            This site does not constitute financial or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
