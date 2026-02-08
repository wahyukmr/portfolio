# Decision Log

This document records key architectural and technical decisions for the portfolio project. Each entry captures
the context, the decision made, why it was made, and the main consequences.

---

## 2026-02-08 — Project technology choices (summary)

### Context
The site is a modern, performance-focused portfolio with 3D assets, MDX content, animations, i18n support,
and deployment to Netlify. Developer experience, fast iteration, and small production bundles are priorities.

### Decisions
- **Build & dev:** Use Vite as the build tool and the React Router Vite templates (`react-router dev` / `react-router build`).
- **Framework & language:** React 19 + TypeScript.
- **Routing & SSR/SSG tools:** React Router v7 and the `@react-router/dev` toolchain for local dev and builds.
- **Hosting:** Netlify with `@netlify/vite-plugin` and `@netlify/vite-plugin-react-router` where applicable.
- **Styling:** Tailwind CSS use `prettier-plugin-tailwindcss`.
- **3D & WebGL:** `three`, `@react-three/fiber`, and `@react-three/drei` for scene composition and accessibility helpers.
- **Animations:** GSAP with `@gsap/react` for performant timeline-driven animations.
- **Content & MDX:** MDX (`@mdx-js/react`, `@mdx-js/rollup`) for composable content pages.
- **Internationalization:** `i18next` + `react-i18next` and language detection/backends for multi-lingual support.
- **State:** `zustand` for lightweight client state where needed.
- **Form / schema validation:** `zod` for lightweight runtime validation when needed.
- **Testing & tooling:** `jest` for unit tests, TypeScript type checks via `tsc`, linting with ESLint, and formatting with Prettier.

### Reasons
- Vite: extremely fast dev server, ES module-based builds, and excellent plugin ecosystem.
- React 19 + TypeScript: modern React features and type safety for developer productivity and maintainability.
- React Router v7 + `react-router` tools: idiomatic routing, good DX for nested routes and static builds.
- Netlify: simple CI/CD, edge and plugin integration, and easy static hosting for generated output.
- Tailwind: utility-first styling for small, consistent CSS bundles and fast iteration.
- `three` + `@react-three/*`: declarative 3D integration into React, reuseable components, and community support.
- GSAP: high-performance timeline control for complex UI and 3D animations.
- MDX: keeps content authoring and React components together for flexible pages.
- i18next: established ecosystem with browser and FS backends for both client and build-time translations.

### Consequences
- Requires Node.js >= 18 and modern dev environment (ESM-first toolchain).
- Some legacy Rollup/Vite plugins may need alternatives or updates.
- Build output is static-first; server-side-only features should be avoided or implemented via Netlify Functions.
- Tailwind and Prettier plugin require consistent tooling in CI (`prettier --check`, `eslint .`).
- 3D assets increase bundle size if not carefully optimized; use compressed textures, LODs, and lazy-loading.
- MDX content adds complexity to the build pipeline; authors must follow component-safe patterns.

---

## Decision notes & future considerations

- Revisit analytic tooling and performance budgets before major releases: measure bundle size and time-to-interactive.
- Consider edge rendering or incremental delivery for heavier 3D pages if load times become problematic.
- Keep a short onboarding doc for contributors describing local dev (`npm run dev`), type checking (`npm run typecheck`),
  and formatting/linting rules.

---

_Document updated 2026-02-08_
