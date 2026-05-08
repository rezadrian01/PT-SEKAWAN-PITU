# PT. Sekawan Pitu — Website Project

## Overview

A production-ready website for **PT. Sekawan Pitu**, a livestock/animal protein company in Sukabumi, West Java, Indonesia. The site sells eggs, meat, and fresh milk via WhatsApp order.

**Tagline:** "Dari Kandang Sehat, Untuk Keluarga Kuat"
**Industry:** Peternakan — produces eggs (telur), meat (daging), and fresh milk (susu)

---

## Project Stack

| Layer | Detail |
|---|---|
| Framework | Next.js 16.2.6 (App Router, RSC) |
| React | 19.2.4 |
| Styling | Tailwind CSS v4 (CSS-based `@theme inline` config — no `tailwind.config.ts`) |
| Components | shadcn/ui v4 (radix-nova style) |
| Animations | Framer Motion ^12 |
| Icons | Lucide React ^1.14 |
| Language | TypeScript |

### Install shadcn components
```bash
pnpm dlx shadcn@latest add <component-name>
```

---

## Design System

### Color Palette (CSS Variables in `globals.css`)

```css
--color-cream:       #f5f0e8   /* warm off-white, page background — NEVER use pure #fff */
--color-surface:     #eee8dc   /* slightly darker cream, card backgrounds */
--color-forest:      #1a3d2b   /* deep forest green — primary */
--color-amber:       #c8831a   /* amber gold — accent, use sparingly */
--color-warm-black:  #1c1a16   /* warm near-black, text color — not pure #000 */
--color-dark-bg:     #1a3d2b   /* footer background */
--color-dark-amber:  #e8a94a  /* amber on dark backgrounds */
```

### Typography

- **Headings:** Playfair Display (Google Fonts, serif) — large, bold, authoritative. Hero: `text-6xl` to `text-8xl`.
- **Body:** DM Sans (Google Fonts, sans) — weight 300 for descriptions, 500 for labels/buttons.
- **Import via:** `next/font/google` in `app/layout.tsx`
- **Never use:** Inter, Roboto, Space Grotesk, Arial, system fonts

### Design Constraints

- Light mode only — do NOT implement dark mode or a theme toggle
- All user-facing copy in Bahasa Indonesia — no Lorem Ipsum
- All images use `next/image` with descriptive `alt` text in Bahasa Indonesia
- Cards: max `rounded-xl` (12px), use borders instead of `box-shadow`
- Buttons: consistent style (outlined 2px border + sharp corners) applied throughout

### Forbidden Aesthetic Patterns

- Purple or blue color accents of any kind
- Cards with `box-shadow` — use borders instead
- `rounded-2xl` or higher on cards
- Gradient hero backgrounds
- Centered hero with illustration to the right
- Floating emoji as product images
- Lottie animations or animated SVG illustrations
- "White + green + rounded cards" generic food startup look
- Inter, Space Grotesk, or system fonts

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Beranda | Homepage with hero, values, product preview, testimonials, visi/misi |
| `/tentang` | Tentang Kami | Company story, timeline, team, visi/misi |
| `/belanja` | Belanja (Shop) | Product grid with category filter, WhatsApp order |
| `/galeri` | Galeri | Photo grid of farm/operations |
| `/faq` | FAQ | Accordion with 8 Q&As |
| `/testimoni` | Testimoni | Customer reviews |
| `/kontak` | Kontak | Contact form → WhatsApp |

---

## Company Data

```ts
const COMPANY = {
  name: "PT. Sekawan Pitu",
  tagline: "Dari Kandang Sehat, Untuk Keluarga Kuat",
  address: "Jl. Sarasa No. 45 Babakan, Kec. Cibeureum, Kota Sukabumi, Jawa Barat 43142",
  phone: "0857-2088-7079",
  waLink: "https://wa.me/6285720887079",
  email: "ptsekawanpitu@gmail.com",
  instagram: "https://www.instagram.com/pt.sekawanpitu",
  tiktok: "https://www.tiktok.com/@pt.sekawan.pitu",
}
```

**WhatsApp link format:** Always use `https://wa.me/6285720887079` with country code `62`, NOT `wa.link`, NOT leading zero.

**Pre-filled message format:**
```
https://wa.me/6285720887079?text=Halo%20PT.%20Sekawan%20Pitu%2C%20saya%20ingin%20memesan%20[nama produk]
```

**Contact form submission:** Sends via WhatsApp pre-filled message — no backend/server needed.

---

## Animation Standards

- All scroll animations: `whileInView` with `viewport: { once: true }` — never replay on scroll back
- Page transitions: `app/template.tsx` wraps `{children}` in `motion.div` with fade
- Hero: staggered text reveal on mount, `initial={{ opacity: 0, y: 24 }} → animate={{ opacity: 1, y: 0 }}`
- Grid stagger: `staggerChildren: 0.1` on motion container
- Card hover: `whileHover={{ y: -4 }}` with spring `{ type: "spring", stiffness: 300 }`
- Navbar: `useScroll` hook from Framer Motion for background transition on scroll

---

## File Structure

```
app/
  layout.tsx            ← fonts, metadata base, Navbar + Footer
  template.tsx          ← page transition fade (client component)
  globals.css           ← design tokens, Tailwind @theme
  page.tsx              ← Beranda
  tentang/page.tsx
  belanja/page.tsx
  galeri/page.tsx
  faq/page.tsx
  testimoni/page.tsx
  kontak/page.tsx

components/
  ui/                   ← shadcn components (button, sheet, accordion, etc.)
  Navbar.tsx            ← sticky nav, scroll bg, Sheet mobile menu
  Footer.tsx            ← dark forest green footer
  WhatsAppFloat.tsx     ← floating WA button (hidden on /belanja)
  ProductCard.tsx       ← reusable product card
  SectionHeader.tsx     ← label + title + subtitle block
  StarRating.tsx        ← 1–5 star display with Lucide
  FilterButtons.tsx     ← category filter (use client)
  ContactForm.tsx       ← form → WhatsApp (use client)

lib/
  utils.ts               ← cn() utility
  constants.ts           ← COMPANY, WA_BASE, buildWaMessage()
  data/
    products.ts          ← 8 products (name, category, description, unit, imageUrl)
    testimonials.ts      ← customer reviews
    faq.ts               ← 8 FAQ items with questions and answers
```

---

## SEO Metadata

All pages must export `metadata: Metadata` with:
- `title`: descriptive, in Bahasa Indonesia
- `description`: compelling, in Bahasa Indonesia
- `openGraph`: `{ siteName: "PT. Sekawan Pitu", locale: "id_ID", type: "website" }`
- `robots: { index: true, follow: true }`

---

## Reference

- Full technical plan: `PLAN.md`
- Frontend design skill: `.claude/skills/frontend-design/SKILL.md`
- Next.js breaking changes: `node_modules/next/dist/docs/` (per `AGENTS.md`)