import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactInfo } from "./components/ContactInfo";
import { ContactForm } from "./components/ContactForm";
import { WA_BASE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontak | PT. Sekawan Pitu",
  description:
    "Hubungi PT. Sekawan Pitu untuk pemesanan, kunjungan kandnag, atau pertanyaan tentang produk peternakan kami.",
  robots: { index: true, follow: true },
};

export default function KontakPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Kontak"
            title="Hubungi Kami"
            subtitle="Kami siap membantu Anda. Hubungi tim kami via WhatsApp atau isi formulir di bawah."
            className="mb-0"
          />
        </div>
      </section>

      {/* Two-column contact section */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact info */}
            <ContactInfo />

            {/* Right: Form */}
            <div className="bg-card rounded-2xl border border-surface p-8 lg:p-10">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-black mb-6">
                Kirim Pesan
              </h3>
              <ContactForm />

              {/* Bottom note */}
              <p className="mt-5 text-center font-[family-name:var(--font-dm-sans)] text-xs text-muted-foreground">
                Atau hubungi kami langsung via{" "}
                <a
                  href={WA_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:underline font-medium"
                >
                  WhatsApp
                </a>{" "}
                untuk respons lebih cepat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}