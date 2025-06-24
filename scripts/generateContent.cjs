// Script para generar archivos de contenido por país e idioma
const fs = require('fs');
const path = require('path');
const countriesList = require('country-list');
const countries = countriesList.getData();

// Lista de idiomas (40 más hablados)
const languages = [
  'es','en','fr','pt','de','zh','ru','ar','hi','ja','ko','tr','it','pl','nl','vi','sv','fi','el','th','he','hu','id','ms','ta','uk','ro','cs','da','fa','ur','sr','bg','sk','hr','nb','fil','bn','gu','ml'
];

// Función para normalizar slugs
function slugify(str, lang) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Plantilla base de contenido mejorada con más servicios
function getBaseContent(lang, countryCode, countryName) {
  const notes = {
    es: {
      restaurant: "En restaurantes se suele dejar entre el 10% y 15% del total de la cuenta.",
      hotel: "En hoteles, la propina suele ser para el personal de limpieza y botones.",
      taxi: "No es común dejar propina en taxis, pero se puede redondear el monto.",
      bar: "En bares, se deja propina si hay servicio en mesa.",
      delivery: "Para repartidores de apps o comida a domicilio se suele dejar un 10%.",
      hairdresser: "En peluquerías y barberías se suele dejar propina al estilista.",
      spa: "En spas y masajes es habitual dejar propina al terapeuta.",
      tour_guide: "A los guías turísticos se les suele dar propina al final del tour.",
      valet: "El valet parking suele recibir una pequeña propina por el servicio.",
      cleaning: "El personal de limpieza en alojamientos agradece una propina por estancia.",
      parking: "En estacionamientos vigilados, a veces se deja propina al cuidador.",
      restroom: "En baños públicos atendidos, se suele dejar una moneda como propina.",
      fast_food: "En comida rápida no es común dejar propina, salvo servicio a mesa.",
      buffet: "En restaurantes buffet, la propina es menor o solo para el personal de bebidas."
    },
    en: {
      restaurant: "In restaurants, it is customary to leave between 10% and 15% of the bill.",
      hotel: "In hotels, tipping is usually for housekeeping and bell staff.",
      taxi: "It is not common to tip taxi drivers, but you can round up the fare.",
      bar: "In bars, tip if there is table service.",
      delivery: "For delivery drivers (apps or food), a 10% tip is common.",
      hairdresser: "At hairdressers and barbers, tipping your stylist is customary.",
      spa: "In spas and massages, it is usual to tip the therapist.",
      tour_guide: "Tour guides are usually tipped at the end of the tour.",
      valet: "Valet parking attendants usually receive a small tip.",
      cleaning: "Housekeeping staff in accommodations appreciate a tip per stay.",
      parking: "In attended parking lots, a tip for the attendant is sometimes given.",
      restroom: "In attended public restrooms, a coin tip is customary.",
      fast_food: "In fast food, tipping is not common unless there is table service.",
      buffet: "In buffet restaurants, tipping is lower or only for drink staff."
    },
    fr: {
      restaurant: "Dans les restaurants, il est d'usage de laisser entre 10% et 15% de l'addition.",
      hotel: "Dans les hôtels, le pourboire est destiné au personnel de ménage et aux porteurs.",
      taxi: "Il n'est pas courant de donner un pourboire aux taxis, mais vous pouvez arrondir le montant.",
      bar: "Dans les bars, laissez un pourboire s'il y a un service à table.",
      delivery: "Pour les livreurs (applications ou repas), un pourboire de 10% est courant.",
      hairdresser: "Chez le coiffeur ou le barbier, il est d'usage de laisser un pourboire.",
      spa: "Dans les spas et massages, il est habituel de donner un pourboire au thérapeute.",
      tour_guide: "Les guides touristiques reçoivent généralement un pourboire à la fin de la visite.",
      valet: "Le voiturier reçoit généralement un petit pourboire.",
      cleaning: "Le personnel de ménage dans les hébergements apprécie un pourboire par séjour.",
      parking: "Dans les parkings surveillés, il est parfois d'usage de donner un pourboire au gardien.",
      restroom: "Dans les toilettes publiques avec personnel, il est courant de laisser une pièce.",
      fast_food: "Dans la restauration rapide, le pourboire n'est pas courant sauf service à table.",
      buffet: "Dans les buffets, le pourboire est moindre ou réservé au personnel des boissons."
    }
  };
  const n = notes[lang] || notes['en'];
  return {
    country: countryName,
    slug: lang === 'es' ? `propina-en-${slugify(countryName, lang)}` :
          lang === 'fr' ? `pourboire-au-${slugify(countryName, lang)}` :
          `tipping-in-${slugify(countryName, lang)}`,
    language: lang,
    tip_percentages: {
      restaurant: { percent: 10, note: n.restaurant },
      hotel: { percent: 10, note: n.hotel },
      taxi: { percent: 0, note: n.taxi },
      bar: { percent: 10, note: n.bar },
      delivery: { percent: 10, note: n.delivery },
      hairdresser: { percent: 10, note: n.hairdresser },
      spa: { percent: 10, note: n.spa },
      tour_guide: { percent: 10, note: n.tour_guide },
      valet: { percent: 5, note: n.valet },
      cleaning: { percent: 10, note: n.cleaning },
      parking: { percent: 5, note: n.parking },
      restroom: { percent: 1, note: n.restroom },
      fast_food: { percent: 0, note: n.fast_food },
      buffet: { percent: 5, note: n.buffet }
    },
    faq: [
      {
        q: lang === 'es' ? `¿Es obligatoria la propina en ${countryName}?` :
           lang === 'fr' ? `Le pourboire est-il obligatoire en ${countryName} ?` :
           `Is tipping mandatory in ${countryName}?`,
        a: lang === 'es' ? `No es obligatoria, pero es costumbre dejar entre el 10% y 15% en restaurantes.` :
           lang === 'fr' ? `Le pourboire n'est pas obligatoire, mais il est d'usage de laisser entre 10% et 15% dans les restaurants.` :
           `Tipping is not mandatory, but it is customary to leave between 10% and 15% in restaurants.`
      }
    ],
    related_countries: [],
    adsense_slots: ["main", "footer"],
    affiliate_links: {
      wise: "https://wise.com/",
      booking: "https://www.booking.com/",
      safetywing: "https://safetywing.com/"
    }
  };
}

languages.forEach(lang => {
  countries.forEach(country => {
    const countryName = country.name;
    const dir = path.join(__dirname, '..', 'content', lang);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${slugify(countryName, lang)}.json`);
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify(getBaseContent(lang, country.code, countryName), null, 2));
      console.log(`Creado: ${file}`);
    }
  });
}); 