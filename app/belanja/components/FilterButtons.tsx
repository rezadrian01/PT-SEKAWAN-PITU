"use client";

import { cn } from "@/lib/utils";

type Category = "Semua" | "Telur" | "Daging" | "Susu";

const CATEGORIES: Category[] = ["Semua", "Telur", "Daging", "Susu"];

interface FilterButtonsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function FilterButtons({ activeCategory, onCategoryChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filter produk berdasarkan kategori">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          aria-pressed={activeCategory === cat}
          className={cn(
            "px-5 py-2.5 text-sm font-semibold font-[family-name:var(--font-dm-sans)] border-2 transition-all rounded-none",
            activeCategory === cat
              ? "bg-amber border-amber text-white"
              : "bg-transparent border-surface text-warm-black/70 hover:border-amber/50 hover:text-warm-black"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export type { Category };