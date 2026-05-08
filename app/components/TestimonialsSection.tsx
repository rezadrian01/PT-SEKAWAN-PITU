"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { StarRating } from "@/components/StarRating";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Testimoni"
          title="Apa Kata Pelanggan Kami?"
          subtitle="Ribuan keluarga di Jawa Barat sudah merasakan kualitas produk PT. Sekawan Pitu."
          className="mb-16"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full rounded-xl border-surface bg-card">
                <CardContent className="p-7 flex flex-col gap-5">
                  <StarRating rating={t.rating} />
                  <blockquote className="font-[family-name:var(--font-dm-sans)] font-light text-warm-black/80 italic leading-relaxed text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-2 border-t border-surface">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white font-[family-name:var(--font-playfair)] font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-dm-sans)] font-medium text-warm-black text-sm">
                        {t.name}
                      </p>
                      <p className="font-[family-name:var(--font-dm-sans)] text-xs text-muted-foreground">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/testimoni"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-semibold text-forest hover:gap-3 transition-all"
          >
            Lihat semua testimoni
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}