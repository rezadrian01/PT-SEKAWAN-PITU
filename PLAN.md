# Plan: PT. Sekawan Pitu — Website Rebuild

## Stack

| Layer | Version / Package |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| React | 19.2.4 |
| Styling | Tailwind CSS v4 (CSS-based config, no `tailwind.config.ts`) |
| Components | shadcn/ui v4 (radix-nova style) |
| Animations | Framer Motion ^12 |
| Icons | Lucide React ^1.14 |
| Language | TypeScript |

---

## Design System

### Color Palette (CSS Variables in `globals.css`)

```css
/* Background */
--color-cream:        #f5f0e8   /* warm off-white, never pure #fff */
--color-surface:      #eee8dc   /* slightly darker cream for cards */

/* Primary — deep forest green */
--color-forest:       #1a3d2b

/* Accent — amber gold (use sparingly) */
--color-amber:        #c8831a

/* Text */
--color-warm-black:   #1c1a16   /* warm near-black, not pure #000 */

/* Footer dark */
--color-dark-bg:      #1a3d2b
--color-dark-amber:   #e8a94a
```

### Typography

- **Headings**: Playfair Display (Google Fonts, serif) — large, bold, confident. Hero: `text-6xl` to `text-8xl`.
- **Body**: DM Sans (Google Fonts, sans) — weight 300 for descriptions, 500 for labels/buttons.
- **Import**: via `next/font/google` in `app/layout.tsx`.
- **Never use**: Inter, Roboto, Space Grotesk, Arial, system fonts.

### Spatial & Layout

- Section rhythm: thick green/amber horizontal rules as dividers, not just whitespace
- Hero: full-bleed oversized left-aligned headline, not centered text block
- At least one dark green section (`#1a3d2b` bg + cream text) for dramatic contrast
- Cards: max `rounded-xl` (12px), use borders instead of box-shadows
- No gradients in hero; subtle grain/noise texture overlay on hero section
- Buttons: thick 2px border, sharp corners (`rounded-none`) OR consistent pill shape — commit to one style
- Mobile sticky order bar on `/belanja` only

### Motion Philosophy

- Page load: staggered reveal with `staggerChildren: 0.1`
- Scroll animations: `whileInView` with `viewport: { once: true }` — never replay
- Hero: `initial={{ opacity: 0, y: 24 }} → animate={{ opacity: 1, y: 0 }}`, staggered children
- Cards: `whileHover={{ y: -4 }}` with spring transition `{ type: "spring", stiffness: 300 }`
- Navbar: `useScroll` hook to transition background on scroll
- Page transitions: use `app/template.tsx` with Framer Motion fade for page-to-page transitions

### Forbidden Aesthetic Patterns

- ❌ Purple or blue color accents
- ❌ Cards with `box-shadow`
- ❌ `rounded-2xl` or higher on cards
- ❌ Gradient hero backgrounds
- ❌ Centered hero with illustration to the right
- ❌ Floating emoji as product images
- ❌ Lottie animations
- ❌ "White + green + rounded cards" generic food startup look
- ❌ Inter, Space Grotesk, or system fonts

---

## Implementation Phases

---

### Phase 0 — Foundation Setup

**Goal**: Set up all design tokens, fonts, and utility infrastructure before touching any page.

#### Step 0.1 — globals.css
Clear existing shadcn defaults, replace with Sekawan Pitu design system.

Variables to define in `:root`:
```css
--color-cream:   #f5f0e8;
--color-surface: #eee8dc;
--color-forest:  #1a3d2b;
--color-amber:   #c8831a;
--color-warm-black: #1c1a16;
--color-dark-bg: #1a3d2b;
--color-dark-amber: #e8a94a;
```

Override shadcn `--background` to `--color-cream`, `--foreground` to `--color-warm-black`, `--primary` to `--color-forest`, `--accent` to `--color-amber`. Remove `.dark` block entirely (light mode only).

