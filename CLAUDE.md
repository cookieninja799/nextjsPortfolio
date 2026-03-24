# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

There is no test suite configured.

## Architecture

This is a **single-page Next.js 14 portfolio** using the App Router. All content is on one page (`src/app/page.tsx`) composed of sequential sections rendered in order: `Navbar → Hero → AboutMe → Projects → Contact → Footer`, plus a floating `TopPageBtn`.

### Key Patterns

**Theming**: Dark/light mode is handled via `next-themes` (`ThemeProvider` in `layout.tsx`). Colors are defined as HSL CSS variables in `globals.css` and consumed via Tailwind. The `DarkMode.tsx` component provides a dropdown to toggle light/dark/system.

**Styling**: Uses shadcn/ui (`components.json` with `new-york` style) with CSS variables enabled. Import shadcn primitives from `src/components/ui/`. Use the `cn()` utility from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional class names.

**Path aliases**: `@/*` maps to `src/*` — use `@/components/...`, `@/lib/...`, etc.

**Analytics**: `src/middleware.ts` intercepts requests to `/` and sends page view events via Google Analytics Measurement Protocol (`src/utils/analytics.ts`). Requires `GA_MEASUREMENT_ID` and `GA_API_SECRET` environment variables.

### Component Structure

- `src/app/` — Next.js App Router (layout, page, globals.css)
- `src/components/` — Feature components (Hero, Navbar, AboutMe, Projects, Contact, Footer, etc.)
- `src/components/ui/` — shadcn/ui primitives (don't edit directly)
- `src/lib/utils.ts` — `cn()` utility
- `src/utils/analytics.ts` — Google Analytics helper

### Notable Dependencies

- **Framer Motion** — page/section animations
- **Embla Carousel** (via shadcn) — Projects section carousel
- **React Type Animation** — typing effect in Hero
- **Radix UI** — accessible primitives (dropdown, tabs, navigation menu, avatar)
- **GSAP** and **Three.js/Spline** — available but used minimally
