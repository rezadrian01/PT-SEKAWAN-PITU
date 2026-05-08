"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, ClipboardCheck, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const TEAM = [
  {
    icon: User,
    role: "Direktur Utama",
    description:
      "Memimpin visi perusahaan dalam menghadirkan pangan hewani berkualitas dan berkelanjutan untuk keluarga Indonesia.",
  },
  {
    icon: ShieldCheck,
    role: "Kepala Kandang",
    description:
      "Memastikan setiap kandang beroperasi sesuai standar hygiene dan kesejahteraan hewan tertinggi.",
  },
  {
    icon: ClipboardCheck,
    role: "Quality Control",
    description:
      "Memantau setiap tahap produksi dan distribusi untuk menjamin kualitas produk sampai ke tangan pelanggan.",
  },
  {
    icon: Truck,
    role: "Kepala Logistik",
    description:
      "Mengelola rantai dingin dari kandang hingga pengiriman, memastikan produk sampai segar dan tepat waktu.",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Tim Kami"
          title="Dipimpin oleh ProfesionalPeternakan"
          subtitle="Tim experienced yang passionate dalam bidangnya masing-masing."
          className="mb-16"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full rounded-xl border-surface bg-card text-center hover:border-amber/30 transition-colors">
                <CardContent className="p-8 flex flex-col items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-dark-amber">
                    <member.icon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-warm-black mb-1">
                      {member.role}
                    </h3>
                    <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}