#### Step 0.2 — app/layout.tsx
- Remove `Geist` and `Geist_Mono` font imports
- Import `Playfair_Display` and `DM_Sans` from `next/font/google`
- Set `lang="id"` (Indonesian)
- Apply Playfair Display as `--font-heading` CSS variable; DM Sans as `--font-sans`
- Add `AnimatePresence` wrapper (client component) around `{children}` via a `template.tsx`
- Set base metadata with `openGraph: { siteName: "PT. Sekawan Pitu", locale: "id_ID", type: "website" }`

#### Step 0.3 — tailwind.config (via globals.css @theme)
Extend Tailwind v4 theme inline in `globals.css`:
```css
@theme inline {
  --font-heading: var(--font-playfair);
  --color-cream: var(--color-cream);
  --color-surface: var(--color-surface);
  --color-forest: var(--color-forest);
  --color-amber: var(--color-amber);
  --color-warm-black: var(--color-warm-black);
}
```

#### Step 0.4 — app/template.tsx
Create `app/template.tsx` as a client component that wraps `{children}` in a `motion.div` with `initial={{ opacity: 0 }} animate={{ opacity: 1 }}` fade transition. This enables page-to-page transitions in App Router.

#### Step 0.5 — lib/constants.ts
Create constants file with all reusable values:
```ts
export const COMPANY = {
  name: "PT. Sekawan Pitu",
  tagline: "Dari Kandang Sehat, Untuk Keluarga Kuat",
  address: "Jl. Sarasa No. 45 Babakan, Kec. Cibeureum, Kota Sukabumi, Jawa Barat 43142",
  phone: "0857-2088-7079",
  waLink: "https://wa.me/6285720887079",
  email: "ptsekawanpitu@gmail.com",
  instagram: "https://www.instagram.com/pt.sekawanpitu",
  tiktok: "https://www.tiktok.com/@pt.sekawan.pitu",
} as const;

export const WA_BASE = "https://wa.me/6285720887079";

export function buildWaMessage(productName: string): string {
  const text = encodeURIComponent(`Halo PT. Sekawan Pitu, saya ingin memesan ${productName}`);
  return `${WA_BASE}?text=${text}`;
}
```

#### Step 0.6 — UNSPLASH IMAGES CONSTANTS
Define all Unsplash image URLs as constants (see Phase 1 step 1.1).

---

### Phase 1 — Global Components

**Goal**: Build all reusable components used across every page.

#### 1.1 — Install shadcn components
Run once (can be batched):
```bash
pnpm dlx shadcn@latest add sheet
pnpm dlx shadcn@latest add accordion
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add textarea
pnpm dlx shadcn@latest add select
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add skeleton
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add separator
pnpm dlx shadcn@latest add label
```

#### 1.2 — components/Navbar.tsx (client)
- Sticky (`position: sticky; top: 0; z-index: 50`)
- Logo: "PT. Sekawan Pitu" in Playfair Display, left-aligned
- Nav links centered: Beranda, Tentang Kami, Belanja, Galeri, FAQ, Testimoni, Kontak
- Right: "Pesan Sekarang" button in amber (`#c8831a`) linking to WA with `target="_blank"`
- On scroll (`useScroll` from framer-motion): add `backdrop-blur-md bg-cream/90 border-b border-surface` transition
- Mobile (`< lg`): hamburger → shadcn `Sheet` drawer with same nav links
- Nav links use Next.js `Link` components with active state highlight in amber

#### 1.3 — components/Footer.tsx
- Dark forest green background (`#1a3d2b`)
- Top row: company name in large Playfair Display italic (amber color), tagline below
- Middle: two-column nav links grid
- Social icons row: Instagram, TikTok, WhatsApp using Lucide `Icon` components with hover color transition
- Bottom: address text + copyright `© 2026 PT. Sekawan Pitu`
- Generous padding (`py-16`)

#### 1.4 — components/WhatsAppFloat.tsx
- Fixed position bottom-right
- Green circle (`#1a3d2b`) with white `MessageCircle` Lucide icon
- Links to `https://wa.me/6285720887079` with `target="_blank" rel="noopener noreferrer"`
- Subtle CSS pulse animation (scale 1 → 1.08 loop)
- Hidden on `/belanja` page (mobile sticky bar handles it there)

