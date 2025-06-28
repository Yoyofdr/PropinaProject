/* empty css                                      */
import { c as createComponent, d as createAstro, a as renderTemplate, e as renderComponent, r as renderHead, b as addAttribute, F as Fragment } from '../../chunks/astro/server_D8CQh0Fy.mjs';
import { c as countriesEn } from '../../chunks/countries_BMhfRQX3.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const site_title = "Global Tip Calculator";
const site_description = "Find out how much to tip in any country. Interactive calculator and service data.";
const tip_calculator = "Tip Calculator";
const amount = "Amount";
const country = "Country";
const service_type = "Service Type";
const calculate = "Calculate";
const typical_tip = "Typical Tip";
const total_with_tip = "Total with Tip";
const faq = "Frequently Asked Questions";
const related_countries = "Related Countries";
const change_language = "Change Language";
const no_data = "No data available for this country.";
const select_service = "Select a service";
const other_countries = "Other countries";
const adsense_notice = "This site uses Google AdSense for monetization.";
const affiliate_notice = "Affiliate links may generate a commission for us at no extra cost to you.";
const back_home = "Back to home";
const affiliate_wise = "Send money abroad with Wise";
const affiliate_booking = "Book your hotel with Booking";
const affiliate_safetywing = "Travel insurance with SafetyWing";
const notes = {"standard_service":"Standard service","per_round":"Per round or total","per_night":"Per night or total","round_up_or_10":"Round up or 10%","food_delivery":"Food delivery","on_service_value":"On the value of the service","hairdresser_barber":"Hairdresser/barber","per_person_or_group":"Per person or group","per_parked_car":"Per parked car","per_bag":"Per bag","per_hotel_night":"Per hotel night","per_drink_or_round":"Per drink or round","per_person":"Per person","per_special_request":"Per special request"};
const translations = {
  site_title,
  site_description,
  tip_calculator,
  amount,
  country,
  service_type,
  calculate,
  typical_tip,
  total_with_tip,
  faq,
  related_countries,
  change_language,
  no_data,
  select_service,
  other_countries,
  adsense_notice,
  affiliate_notice,
  back_home,
  affiliate_wise,
  affiliate_booking,
  affiliate_safetywing,
  notes,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { country } = Astro2.params;
  const countrySlug = Array.isArray(country) ? country.join("/") : country;
  const countryData = countriesEn.find((c) => c.slug === countrySlug);
  const siteUrl = "https://www.tippingin.com";
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-rudynukb> <head><title>', '</title><meta name="description"', '><meta name="keywords"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="article"><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="canonical"', '><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css"><script type="application/ld+json">\n      {countryData ? JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "FAQPage",\n        "mainEntity": [\n          {\n            "@type": "Question",\n            "name": `Is tipping mandatory in ${countryData.name}?`,\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": countryData.tip\n            }\n          },\n          {\n            "@type": "Question",\n            "name": `How much should I tip in ${countryData.name}?`,\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": countryData.tip\n            }\n          }\n        ]\n      }) : \'\'}\n    <\/script><script type="application/ld+json">\n      {countryData ? JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "BreadcrumbList",\n        "itemListElement": [\n          {\n            "@type": "ListItem",\n            "position": 1,\n            "name": "Home",\n            "item": siteUrl\n          },\n          {\n            "@type": "ListItem",\n            "position": 2,\n            "name": countryData.name,\n            "item": `${siteUrl}/en/${countryData.slug}`\n          }\n        ]\n      }) : \'\'}\n    <\/script>', '</head> <body data-astro-cid-rudynukb> <div class="country-card-lovable" data-astro-cid-rudynukb> ', " </div> </body></html>"], ['<html lang="en" data-astro-cid-rudynukb> <head><title>', '</title><meta name="description"', '><meta name="keywords"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="article"><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="canonical"', '><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css"><script type="application/ld+json">\n      {countryData ? JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "FAQPage",\n        "mainEntity": [\n          {\n            "@type": "Question",\n            "name": \\`Is tipping mandatory in \\${countryData.name}?\\`,\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": countryData.tip\n            }\n          },\n          {\n            "@type": "Question",\n            "name": \\`How much should I tip in \\${countryData.name}?\\`,\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": countryData.tip\n            }\n          }\n        ]\n      }) : \'\'}\n    <\/script><script type="application/ld+json">\n      {countryData ? JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "BreadcrumbList",\n        "itemListElement": [\n          {\n            "@type": "ListItem",\n            "position": 1,\n            "name": "Home",\n            "item": siteUrl\n          },\n          {\n            "@type": "ListItem",\n            "position": 2,\n            "name": countryData.name,\n            "item": \\`\\${siteUrl}/en/\\${countryData.slug}\\`\n          }\n        ]\n      }) : \'\'}\n    <\/script>', '</head> <body data-astro-cid-rudynukb> <div class="country-card-lovable" data-astro-cid-rudynukb> ', " </div> </body></html>"])), countryData ? `Tipping in ${countryData.name} | Tip Global Calculator` : "Country not found | Tip Global Calculator", addAttribute(countryData ? `How much to tip in ${countryData.name}. Tipping customs, recommended percentages, and more.` : "Country not found.", "content"), addAttribute(countryData ? `tipping, tips, ${countryData.name}, how much to tip in ${countryData.name}, tipping customs, tip calculator, travel, restaurants, hotels, taxis` : "tipping, tips, tip calculator, travel", "content"), addAttribute(countryData ? `Tipping in ${countryData.name} | Tip Global Calculator` : "Country not found | Tip Global Calculator", "content"), addAttribute(countryData ? `How much to tip in ${countryData.name}. Tipping customs, recommended percentages, and more.` : "Country not found.", "content"), addAttribute(countryData ? `${siteUrl}/en/${countryData.slug}` : siteUrl, "content"), addAttribute(countryData ? `https://hatscripts.github.io/circle-flags/flags/${countryData.flag.toLowerCase()}.svg` : `${siteUrl}/social/social-default.jpg`, "content"), addAttribute(countryData ? `Tipping in ${countryData.name} | Tip Global Calculator` : "Country not found | Tip Global Calculator", "content"), addAttribute(countryData ? `How much to tip in ${countryData.name}. Tipping customs, recommended percentages, and more.` : "Country not found.", "content"), addAttribute(countryData ? `https://hatscripts.github.io/circle-flags/flags/${countryData.flag.toLowerCase()}.svg` : `${siteUrl}/social/social-default.jpg`, "content"), addAttribute(countryData ? `${siteUrl}/en/${countryData.slug}` : siteUrl, "href"), renderHead(), countryData ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-rudynukb": true }, { "default": ($$result2) => renderTemplate` <img${addAttribute(`https://hatscripts.github.io/circle-flags/flags/${countryData.flag.toLowerCase()}.svg`, "src")}${addAttribute(`Flag of ${countryData.name}`, "alt")} class="flag" loading="lazy" data-astro-cid-rudynukb> <h1 class="country-title" id="main-title" data-astro-cid-rudynukb>Tipping in ${countryData.name}</h1> <p style="margin-bottom:1.2em;font-size:1.08em;color:#23272f;max-width:600px;text-align:center;" data-astro-cid-rudynukb> ${`Wondering how much to tip in ${countryData.name}? On this page you'll find everything about tipping customs, recommended percentages, and practical advice for travelers. ${countryData.tip}`} </p> <div class="tip-block" role="region" aria-label="Summary of tipping in {countryData.name}" data-astro-cid-rudynukb>${countryData.tip}</div> <h2 style="margin-top:1.5em; margin-bottom:0.7em; color:#23272f; font-size:1.25em; text-align:center;" data-astro-cid-rudynukb>Tipping by Service</h2> <table class="tip-table" aria-label="Tipping by service" role="table" data-astro-cid-rudynukb> <thead data-astro-cid-rudynukb> <tr data-astro-cid-rudynukb> <th data-astro-cid-rudynukb>Service</th> <th data-astro-cid-rudynukb>Typical Tip</th> </tr> </thead> <tbody data-astro-cid-rudynukb> ${countryData.tip_percentages && Object.entries(countryData.tip_percentages).map(([service, value]) => {
    let percent = typeof value === "number" ? value : value.percent;
    return renderTemplate`<tr${addAttribute(service, "key")} data-astro-cid-rudynukb> <td style="text-transform:capitalize;" data-astro-cid-rudynukb>${service.replace(/_/g, " ")}</td> <td data-astro-cid-rudynukb>${percent}%</td> </tr>`;
  })} </tbody> </table> <h2 style="margin-top:2em; color:#23272f; font-size:1.15em; text-align:center;" data-astro-cid-rudynukb>Interactive Tip Calculator</h2> ${renderComponent($$result2, "TipCalculator", null, { "tipPercentages": countryData.tip_percentages, "translations": translations, "showTitle": true, "client:only": "react", "client:component-hydration": "only", "data-astro-cid-rudynukb": true, "client:component-path": "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/components/TipCalculator.jsx", "client:component-export": "default" })} <section style="margin-top:2.5em;text-align:center;max-width:700px;margin-left:auto;margin-right:auto;" data-astro-cid-rudynukb> <h2 style="
              font-size:2.1em;
              font-weight:800;
              text-align:center;
              margin-bottom:1.2em;
              background: linear-gradient(90deg, #34b3a0 0%, #38bdf8 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
              text-shadow: 0 2px 12px rgba(52,179,160,0.10);
            " data-astro-cid-rudynukb>Recommended travel resources</h2> <div style="display:flex;flex-wrap:wrap;gap:1.5em;justify-content:center;align-items:stretch;" data-astro-cid-rudynukb> <div style="background:#fff;border-radius:1em;box-shadow:0 4px 18px rgba(52,179,160,0.13);padding:1.3em 1.2em;min-width:220px;max-width:260px;flex:1;display:flex;flex-direction:column;align-items:center;" data-astro-cid-rudynukb> <img src="/social/logo%20wise.png" alt="Wise logo" style="width:120px;height:54px;margin-bottom:0.9em;object-fit:contain;filter:grayscale(0);background:#fff;border-radius:0.5em;" data-astro-cid-rudynukb> <a href="https://wise.com/" target="_blank" rel="noopener noreferrer" style="font-weight:600;color:#34b3a0;font-size:1.08em;" data-astro-cid-rudynukb>Save on international transfers with Wise</a> <span style="font-size:0.98em;color:#23272f;margin-top:0.5em;" data-astro-cid-rudynukb>Get the best exchange rates and low fees for your travels.</span> </div> <div style="background:#fff;border-radius:1em;box-shadow:0 4px 18px rgba(52,179,160,0.13);padding:1.3em 1.2em;min-width:220px;max-width:260px;flex:1;display:flex;flex-direction:column;align-items:center;" data-astro-cid-rudynukb> <img src="/social/bookingcom-1.svg" alt="Booking.com logo" style="width:160px;height:48px;margin-bottom:0.9em;object-fit:contain;filter:grayscale(0);background:#fff;border-radius:0.5em;" data-astro-cid-rudynukb> <a href="https://booking.com/" target="_blank" rel="noopener noreferrer" style="font-weight:600;color:#34b3a0;font-size:1.08em;" data-astro-cid-rudynukb>Book your accommodation with Booking.com</a> <span style="font-size:0.98em;color:#23272f;margin-top:0.5em;" data-astro-cid-rudynukb>Find the best hotel deals worldwide.</span> </div> <div style="background:#fff;border-radius:1em;box-shadow:0 4px 18px rgba(52,179,160,0.13);padding:1.3em 1.2em;min-width:220px;max-width:260px;flex:1;display:flex;flex-direction:column;align-items:center;" data-astro-cid-rudynukb> <img src="/social/logo%20safetywing.png" alt="SafetyWing logo" style="width:80px;height:80px;margin-bottom:0.9em;object-fit:contain;filter:grayscale(0);background:#fff;border-radius:0.5em;" data-astro-cid-rudynukb> <a href="https://safetywing.com/" target="_blank" rel="noopener noreferrer" style="font-weight:600;color:#34b3a0;font-size:1.08em;" data-astro-cid-rudynukb>Travel insurance by SafetyWing</a> <span style="font-size:0.98em;color:#23272f;margin-top:0.5em;" data-astro-cid-rudynukb>Flexible and affordable insurance for digital nomads and travelers.</span> </div> </div> </section> <section style="margin-top:2.5em;max-width:700px;margin-left:auto;margin-right:auto;text-align:left;" data-astro-cid-rudynukb> <h2 style="color:#34b3a0;font-size:1.5em;margin-bottom:1em;text-align:center;" data-astro-cid-rudynukb>Frequently Asked Questions about tipping in ${countryData.name}</h2> <ul style="padding:0;list-style:none;" data-astro-cid-rudynukb> ${countryData.faq && countryData.faq.length > 0 && countryData.faq.map((faq, idx) => renderTemplate`<li${addAttribute(idx, "key")} style="margin-bottom:1.5em;" data-astro-cid-rudynukb> <strong style="display:block;margin-bottom:0.3em;" data-astro-cid-rudynukb>Q: ${faq.q}</strong> <span data-astro-cid-rudynukb>A: ${faq.a}</span> </li>`)} </ul> </section> <a href="/" class="back-link" data-astro-cid-rudynukb>&#8592; Back to all countries</a> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-rudynukb": true }, { "default": ($$result2) => renderTemplate` <h1 class="country-title" data-astro-cid-rudynukb>Country not found</h1> <a href="/" class="back-link" data-astro-cid-rudynukb>&#8592; Back to all countries</a> ` })}`);
}, "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/en/[...country].astro", void 0);

const $$file = "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/en/[...country].astro";
const $$url = "/en/[...country]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
