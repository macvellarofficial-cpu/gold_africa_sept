import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { KilobarProductPage } from './pages/KilobarProductPage';
import { GoldDoreProductPage } from './pages/GoldDoreProductPage';
import { UgandaGoldGuidePage } from './pages/UgandaGoldGuidePage';
import { ServicesPage } from './pages/ServicesPage';
import { RefineriesDirectoryPage } from './pages/RefineriesDirectoryPage';
import { ContactPage } from './pages/ContactPage';

import { BlogArticlePage } from './pages/BlogArticlePage';

// Scroll restoration helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (slug?: string) => {
    setSelectedProductSlug(slug);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedProductSlug(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-white text-[#2C2410] antialiased relative">
        {/* Live Site Header */}
        <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Dynamic Pages */}
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            
            {/* Products & Category routes matching target URL structure */}
            <Route path="/gold-bars-for-sale" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/products" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/gold-bullion" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/gold-coins-in-kenya" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/buy-gold-nuggets-from-africa" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/buy-raw-gold-dust-online" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/silver-bars-in-africa" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            
            {/* Product detail landing pages */}
            <Route
              path="/1kg-gold-bars-for-sale"
              element={<KilobarProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/product/1kg-gold-bar"
              element={<KilobarProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/1kg-gold-bar-price-in-south-africa"
              element={<KilobarProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/gold-dore-bars-for-sale"
              element={<GoldDoreProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/product/gold-dore-bars"
              element={<GoldDoreProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/24k-gold-bars-for-sale-africa"
              element={<KilobarProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/22k-gold-for-sale"
              element={<KilobarProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/1-oz-gold-bar-for-sale"
              element={<KilobarProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/50-grams-gold-bar-for-sale"
              element={<KilobarProductPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />

            {/* Regulatory, Services & Industry Guides */}
            <Route
              path="/gold-for-sale-in-uganda"
              element={<UgandaGoldGuidePage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/how-to-buy-gold-in-uganda"
              element={<UgandaGoldGuidePage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/1-bar-of-gold-price-in-uganda"
              element={<UgandaGoldGuidePage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/gold-refineries-in-uganda"
              element={<RefineriesDirectoryPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/list-of-gold-refineries-in-uganda"
              element={<RefineriesDirectoryPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/african-gold-refinery"
              element={<RefineriesDirectoryPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            
            {/* Corporate & Contact */}
            <Route path="/about" element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/about/" element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/about-us" element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/about-us/" element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/contact" element={<ContactPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/contact/" element={<ContactPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/contact-us" element={<ContactPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/contact-us/" element={<ContactPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />

            {/* Category Archives */}
            <Route path="/category/:category" element={<BlogArticlePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/category/:category/" element={<BlogArticlePage onOpenQuoteModal={handleOpenQuoteModal} />} />

            {/* Dynamic Blog Posts & Regional Guides Engine (Matches all 225 slugs from sitemap) */}
            <Route path="/:slug" element={<BlogArticlePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/:slug/" element={<BlogArticlePage onOpenQuoteModal={handleOpenQuoteModal} />} />

            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          </Routes>
        </main>

        {/* Live Site Footer */}
        <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Floating WhatsApp Quick Action */}
        <FloatingWhatsApp />

        {/* Interactive Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialProductSlug={selectedProductSlug}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
