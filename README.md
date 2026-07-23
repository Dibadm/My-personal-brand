# Abid Mohammed — Personal Site

Full-stack engineer portfolio built as a brand site, not a generic template.
React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Before you deploy

1. **Replace `public/resume.pdf`** — currently a placeholder. Drop your real
   resume in at the same path/filename.
2. **Replace `public/og-image.png`** — a generated placeholder social-share
   image. Regenerate from `og-source.svg` or swap in a real one (1200×630).
3. **Update contact links** in `src/components/sections/Contact.tsx` — GitHub,
   LinkedIn, and email are currently placeholders (`github.com/abidmohammed`
   style URLs) and need your real handles/addresses.
4. **Swap project visuals for real screenshots** — `src/components/sections/
   ProjectVisual.tsx` currently renders abstract, hand-built mockups of each
   product (a bingo grid, an inventory ledger, a chat thread) since no real
   screenshots were available. Replace with actual product screenshots when
   you have them, or keep the abstract visuals if you prefer the consistent
   illustrated style.
5. **Update `index.html`** — the canonical URL (`og:url`) is set to
   `https://abidmohammed.dev`; update to your real domain.

## Project structure

```
src/
  components/
    layout/     — Navbar, Footer, Cursor, Loader, ScrollProgress
    sections/   — Hero, WhatIBuild, Projects, Process, TechStack, About,
                  Certifications, Contact
    shared/     — SectionHeading, Reveal (scroll animation wrapper),
                  LedgerTicker (hero signature element)
    ui/         — Button, Badge, Card primitives
  data/         — all real copy/content, separated from components
  hooks/        — scroll progress, mouse position, media query hooks
```

## Design system

- **Palette:** ink (`#0B0D12`), gold (`#D4A24E`), teal (`#4ECDC4`) — defined
  in `tailwind.config.ts`.
- **Type:** Fraunces (display), Inter (body/UI), JetBrains Mono (data/labels).
- **Signature element:** the ambient "System Ledger" ticker in the hero —
  ties the whole page to the real subject matter (production systems that
  move money and log audits) instead of a generic gradient hero.

Accessibility: visible focus rings throughout, `prefers-reduced-motion`
respected globally, custom cursor auto-disabled on touch/coarse-pointer
devices.
