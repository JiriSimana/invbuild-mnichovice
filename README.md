# Mnichovice — INVBUILD

Landing page rodinného domu Mnichovice (5+1, 159 m², 31.900.000 Kč).
Postaveno v [Astro 5](https://astro.build) — statický build, žádný runtime JS pro obsah, ~95+ PageSpeed.

## Stack
- **Astro 5** — static site generator
- **Inter Variable** (self-hosted přes `@fontsource-variable`)
- **Vanilla CSS** s design tokens (`src/styles/tokens.css`)
- Žádný framework (React/Vue/atd.) — komponenty jsou `.astro`

## Vývoj

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # → ./dist
npm run preview    # preview build lokálně
```

## Struktura

```
src/
├── components/        # Astro komponenty
│   ├── Hero.astro
│   ├── Section.astro
│   ├── Gallery.astro
│   ├── Dispozice.astro
│   ├── Mapa.astro
│   ├── Kontakt.astro
│   ├── CTAFloating.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro   # <head>, meta, JSON-LD, OG
├── pages/
│   └── index.astro    # jediná stránka
└── styles/
    ├── tokens.css     # design tokens (sdílené napříč INVBUILD weby)
    └── global.css     # reset + typography + utility
public/
├── favicon.svg
├── robots.txt
└── (TODO: og-image.jpg, apple-touch-icon.png, /img/* fotky)
```

## Co je TODO (čeká na podklady)

1. **Fotky** — galerie, hero, půdorys. Doplnit do `public/img/` a nahradit v `src/pages/index.astro`:
   ```astro
   <Gallery images={[
     { src: '/img/mnichovice-01.webp', alt: 'Pohled z ulice' },
     { src: '/img/mnichovice-02.webp', alt: 'Obývací pokoj' },
     ...
   ]} />
   ```
2. **Texty** — všude kde je v kódu `TODO:` (lokalita, rekonstrukce, aktuální stav).
3. **VR prohlídka** — vložit `<iframe>` od Matterport / Kuula v sekci #vr.
4. **Půdorys + dispozice** — místnosti s m² do `<Dispozice rooms={[...]} />`.
5. **GPS souřadnice** — přesné `<Mapa coordinates="49.XXXX,14.XXXX" />`.
6. **Formulář akce** — `/api/poptavka` endpoint (Vercel serverless function nebo Formspree/Resend).
7. **og-image.jpg** — 1200×630 náhled pro sdílení.

## Deploy na Vercel

```bash
# poprvé: propojit s GitHub repem, pak
git push origin main
# Vercel autodeployuje
```

`vercel.json` má nastavené immutable cache hlavičky pro `/assets/*` a security headers.

## Design system

Tokens v `src/styles/tokens.css` jsou navržené jako **sdílené napříč všemi INVBUILD weby** (Mnichovice, Lisovice, Vejprty, hlavní invbuild.cz). Až bude druhý web, tenhle soubor zkopírujeme/sdílíme přes npm package nebo git submodule.
