"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=80";

const STATS = [
  { value: "2026", label: "Berdiri" },
  { value: "8+", label: "Produk Segar" },
  { value: "32+", label: "Pelanggan Puas" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Peternakan PT. Sekawan Pitu di Sukabumi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-warm-black/60" />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block text-xs font-medium tracking-[0.2em] uppercase text-dark-amber font-[family-name:var(--font-dm-sans)]"
          >
            Peternakan Sehat Indonesia
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] text-white"
          >
            Dari Kandang Sehat,
            <br />
            <span className="text-dark-amber">Untuk Keluarga Kuat</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 font-[family-name:var(--font-dm-sans)] font-light text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl"
          >
            Telur, daging, dan susu segar langsung dari kandnag kami di
            Sukabumi. Tanpa pengawet, tanpa hormon — hanya protein hewani
            berkualitas untuk keluarga Anda.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/belanja"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber text-white text-base font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-amber hover:bg-amber/90 transition-colors"
            >
              Belanja Sekarang
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-base font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-white/60 hover:border-white transition-colors"
            >
              Tentang Kami
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-14 flex flex-wrap gap-6"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2.5 border border-white/20"
              >
                <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-dark-amber">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-sm text-white/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}