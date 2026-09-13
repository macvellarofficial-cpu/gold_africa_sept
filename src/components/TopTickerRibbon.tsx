import React from 'react';
import { Mail, Phone, ShieldCheck, Zap } from 'lucide-react';
import { LIVE_SPOT_DATA } from '../data/goldData';

export const TopTickerRibbon: React.FC = () => {
  return (
    <div className="bg-[#06100B] border-b border-[#D4AF37]/25 text-xs text-[#EDE8E1]/85 py-2 px-4 select-none relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Live Spot Ticker */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2 py-0.5 rounded-full text-[#E5C365] font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LBMA SPOT</span>
          </div>
          <span className="font-mono text-[#FAF7F2] font-medium">
            24K: ${LIVE_SPOT_DATA.pricePerGram24K.toFixed(2)}/g
          </span>
          <span className="text-[#D4AF37]/40 hidden sm:inline">|</span>
          <span className="hidden sm:inline font-mono text-[#A39B8F]">
            1kg: ${LIVE_SPOT_DATA.pricePerKg24K.toLocaleString()}/kg
          </span>
          <span className="text-[#D4AF37]/40 hidden md:inline">|</span>
          <span className="hidden md:flex items-center gap-1 text-[#E5C365]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Brinks Armored Air Cargo Available</span>
          </span>
        </div>

        {/* Right: Direct Contacts & Guaranteed SLA Badge */}
        <div className="flex items-center gap-4 text-xs">
          <div className="hidden lg:flex items-center gap-1 text-[#E5C365] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
            <Zap className="w-3 h-3 text-[#E5C365]" />
            <span className="font-semibold">2-Hour Response Guaranteed</span>
          </div>
          <a
            href="mailto:info@goldafric.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#E5C365] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>info@goldafric.com</span>
          </a>
          <a
            href="https://wa.me/256762079775"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#E5C365] font-medium text-[#FAF7F2] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp: +256 762 079775</span>
          </a>
        </div>
      </div>
    </div>
  );
};
