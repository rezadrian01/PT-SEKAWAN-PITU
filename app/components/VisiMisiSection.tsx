"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const MISSIONS = [
  "Menyediakan telur, daging, dan susu segar dengan standar hygiene tertinggi",
  "Memperkuat rantai pasok lokal dan mendukung peternak kecil di Jawa Barat",
  "Menggunakan praktik peternakan berkelanjutan yang ramah lingkungan",
  "Memberikan edukasi kepada masyarakat tentang pentingnya pangan sehat",
];

export function VisiMisiSection() {
  return (
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
            {MISSIONS.map((mission, i) => (
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
  );
}