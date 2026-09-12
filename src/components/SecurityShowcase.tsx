import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SecurityShowcase: React.FC = () => {
  const showcaseItems = [
    {
      title: 'High-Frequency Induction Smelting',
      subtitle: 'Homogenizing raw mine doré at 1,150°C into uniform metallurgical ingots.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 1: Smelting',
    },
    {
      title: 'Dual-Source XRF Spectrometry',
      subtitle: 'Non-destructive elemental breakdown measuring gold, silver, copper, and platinum group elements.',
      image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 2: Assay',
    },
    {
      title: 'Gravimetric Fire Assay (Cupellation)',
      subtitle: 'The gold industry benchmark wet-chemical verification method ensuring 999.9 fineness.',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 3: Verification',
    },
    {
      title: 'Laser Hallmarking & Serial Numbering',
      subtitle: 'Unique bar serials recorded into Uganda National Mining Cadastre ledger with QR codes.',
      image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 4: Hallmarking',
    },
    {
      title: 'Tamper-Evident Vacuum Packaging',
      subtitle: 'Heavy-gauge security polymers with holographic anti-counterfeit seals and assayer signatures.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 5: Packaging',
    },
    {
      title: 'Class-3 High Security Vaulting',
      subtitle: 'Entebbe Free Trade Zone biometric depository storage with 24/7 armed protection.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 6: Custody',
    },
    {
      title: 'Armored Brinks Logistics Handover',
      subtitle: 'Direct tarmac transfer to chartered aircraft with dedicated armed security escorts.',
      image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 7: Transit',
    },
    {
      title: 'Final Customs Release & Inspection',
      subtitle: 'Arrival at buyer destination airport (DXB, JFK, LHR, ZRH) with zero demurrage delays.',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
      badge: 'Step 8: Delivery',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {showcaseItems.map((item, idx) => (
        <div
          key={idx}
          className="group relative rounded-xl overflow-hidden bg-[#0F261D] border border-[#D4AF37]/25 hover:border-[#E5C365] transition-all duration-300 shadow-xl"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091610] via-[#091610]/40 to-transparent"></div>
            <span className="absolute top-3 left-3 bg-[#D4AF37] text-[#091610] font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded shadow">
              {item.badge}
            </span>
          </div>

          {/* Card Body */}
          <div className="p-4 space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#FAF7F2] group-hover:text-[#E5C365] transition-colors line-clamp-1">
              {item.title}
            </h4>
            <p className="text-xs text-[#9CB6A8] leading-relaxed line-clamp-2">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
