"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80";

export function CompanyStorySection() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Cerita Kami"
              title="Berawal dari Kandnag Kecil di Sukabumi"
              subtitle="PT. Sekawan Pitu didirikan pada tahun 2026 dengan satu misi: menghadirkan protein hewani segar dan sehat langsung dari kandnag ke meja makan keluarga Indonesia."
              className="mb-8"
            />
            <div className="space-y-5">
              {[
                "Bermula dari kepedulian terhadap kualitas pangan, pendiri kami melihat kesempatan besar untuk menghubungkan peternak lokal dengan keluarga yang membutuhkan produk segar.",
                "Kami membangun sistem peternakan yang mengutamakan kesejahteraan hewan, hygiene kandnag, dan rantai pasok yang efisien.",
                "Hari ini, PT. Sekawan Pitu melayani ratusan keluarga di Jawa Barat dengan telur, daging, dan susu segar berkualitas.",
              ].map((paragraph, i) => (
                <p
                  key={i}
                  className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={STORY_IMAGE}
                alt="Tim dan fasilitas PT. Sekawan Pitu di Sukabumi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Amber accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}