#### 1.5 — components/ProductCard.tsx
Reusable card for both homepage preview and `/belanja` grid.

Props:
```ts
interface ProductCardProps {
  name: string;
  category: "Telur" | "Daging" | "Susu";
  description: string;
  unit: string;
  imageUrl: string;
  imageAlt: string;
}
```

Visual:
- Portrait-ratio image (via `next/image`, Unsplash URL)
- Category badge (shadcn `Badge`) in forest green
- Product name in Playfair Display
- Description in DM Sans 300
- Unit in muted text
- "Pesan via WhatsApp" button (amber, links to WA with pre-filled product name)
- `whileHover={{ y: -4 }}` with spring transition
- Border instead of shadow

#### 1.6 — components/SectionHeader.tsx
Reusable section label + title + optional subtitle block.

Props:
```ts
interface SectionHeaderProps {
  label: string;        // small uppercase, amber gold, letter-spacing: 0.15em
  title: string;         // Playfair Display, large
  subtitle?: string;     // DM Sans 300, muted
  className?: string;
}
```

#### 1.7 — components/StarRating.tsx
Renders 1–5 star icons (Lucide `Star` filled/empty, amber color). Used in testimonials.

#### 1.8 — lib/data/products.ts
Define all 8 products as structured data:
```ts
export const PRODUCTS = [
  { id: "telur-ayam-kampung", name: "Telur Ayam Kampung", category: "Telur", description: "...", unit: "per butir / per karpet", imageUrl: "...", imageAlt: "..." },
  // ... all 8
] as const;
```

#### 1.9 — lib/data/testimonials.ts
Define all testimonials with name, location, rating (1–5), and quote text.

#### 1.10 — lib/data/faq.ts
Define all 8 FAQ items with question and answer.

---

### Phase 2 — Homepage (`app/page.tsx`)

**Goal**: The most critical page — must feel premium and polished on first impression.

#### 2.1 — Hero Section
- Full-width, full-viewport-height
- Background: Unsplash livestock/farm photo, dark overlay for text contrast
- SVG noise/grain texture overlay on top of background image
- Left-aligned content:
  - Label: "PETERNAKAN SEHAT INDONESIA" — uppercase, amber, letter-spaced
  - Headline: "Dari Kandang Sehat,\nUntuk Keluarga Kuat" — Playfair Display, `text-6xl lg:text-8xl`, white
  - Subheadline: tagline in DM Sans, white/90
  - Two CTA buttons: "Belanja Sekarang" (amber filled → `/belanja`) + "Tentang Kami" (outlined white → `/tentang`)
  - 3 stat badges below CTA: small cream pills with dark text, icons left
- Staggered text reveal animation on mount

#### 2.2 — "Mengapa Memilih Kami?" Section
- SectionHeader label: "NILAI KAMI"
- 3 cards in a row (grid, not symmetric — consider 2-1 layout on smaller)
- Each card: icon (Lucide), title (Playfair), description (DM Sans), left border accent on hover
- Scroll-triggered whileInView fade-in with staggerChildren

#### 2.3 — Product Preview Section
- Dark green background (`#1a3d2b`) for contrast break
- Cream text
- 3 ProductCard components (Telur Ayam Kampung, Daging Sapi, Susu Sapi Murni)
- Bottom link: "Lihat semua produk →" → `/belanja`

#### 2.4 — Testimonials Strip
- Cream background with subtle texture
- Horizontal scroll or 3-column grid of customer quotes
- StarRating component + customer name + location

#### 2.5 — Visi & Misi Section
- Two-column layout with a vertical amber accent line divider
- Visi card left, Misi list right
- Playfair Display for headings, DM Sans for body

#### 2.6 — Footer (global component, placed in root layout)
Handled in Phase 1.

