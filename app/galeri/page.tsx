import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryGrid } from "./components/GalleryGrid";
import { SocialCTA } from "./components/SocialCTA";

export const metadata: Metadata = {
  title: "Galeri | PT. Sekawan Pitu",
  description:
    "Lihat langsung kondisi kandnag, hewan ternak, dan proses produksi PT. Sekawan Pitu di Sukabumi.",
  robots: { index: true, follow: true },
};

export default function GaleriPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Galeri"
            title="Lihat Langsung dari Kandang Kami"
            subtitle="Dokumentasi kegiatan peternakan, proses produksi, dan tim PT. Sekawan Pitu."
            className="mb-0"
          />
        </div>
      </section>

      <GalleryGrid />
      <SocialCTA />
    </>
  );
}