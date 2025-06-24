const country = "México";
const slug = "propina-en-mexico";
const language = "es";
const tip_percentages = {"restaurante":10,"bar":10,"hotel":10,"taxi":0};
const faq = [{"q":"¿Es obligatoria la propina en México?","a":"No es obligatoria, pero es costumbre dejar entre el 10% y 15% en restaurantes."},{"q":"¿Se deja propina en taxis?","a":"No es común dejar propina en taxis, pero se puede redondear el monto."}];
const related_countries = ["es/propina-en-espana","en/tipping-in-usa"];
const adsense_slots = ["main","footer"];
const affiliate_links = {"wise":"https://wise.com/es/","booking":"https://www.booking.com/country/mx.es.html","safetywing":"https://safetywing.com/"};
const mexico = {
  country,
  slug,
  language,
  tip_percentages,
  faq,
  related_countries,
  adsense_slots,
  affiliate_links,
};

export { adsense_slots, affiliate_links, country, mexico as default, faq, language, related_countries, slug, tip_percentages };
