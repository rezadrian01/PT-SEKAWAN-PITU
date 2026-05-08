"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1773415961612-4aae00457cd8?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Area utama peternakan PT. Sekawan Pitu",
    caption: "Area Utama Kandang",
  },
  {
    src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
    alt: "Kandang ayam kampung free-range",
    caption: "Kandang Ayam Kampung",
  },
  {
    src: "https://images.unsplash.com/photo-1477506410535-f12fe9af97cc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Proses panen telur segar",
    caption: "Proses Panen Telur",
  },
  {
    src: "https://images.unsplash.com/photo-1573731281021-d1cc573b3310?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Peternakan sapi dan kambing di Sukabumi",
    caption: "Peternakan Sapi & Kambing",
  },
  {
    src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
    alt: "Pengelolaan limbah organik di peternakan",
    caption: "Pengelolaan Limbah Organik",
  },
  {
    src: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
    alt: "Proses pemerahan susu sapi segar",
    caption: "Proses Pemerahan Susu",
  },
  {
    src: "https://images.unsplash.com/photo-1528458538087-f58e9ad895da?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Packing dan pengiriman produk segar",
    caption: "Packing & Pengiriman",
  },
  {
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
    alt: "Tim PT. Sekawan Pitu di lapangan",
    caption: "Tim di Lapangan",
  },
];

export function GalleryGrid() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}