import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Calculator, CheckCircle, Send, FileText, ArrowRight, Building2, User, Mail, Phone, Plane } from 'lucide-react';
import { LIVE_SPOT_DATA, PRODUCTS } from '../data/goldData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductSlug?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductSlug,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(
    initialProductSlug || '1kg-gold-bars-for-sale'
  );
  const [quantityKg, setQuantityKg] = useState<number>(2);
  const [deliveryTerm, setDeliveryTerm] = useState<'CIF' | 'FOB'>('CIF');
  const [destinationAirport, setDestinationAirport] = useState('DXB - Dubai International Airport');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoReference, setScoReference] = useState('');

  useEffect(() => {
    if (initialProductSlug) {
      setSelectedProduct(initialProductSlug);
    }
  }, [initialProductSlug]);

  if (!isOpen) return null;

  // Calculate pricing based on selections
  const productData = PRODUCTS.find((p) => p.slug === selectedProduct) || PRODUCTS[0];
  const gramsTotal = quantityKg * 1000;
  const baseMetalPrice = gramsTotal * productData.pricePerGramUsd;
  const premiumRate = 0.022; // 2.2% mine-direct premium
  const premiumTotal = baseMetalPrice * premiumRate;
  const brinksFreight = deliveryTerm === 'CIF' ? quantityKg * LIVE_SPOT_DATA.brinksAirFreightPerKg : 0;
  const insurance = deliveryTerm === 'CIF' ? baseMetalPrice * (LIVE_SPOT_DATA.insuranceRatePct / 100) : 0;
  const grandTotalUsd = baseMetalPrice + premiumTotal + brinksFreight + insurance;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = `SCO-UG-${Math.floor(100000 + Math.random() * 900000)}`;
    setScoReference(refNum);
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Orange Investments Company Limited, I have requested Soft Corporate Offer (SCO) Ref: ${scoReference}.\n` +
      `Name: ${fullName}\n` +
      `Product: ${productData.name}\n` +
      `Quantity: ${quantityKg} Kilograms\n` +
      `Delivery: ${deliveryTerm} (${deliveryTerm === 'CIF' ? destinationAirport : 'Kampala/Entebbe Vault'})\n` +
      `Estimated Total: $${grandTotalUsd.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD`
    );
    return `https://wa.me/256754681378?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#1A1612] border border-[#C59B27]/40 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#29221B] via-[#1F1A14] to-[#15120E] border-b border-[#C59B27]/25 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C59B27]/20 border border-[#C59B27]/40 flex items-center justify-center text-[#DFB845]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#FAF7F2]">
                Request Soft Corporate Offer (SCO)
              </h2>
              <p className="text-xs text-[#A39B8F]">
                Live Proforma calculation tracking LBMA spot at 1.5%–3% direct markup
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A39B8F] hover:text-[#FAF7F2] hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product & Quantity Selector Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#DFB845] uppercase tracking-wider mb-1.5">
                    Select Gold Product
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm text-[#EDE8E1] focus:outline-none focus:border-[#DFB845] transition-colors"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.slug} value={prod.slug}>
                        {prod.name} ({prod.karat} - ${prod.pricePerGramUsd}/g)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DFB845] uppercase tracking-wider mb-1.5">
                    Order Allocation (Kilograms)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0.5"
                      step="0.5"
                      max="500"
                      value={quantityKg}
                      onChange={(e) => setQuantityKg(parseFloat(e.target.value) || 1)}
                      className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm font-mono text-[#EDE8E1] focus:outline-none focus:border-[#DFB845]"
                      required
                    />
                    <div className="flex gap-1">
                      {[1, 5, 10, 25].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setQuantityKg(val)}
                          className={`px-2.5 py-2 rounded text-xs font-medium border transition-colors ${
                            quantityKg === val
                              ? 'bg-[#C59B27] text-black border-[#DFB845] font-bold'
                              : 'bg-[#1F1A14] text-[#A39B8F] border-[#C59B27]/20 hover:text-white'
                          }`}
                        >
                          {val}k
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Terms & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#DFB845] uppercase tracking-wider mb-1.5">
                    Incoterm Delivery Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryTerm('CIF')}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                        deliveryTerm === 'CIF'
                          ? 'bg-[#C59B27]/20 border-[#DFB845] text-[#FAF7F2]'
                          : 'bg-[#25201A] border-[#C59B27]/20 text-[#A39B8F]'
                      }`}
                    >
                      <div className="font-bold text-sm text-[#DFB845]">CIF Airport</div>
                      <div>Brinks Insured Air Freight</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryTerm('FOB')}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                        deliveryTerm === 'FOB'
                          ? 'bg-[#C59B27]/20 border-[#DFB845] text-[#FAF7F2]'
                          : 'bg-[#25201A] border-[#C59B27]/20 text-[#A39B8F]'
                      }`}
                    >
                      <div className="font-bold text-sm text-[#DFB845]">FOB Vault</div>
                      <div>Kampala / Entebbe Handover</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DFB845] uppercase tracking-wider mb-1.5">
                    Destination Hub Airport
                  </label>
                  <select
                    value={destinationAirport}
                    disabled={deliveryTerm === 'FOB'}
                    onChange={(e) => setDestinationAirport(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm text-[#EDE8E1] focus:outline-none focus:border-[#DFB845] disabled:opacity-50"
                  >
                    <option value="DXB - Dubai International Airport">DXB - Dubai (DMCC Freezone)</option>
                    <option value="JFK - New York John F. Kennedy">JFK - New York (Duty-Free US CBP)</option>
                    <option value="LHR - London Heathrow Airport">LHR - London (VAT-Exempt UK)</option>
                    <option value="FRA - Frankfurt Airport">FRA - Frankfurt (EU OECD Compliant)</option>
                    <option value="ZRH - Zurich Airport">ZRH - Zurich (Swiss Freezone)</option>
                    <option value="YYZ - Toronto Pearson">YYZ - Toronto (Canada Bullion)</option>
                    <option value="HKG - Hong Kong International">HKG - Hong Kong (Malca-Amit Vault)</option>
                    <option value="Other International Port">Other Custom International Airport</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Live Cost Estimation Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#25201A] to-[#1F1A14] border border-[#C59B27]/30 space-y-2 text-xs">
                <div className="flex justify-between text-[#A39B8F]">
                  <span>Pure Gold Content ({gramsTotal.toLocaleString()}g @ ${productData.pricePerGramUsd}/g):</span>
                  <span className="font-mono text-[#FAF7F2]">${baseMetalPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-[#A39B8F]">
                  <span>Direct Mine Refining Premium (~2.2% above spot):</span>
                  <span className="font-mono text-[#FAF7F2]">${premiumTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                {deliveryTerm === 'CIF' && (
                  <>
                    <div className="flex justify-between text-[#A39B8F]">
                      <span>Insured Brinks Global Air Freight ({quantityKg}kg):</span>
                      <span className="font-mono text-[#FAF7F2]">${brinksFreight.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[#A39B8F]">
                      <span>All-Risk Lloyds Underwritten Transit Insurance:</span>
                      <span className="font-mono text-[#FAF7F2]">${insurance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>
                  </>
                )}
                <div className="border-t border-[#C59B27]/20 pt-2 flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold text-[#DFB845]">Estimated Proforma Total (USD):</span>
                  <span className="font-mono text-lg font-extrabold text-[#FAF7F2]">
                    ${grandTotalUsd.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD
                  </span>
                </div>
              </div>

              {/* Buyer Contact Information */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-[#FAF7F2] uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C59B27]" />
                  Authorized Purchaser Credentials
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm text-[#EDE8E1] placeholder-[#73654A] focus:outline-none focus:border-[#DFB845]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company / Investment Vehicle"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm text-[#EDE8E1] placeholder-[#73654A] focus:outline-none focus:border-[#DFB845]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Corporate Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm text-[#EDE8E1] placeholder-[#73654A] focus:outline-none focus:border-[#DFB845]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp / Phone (with Country Code) *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm text-[#EDE8E1] placeholder-[#73654A] focus:outline-none focus:border-[#DFB845]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Specific delivery instructions, target schedule, or assay requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#25201A] border border-[#C59B27]/30 rounded-lg text-sm text-[#EDE8E1] placeholder-[#73654A] focus:outline-none focus:border-[#DFB845]"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#DFB845] via-[#C59B27] to-[#A37E19] text-[#15120E] font-bold text-sm tracking-wider uppercase rounded-xl shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <span>Generate Official Soft Corporate Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-[#73654A] text-center mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Confidential AML/KYC protected inquiry · 2-Hour Response Guaranteed</span>
                </p>
              </div>
            </form>
          ) : (
            /* Successful SCO Generation View */
            <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#C59B27]/15 text-[#DFB845] border border-[#C59B27]/30 mb-2">
                  OFFICIAL OFFER REF: {scoReference}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                  Soft Corporate Offer Initialized
                </h3>
                <p className="text-sm text-[#A39B8F] max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-[#EDE8E1]">{fullName}</strong>. A formal signed proforma invoice has been drafted for{' '}
                  <strong className="text-[#DFB845]">{quantityKg}kg {productData.name}</strong>.
                </p>
              </div>

              {/* Summary Receipt Box */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-[#25201A] border border-[#C59B27]/30 text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A39B8F]">Destination:</span>
                  <span className="text-[#EDE8E1] font-medium">{deliveryTerm === 'CIF' ? destinationAirport : 'FOB Kampala Vault'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A39B8F]">Quantity:</span>
                  <span className="text-[#EDE8E1] font-medium">{quantityKg} Kilograms ({gramsTotal.toLocaleString()}g)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A39B8F]">Assay Verification:</span>
                  <span className="text-emerald-400 font-medium">Live Video XRF prior to wire release</span>
                </div>
                <div className="flex justify-between border-t border-[#C59B27]/20 pt-2 text-sm font-bold">
                  <span className="text-[#DFB845]">Estimated Amount:</span>
                  <span className="font-mono text-[#FAF7F2]">${grandTotalUsd.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD</span>
                </div>
              </div>

              {/* Action Hooks: WhatsApp / Done */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  Connect With Trade Officer via WhatsApp
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#29221B] hover:bg-[#3A3229] text-[#EDE8E1] font-semibold text-xs tracking-wider uppercase rounded-xl border border-[#C59B27]/30 transition-colors"
                >
                  Close & Return to Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
