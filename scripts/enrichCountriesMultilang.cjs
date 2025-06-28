const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/en/countries.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const extraServices = {
  spa: 10,
  delivery: 5,
  room_service: 8,
  valet: 12
};

let changed = false;

data.forEach(country => {
  if (!country.tip_percentages) return;
  let updated = false;
  for (const [service, value] of Object.entries(extraServices)) {
    if (!(service in country.tip_percentages)) {
      country.tip_percentages[service] = value;
      updated = true;
    }
  }
  if (updated) changed = true;
});

if (changed) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Servicios extra añadidos a todos los países.');
} else {
  console.log('Todos los países ya tenían los servicios extra.');
}

function toSlug(country) {
  return 'how-much-to-tip-in-' + country.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function makeIntro(country) {
  return `How much to tip in ${country}? Tipping in ${country} is not mandatory, but it is a common practice in restaurants, bars, hotels, and taxis. Most locals leave around 10% in restaurants, and small change in bars and taxis. Learn all about tipping customs, etiquette, and the best practices for travelers in ${country}.`;
}

function makeFAQ(country) {
  return [
    {
      q: `How much to tip in ${country}?`,
      a: `In ${country}, it is customary to leave around 10% in restaurants if you are satisfied with the service. Tipping is not mandatory, but it is appreciated. In bars and taxis, rounding up the bill or leaving small change is common.`
    },
    {
      q: `Is tipping mandatory in ${country}?`,
      a: `Tipping is not mandatory in ${country}. However, it is a polite gesture to leave a tip for good service, especially in restaurants and hotels.`
    },
    {
      q: `Do you tip in ${country} taxis?`,
      a: `Tipping taxi drivers in ${country} is not required, but rounding up the fare or leaving small change is appreciated.`
    },
    {
      q: `How much do you tip hotel staff in ${country}?`,
      a: `For hotel staff in ${country}, a tip of 1-2 units of local currency per bag for porters and a few units for housekeeping is customary, but not obligatory.`
    },
    {
      q: `Is service charge included in ${country}?`,
      a: `Some restaurants in ${country} may include a service charge, but this is not common. Always check your bill. If service is not included, a 10% tip is appreciated.`
    }
  ];
}

const updated = data.map(c => {
  const country = c.country || c.name;
  return {
    ...c,
    slug: toSlug(country),
    intro: makeIntro(country),
    faq: makeFAQ(country)
  };
});

fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
console.log('All countries updated for SEO!'); 