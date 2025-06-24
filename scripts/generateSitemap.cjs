const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.tu-dominio.com';
const contentDir = path.join(__dirname, '..', 'content');
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Obtiene todos los idiomas
const langs = fs.readdirSync(contentDir).filter(f => fs.statSync(path.join(contentDir, f)).isDirectory());

// Mapea país -> { lang: slug }
const countryMap = {};
langs.forEach(lang => {
  const files = fs.readdirSync(path.join(contentDir, lang)).filter(f => f.endsWith('.json'));
  files.forEach(file => {
    const slug = file.replace('.json', '');
    if (!countryMap[slug]) countryMap[slug] = {};
    countryMap[slug][lang] = require(path.join(contentDir, lang, file)).slug;
  });
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

Object.entries(countryMap).forEach(([slug, langsObj]) => {
  Object.entries(langsObj).forEach(([lang, pageSlug]) => {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/${lang}/${pageSlug}</loc>\n`;
    Object.entries(langsObj).forEach(([altLang, altSlug]) => {
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${SITE_URL}/${altLang}/${altSlug}" />\n`;
    });
    xml += `  </url>\n`;
  });
});

xml += `</urlset>\n`;
fs.writeFileSync(sitemapPath, xml);
console.log('Sitemap generado en', sitemapPath); 