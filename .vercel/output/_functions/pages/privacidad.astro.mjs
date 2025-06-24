import { c as createComponent, r as renderHead, d as renderTemplate } from '../chunks/astro/server_BUv8ww0q.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Privacidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><title>Política de Privacidad | Calculadora de Propinas Global</title><meta name="robots" content="noindex"><link rel="icon" type="image/x-icon" href="/favicon.ico">${renderHead()}</head> <body style="max-width:600px;margin:2em auto;font-family:sans-serif;"> <h1>Política de Privacidad</h1> <p>Este sitio utiliza cookies y servicios de terceros (como Google AdSense y enlaces de afiliados) para monetización y análisis. No almacenamos datos personales sensibles. Consulta los avisos de privacidad de Google y de los servicios de afiliados para más información.</p> <a href="/">Volver al inicio</a> </body></html>`;
}, "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/privacidad.astro", void 0);

const $$file = "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/privacidad.astro";
const $$url = "/privacidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacidad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