#### Metadata
```ts
export const metadata: Metadata = {
  title: "PT. Sekawan Pitu — Protein Hewani Segar dari Kandang",
  description: "Dari Kandang Sehat, Untuk Keluarga Kuat. Telur, daging, dan susu segar langsung dari kandang sehat di Sukabumi.",
  robots: { index: true, follow: true },
}
```

---

### Phase 3 — Tentang Kami (`app/tentang/page.tsx`)

#### 3.1 — Hero Banner
- Full-width, ~50vh
- Unsplash farm/team photo background, dark overlay
- Large Playfair Display title: "Tentang Kami"
- Subtitle: company description sentence

#### 3.2 — Company Story Section
- Two-column: text left (founding story 2026, commitment to sustainability), image right (Unsplash)
- Decorative amber accent line

#### 3.3 — Timeline Section
- Vertical timeline with 4 nodes: 2026 Berdiri → Produksi Telur → Ekspansi Daging & Susu → Kini Melayani via WhatsApp
- Left-aligned nodes, alternating layout optional
- Dark green background section with cream text

#### 3.4 — Team Section
- 4 cards (2x2 grid): Direktur, Kepala Kandang, Quality Control, Logistik
- Each: icon, role title (Playfair Display), description (DM Sans)
- Placeholder icons (Lucide `User`, `ShieldCheck`, `ClipboardCheck`, `Truck`)

#### 3.5 — Visi & Misi (repeated, stronger visual treatment)
- Larger typography, green background section
- Visi as large quote, Misi as numbered list

#### Metadata
```ts
export const metadata: Metadata = {
  title: "Tentang Kami | PT. Sekawan Pitu",
  description: "PT. Sekawan Pitu didirikan 2026 di Sukabumi untuk menjadi perusahaan peternakan terbaik dalam penyediaan protein hewani yang sehat.",
}
```

---

### Phase 4 — Belanja (`app/belanja/page.tsx`)

#### 4.1 — Page Header
- Playfair Display title: "Belanja"
- Subtitle: "Belanja Aman, Nyaman, dan Terpercaya"
- 4-step ordering guide displayed as horizontal steps with Lucide icons and connecting lines

#### 4.2 — Category Filter (client component)
`components/FilterButtons.tsx` (use client):
- Buttons: "Semua", "Telur", "Daging", "Susu"
- Active state: amber background, dark text
- On click: filter state updates, shows/hides product cards
- Uses `useState` for active category

#### 4.3 — Product Grid
- 2-column mobile, 3-column tablet, 4-column desktop
- Maps over `PRODUCTS` filtered by active category
- Each item: `ProductCard` component (from Phase 1)
- WA button format: `https://wa.me/6285720887079?text=Halo%20PT.%20Sekawan%20Pitu%2C%20saya%20ingin%20memesan%20[nama]`

#### 4.4 — Loading Skeleton
- shadcn `Skeleton` cards shown while filtering (150ms artificial delay via `setTimeout` to show skeleton state)
- 8 skeleton cards in grid layout

#### 4.5 — Mobile Sticky Order Bar
- Only visible on mobile (`< lg`)
- Fixed bottom bar, dark forest green
- "Pesan via WhatsApp" — links to general WA number
- `z-50`, `pb-safe-area` padding
- Hidden via CSS when viewport is desktop

#### Metadata
```ts
export const metadata: Metadata = {
  title: "Belanja Telur, Daging & Susu Segar | PT. Sekawan Pitu",
  description: "Pesan telur, daging, dan susu segar langsung via WhatsApp. Pengiriman dari Sukabumi, Jawa Barat.",
}
```

---

### Phase 5 — Galeri (`app/galeri/page.tsx`)

#### 5.1 — Page Header
- Title: "Galeri"
- Subtitle: "Lihat langsung kondisi kandang, hewan ternak, dan proses produksi kami"

#### 5.2 — Masonry-Style Grid
- 3 columns desktop, 2 tablet, 1 mobile
- 8 cards with Unsplash farm/livestock photos
- Each card: full-bleed image, caption overlay at bottom with semi-transparent dark background
- `next/image` with `fill` and `object-cover`
- scroll-triggered staggered reveal

