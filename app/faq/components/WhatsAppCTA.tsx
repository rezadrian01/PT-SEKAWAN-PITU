"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_BASE } from "@/lib/constants";

export function WhatsAppCTA() {
  return (
    <section className="py-16 bg-forest">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <MessageCircle size={40} className="text-dark-amber" aria-hidden="true" />
          <div>
            <h3 className="mb-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
              Masih ada pertanyaan?
            </h3>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-white/65 text-base leading-relaxed">
              Chat langsung dengan tim kami via WhatsApp untuk jawaban cepat dan
              personal.
            </p>
          </div>
          <a
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white text-base font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-amber hover:bg-amber/90 transition-colors"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}