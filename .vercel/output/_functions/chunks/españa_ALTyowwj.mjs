const country = "España";
const slug = "propina-en-españa";
const language = "es";
const tip_percentages = {"restaurant":10,"bar":10,"hotel":10,"taxi":0};
const faq = [{"q":"¿Es obligatoria la propina en España?","a":"No es obligatoria, pero es costumbre dejar entre el 10% y 15% en restaurantes."}];
const related_countries = [];
const adsense_slots = ["main","footer"];
const affiliate_links = {"wise":"https://wise.com/","booking":"https://www.booking.com/","safetywing":"https://safetywing.com/"};
const espa_a = {
  country,
  slug,
  language,
  tip_percentages,
  faq,
  related_countries,
  adsense_slots,
  affiliate_links,
};

export { adsense_slots, affiliate_links, country, espa_a as default, faq, language, related_countries, slug, tip_percentages };
