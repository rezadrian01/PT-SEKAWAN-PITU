"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function ReviewGrid() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full rounded-xl border-surface bg-card">
                <CardContent className="p-7 flex flex-col gap-5">
                  <StarRating rating={t.rating} />
                  <blockquote className="font-[family-name:var(--font-dm-sans)] font-light text-warm-black/80 italic leading-relaxed text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-3 border-t border-surface">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white font-[family-name:var(--font-playfair)] font-bold">
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
      </div>
    </section>
  );
}