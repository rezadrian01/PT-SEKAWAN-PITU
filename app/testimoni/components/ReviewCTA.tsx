"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_BASE } from "@/lib/constants";

export function ReviewCTA() {
  return (
    <section className="py-16 bg-surface border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <div>
            <h3 className="mb-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-warm-black">
              Puas dengan produk kami?
            </h3>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-base leading-relaxed">
              Ceritakan pengalaman Anda kepada kami dan bantu keluarga lain
              menemukan peternakan sehat pilihan.
            </p>
          </div>
          <a
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-forest text-base font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-forest hover:bg-forest hover:text-white transition-colors"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Bagikan Testimoni via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}