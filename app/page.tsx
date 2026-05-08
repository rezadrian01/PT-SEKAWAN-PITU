import type { Metadata } from "next";
import { HeroSection } from "./components/HeroSection";
import { NilaiKamiSection } from "./components/NilaiKamiSection";
import { ProdukUnggulanSection } from "./components/ProdukUnggulanSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { VisiMisiSection } from "./components/VisiMisiSection";
import { CtaSection } from "./components/CtaSection";

export const metadata: Metadata = {
  title: "PT. Sekawan Pitu — Protein Hewani Segar dari Kandang",
  description:
    "Dari Kandang Sehat, Untuk Keluarga Kuat. Telur, daging, dan susu segar langsung dari kandang sehat di Sukabumi, Jawa Barat.",
  robots: { index: true, follow: true },
};

export default function BerandaPage() {
  return (
    <>
      <HeroSection />
      <NilaiKamiSection />
      <ProdukUnggulanSection />
      <TestimonialsSection />
      <VisiMisiSection />
      <CtaSection />
    </>
  );
}