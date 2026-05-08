import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { RatingSummary } from "./components/RatingSummary";
import { ReviewGrid } from "./components/ReviewGrid";
import { ReviewCTA } from "./components/ReviewCTA";

export const metadata: Metadata = {
  title: "Testimoni | PT. Sekawan Pitu",
  description:
    "Ulasan dan testimoni pelanggan PT. Sekawan Pitu dari Sukabumi dan sekitarnya.",
  robots: { index: true, follow: true },
};

export default function TestimoniPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Testimoni"
            title="Apa Kata Mereka Tentang Kami"
            subtitle="Cerita dari pelanggan yang telah merasakan kualitas produk PT. Sekawan Pitu."
            className="mb-0"
          />
        </div>
      </section>

      <RatingSummary />
      <ReviewGrid />
      <ReviewCTA />
    </>
  );
}