import { c as createComponent, r as renderHead, d as renderTemplate } from '../chunks/astro/server_BUv8ww0q.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Cookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><title>Política de Cookies | Calculadora de Propinas Global</title><meta name="robots" content="noindex"><link rel="icon" type="image/x-icon" href="/favicon.ico">${renderHead()}</head> <body style="max-width:600px;margin:2em auto;font-family:sans-serif;"> <h1>Política de Cookies</h1> <p>Este sitio utiliza cookies propias y de terceros para mejorar la experiencia de usuario, mostrar anuncios personalizados y analizar el tráfico. Puedes configurar tu navegador para rechazar cookies, pero algunas funciones pueden no estar disponibles.</p> <a href="/">Volver al inicio</a> </body></html>`;
}, "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/cookies.astro", void 0);

const $$file = "/Users/rodrigofernandezdelrio/Desktop/PropinaProject/src/pages/cookies.astro";
const $$url = "/cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cookies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
