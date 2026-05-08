"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buildWaMessage } from "@/lib/constants";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const waLink = buildWaMessage(product.name);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group overflow-hidden rounded-xl border-surface bg-card transition-colors hover:border-amber/30">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute left-3 top-3">
            <Badge
              variant="secondary"
              className="bg-forest/90 text-white/90 text-xs font-semibold font-[family-name:var(--font-dm-sans)] border-0 px-2.5 py-1"
            >
              {product.category}
            </Badge>
          </div>
        </div>

        <CardContent className="flex flex-col gap-3 p-5">
          {/* Product name */}
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-black leading-tight">
            {product.name}
          </h3>

          {/* Description */}
          <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Unit */}
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-muted-foreground/60">
            Satuan: {product.unit}
          </p>

          {/* CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-3 bg-amber text-white text-sm font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-amber hover:bg-amber/90 transition-colors"
          >
            <ShoppingBag size={16} aria-hidden="true" />
            Pesan via WhatsApp
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}