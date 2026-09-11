import React from 'react';
import { PURITY_COMPARISON_DATA } from '../data/goldData';
import { Sparkles } from 'lucide-react';

interface PurityTableProps {
  onSelectKarat?: (karat: string) => void;
}

export const PurityComparisonTable: React.FC<PurityTableProps> = ({ onSelectKarat }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#C59B27]/30 shadow-2xl">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="bg-[#1F1A14] border-b border-[#C59B27]/30 text-[#DFB845] uppercase tracking-wider font-semibold font-mono text-[11px] sm:text-xs">
            <th className="py-4 px-4 sm:px-6">Karat Grading</th>
            <th className="py-4 px-3 sm:px-4">Fineness</th>
            <th className="py-4 px-3 sm:px-4">Gold %</th>
            <th className="py-4 px-3 sm:px-4">Price / Gram (USD)</th>
            <th className="py-4 px-3 sm:px-4">Price / Kg (USD)</th>
            <th className="py-4 px-4 sm:px-6">Primary Application</th>
            <th className="py-4 px-3 sm:px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#C59B27]/15 bg-[#15120E]">
          {PURITY_COMPARISON_DATA.map((item, index) => {
            const is24K = item.karat.includes('24');
            return (
              <tr
                key={index}
                className={`transition-colors ${
                  is24K
                    ? 'bg-gradient-to-r from-[#C59B27]/20 via-[#25201A] to-[#C59B27]/15 font-semibold text-[#FAF7F2]'
                    : 'hover:bg-[#1F1A14] text-[#EDE8E1]/90'
                }`}
              >
                <td className="py-4 px-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    {is24K && <Sparkles className="w-4 h-4 text-[#DFB845] shrink-0" />}
                    <span className={`font-serif text-sm sm:text-base ${is24K ? 'text-[#DFB845] font-bold' : ''}`}>
                      {item.karat}
                    </span>
                    {is24K && (
                      <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-[#C59B27] text-black">
                        Investment Bullion
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 font-mono">{item.fineness}</td>
                <td className="py-4 px-3 sm:px-4 font-mono font-semibold">{item.purityPercent}</td>
                <td className="py-4 px-3 sm:px-4 font-mono text-[#DFB845]">
                  ${item.pricePerGram.toFixed(2)}
                </td>
                <td className="py-4 px-3 sm:px-4 font-mono text-[#FAF7F2]">
                  ${item.pricePerKg.toLocaleString()}
                </td>
                <td className="py-4 px-4 sm:px-6 text-xs text-[#A39B8F]">
                  {item.bestFor}
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <button
                    onClick={() => onSelectKarat && onSelectKarat(item.karat)}
                    className="px-3 py-1.5 rounded bg-[#C59B27]/20 hover:bg-[#C59B27] text-[#DFB845] hover:text-[#15120E] text-xs font-bold transition-all"
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
