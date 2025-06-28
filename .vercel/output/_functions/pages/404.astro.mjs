/* empty css                                   */
import { c as createComponent, r as renderHead, a as renderTemplate } from '../chunks/astro/server_D8CQh0Fy.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><title>Page Not Found | Global Tip Calculator</title><meta name="robots" content="noindex"><link rel="icon" type="image/x-icon" href="/favicon.ico">${renderHead()}</head> <body style="text-align:center; padding:4em 1em;"> <h1>Page Not Found</h1> <p>Sorry, the page you are looking for does not exist.</p> <a href="/">Back to home</a> </body></html>`;
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
