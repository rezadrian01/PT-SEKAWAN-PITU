"use client";

import { motion } from "framer-motion";
import { Egg, Beef, MessageCircle } from "lucide-react";

const TIMELINE = [
  {
    year: "2026",
    icon: Egg,
    title: "PT. Sekawan Pitu Berdiri",
    description:
      "Berawal dari sekelompok peternak muda di Sukabumi yang memiliki visi untuk mengubah wajah peternakan Indonesia.",
  },
  {
    year: "2026",
    icon: Egg,
    title: "Produksi Telur Dimulai",
    description:
      "Kandang pertama dibangun dengan standar hygiene tinggi. Telur ayam kampung free-range menjadi produk flagship pertama.",
  },
  {
    year: "2026",
    icon: Beef,
    title: "Ekspansi Daging & Susu",
    description:
      "Portofolio berkembang dengan penambahan daging sapi, ayam, dan susu segar dari peternakan terintegrasi.",
  },
  {
    year: "Sekarang",
    icon: MessageCircle,
    title: "Layanan via WhatsApp",
    description:
      "Pesanan mudah via WhatsApp. Produk dipanen dan dikirim di hari yang sama untuk menjamin kesegaran maksimum.",
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-forest text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-xs font-medium tracking-[0.15em] uppercase text-dark-amber font-[family-name:var(--font-dm-sans)]">
            Perjalanan Kami
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold leading-tight">
            Dari kecil hingga layanan seluruh Jawa Barat
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-dark-amber/30 -translate-x-1/2 hidden sm:block" />

          <div className="flex flex-col gap-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="flex flex-col items-center sm:w-1/2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark-amber text-forest z-10">
                    <item.icon size={18} aria-hidden="true" />
                  </div>
                  <span className="mt-2 font-[family-name:var(--font-playfair)] text-lg font-bold text-dark-amber">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="sm:w-1/2 bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="mb-2 font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] font-light text-white/65 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
