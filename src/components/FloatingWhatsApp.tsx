import React from 'react';
import { MessageSquareText } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/256730763340?text=Hello%20Gold%20Bar%20Suppliers%20Africa,%20I%20would%20like%20to%20inquire%20about%20purchasing%20gold%20bars."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-black px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 border-2 border-white/20"
        aria-label="Contact via WhatsApp"
      >
        <div className="relative">
          <MessageSquareText className="w-6 h-6 text-black fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-700 rounded-full animate-ping"></span>
        </div>
        <span className="font-bold text-xs tracking-wider uppercase hidden sm:inline">
          Live Gold Desk
        </span>
      </a>
      {/* Floating Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block whitespace-nowrap bg-[#1F1A14] text-[#FAF7F2] text-xs px-3 py-1.5 rounded-lg border border-[#C59B27]/30 shadow-lg">
        ⚡ WhatsApp: +256 730 763340 (2-Hour SLA)
      </div>
    </div>
  );
};
