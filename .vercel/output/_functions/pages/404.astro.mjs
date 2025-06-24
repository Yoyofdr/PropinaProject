import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderTemplate } from '../chunks/astro/server_BUv8ww0q.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const lang = (Astro2.request.headers.get("accept-language") || "en").slice(0, 2);
  const translations = {
    en: {
      title: "Page Not Found",
      message: "Sorry, the page you are looking for does not exist.",
      back: "Back to home"
    },
    es: {
      title: "P\xE1gina no encontrada",
      message: "Lo sentimos, la p\xE1gina que buscas no existe.",
      back: "Volver al inicio"
    },
    fr: {
      title: "Page non trouv\xE9e",
      message: "D\xE9sol\xE9, la page que vous cherchez n'existe pas.",
      back: "Retour \xE0 l'accueil"
    }
  };
  const t = translations[lang] || translations["en"];
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><title>${t.title} | Global Tip Calculator</title><meta name="robots" content="noindex"><link rel="icon" type="image/x-icon" href="/favicon.ico">${renderHead()}</head> <body style="text-align:center; padding:4em 1em;"> <h1>${t.title}</h1> <p>${t.message}</p> <a href="/">${t.back}</a> </body></html>`;
}, "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/404.astro", void 0);

const $$file = "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
