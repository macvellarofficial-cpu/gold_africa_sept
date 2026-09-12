import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
          <div className="gbs-topbar-left">
            <span>Licensed Gold Exporter — Uganda & Kenya</span>
            <span>Insured Worldwide Delivery</span>
          </div>
          <div>
            <a href="mailto:info@goldbarsuppliers.com">info@goldbarsuppliers.com</a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR ── */}
      <div className="gbs-main">
        <Link to="/" className="gbs-logo" aria-label="Gold Bar Suppliers — home">
          <img
            src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/cropped-logoz-300x230.png"
            alt="Gold Bar Suppliers logo"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='46' viewBox='0 0 60 46'%3E%3Cpolygon points='10,38 20,12 40,12 50,38' fill='%23C5A059' stroke='%238A6D2B' stroke-width='1.5'/%3E%3Ctext x='30' y='30' font-family='serif' font-size='10' font-weight='bold' fill='%23241A06' text-anchor='middle'%3EGBS%3C/text%3E%3C/svg%3E";
            }}
          />
          <span className="gbs-logo-text">
            <span className="name">Gold Bar Suppliers</span>
            <span className="tag">Certified · Mine-Direct · Assayed</span>
          </span>
        </Link>

        <button
          className="gbs-burger"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
        </button>

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
