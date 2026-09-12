import React, { useState, useEffect } from 'react';

// Reliable verified fallback pool for bullion, nuggets, dore, vaults, and logistics
export const GOLD_FALLBACK_IMAGES = {
  bars: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80',
  nuggets: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=80',
  dore: 'https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-dore-bars-for-sale.jpeg',
  vault: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=1200&q=80',
  handHoldingBar: 'https://goldbarsuppliers.com/wp-content/uploads/2025/11/gold-in-south-africa.webp',
  kilobar: 'https://goldbarsuppliers.com/wp-content/uploads/2025/10/gold-3.webp',
  oneOz: 'https://goldbarsuppliers.com/wp-content/uploads/2025/11/1-oz-Gold-Bar-for-Sale.webp',
  coins: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=1200&q=80',
  refinery: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
};

// SVG fallback if offline or network fails
const FALLBACK_SVG =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231a150a'/%3E%3Cstop offset='50%25' stop-color='%233a2d10'/%3E%3Cstop offset='100%25' stop-color='%231a150a'/%3E%3C/linearGradient%3E%3ClinearGradient id='gold' x1='0%25' y1='0%25' x2='100%25' y2='50%25'%3E%3Cstop offset='0%25' stop-color='%23D4AF37'/%3E%3Cstop offset='50%25' stop-color='%23FFF2A1'/%3E%3Cstop offset='100%25' stop-color='%23AA7D1E'/%3E%3C/linearGradient%3E%3Cdefs%3E%3Crect width='800' height='500' fill='url(%23g)'/%3E%3Cpolygon points='250,330 310,210 490,210 550,330' fill='url(%23gold)' stroke='%23AA7D1E' stroke-width='3'/%3E%3Ctext x='400' y='270' font-family='serif' font-size='22' font-weight='bold' fill='%235A3D0A' text-anchor='middle'%3E999.9 FINE GOLD%3C/text%3E%3Ctext x='400' y='300' font-family='sans-serif' font-size='14' fill='%235A3D0A' text-anchor='middle'%3EORANGE INVESTMENTS CO. LTD%3C/text%3E%3C/svg%3E";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: keyof typeof GOLD_FALLBACK_IMAGES;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackCategory = 'bars',
  className = '',
  onError,
  ...props
}) => {
  const primaryFallback = GOLD_FALLBACK_IMAGES[fallbackCategory] || GOLD_FALLBACK_IMAGES.bars;
  const [currentSrc, setCurrentSrc] = useState<string>(src || primaryFallback);
  const [errorStage, setErrorStage] = useState<number>(0);

  useEffect(() => {
    setCurrentSrc(src || primaryFallback);
    setErrorStage(0);
  }, [src, primaryFallback]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (errorStage === 0) {
      setErrorStage(1);
      setCurrentSrc(primaryFallback);
    } else if (errorStage === 1) {
      setErrorStage(2);
      setCurrentSrc(GOLD_FALLBACK_IMAGES.bars);
    } else if (errorStage === 2) {
      setErrorStage(3);
      setCurrentSrc(FALLBACK_SVG);
    }

    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt || 'Orange Investments Company Limited'}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default SafeImage;
