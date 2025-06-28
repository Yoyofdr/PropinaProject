const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.tippingin.com';
const dataDir = path.join(__dirname, '..', 'src', 'data', 'en');
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Obtiene todos los archivos de país en inglés
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

files.forEach(file => {
  const data = require(path.join(dataDir, file));
  if (data && data.slug) {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/en/${data.slug}</loc>\n`;
    xml += `  </url>\n`;
  }
});

xml += `</urlset>\n`;
fs.writeFileSync(sitemapPath, xml);
console.log('Sitemap generado en', sitemapPath); 