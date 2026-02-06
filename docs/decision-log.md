# Decision Log (demo)

This document records important architectural and technical decisions.

---

## 2026-01-17 — Use Vite as build tool

### Context
The project requires fast development iteration and modern tooling.

### Decision
We chose Vite as the build tool.

### Reasons
- Faster dev server
- Minimal configuration
- Good ecosystem support

### Consequences
- Requires Node.js >= 18
- Some legacy plugins may not work
