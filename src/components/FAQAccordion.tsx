import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/goldData';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-[#0F261D] border-[#D4AF37]/50 shadow-gold-glow'
                : 'bg-[#091610] border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
            }`}
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#E5C365] text-xs font-bold flex items-center justify-center shrink-0">
                  Q{idx + 1}
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#FAF7F2]">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#E5C365]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#9CB6A8] leading-relaxed border-t border-[#D4AF37]/15">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
