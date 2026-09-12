const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.goldafric.com';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// 1. High Priority Core Pages
const corePages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'products', priority: '0.9', changefreq: 'daily' },
  { path: 'gold-bars-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: 'gold-bullion', priority: '0.9', changefreq: 'daily' },
  { path: '1kg-gold-bars-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: 'product/1kg-gold-bar', priority: '0.9', changefreq: 'daily' },
  { path: 'gold-dore-bars-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: 'product/gold-dore-bars', priority: '0.9', changefreq: 'daily' },
  { path: '24k-gold-bars-for-sale-africa', priority: '0.9', changefreq: 'daily' },
  { path: '22k-gold-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: '1-oz-gold-bar-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: '50-grams-gold-bar-for-sale', priority: '0.9', changefreq: 'daily' },
  { path: 'buy-gold-nuggets-from-africa', priority: '0.9', changefreq: 'daily' },
  { path: 'buy-raw-gold-dust-online', priority: '0.85', changefreq: 'weekly' },
  { path: 'silver-bars-in-africa', priority: '0.85', changefreq: 'weekly' },
  { path: 'gold-coins-in-kenya', priority: '0.85', changefreq: 'weekly' },
  { path: 'gold-for-sale-in-uganda', priority: '0.9', changefreq: 'weekly' },
  { path: 'how-to-buy-gold-in-uganda', priority: '0.9', changefreq: 'weekly' },
  { path: '1-bar-of-gold-price-in-uganda', priority: '0.9', changefreq: 'weekly' },
  { path: 'services', priority: '0.85', changefreq: 'weekly' },
  { path: 'gold-refineries-in-uganda', priority: '0.85', changefreq: 'weekly' },
  { path: 'list-of-gold-refineries-in-uganda', priority: '0.85', changefreq: 'weekly' },
  { path: 'african-gold-refinery', priority: '0.85', changefreq: 'weekly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'about-us', priority: '0.75', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact-us', priority: '0.75', changefreq: 'monthly' },
  { path: 'category/african-markets', priority: '0.8', changefreq: 'weekly' },
  { path: 'category/compliance-logistics', priority: '0.8', changefreq: 'weekly' },
  { path: 'category/market-guide', priority: '0.8', changefreq: 'weekly' },
];

// Map of canonical paths to avoid duplicates
const urlMap = new Map();

// Add core pages
corePages.forEach((p) => {
  const cleanPath = p.path.replace(/^\/+|\/+$/g, '');
  const loc = cleanPath === '' ? `${DOMAIN}/` : `${DOMAIN}/${cleanPath}`;
  urlMap.set(loc, { loc, priority: p.priority, changefreq: p.changefreq, lastmod: TODAY });
});

// Load all external target URLs
try {
  const allUrlsFile = path.resolve(__dirname, '../all_urls.json');
  if (fs.existsSync(allUrlsFile)) {
    const raw = JSON.parse(fs.readFileSync(allUrlsFile, 'utf-8'));
    const urls = raw.allUrls || [];
    urls.forEach((u) => {
      let slug = u.replace(/^https?:\/\/[^\/]+/i, '').replace(/^\/+|\/+$/g, '');
      if (slug) {
        const loc = `${DOMAIN}/${slug}`;
        if (!urlMap.has(loc)) {
          // Categorize priority
          let priority = '0.75';
          let changefreq = 'weekly';
          if (slug.includes('price') || slug.includes('buy-gold') || slug.includes('refiner')) {
            priority = '0.8';
          }
          urlMap.set(loc, { loc, priority, changefreq, lastmod: TODAY });
        }
      }
    });
  }
} catch (e) {
  console.error('Error loading all_urls.json:', e);
}

// Build XML conforming strictly to Google Search Console XML schema
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

for (const entry of urlMap.values()) {
  xml += `  <url>\n`;
  xml += `    <loc>${entry.loc}</loc>\n`;
  xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  xml += `    <priority>${entry.priority}</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8');
console.log(`Generated sitemap.xml with ${urlMap.size} URLs at ${path.join(publicDir, 'sitemap.xml')}`);
