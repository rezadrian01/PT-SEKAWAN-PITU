"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const VISI =
  "Menjadi perusahaan peternakan terdepan di Jawa Barat yang mengutamakan kesehatan dan keberlanjutan lingkungan.";

const MISI = [
  "Menyediakan telur, daging, dan susu segar dengan standar hygiene tertinggi",
  "Memperkuat rantai pasok lokal dan mendukung peternak kecil di Jawa Barat",
  "Menggunakan praktik peternakan berkelanjutan yang ramah lingkungan",
  "Memberikan edukasi kepada masyarakat tentang pentingnya pangan sehat",
];

export function VisiMisiSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 block text-xs font-medium tracking-[0.15em] uppercase text-amber font-[family-name:var(--font-dm-sans)]">
            Visi & Misi
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-warm-black leading-tight">
            Pondasi Kami dalam Setiap Langkah
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visi card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-forest rounded-2xl p-10 text-white"
          >
            <span className="mb-6 block text-xs font-medium tracking-[0.15em] uppercase text-dark-amber font-[family-name:var(--font-dm-sans)]">
              Visi
            </span>
            <blockquote className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold italic leading-snug text-white">
              &ldquo;{VISI}&rdquo;
            </blockquote>
            <div className="mt-8 h-1 w-16 bg-dark-amber rounded-full" />
          </motion.div>

          {/* Misi list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <span className="mb-2 block text-xs font-medium tracking-[0.15em] uppercase text-amber font-[family-name:var(--font-dm-sans)]">
              Misi
            </span>
            {MISI.map((mission, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-surface bg-card p-5 hover:border-amber/30 transition-colors">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-dark-amber">
                  <CheckCircle2 size={16} aria-hidden="true" />
                </div>
                <p className="font-[family-name:var(--font-dm-sans)] font-light text-warm-black/80 leading-relaxed text-sm pt-1">
                  {mission}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}