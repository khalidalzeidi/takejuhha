# CLAUDE.md — JUHHA Website Context Briefing

> This file is the single source of truth for any Claude session continuing work on this project.
> Read it fully before touching any file.

---

## 1. Project Vision

**Company:** Take Juhha (جُحة) — an Omani creative branding and marketing agency.

**What this site is:** A premium, Arabic-only company website that functions as a digital portfolio and lead-generation tool for JUHHA's services.

**Who it serves:** Potential clients in Oman and the wider Arab world looking for a creative agency for branding, marketing, social media management, campaigns, graphic design, digital content, and photography.

**Main goal:** Communicate JUHHA's identity as a luxury, creative, and results-driven agency. Inspire trust, showcase work, and convert visitors into leads via the contact form.

**Brand philosophy:** Inspired by a watermelon — simple exterior, surprising and colorful inside. The brand celebrates bold ideas and unexpected creativity.

**Contact info embedded throughout the site:**
- Phone: `+968 7997 6611`
- Email: `Info@takejuhha.com`
- Instagram: `@takejuhha`

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Language | TypeScript (strict mode) |
| Build tool | Vite 5 |
| Styling | Tailwind CSS **v4** (CSS-first config via `@theme`) |
| CSS processing | `@tailwindcss/vite` Vite plugin (no PostCSS config) |
| Routing | Vue Router 4 (lazy-loaded inner pages) |
| Animations | GSAP 3 + CSS keyframes + Intersection Observer |
| Icons | Lucide Vue Next |
| Sliders | Swiper 11 (installed, not yet used in components) |
| Fonts | Cairo (Google Fonts CDN — loaded in `index.html`) |
| Type checking | `vue-tsc` |

**No backend. No state management library (no Pinia/Vuex). No SSR.**

---

## 3. Project Structure

```
D:\Project\takejuhha\
│
├── public/
│   └── images/                 # 90 JPG images (extracted from company PDF)
│                               # Referenced as /images/imgXXX.jpg in data files
│
├── src/
│   ├── assets/
│   │   └── main.css            # CRITICAL — Tailwind v4 entry point
│   │                           # Contains: @import "tailwindcss", @theme block,
│   │                           # @keyframes, and all custom component classes
│   │                           # (.glass, .btn-primary, .gradient-text, etc.)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TheNavbar.vue   # Sticky navbar, glassmorphism on scroll, hides on scroll-down
│   │   │   ├── TheFooter.vue   # 4-column footer with social links
│   │   │   └── MobileMenu.vue  # Full-screen overlay menu, RTL slide-in animation
│   │   │
│   │   ├── ui/                 # Reusable design-system atoms
│   │   │   ├── SectionTitle.vue      # Eyebrow + h2 + gradient underline + subtitle
│   │   │   ├── GlassCard.vue         # Glassmorphism card wrapper with optional hover
│   │   │   ├── PrimaryButton.vue     # Renders as <button>, <router-link>, or <a>
│   │   │   ├── AnimatedCounter.vue   # Counts from 0 → target on scroll into view
│   │   │   └── ScrollReveal.vue      # Wraps any element with entrance animation
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.vue       # Full-viewport hero, animated headline, orbs
│   │   │   ├── AboutPreview.vue      # 2-col: image mosaic + mission text
│   │   │   ├── ServicesPreview.vue   # 3-col grid of first 6 services (compact cards)
│   │   │   ├── PortfolioPreview.vue  # 4-col masonry preview (8 curated images)
│   │   │   ├── ClientsSection.vue    # Infinite CSS marquee (2 rows, opposite directions)
│   │   │   ├── StatsSection.vue      # Gradient bg + 4 animated counters
│   │   │   ├── QuoteSection.vue      # Centered Arabic brand quote with decorative marks
│   │   │   └── CtaSection.vue        # Dark gradient CTA + contact quick-links
│   │   │
│   │   ├── about/
│   │   │   ├── VisionMission.vue     # Side-by-side glass cards for vision + mission
│   │   │   ├── ValuesGrid.vue        # 4-card grid: الأصيل, المبدع, الحكيم, البطل
│   │   │   └── OurStory.vue          # Watermelon metaphor + animated spinning circle
│   │   │
│   │   ├── services/
│   │   │   └── ServiceCard.vue       # Two variants: 'full' (services page) and
│   │   │                             # 'compact' (home preview). Hover gradient sweep.
│   │   │
│   │   ├── portfolio/
│   │   │   ├── PortfolioGrid.vue     # Category filter tabs + TransitionGroup grid
│   │   │   ├── PortfolioItem.vue     # Single image tile with hover overlay + zoom icon
│   │   │   └── PortfolioLightbox.vue # Teleport-to-body modal, keyboard navigation
│   │   │
│   │   └── contact/
│   │       ├── ContactForm.vue       # Reactive form with Arabic validation + submit state
│   │       └── ContactInfo.vue       # Phone, email, Instagram cards + brand quote
│   │
│   ├── composables/
│   │   ├── useIntersectionObserver.ts  # Base composable — observe(el, callback, options)
│   │   ├── useScrollReveal.ts          # Adds/removes 'visible' class on elements
│   │   ├── useCounter.ts               # RAF-based count animation with easeOutCubic
│   │   ├── useNavbar.ts                # Scroll direction detection for hide/show navbar
│   │   └── useLightbox.ts             # Index-based lightbox state + keyboard handlers
│   │
│   ├── data/
│   │   ├── services.ts     # 7 service objects (id, slug, nameAr, descriptionAr, icon, color)
│   │   ├── portfolio.ts    # 90 portfolio items mapped to images + portfolioPreview (8 items)
│   │   ├── clients.ts      # 10 client name strings
│   │   ├── stats.ts        # 4 stat objects (value, suffix, labelAr)
│   │   └── values.ts       # 4 brand value objects (nameAr, nameEn, descriptionAr, icon)
│   │
│   ├── router/
│   │   └── index.ts        # 5 routes, lazy-loaded inner pages, smooth scroll behavior
│   │
│   ├── types/
│   │   └── index.ts        # All shared TypeScript interfaces and the PortfolioCategory union
│   │
│   ├── views/              # Page-level components (assembled from section components)
│   │   ├── HomeView.vue
│   │   ├── AboutView.vue
│   │   ├── ServicesView.vue
│   │   ├── PortfolioView.vue
│   │   └── ContactView.vue
│   │
│   ├── App.vue             # Root: TheNavbar + RouterView (page-fade transition) + TheFooter
│   └── main.ts             # createApp, use(router), mount('#app')
│
├── index.html              # lang="ar" dir="rtl" — Cairo font preconnected here
├── package.json
├── vite.config.ts          # @tailwindcss/vite plugin + @ alias + port 3000
├── tsconfig.json           # References tsconfig.app.json + tsconfig.node.json
├── tsconfig.app.json       # Strict TS for src/**
└── tsconfig.node.json      # For vite.config.ts only
```
---

