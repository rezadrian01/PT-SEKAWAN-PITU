"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
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
  );
}