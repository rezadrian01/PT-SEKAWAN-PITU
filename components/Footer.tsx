import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const FOOTER_LINKS = {
  navigasi: [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/belanja", label: "Belanja" },
    { href: "/galeri", label: "Galeri" },
    { href: "/faq", label: "FAQ" },
    { href: "/testimoni", label: "Testimoni" },
    { href: "/kontak", label: "Kontak" },
  ],
  produk: [
    { href: "/belanja?cat=Telur", label: "Telur" },
    { href: "/belanja?cat=Daging", label: "Daging" },
    { href: "/belanja?cat=Susu", label: "Susu" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-forest text-white/90">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold italic text-dark-amber">
              {COMPANY.name}
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] font-light text-white/70 leading-relaxed">
              {COMPANY.tagline}
            </p>

            {/* Social icons */}
            <div className="mt-2 flex items-center gap-3">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram PT. Sekawan Pitu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 transition-all hover:border-dark-amber hover:text-dark-amber hover:bg-dark-amber/10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={COMPANY.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok PT. Sekawan Pitu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 transition-all hover:border-dark-amber hover:text-dark-amber hover:bg-dark-amber/10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href={COMPANY.waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp PT. Sekawan Pitu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 transition-all hover:border-dark-amber hover:text-dark-amber hover:bg-dark-amber/10"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-widest text-dark-amber">
                Navigasi
              </h3>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.navigasi.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-[family-name:var(--font-dm-sans)] text-sm text-white/60 hover:text-dark-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-widest text-dark-amber">
                Produk
              </h3>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.produk.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-[family-name:var(--font-dm-sans)] text-sm text-white/60 hover:text-dark-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-widest text-dark-amber">
              Hubungi Kami
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-dark-amber" aria-hidden="true" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm text-white/60 leading-relaxed">
                  {COMPANY.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-dark-amber" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="font-[family-name:var(--font-dm-sans)] text-sm text-white/60 hover:text-dark-amber transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-dark-amber" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-[family-name:var(--font-dm-sans)] text-sm text-white/60 hover:text-dark-amber transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-white/40 text-center sm:text-left">
            &copy; 2026 {COMPANY.name}. {COMPANY.tagline}.
          </p>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-white/30">
            Jl. Sarasa No. 45 Babakan, Kota Sukabumi, Jawa Barat 43142
          </p>
        </div>
      </div>
    </footer>
  );
}