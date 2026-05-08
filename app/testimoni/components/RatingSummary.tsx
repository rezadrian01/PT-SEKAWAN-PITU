"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function RatingSummary() {
  const avgRating = (
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  return (
    <section className="py-16 bg-forest">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-5"
        >
          {/* Rating number */}
          <div className="flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-playfair)] text-7xl font-bold text-dark-amber">
              {avgRating}
            </span>
            <span className="font-[family-name:var(--font-dm-sans)] text-white/50 text-lg">
              / 5
            </span>
          </div>

          {/* Stars */}
          <div className="flex gap-1" aria-label={`${avgRating} dari 5 bintang`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={24}
                className={
                  i < Math.round(Number(avgRating))
                    ? "fill-dark-amber text-dark-amber"
                    : "fill-white/20 text-white/20"
                }
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Total count */}
          <p className="font-[family-name:var(--font-dm-sans)] text-white/60 text-sm">
            Berdasarkan{" "}
            <span className="font-semibold text-white">{TESTIMONIALS.length}</span>{" "}
            ulasan pelanggan
          </p>
        </motion.div>
      </div>
    </section>
  );
}