#### 5.3 — Social CTA
- Card below grid: "Ikuti kami di media sosial untuk foto & video terbaru"
- Instagram button + TikTok button (amber outlined)

#### Metadata
```ts
export const metadata: {
  title: "Galeri | PT. Sekawan Pitu",
  description: "Galeri foto dan video proses produksi, kandang, dan produk PT. Sekawan Pitu.",
}
```

---

### Phase 6 — FAQ (`app/faq/page.tsx`)

#### 6.1 — Page Header
- Title: "Pertanyaan yang Sering Diajukan"
- Subtitle: "Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami"

#### 6.2 — FAQ Accordion
- shadcn `Accordion` (client component)
- 8 items as defined in `lib/data/faq.ts`
- Each: question as trigger, answer as content
- Forest green accent on active item
- Answers in Bahasa Indonesia, detailed

#### 6.3 — WhatsApp CTA Card
- Full-width card below accordion
- Dark forest green background
- "Masih ada pertanyaan? Chat langsung dengan kami"
- WhatsApp button (amber)

#### Metadata
```ts
export const metadata: {
  title: "FAQ | PT. Sekawan Pitu",
  description: "Jawaban untuk pertanyaan umum tentang pemesanan, pengiriman, harga, dan kunjungan ke kandang PT. Sekawan Pitu.",
}
```

---

### Phase 7 — Testimoni (`app/testimoni/page.tsx`)

#### 7.1 — Summary Card
- Green background section
- Overall rating: 4.9/5 displayed large (Playfair Display, `text-6xl`)
- 5 amber star icons
- Total review count: "32 reviews"

#### 7.2 — Review Grid
- 6 cards in 3-column grid (2-col tablet, 1-col mobile)
- shadcn `Card` with no shadow, border
- Each: StarRating, italic quote in DM Sans, customer name + location
- Scroll-triggered stagger animation

#### 7.3 — CTA Card
- "Puas dengan produk kami? Ceritakan pengalaman Anda"
- WhatsApp button (amber, outlined style)

#### Metadata
```ts
export const metadata: {
  title: "Testimoni | PT. Sekawan Pitu",
  description: "Ulasan dan testimoni pelanggan PT. Sekawan Pitu dari Sukabumi dan sekitarnya.",
}
```

---

### Phase 8 — Kontak (`app/kontak/page.tsx`)

#### 8.1 — Page Header
- Title: "Hubungi Kami"

#### 8.2 — Two-Column Layout
**Left column** — Contact Info Card:
- Forest green background
- Address, phone (clickable `tel:` link), email (`mailto:` link)
- Operating hours: Senin–Sabtu 07.00–17.00 WIB
- Social icons row

**Right column** — Contact Form:
- shadcn `Input` for Nama Lengkap, Email, Nomor WhatsApp
- shadcn `Select` for Topik (Pemesanan, Kerjasama/Grosir, Kunjungan Kandang, Lainnya)
- shadcn `Textarea` for Pesan
- Submit button (amber)

#### 8.3 — Form Logic (client component)
`components/ContactForm.tsx` (use client):
- `useState` for form fields and submission state
- Validation: required fields, email format check
- On submit: build WhatsApp pre-filled message URL with all form fields encoded
- Open WA link in new tab: `https://wa.me/6285720887079?text=...`
- Show success card after clicking submit ("Pesan Anda telah terkirim! Kami akan membalas segera.") with direct WA link

#### 8.4 — Map Placeholder
- Green-tinted styled box with `MapPin` Lucide icon
- Address text inside
- No Google Maps iframe (clean, no API dependency)

#### 8.5 — Bottom Note
- "Atau hubungi kami langsung via WhatsApp untuk respons lebih cepat" with WhatsApp link

#### Metadata
```ts
export const metadata: {
  title: "Kontak | PT. Sekawan Pitu",
  description: "Hubungi PT. Sekawan Pitu untuk pemesanan, kunjungan kandang, atau pertanyaan tentang produk peternakan kami.",
}
```

