import { c as createComponent, e as renderScript, r as renderHead, d as renderTemplate } from '../chunks/astro/server_BUv8ww0q.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta http-equiv="refresh" content="0; url=/\${defaultLang}/tipping-in-\${defaultCountry}">${renderScript($$result, "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/index.astro?astro&type=script&index=0&lang.ts")}<title>Calculadora de Propinas Global</title><meta name="description" content="Descubre cuánto dejar de propina en cualquier país del mundo. Calculadora interactiva y datos por servicio.">${renderHead()}</head> <body> <noscript> <h1>Calculadora de Propinas Global</h1> <p>Redirigiendo a la versión en inglés...</p> </noscript> </body></html>`;
}, "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/index.astro", void 0);

const $$file = "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
