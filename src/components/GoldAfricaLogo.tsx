import React from 'react';

interface GoldAfricaLogoProps {
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
  showTagline?: boolean;
  height?: number | string;
}

export const GoldAfricaLogo: React.FC<GoldAfricaLogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true,
  height = 48,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex flex-col ${className}`} style={{ textDecoration: 'none' }}>
      <div className="flex items-center gap-3">
        <img
          src="/gold-africa-logo.png"
          alt="Gold Africa — Certified African Gold Bullion & Dore"
          style={{
            height: typeof height === 'number' ? `${height}px` : height,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
            filter: isLight
              ? 'drop-shadow(0 2px 12px rgba(212, 175, 55, 0.4)) brightness(1.06)'
              : 'drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
            transition: 'transform 0.3s ease, filter 0.3s ease',
          }}
          className="hover:scale-102"
          loading="eager"
        />
      </div>

      {showTagline && (
        <div
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: isLight ? '#D4AF37' : '#7A6436',
            marginTop: '3px',
            paddingLeft: '4px',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          LUBOWA · KAMPALA
        </div>
      )}
    </div>
  );
};

export default GoldAfricaLogo;
