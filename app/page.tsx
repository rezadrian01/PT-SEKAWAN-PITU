import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { StarRating } from "@/components/StarRating";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data/products";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { HeroSection } from "./components/HeroSection";

export const metadata: Metadata = {
  title: "PT. Sekawan Pitu — Protein Hewani Segar dari Kandang",
  description:
    "Dari Kandang Sehat, Untuk Keluarga Kuat. Telur, daging, dan susu segar langsung dari kandnag sehat di Sukabumi, Jawa Barat.",
  robots: { index: true, follow: true },
};

const VALUES = [
  {
    icon: Leaf,
    title: "Peternakan Sehat",
    description:
      "Kandang kami dirancang dengan standar higiene tinggi, bebas stres untuk hewan, dan bebas bahan kimia tambahan.",
  },
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description:
      "Setiap produk melewati Quality Control ketat sebelum dikirim. Telur dipanen hari yang sama, daging segar langsung dari kandnag.",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description:
      "Rantai dingin terjaga dari kandnag hingga ke rumah Anda. Pengiriman ke Sukabumi dan sekitarnya bisa same-day.",
  },
];

export default function BerandaPage() {
  return (
    <>
      <HeroSection />

      {/* ── NILAI KAMI ─────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Nilai Kami"
            title="Mengapa Memilih PT. Sekawan Pitu?"
            subtitle="Kami berkomitmen menghadirkan protein hewani terbaik dari kandnag sehat untuk meja makan Anda."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full rounded-xl border-surface bg-card hover:border-amber/30 transition-colors group">
                  <CardContent className="p-8 flex flex-col gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-dark-amber">
                      <value.icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-black">
                      {value.title}
                    </h3>
                    <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUK UNGGULAN ─────────────────────────────────── */}
      <section className="py-24 bg-forest text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <SectionHeader
              label="Produk Kami"
              title="Langsung dari Kandang"
              subtitle="Segar, tanpa pengawet, dikirim langsung ke rumah Anda."
              className="text-white [&_.text-amber]:!text-dark-amber"
            />
            <Link
              href="/belanja"
              className="shrink-0 inline-flex items-center gap-2 text-dark-amber font-[family-name:var(--font-dm-sans)] font-semibold hover:gap-3 transition-all"
            >
              Lihat semua produk
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 3).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Testimoni"
            title="Apa Kata Pelanggan Kami?"
            subtitle="Ribuan keluarga di Jawa Barat sudah merasakan kualitas produk PT. Sekawan Pitu."
            className="mb-16"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full rounded-xl border-surface bg-card">
                  <CardContent className="p-7 flex flex-col gap-5">
                    <StarRating rating={t.rating} />
                    <blockquote className="font-[family-name:var(--font-dm-sans)] font-light text-warm-black/80 italic leading-relaxed text-sm">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 pt-2 border-t border-surface">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white font-[family-name:var(--font-playfair)] font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-dm-sans)] font-medium text-warm-black text-sm">
                          {t.name}
                        </p>
                        <p className="font-[family-name:var(--font-dm-sans)] text-xs text-muted-foreground">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimoni"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-semibold text-forest hover:gap-3 transition-all"
            >
              Lihat semua testimoni
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISI & MISI ─────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Visi & Misi"
            title="Membangun Peternakan Berkelanjutan"
            subtitle="Komitmen kami untuk menghadirkan makanan yang sehat dan bertanggung jawab."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative pl-8">
                {/* Amber accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber rounded-full" />

                <span className="mb-3 block text-xs font-medium tracking-[0.15em] uppercase text-amber font-[family-name:var(--font-dm-sans)]">
                  Visi
                </span>
                <h3 className="mb-5 font-[family-name:var(--font-playfair)] text-3xl font-bold text-warm-black leading-tight">
                  Menjadi perusahaan peternakan terdepan di Jawa Barat yang
                  mengutamakan kesehatan dan keberlanjutan lingkungan.
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground leading-relaxed">
                  Kami percaya bahwa peternakan yang baik tidak hanya menghasilkan
                  produk berkualitas, tetapi juga menjaga keseimbangan ekosistem dan
                  kesejahteraan hewan.
                </p>
              </div>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              <span className="mb-3 block text-xs font-medium tracking-[0.15em] uppercase text-amber font-[family-name:var(--font-dm-sans)]">
                Misi
              </span>
              {[
                "Menyediakan telur, daging, dan susu segar dengan standar hygiene tertinggi",
                "Memperkuat rantai pasok lokal dan mendukung peternak kecil di Jawa Barat",
                "Menggunakan praktik peternakan berkelanjutan yang ramah lingkungan",
                "Memberikan edukasi kepada masyarakat tentang pentingnya pangan sehat",
              ].map((mission, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-amber"
                    aria-hidden="true"
                  />
                  <p className="font-[family-name:var(--font-dm-sans)] font-light text-warm-black/80 leading-relaxed">
                    {mission}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────── */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-warm-black leading-tight">
              Siap merasakan perbedaan?
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-lg leading-relaxed max-w-xl">
              Pesan sekarang via WhatsApp dan terima produk segar langsung di
              rumah Anda. Proses mudah, pengiriman cepat.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link
                href="/belanja"
                className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white text-base font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-forest hover:bg-forest/90 transition-colors"
              >
                Mulai Belanja
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-forest text-base font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-forest hover:bg-forest/5 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}