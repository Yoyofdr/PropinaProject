# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Calculadora de Propinas Global

## 🚀 Despliegue rápido

### Vercel
1. Haz login en [vercel.com](https://vercel.com/) y conecta tu repositorio.
2. Vercel detecta Astro automáticamente. Solo haz deploy.
3. Si quieres build local:
   ```bash
   npm run build
   npm run preview
   ```

### Netlify
1. Haz login en [netlify.com](https://netlify.com/) y conecta tu repositorio.
2. Configura el build command: `npm run build`
3. Output directory: `dist`

## ⚡ Optimización
- El sitio es 100% estático y escalable.
- Puedes agregar imágenes optimizadas en `/public` y usarlas en los meta tags sociales.
- Elimina dependencias innecesarias con `npm prune`.

## 📝 Personalización
- Cambia el favicon en `/public/favicon.ico`.
- Edita los textos globales en `/locales/[lang].json`.
- Personaliza los datos de cada país en `/content/[lang]/[country].json`.
- Pon tu ID real de AdSense en `src/components/AdsenseBlock.astro`.
- Agrega tu aviso de cookies/privacidad en el footer si usas AdSense o Analytics.

## 🛠️ Scripts útiles
- `node scripts/generateContent.cjs` para regenerar contenido global.
- `node scripts/generateSitemap.cjs` para actualizar el sitemap multilingüe.

## 🧩 Sugerencias
- Si quieres mejorar la detección de país, puedes usar una API de geolocalización.
- Para más idiomas, solo agrega archivos en `/locales` y ejecuta el script de contenido.
# PropinaProject
