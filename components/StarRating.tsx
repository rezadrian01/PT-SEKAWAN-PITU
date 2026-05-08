"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={cn(
            i < rating
              ? "fill-amber text-amber"
              : "fill-surface text-muted-foreground/40"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}