import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductGrid } from "./components/ProductGrid";
import { OrderingGuide } from "./components/OrderingGuide";
import { MobileStickyBar } from "./components/MobileStickyBar";

export const metadata: Metadata = {
  title: "Belanja Telur, Daging & Susu Segar | PT. Sekawan Pitu",
  description:
    "Pesan telur, daging, dan susu segar langsung via WhatsApp. Pengiriman dari kandang di Sukabumi, Jawa Barat. Fresen tanpa pengawet.",
  robots: { index: true, follow: true },
};

export default function BelanjaPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Belanja"
            title="Belanja Aman, Nyaman, dan Terpercaya"
            subtitle="Telur, daging, dan susu segar langsung dari kandang. Pesan via WhatsApp, terima di hari yang sama."
            className="mb-6"
          />
        </div>
      </section>

      {/* 4-step ordering guide */}
      <OrderingGuide />

      {/* Product grid with filter */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <ProductGrid />
        </div>
      </section>

      {/* Mobile sticky bar */}
      {/* <MobileStickyBar /> */}
    </>
  );
}