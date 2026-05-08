"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCard } from "@/components/ProductCard";
import { FilterButtons, type Category } from "./FilterButtons";
import { PRODUCTS } from "@/lib/data/products";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (category: Category) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsLoading(false);
    }, 150);
  };

  const filtered =
    activeCategory === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-8">
      {/* Filter row */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <p className="font-[family-name:var(--font-dm-sans)] text-sm text-muted-foreground">
          Menampilkan{" "}
          <span className="font-semibold text-warm-black">{filtered.length}</span>{" "}
          produk
          {activeCategory !== "Semua" && (
            <span>
              {" "}dalam kategori{" "}
              <span className="font-semibold text-amber">{activeCategory}</span>
            </span>
          )}
        </p>
        <FilterButtons
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}