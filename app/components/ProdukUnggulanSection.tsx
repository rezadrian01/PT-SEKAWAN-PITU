"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data/products";

export function ProdukUnggulanSection() {
  return (
    <section className="py-24 bg-forest text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <SectionHeader
            label="Produk Kami"
            title="Langsung dari Kandang"
            subtitle="Segar, tanpa pengawet, dikirim langsung ke rumah Anda."
            titleClassName="text-white"
            subtitleClassName="!text-white/60"
            className="text-white"
          />
          <Link
            href="/belanja"
            className="shrink-0 inline-flex items-center gap-2 text-dark-amber font-[family-name:var(--font-dm-sans)] font-semibold hover:gap-3 transition-all"
          >
            Lihat semua produk
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 3).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}