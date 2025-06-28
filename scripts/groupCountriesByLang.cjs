const fs = require('fs');
const path = require('path');

const langs = ['en', 'es', 'ar', 'hi', 'zh', 'fr'];
const dataDir = path.join(__dirname, '../src/data');

langs.forEach(lang => {
  const langDir = path.join(dataDir, lang);
  if (!fs.existsSync(langDir)) return;
  const files = fs.readdirSync(langDir).filter(f => f.endsWith('.json') && f !== 'countries.json');
  const countries = [];
  files.forEach(file => {
    const filePath = path.join(langDir, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let name = data.name;
      if (typeof name === 'object' && name[lang]) name = name[lang];
      if (typeof name === 'string' && typeof data.slug === 'string') {
        countries.push({ ...data, name });
      }
    } catch (e) {
      // Ignorar archivos corruptos
    }
  });
  const outPath = path.join(langDir, 'countries.json');
  fs.writeFileSync(outPath, JSON.stringify(countries, null, 2), 'utf8');
  console.log(`✅ ${lang}: ${countries.length} países → ${outPath}`);
}); 