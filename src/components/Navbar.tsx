import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoldAfricaLogo } from './GoldAfricaLogo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="gbs-header">
      {/* ── TOPBAR ── */}
      <div className="gbs-topbar">
        <div className="gbs-topbar-inner">
          <div className="gbs-topbar-left flex items-center gap-3">
            <span>Reg. No: <strong>80020000702132</strong> · Lubowa, Kampala, Uganda</span>
            <span>· Insured Worldwide Delivery</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/256754681378" target="_blank" rel="noopener noreferrer">
              WhatsApp: +256 754 681378
            </a>
            <a href="mailto:info@goldafric.com">info@goldafric.com</a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR ── */}
      <div className="gbs-main">
        <Link to="/" className="gbs-logo" aria-label="Gold Africa — home">
          <GoldAfricaLogo variant="light" height={42} />
        </Link>

        <button
          className="gbs-burger"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[990] lg:hidden"
            style={{ top: '70px' }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav className={`gbs-nav ${isOpen ? 'is-open' : ''}`}>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={isActive('/') ? 'active' : ''}
          >
            HOME
          </Link>
          <Link
            to="/gold-bars-for-sale"
            onClick={() => setIsOpen(false)}
            className={isActive('/gold-bars-for-sale') || isActive('/1kg-gold-bars-for-sale') ? 'active' : ''}
          >
            Gold Bars
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className={isActive('/products') || isActive('/gold-bullion') ? 'active' : ''}
          >
            Gold Bullion
          </Link>
          <Link
            to="/gold-coins-in-kenya"
            onClick={() => setIsOpen(false)}
            className={isActive('/gold-coins-in-kenya') ? 'active' : ''}
          >
            Gold Coins
          </Link>
          <Link
            to="/buy-gold-nuggets-from-africa"
            onClick={() => setIsOpen(false)}
            className={isActive('/buy-gold-nuggets-from-africa') ? 'active' : ''}
          >
            Gold Nuggets
          </Link>
          <Link
            to="/buy-raw-gold-dust-online"
            onClick={() => setIsOpen(false)}
            className={isActive('/buy-raw-gold-dust-online') ? 'active' : ''}
          >
            Gold Dust
          </Link>
          <Link
            to="/silver-bars-in-africa"
            onClick={() => setIsOpen(false)}
            className={isActive('/silver-bars-in-africa') ? 'active' : ''}
          >
            Silver
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </nav>

        <div className="gbs-actions">
          <div className="gbs-price">
            <span className="label">Live Spot / oz</span>
            <span className="value">$4,335.20</span>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="gbs-cta"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
};
