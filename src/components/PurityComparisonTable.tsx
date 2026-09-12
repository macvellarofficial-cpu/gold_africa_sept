import React from 'react';
import { PURITY_COMPARISON_DATA } from '../data/goldData';
import { Sparkles } from 'lucide-react';

interface PurityTableProps {
  onSelectKarat?: (karat: string) => void;
}

export const PurityComparisonTable: React.FC<PurityTableProps> = ({ onSelectKarat }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#D4AF37]/30 shadow-2xl">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="bg-[#0F261D] border-b border-[#D4AF37]/30 text-[#E5C365] uppercase tracking-wider font-semibold font-mono text-[11px] sm:text-xs">
            <th className="py-4 px-4 sm:px-6">Karat Grading</th>
            <th className="py-4 px-3 sm:px-4">Fineness</th>
            <th className="py-4 px-3 sm:px-4">Gold %</th>
            <th className="py-4 px-3 sm:px-4">Price / Gram (USD)</th>
            <th className="py-4 px-3 sm:px-4">Price / Kg (USD)</th>
            <th className="py-4 px-4 sm:px-6">Primary Application</th>
            <th className="py-4 px-3 sm:px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#D4AF37]/15 bg-[#0A1812]">
          {PURITY_COMPARISON_DATA.map((item, index) => {
            const is24K = item.karat.includes('24');
            return (
              <tr
                key={index}
                className={`transition-colors ${
                  is24K
                    ? 'bg-gradient-to-r from-[#D4AF37]/20 via-[#10261D] to-[#D4AF37]/15 font-semibold text-[#FAF7F2]'
                    : 'hover:bg-[#0F261D] text-[#EDE8E1]/90'
                }`}
              >
                <td className="py-4 px-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    {is24K && <Sparkles className="w-4 h-4 text-[#E5C365] shrink-0" />}
                    <span className={`font-serif text-sm sm:text-base ${is24K ? 'text-[#E5C365] font-bold' : ''}`}>
                      {item.karat}
                    </span>
                    {is24K && (
                      <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-[#D4AF37] text-[#091610]">
                        Investment Bullion
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 font-mono">{item.fineness}</td>
                <td className="py-4 px-3 sm:px-4 font-mono font-semibold">{item.purityPercent}</td>
                <td className="py-4 px-3 sm:px-4 font-mono text-[#E5C365]">
                  ${item.pricePerGram.toFixed(2)}
                </td>
                <td className="py-4 px-3 sm:px-4 font-mono text-[#FAF7F2]">
                  ${item.pricePerKg.toLocaleString()}
                </td>
                <td className="py-4 px-4 sm:px-6 text-xs text-[#9CB6A8]">
                  {item.bestFor}
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <button
                    onClick={() => onSelectKarat && onSelectKarat(item.karat)}
                    className="px-3 py-1.5 rounded bg-[#D4AF37]/20 hover:bg-[#D4AF37] text-[#E5C365] hover:text-[#091610] text-xs font-bold transition-all"
                  >
                    Quote →
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
