import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  author?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_TITLE = 'Gold Africa | Buy 24K Gold Bars, Doré & Bullion Direct from Africa';
const DEFAULT_DESC =
  'Gold Africa (Reg: 80020000702132) is Africa’s premier licensed gold trading platform. Buy certified 24K pure gold bars, raw doré, and investment bullion direct from Uganda with live LBMA spot pricing, SGS/XRF assay, and Brinks insured worldwide delivery.';
const DEFAULT_KEYWORDS =
  'buy gold in africa, african gold bullion, uganda gold exporters, gold trading companies in africa, kampala gold refinery, raw gold dore bars uganda, 24k gold bars for sale, buy gold direct from mine africa, gold export permits uganda, lbma gold bars africa, 1kg gold bar price, brinks insured gold shipping, oecd compliant gold sourcing, conflict free gold uganda, gold dore supplier kampala';
const SITE_URL = 'https://www.goldafric.com';
const DEFAULT_IMAGE = `${SITE_URL}/gold-africa-logo.png`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  author = 'Gold Africa',
  schema,
}) => {
  const fullTitle = title ? (title.includes('Gold Africa') ? title : `${title} | Gold Africa`) : DEFAULT_TITLE;
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : typeof window !== 'undefined'
    ? window.location.href.split('?')[0].split('#')[0]
    : SITE_URL;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to create or update meta tags
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', author);
    setMetaTag('name', 'publisher', 'Gold Africa Company Limited');
    setMetaTag('name', 'copyright', 'Gold Africa Company Limited');
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'revisit-after', '1 days');
    setMetaTag('name', 'rating', 'general');
    setMetaTag('name', 'language', 'English');

    // Geo tags for local/regional African gold trading authority
    setMetaTag('name', 'geo.region', 'UG-102');
    setMetaTag('name', 'geo.placename', 'Lubowa, Kampala, Uganda');
    setMetaTag('name', 'geo.position', '0.2458;32.5644');
    setMetaTag('name', 'ICBM', '0.2458, 32.5644');

    // 3. OpenGraph Meta Tags
    setMetaTag('property', 'og:site_name', 'Gold Africa');
    setMetaTag('property', 'og:locale', 'en_US');
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:secure_url', ogImage);
    setMetaTag('property', 'og:image:alt', `${fullTitle} - Gold Africa`);

    // 4. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@goldafrica');
    setMetaTag('name', 'twitter:creator', '@goldafrica');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', `${fullTitle} - Gold Africa`);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Dynamic Schema
    const schemaId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = schemaId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, description, keywords, canonicalUrl, ogType, ogImage, author, schema]);

  return null;
};
