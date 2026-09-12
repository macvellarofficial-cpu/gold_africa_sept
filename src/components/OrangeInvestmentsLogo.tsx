import React from 'react';

interface OrangeInvestmentsLogoProps {
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
  showTagline?: boolean;
}

export const OrangeInvestmentsLogo: React.FC<OrangeInvestmentsLogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  const titleColor = isLight ? '#FFFDF8' : '#1A1408';
  const subtitleColor = isLight ? '#E5C378' : '#A66B18';
  const tagColor = isLight ? '#C9B58C' : '#6B5A3D';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Luxury Bullion Emblem (Gold & Amber Crest) */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
      >
        <defs>
          <linearGradient id="oiGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA028" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#FFF2A1" />
            <stop offset="100%" stopColor="#B37812" />
          </linearGradient>
          <linearGradient id="oiShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A1B04" />
            <stop offset="100%" stopColor="#120B02" />
          </linearGradient>
          <filter id="oiGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#FF8C00" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Rim with Gold Border */}
        <circle cx="27" cy="27" r="25" fill="url(#oiShieldGrad)" stroke="url(#oiGoldGrad)" strokeWidth="2" />
        <circle cx="27" cy="27" r="22" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="2 2" />

        {/* Central Stamped 3D Bullion Bar */}
        <g filter="url(#oiGlow)">
          {/* Main trapezoid bar */}
          <polygon points="17,34 22,20 32,20 37,34" fill="url(#oiGoldGrad)" stroke="#B37812" strokeWidth="0.8" />
          {/* Top highlight facet */}
          <polygon points="22,20 32,20 30,17 24,17" fill="#FFF6C2" opacity="0.9" />
          {/* Left bevel */}
          <polygon points="17,34 22,20 24,20 19,34" fill="#E67E00" opacity="0.8" />
        </g>

        {/* Stylized 'OI' Monogram inside Bar */}
        <text
          x="27"
          y="29.5"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          fontSize="8"
          fontWeight="900"
          fill="#1C1303"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          OI
        </text>

        {/* 999.9 Fine Hallmark Stamp */}
        <text
          x="27"
          y="42"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="4.2"
          fontWeight="800"
          fill="#E5C378"
          textAnchor="middle"
          letterSpacing="0.6"
        >
          999.9 GOLD
        </text>
      </svg>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <span
          className="font-serif font-black tracking-wider text-[15px] sm:text-[17px] leading-none uppercase"
          style={{ color: titleColor }}
        >
          ORANGE INVESTMENTS
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span
            className="font-serif font-bold text-[11px] sm:text-[12px] tracking-widest uppercase"
            style={{ color: subtitleColor }}
          >
            CO. LTD
          </span>
          {showTagline && (
            <>
              <span className="text-[10px] text-[#A66B18]">•</span>
              <span
                className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase"
                style={{ color: tagColor }}
              >
                LUBOWA · KAMPALA
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrangeInvestmentsLogo;