---

## Unsplash Image URLs

All images use `images.unsplash.com` with specific photo IDs for stability. Use `next/image` with these URLs.

### Hero Images
```
https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=80   (barn/livestock, warm)
```

### Product Placeholder Images
```
Telur Ayam Kampung:  https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&q=80  (eggs)
Telur Itik:          https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&q=80  (eggs)
Telur Puyuh:         https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&q=80  (eggs, reuse ok)
Daging Sapi:         https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=600&q=80  (beef)
Daging Ayam:         https://images.unsplash.com/photo-1604503468506-a8da13d50791?w=600&q=80  (chicken)
Daging Kambing/Domba:https://images.unsplash.com/photo-1604503468506-a8da13d50791?w=600&q=80  (mutton, reuse ok)
Susu Sapi Murni:     https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80  (milk)
Susu Kambing Murni:  https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80  (milk, reuse ok)
```

### Gallery Images
```
Area Utama Kandang:         https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80  (barn)
Kandang Ayam Kampung:        https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80  (chicken farm)
Proses Panen Telur:          https://images.unsplash.com/photo-1604503468506-a8da13d50791?w=800&q=80  (eggs)
Peternakan Sapi & Kambing:   https://images.unsplash.com/photo-1540339832862-474599807836?w=800&q=80  (cattle)
Pengelolaan Limbah Organik:  https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80  (organic/farm)
Proses Pemerahan Susu:       https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80  (milking)
Packing & Pengiriman:        https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80  (delivery)
Tim di Lapangan:              https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80  (farm team)
```

### About Page
```
Team/Company: https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80  (farm team)
```

---

## File Structure (Final)

```
app/
  layout.tsx              ← fonts, AnimatePresence wrapper, metadata base
  template.tsx            ← page transition fade (client)
  globals.css             ← design tokens, Tailwind v4 @theme
  page.tsx                ← Homepage
  tentang/page.tsx
  belanja/page.tsx
  galeri/page.tsx
  faq/page.tsx
  testimoni/page.tsx
  kontak/page.tsx

components/
  ui/                     ← shadcn components (button, sheet, accordion, input, textarea, select, card, skeleton, badge, separator, label)
  Navbar.tsx             ← sticky nav, scroll bg, Sheet mobile menu
  Footer.tsx             ← dark green footer
  WhatsAppFloat.tsx      ← floating WA button
  ProductCard.tsx        ← reusable product card
  SectionHeader.tsx      ← label + title + subtitle block
  StarRating.tsx         ← 1-5 star display
  FilterButtons.tsx      ← category filter (client)
  ContactForm.tsx        ← form → WA (client)

lib/
  utils.ts               ← cn() utility
  constants.ts           ← COMPANY, WA_BASE, buildWaMessage()
  data/
    products.ts          ← 8 products
    testimonials.ts      ← testimonials data
    faq.ts               ← 8 FAQ items
```

---

## Animation Summary

| Element | Animation |
|---|---|
| Page load (template.tsx) | `opacity: 0 → 1`, 300ms ease |
| Hero text | Staggered `y: 24 → 0`, `opacity: 0 → 1`, 400ms, 0.1s stagger between lines |
| Section cards (whileInView) | `opacity: 0, y: 20 → opacity: 1, y: 0`, `viewport: { once: true }` |
| Grid stagger | `staggerChildren: 0.1` on container |
| Card hover | `whileHover: { y: -4 }`, spring `{ stiffness: 300 }` |
| Navbar scroll | `useScroll` → background opacity transition |
| WhatsApp float | CSS keyframe `scale: 1 → 1.08`, 2s infinite |

---

## shadcn Components to Install

```bash
# One-time batch install
pnpm dlx shadcn@latest add button sheet accordion input textarea select card skeleton badge separator label
```

---

## Implementation Order

```
Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7 → Phase 8
```

Phase 0 (Foundation) must complete before any component or page work begins.
Phases 1–8 are sequential — each global component in Phase 1 is used by all subsequent pages.