## 4. Pages & Sections

### الصفحة الرئيسية — `/`
1. **HeroSection** — full-viewport, animated headline "صياغة تجارب خالدة", 2 CTAs, floating gradient orbs, scroll indicator
2. **AboutPreview** — image mosaic (img56/58/60) + brief company description + "اعرف أكثر" link
3. **ServicesPreview** — first 6 of 7 services in compact cards + "جميع الخدمات" button
4. **PortfolioPreview** — 8 curated images in a 4-col grid with row-span for visual hierarchy
5. **ClientsSection** — 2 rows of infinite CSS marquee with client names
6. **StatsSection** — gradient background, 4 animated counters: 50+ clients, 90+ projects, 7 services, 100% commitment
7. **QuoteSection** — brand quote on dark bg with large decorative quotation marks
8. **CtaSection** — dark gradient, call-to-action, phone/email/Instagram quick-links

### من نحن — `/about`
1. Page hero with gradient background
2. **VisionMission** — رؤيتنا (Eye icon) + مهمتنا (Target icon) side-by-side
3. **ValuesGrid** — 4 cards: الأصيل/Authentic (Shield), المبدع/Creative (Sparkles), الحكيم/Wise (Brain), البطل/Hero (Star)
4. **OurStory** — watermelon metaphor paragraph + animated spinning ring with colorful core
5. CTA strip → `/contact`

### الخدمات — `/services`
1. Page hero
2. Full 7 ServiceCards in a 3-col grid (last card spans 2 cols on md)
3. **Process section** — 4-step methodology: الاستكشاف → التخطيط → التنفيذ → القياس
4. Gradient CTA banner

### أعمالنا — `/portfolio`
1. Page hero
2. **PortfolioGrid** — category filter tabs (الكل / هوية تجارية / تصوير / تواصل اجتماعي / حملات / تصميم) + 90-item grid with `<TransitionGroup>`
3. **PortfolioLightbox** — Teleport modal, prev/next, keyboard (Escape/arrows)

