"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1569858241634-5aee6e47091a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// "https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=80";

const STATS = [
  { value: "2026", label: "Berdiri" },
  { value: "8+", label: "Produk Segar" },
  { value: "32+", label: "Pelanggan Puas" },
];

const TRUST_BADGES = [
  {
    icon: Leaf,
    title: "Free-Range",
    description: "Ayam dan hewan ternak dipelihara secara bebas, tanpa hormon.",
  },
  {
    icon: ShieldCheck,
    title: "Tanpa Pengawet",
    description: "Produk segar langsung dari kandnag, tanpa bahan kimia.",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Pesanan di hari yang sama untuk area Sukabumi dan sekitarnya.",
  },
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
        <div className="absolute inset-0 bg-warm-black/60" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />
      </div>

      {/* Hero content — two column layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="lg:col-span-2"
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

          {/* Right: Trust badges panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-5 lg:col-span-1"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-dark-amber font-[family-name:var(--font-dm-sans)]">
              Mengapa Memilih Kami
            </p>

            <div className="flex flex-col gap-4">
              {TRUST_BADGES.map((badge, i) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dark-amber/20 border border-dark-amber/30">
                    <badge.icon size={20} className="text-dark-amber" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-base font-bold text-white leading-tight">
                      {badge.title}
                    </p>
                    <p className="font-[family-name:var(--font-dm-sans)] font-light text-white/60 text-sm leading-relaxed mt-1">
                      {badge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider with label */}
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-xs text-white/40 font-[family-name:var(--font-dm-sans)]">
                2026 · Sukabumi, Jawa Barat
              </span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}