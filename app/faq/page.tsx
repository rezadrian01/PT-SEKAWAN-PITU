import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion } from "./components/FAQAccordion";
import { WhatsAppCTA } from "./components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "FAQ | PT. Sekawan Pitu",
  description:
    "Jawaban untuk pertanyaan umum tentang pemesanan, pengiriman, harga, dan kunjungan ke kandnag PT. Sekawan Pitu.",
  robots: { index: true, follow: true },
};

export default function FAQPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            subtitle="Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami."
            className="mb-0"
          />
        </div>
      </section>

      <FAQAccordion />
      <WhatsAppCTA />
    </>
  );
}