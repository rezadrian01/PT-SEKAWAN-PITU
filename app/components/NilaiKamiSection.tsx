"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

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

export function NilaiKamiSection() {
  return (
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
  );
}