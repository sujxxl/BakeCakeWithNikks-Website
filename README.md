# Bake Cake With Nikks

Pure-veg bakery & café single-page site built with React, Vite, Tailwind (CDN), and Lucide icons.

- Entry HTML, Tailwind setup, fonts: [index.html](index.html)
- App bootstrap: [index.tsx](index.tsx), [App.tsx](App.tsx)
- Types and shared constants: [types.ts](types.ts), [constants.tsx](constants.tsx)
- Components:
  - [`Navbar`](components/Navbar.tsx) — responsive header with scroll-aware styles and call button
  - [`Menu`](components/Menu.tsx) — category tabs, animated “sticker” emojis, price display driven by [`MENU_DATA`](constants.tsx)
  - Other sections: [components/Hero.tsx](components/Hero.tsx), [components/Offers.tsx](components/Offers.tsx), [components/DesignerCakes.tsx](components/DesignerCakes.tsx), [components/Menu.tsx](components/Menu.tsx), [components/Location.tsx](components/Location.tsx), [components/Social.tsx](components/Social.tsx), [components/About.tsx](components/About.tsx), [components/Footer.tsx](components/Footer.tsx)
- Build tooling: [vite.config.ts](vite.config.ts), [tsconfig.json](tsconfig.json), [package.json](package.json)
- Assets: [images/](images/)

## Features

- Responsive navbar with mobile drawer and tel link: [`Navbar`](components/Navbar.tsx)
- Menu with category tabs, animated background icons, dynamic pricing: [`Menu`](components/Menu.tsx), data via [`MENU_DATA`](constants.tsx)
- Tailwind via CDN with custom theme (brand colors, fonts, animations) configured inline in [index.html](index.html)
- Icons via `lucide-react` import map in [index.html](index.html)

## Getting started

Prerequisites:

- Node.js 18+ and npm

Install and run:

```sh
npm install
npm run dev
```

Build and preview:

```sh
npm run build
npm run preview
```

The dev server prints the local URL in the VS Code terminal. Output goes to `dist/`.

## Customization

- Branding and theme: Tailwind config in [index.html](index.html) under `tailwind.config` (colors.brand, fonts, animations).
- Navbar links: edit `navLinks` in [`Navbar`](components/Navbar.tsx). Ensure target section IDs exist (e.g., `#menu`, `#designer-cakes`, `#offers`, `#contact`).
- Menu data: edit [`MENU_DATA`](constants.tsx) to add categories/items (supports `price`, `priceHalfKg`, `priceOneKg`, `isPopular`, `description`).
- Logo: replace `/images/logo_transparent.jpg` used by [`Navbar`](components/Navbar.tsx).
- Global CSS: referenced as `/index.css` from [index.html](index.html).

## Notes

- Icons are imported via ESM import map in [index.html](index.html) (`lucide-react`).
- Sections should provide matching IDs for smooth in-page navigation.