### تواصل معنا — `/contact`
1. Page hero
2. 5-column grid: ContactForm (col-span-3) + ContactInfo (col-span-2)
3. **ContactForm fields:** الاسم (required), البريد الإلكتروني (required, regex validated), رقم الهاتف (optional), الخدمة المطلوبة (select from services data), الرسالة (required)
4. Simulated async submit (1.5s delay, then success state). **No real backend — wire up before going live.**
5. Gradient CTA banner

---

## 5. Design Decisions

### Colors
```
Primary:   #D65769  (rose-red)
Secondary: #4F1A6F  (deep purple)
Dark:      #0a0a0f  (near-black background)
Surface:   #12121a  (slightly lighter dark, used for cards/sections)
```

All gradients flow `#4F1A6F → #D65769` (135deg) or reversed. This gradient is the brand signature — it appears on buttons, icon backgrounds, stat sections, CTAs, and hero.

### Typography
- **Font:** Cairo — loaded from Google Fonts CDN at weights 300, 400, 500, 600, 700, 900
- **Direction:** RTL globally (`dir="rtl"` on `<html>`)
- **Headings:** `font-weight: 700`, `line-height: 1.3`
- **Body text:** `line-height: 1.9` for Arabic readability
- All class names are RTL-aware: use `ps-/pe-` (padding-inline) not `pl-/pr-`, `ms-/me-` not `ml-/mr-`, `start-/end-` not `left-/right-` where directionality matters

### UI Style
- **Glassmorphism:** `.glass` = `backdrop-filter: blur(12px)` + `bg-white/5 border border-white/10` — applied to cards, navbar, mobile menu info block
- **Gradient text:** `.gradient-text` and `.gradient-text-r` — CSS clip-path technique for heading accents
- **Dark surfaces only:** No light mode. Background is always near-black.
- **Hover patterns:** Cards lift (`-translate-y-1` or `-translate-y-2`) + subtle shadow (`shadow-primary/10`) + gradient background fades in (opacity 0 → 10%)
- **Section rhythm:** Alternates between `bg-dark` and `bg-surface` to create visual separation without hard lines

