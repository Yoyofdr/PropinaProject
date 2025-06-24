const country = "Mexique";
const slug = "pourboire-au-mexique";
const language = "fr";
const tip_percentages = {"restaurant":10,"bar":10,"hôtel":10,"taxi":0};
const faq = [{"q":"Le pourboire est-il obligatoire au Mexique ?","a":"Le pourboire n'est pas obligatoire, mais il est d'usage de laisser entre 10% et 15% dans les restaurants."},{"q":"Faut-il donner un pourboire aux taxis ?","a":"Il n'est pas courant de donner un pourboire aux taxis, mais vous pouvez arrondir le montant."}];
const related_countries = ["fr/pourboire-aux-etats-unis","es/propina-en-espana"];
const adsense_slots = ["main","footer"];
const affiliate_links = {"wise":"https://wise.com/fr/","booking":"https://www.booking.com/country/mx.fr.html","safetywing":"https://safetywing.com/"};
const mexique = {
  country,
  slug,
  language,
  tip_percentages,
  faq,
  related_countries,
  adsense_slots,
  affiliate_links,
};

export { adsense_slots, affiliate_links, country, mexique as default, faq, language, related_countries, slug, tip_percentages };
