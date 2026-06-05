# santiagovillaviciosa.dev

Personal site of **Santiago Villaviciosa** — Engineering Manager & Senior Software Engineer.
A single-page portfolio covering background, work history, projects, and interests.

Built with [Astro](https://astro.build) and hand-written CSS. It ships **zero JavaScript by
default**; only a few small, progressively-enhanced scripts run on the client (scroll-spy nav,
reveal-on-scroll, live tenure calculation).

## Tech stack

- **Astro 5** + **TypeScript** (`strict`)
- **Plain modern CSS** — design tokens (custom properties) + per-concern stylesheets. No CSS framework.
- **Prettier** for formatting; `astro check` for type-safety.

## Project structure

```
src/
├── pages/index.astro       # the single page — composes the sections
├── layouts/BaseLayout.astro# <head>, global styles, page shell, client scripts
├── components/             # presentational components (Header, Nav, SectorCard, …)
├── data/                   # typed content — the single source of truth for the UI
│   ├── site.ts             # identity + social links
│   ├── navigation.ts       # nav items
│   ├── experience.ts       # work history
│   ├── projects.ts         # project cards
│   ├── stack.ts            # "building with" groups
│   └── portfolio.ts        # investing themes, holdings, allocation, brands
├── scripts/                # typed, progressively-enhanced browser scripts
│   ├── nav.ts              # scroll-spy + sliding indicator + progress bar
│   ├── reveal.ts           # IntersectionObserver section reveal
│   └── work-duration.ts    # recomputes ongoing-role tenure
└── styles/                 # tokens.css, base.css, + one stylesheet per section
public/assets/              # images and company/asset icons (SVG)
```

The UI is **data-driven**: sections, projects, work history, and portfolio themes are typed
arrays under `src/data/`. Adding a project or holding means editing data — not markup.

## Getting started

```bash
npm install
npm run dev        # local dev server with HMR
```

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the dev server             |
| `npm run build`   | Build the static site to `dist/` |
| `npm run preview` | Preview the production build     |
| `npm run check`   | Type-check (`astro check`)       |
| `npm run format`  | Format with Prettier             |

## Links

- [GitHub](https://github.com/santiago-vl)
- [LinkedIn](https://www.linkedin.com/in/santiago-villaviciosa)
