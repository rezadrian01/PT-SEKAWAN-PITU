"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80";

export function TentangBanner() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "50vh", minHeight: "360px" }}>
      <div className="absolute inset-0">
        <Image
          src={BANNER_IMAGE}
          alt="Tim dan peternakan PT. Sekawan Pitu"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-black/55" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <span className="mb-4 block text-xs font-medium tracking-[0.2em] uppercase text-dark-amber font-[family-name:var(--font-dm-sans)]">
          Tentang Kami
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          PT. Sekawan Pitu
        </h1>
        <p className="mt-4 font-[family-name:var(--font-dm-sans)] font-light text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
          Dari kandang sehat di Sukabumi, kami membangun masa depan peternakan
          Indonesia yang berkelanjutan.
        </p>
      </motion.div>
    </section>
  );
}