# Architecture Overview

## Purpose
Provide a short, practical overview of how this portfolio is organized and how the main pieces interact.

## High-level system
- **Platform:** Vite-built React (React 19) + TypeScript.
- **Routing:** React Router v7 drives the route tree and page rendering; development and builds use the `react-router` toolchain.
- **Rendering model:** Static-first single-page app with generated routes; adopt Netlify Functions only for server-side needs.

## Core responsibilities
- **UI / Pages:** React components and MDX pages live under the app routes; Tailwind CSS provides styling.
- **3D / Canvas:** `three` + `@react-three/fiber` (+ `@react-three/drei`) encapsulated in isolated components for lazy-loading and reuse.
- **Animation:** GSAP timelines drive complex UI/3D transitions; keep timelines scoped to components.
- **State & validation:** Local UI state via `zustand`; runtime validation with `zod` for forms or content inputs.
- **i18n / content:** `i18next` + `react-i18next` with browser detection and FS/http backends; content pages use MDX for component-rich content.

## Directory & asset patterns (guidelines)
- `app/` — app entry, global layout, and route registration.
- `routes/` — route modules and page components (MDX pages live alongside route components where useful).
- `public/` & `public/assets` — static assets and optimized 3D textures/models (serve compressed formats).

## Performance & build
- Prefer code-splitting per route and lazy-loading heavy 3D scenes.
- Optimize 3D (compressed textures, smaller geometry, LODs) and use network caching.
- Use Vite plugins and Netlify build to produce a static-optimized site.

## Tooling & workflow
- Local dev: `npm run dev` (`react-router dev`).
- Type generation & checks: `npm run typecheck` (includes `react-router typegen` + `tsc`).
- Lint & format: `npm run lint` and `npm run format` for consistent style.

## Non-functional considerations
- Accessibility: keep 3D content accessible with fallbacks and `@react-three/a11y` where appropriate.
- Observability: measure bundle size and time-to-interactive; add simple analytics after baseline performance is acceptable.