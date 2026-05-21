# جُحة — Take Juhha

موقع شركة جُحة الإبداعية — وكالة تسويق وعلامات تجارية عُمانية.

A premium Arabic-only company website for **Take Juhha (جُحة)**, an Omani creative branding and marketing agency.

---

## Tech Stack

| | |
|---|---|
| Framework | Vue 3 + TypeScript (Composition API) |
| Build | Vite 5 |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Routing | Vue Router 4 |
| Animations | GSAP 3 + Intersection Observer |
| Icons | Lucide Vue Next |
| Font | Cairo (Google Fonts) |

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run type-check
```

---

## Pages

| Route | Arabic | Description |
|---|---|---|
| `/` | الصفحة الرئيسية | Hero, About preview, Services, Portfolio, Clients, Stats, Quote, CTA |
| `/about` | من نحن | Vision, Mission, Brand values, Our story |
| `/services` | الخدمات | 7 service cards with process methodology |
| `/portfolio` | أعمالنا | 90-image gallery with category filters + lightbox |
| `/contact` | تواصل معنا | Contact form, contact info, CTA |

---

## Brand

```
Primary:   #D65769   Secondary:  #4F1A6F
Dark bg:   #0a0a0f   Surface:    #12121a
Font:      Cairo (RTL, weights 300–900)
```

The site is **Arabic-only**, fully **RTL**, and targets clients in Oman and the wider Arab world.

---

## Project Structure

```
src/
├── assets/main.css        # Tailwind v4 entry — @import + @theme + custom classes
├── components/
│   ├── layout/            # TheNavbar, TheFooter, MobileMenu
│   ├── ui/                # SectionTitle, GlassCard, PrimaryButton, AnimatedCounter, ScrollReveal
│   ├── home/              # 8 home-page sections
│   ├── about/             # VisionMission, ValuesGrid, OurStory
│   ├── services/          # ServiceCard (full + compact variants)
│   ├── portfolio/         # PortfolioGrid, PortfolioItem, PortfolioLightbox
│   └── contact/           # ContactForm, ContactInfo
├── composables/           # useIntersectionObserver, useNavbar, useCounter, useLightbox, useScrollReveal
├── data/                  # services, portfolio (90 items), clients, stats, values
├── router/index.ts
├── types/index.ts
└── views/                 # HomeView, AboutView, ServicesView, PortfolioView, ContactView
public/images/             # 90 JPG images → referenced as /images/imgXXX.jpg
```

---


## Contact

**+968 7997 6611** · Info@takejuhha.com · [@takejuhha](https://instagram.com/takejuhha)