### Layout
- Max content width: `max-w-7xl` via `.container-custom`
- Section vertical padding: `py-20 md:py-32` via `.section-padding`
- Grid breakpoints: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/4`
- Tailwind v4 — no `content` array needed (auto-detected); no JS config file

---

## 6. Key Logic & Features

### Tailwind v4 Configuration
All theme config lives in `src/assets/main.css` inside `@theme {}`. The JS config file does not exist. Do not recreate `tailwind.config.ts` or `postcss.config.js`.

### ScrollReveal Component (`src/components/ui/ScrollReveal.vue`)
Uses `useIntersectionObserver` composable. On mount, observes the wrapper `<div>`. When `isIntersecting`, sets `visible = true`. The component applies Tailwind translate/opacity classes based on `direction` prop ('up', 'left', 'right', 'fade') and transitions out with CSS. Accepts `delay` (ms) and `duration` (ms) props for staggered entrances.

### AnimatedCounter (`src/components/ui/AnimatedCounter.vue`)
Uses `useCounter` + `useIntersectionObserver`. Starts the RAF animation only when the element scrolls into view (threshold 0.5). Uses `easeOutCubic` for natural deceleration.

### useLightbox (`src/composables/useLightbox.ts`)
Index-based. `open(item)` finds the item index in the passed array, sets `currentIndex`. Keyboard handlers are registered on `window` — Escape closes, ArrowLeft calls `next()` (RTL: left = forward), ArrowRight calls `prev()`. Sets `document.body.style.overflow = 'hidden'` while open.

### useNavbar (`src/composables/useNavbar.ts`)
Tracks `lastScrollY`. `isScrolled` triggers glassmorphism (scrollY > 60). `isHidden` hides the navbar when scrolling down past 300px and shows it when scrolling up.

### Portfolio Filtering (`src/components/portfolio/PortfolioGrid.vue`)
`activeCategory` ref filters `portfolioItems` via computed. Vue `<TransitionGroup name="portfolio">` handles enter/leave/move animations. All 90 items are in `src/data/portfolio.ts` — the `category` field is a `PortfolioCategory` union type.

### ContactForm Validation
Client-side only. Validates: name (non-empty), email (regex), message (non-empty). Errors shown inline below each field. No submission endpoint — currently simulates a 1.5s delay then shows success. **Must be wired to a real endpoint before production.**

### Marquee Animation (ClientsSection)
Pure CSS — two `<div>` rows with `animate-marquee` and `animate-marquee-r` classes. These are defined in `@theme` as `--animate-marquee` and `--animate-marquee-r`, with `@keyframes marquee/marqueeR` defined in `main.css`.

---

## 7. Image Inventory

All 90 images are in `public/images/` and referenced as `/images/imgXXX.jpg`.

| Category | Image range | Count |
|---|---|---|
| هوية تجارية (Brand) | img13–49, img321–354, img394, img400, img406 | 18 |
| تصوير (Photography) | img56–81, img99, img393, img399, img404, img464, img466 | 20 |
| تواصل اجتماعي (Social) | img101–116, img159, img395, img483–486 | 16 |
| حملات (Campaign) | img187–196, img356–379, img396, img401 | 17 |
| تصميم (Design) | img198–206, img381–408 range, img83, img87, img90 | 19 |

The `portfolioPreview` export in `src/data/portfolio.ts` holds 8 hand-picked items for the home page grid.

---

## 8. Current Status

**Fully built and ready to run after `npm install`:**

- [x] Vue 3 + TypeScript + Tailwind v4 + Vite project scaffolded
- [x] All 5 pages with full Arabic content
- [x] All 57 source files created (components, composables, views, data, types, router)
- [x] 90 images in `public/images/`
- [x] Tailwind migrated from v3 to v4 (CSS-first `@theme` config)
- [x] RTL layout throughout
- [x] Glassmorphism + gradient design system
- [x] Scroll reveal animations via Intersection Observer
- [x] Animated stat counters
- [x] Portfolio with category filter + lightbox
- [x] Infinite marquee client strip
- [x] Contact form with Arabic validation
- [x] Sticky navbar (glassmorphism on scroll, hide on scroll-down)
- [x] Mobile menu (full-screen overlay)
- [x] Page route transitions (fade)

---

## 9. Important Notes

1. **Tailwind v4 — no JS config file.** All theme tokens (colors, fonts, animations) live in `src/assets/main.css` inside the `@theme {}` block. If you add a new custom color or animation, add it there, not in a `tailwind.config.ts`. That file was intentionally deleted.

2. **RTL everywhere.** The `<html>` element has `dir="rtl"`. Use CSS logical properties in all new code: `ps-/pe-` not `pl-/pr-`, `ms-/me-` not `ml-/mr-`, `start-/end-` not `left-/right-` for positioning, `border-s-` not `border-l-`. Violating this breaks layout.

3. **Arabic-only.** Do not add English text to any page content. The only English on the site is: the contact details (`Info@takejuhha.com`, `+968 7997 6611`), the `dir="ltr"` inline on those fields, the `TAKE JUHHA` subtext in the navbar logo, and the English names under the brand values (Authentic, Creative, Wise, Hero). Everything else is Arabic.

4. **Image paths are absolute from `public/`.** Images are in `public/images/` and referenced as `/images/imgXXX.jpg`. Do not use `@/assets/` imports for these — they go through Vite's asset pipeline and would break with the current path scheme.

5. **ScrollReveal is CSS-only (no GSAP).** The `ScrollReveal.vue` component uses Intersection Observer + Tailwind translate/opacity classes. GSAP is installed but only used in `HeroSection.vue` conceptually — no `gsap.registerPlugin()` calls exist yet. Before adding GSAP ScrollTrigger, call `gsap.registerPlugin(ScrollTrigger)` in the component that uses it, not globally in `main.ts`.

6. **Contact form does not submit anywhere.** `ContactForm.vue`'s `handleSubmit` does `await new Promise(r => setTimeout(r, 1500))` then clears the form. It is a UI stub. Wire it up before any production deployment.

7. **`portfolioPreview` and `portfolioItems` are separate exports.** `portfolioPreview` is a hand-picked subset of 8 items used on the home page. `portfolioItems` (all 90) is used on the portfolio page. Both are in `src/data/portfolio.ts`.

8. **Swiper is installed but unused.** It's in `package.json` dependencies but no component imports it. If you add it, also import its CSS: `import 'swiper/css'` in the component or `main.ts`.

9. **No Pinia / no global state.** Each composable manages its own local state. There is no shared store. If you need shared state across pages, introduce Pinia then — don't improvise with provide/inject for complex state.

10. **`vue-tsc` is the type-checker.** Run `npm run type-check` to catch TypeScript errors without building. The `noUnusedLocals` and `noUnusedParameters` flags are enabled — don't leave unused variables in components.
