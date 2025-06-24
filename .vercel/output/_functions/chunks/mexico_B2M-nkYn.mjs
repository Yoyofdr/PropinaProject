const country = "Mexico";
const slug = "tipping-in-mexico";
const language = "en";
const tip_percentages = {"restaurant":10,"bar":10,"hotel":10,"taxi":0};
const faq = [{"q":"Is tipping mandatory in Mexico?","a":"Tipping is not mandatory, but it is customary to leave between 10% and 15% in restaurants."},{"q":"Do you tip taxi drivers?","a":"It is not common to tip taxi drivers, but you can round up the fare."}];
const related_countries = ["en/tipping-in-usa","es/propina-en-espana"];
const adsense_slots = ["main","footer"];
const affiliate_links = {"wise":"https://wise.com/en/","booking":"https://www.booking.com/country/mx.en.html","safetywing":"https://safetywing.com/"};
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
