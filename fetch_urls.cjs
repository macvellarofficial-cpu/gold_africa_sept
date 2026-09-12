const fs = require('fs');
const { execSync } = require('child_process');

function getUrls(sitemapUrl) {
  try {
    const cmd = `curl.exe -s -L -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -H "Accept: text/html,application/xhtml+xml,application/xml" ${sitemapUrl}`;
    const xml = execSync(cmd, { maxBuffer: 10 * 1024 * 1024 }).toString();
    const matches = [...xml.matchAll(/<loc>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/loc>/g)].map(m => m[1].trim());
    return matches;
  } catch (e) {
    console.error('Error fetching', sitemapUrl, e.message);
    return [];
  }
}

const posts = getUrls('https://goldbarsuppliers.com/post-sitemap.xml');
const pages = getUrls('https://goldbarsuppliers.com/page-sitemap.xml');
const categories = getUrls('https://goldbarsuppliers.com/category-sitemap.xml');

console.log('Total posts:', posts.length);
console.log('Total pages:', pages.length);
console.log('Total categories:', categories.length);

const allUrls = Array.from(new Set([...posts, ...pages, ...categories]));
console.log('Total unique URLs:', allUrls.length);

fs.writeFileSync('all_urls.json', JSON.stringify({ posts, pages, categories, allUrls }, null, 2));
console.log('Saved to all_urls.json');
