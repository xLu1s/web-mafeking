# Grup Scout Mafeking 265 d'Alcoi

Web oficial del Grup Scout Mafeking 265 d'Alcoi, ASDE Scouts de España i Scouts Valencians.

Sitio estático bilingüe (valenciano / castellano) construido con [Astro](https://astro.build).

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run check    # diagnóstico de Astro/TypeScript
npm run build    # genera dist/
npm run preview  # sirve dist/ en http://localhost:4321
```

## Estructura

- `src/data/site.ts` — todos los textos en `va` y `es`.
- `src/components/Landing.astro` — marcado de la página y script de navegación.
- `src/pages/index.astro` — versión en valenciano (`/`).
- `src/pages/es/index.astro` — versión en castellano (`/es/`).
- `src/styles/global.css` — sistema de diseño.
- `public/images/` — fotografías e imágenes.

## Publicación

El despliegue se hace automáticamente con GitHub Actions en cada `push` a `main`
(ver `.github/workflows/deploy.yml`). Activa **Settings → Pages → Source: GitHub Actions**
en el repositorio para habilitarlo.
