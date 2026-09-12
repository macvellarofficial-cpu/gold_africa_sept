import React from 'react';
import { ShieldCheck, Microscope, Plane, Landmark } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#DFB845]" />,
      title: 'Direct Mine Sourcing',
      desc: 'No broker markup. Direct partnerships with certified artisanal & industrial mines in Uganda & East Africa.',
    },
    {
      icon: <Microscope className="w-6 h-6 text-[#DFB845]" />,
      title: 'Live Video XRF Assay',
      desc: 'SGS & Bureau Veritas accredited spectrometry conducted and witnessed live before wire transfers.',
    },
    {
      icon: <Plane className="w-6 h-6 text-[#DFB845]" />,
      title: 'Insured Brinks Global Freight',
      desc: 'Armored air cargo door-to-door or destination airport with 100% replacement insurance underwritten by Lloyds.',
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#DFB845]" />,
      title: 'OECD & AML Compliant',
      desc: 'Government mineral export permits, Certificate of Origin, ICGLR regional certification, zero conflict minerals.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#091610] via-[#0F261D] to-[#091610] border-y border-[#D4AF37]/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#0F261D]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 group-hover:bg-[#D4AF37]/20 transition-colors shrink-0">
                {point.icon}
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-[#FAF7F2] group-hover:text-[#E5C365] transition-colors">
                  {point.title}
                </h4>
                <p className="text-xs text-[#9CB6A8] leading-relaxed mt-1">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
