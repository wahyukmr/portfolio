# Architecture Overview

## 1. Rendering Strategy

- SSG (Static Site Generation) for all content routes.
- Edge redirect for root locale detection
- Server loader for theme preference only
- No SSR for content/data

---

## 2. Folder Structure Philosophy

This project follows a feature-based structure with clear boundaries.

### app/
Entry points only:
- Routes

No domain logic here.

### features/
Domain logic lives here.

Each feature may contain:
- components/
- hooks/
- types.ts

Business rules must not leak outside feature boundaries.

### components/ui/
Reusable presentational components only (Badge, Button, Section).
No business logic, pure presentational.

### components/shared/
Global layout components (Header, Footer, Navigation).

### content/
MDX content only.
No logic.

### lib/
Pure utilities and shared helpers.
No domain-specific logic.

---

## 3. Container / View Pattern

Applied via custom hooks.

Example:
- hooks/useProjects.ts → logic
- components/ProjectCard.tsx → UI
- route → entry point only

No traditional "container" folder.

---

## 4. Study Case Strategy

Study cases are built in separate repositories to:
- Demonstrate real-world project structure
- Avoid coupling portfolio with heavy logic
- Allow independent deployment
- Maintain clarity between platform and product

---

## 5. Architectural Principles

- Avoid over-engineering
- Introduce abstraction only after duplication
- Simplicity > cleverness
- Explicit boundaries > complex patterns