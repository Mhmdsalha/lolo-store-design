# LOLO Kids Store

LOLO Kids Store is a polished Arabic-first ecommerce experience for a premium children’s boutique. It provides a production-ready Next.js storefront with responsive layouts, local typography, curated visual assets, animated hero presentation, product browsing, product details, and cart interactions.

## Overview

This app is designed for a warm, refined children’s retail brand. The interface focuses on playful product discovery while keeping the shopping flow clear and practical: category browsing, age-based collections, promotional banners, featured products, product detail galleries, option selection, and cart management.

## Features

- Arabic RTL storefront experience with polished ecommerce UI patterns.
- Premium animated homepage hero with high-resolution visual asset.
- Category cards, age range sections, promotional banners, and trust badges.
- Product listing pages with filtering and sorting controls.
- Rich product detail page with organic image gallery, thumbnails, pricing, size/color selection, quantity controls, and cart actions.
- Client-side cart state powered by React context and persisted in local storage.
- Custom Lenos font integration for brand-aligned Arabic typography.
- Optimized Next.js image handling for local assets.
- Responsive layouts for desktop and mobile screens.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Framer Motion
- Lucide React
- ESLint
- Local font assets

## Project Structure

```text
src/
  app/                  App Router pages and global styles
  components/           UI, layout, home, category, product, and cart components
  context/              Cart state provider
  data/                 Mock catalog, categories, products, and age ranges
public/
  fonts/                Local brand typography
  images/               Store, category, banner, and product assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build.

```bash
npm run lint
```

Runs ESLint across the source directory with zero warnings allowed.

## Design Notes

- The visual direction is tailored for a premium children’s boutique with soft colors, warm imagery, and playful details.
- The homepage hero uses a full mobile image treatment, centered messaging, and a transparent navigation state above the hero.
- Product detail pages use an organic image presentation and compact purchase panel.
- Category and promotional imagery uses local brand assets under `public/images`.

## Deployment

The app can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a Node.js server.

For a production build:

```bash
npm run build
npm run start
```

## License

This project is private and intended for LOLO storefront design and implementation work.
