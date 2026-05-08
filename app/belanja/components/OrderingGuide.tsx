"use client";

import { motion } from "framer-motion";
import { MessageCircle, Package, Truck, CheckCircle } from "lucide-react";

const STEPS = [
  {
    icon: Package,
    label: "Pilih Produk",
    description: "Lihat katalog dan pilih produk yang Anda butuhkan.",
  },
  {
    icon: MessageCircle,
    label: "Hubungi via WhatsApp",
    description: "Kirim pesan ke nomor kami dengan nama produk yang dipesan.",
  },
  {
    icon: Truck,
    label: "Konfirmasi & Kirim",
    description: "Tim kami akan mengkonfirmasi pesanan dan mengatur pengiriman.",
  },
  {
    icon: CheckCircle,
    label: "Terima Pesanan",
    description: "Produk segar tiba di rumah Anda di hari yang sama.",
  },
];

export function OrderingGuide() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 block text-xs font-medium tracking-[0.15em] uppercase text-amber font-[family-name:var(--font-dm-sans)]">
            Cara Memesan
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-warm-black">
            Pemesanan Mudah dalam 4 Langkah
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-border" />
              )}

              {/* Step number circle */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white z-10 mb-4">
                <step.icon size={20} aria-hidden="true" />
              </div>
              <span className="mb-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium tracking-widest uppercase text-amber">
                Langkah {i + 1}
              </span>
              <h3 className="mb-2 font-[family-name:var(--font-playfair)] text-base font-bold text-warm-black">
                {step.label}
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
