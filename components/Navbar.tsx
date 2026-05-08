"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/belanja", label: "Belanja" },
  { href: "/galeri", label: "Galeri" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 border-b border-surface backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-forest hover:text-forest/80 transition-colors"
        >
          {COMPANY.name}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium font-[family-name:var(--font-dm-sans)] rounded-md transition-colors ${
                    isActive
                      ? "text-amber"
                      : "text-warm-black/70 hover:text-warm-black"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={COMPANY.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-amber text-white text-sm font-semibold font-[family-name:var(--font-dm-sans)] rounded-none border-2 border-amber hover:bg-amber/90 transition-colors"
        >
          Pesan Sekarang
        </a>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Buka menu"
              className="lg:hidden p-2 text-warm-black hover:text-forest transition-colors"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-cream p-0 flex flex-col">
            <div className="flex items-center justify-between border-b border-surface px-6 py-5">
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-forest">
                {COMPANY.name}
              </span>
              <button
                aria-label="Tutup menu"
                onClick={() => setOpen(false)}
                className="p-1 text-warm-black/70 hover:text-warm-black"
              >
                <X size={20} />
              </button>
            </div>
            <ul className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-3 text-sm font-medium font-[family-name:var(--font-dm-sans)] rounded-md transition-colors ${
                        isActive
                          ? "text-amber bg-amber/10"
                          : "text-warm-black/70 hover:text-warm-black hover:bg-surface"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto border-t border-surface p-6">
              <a
                href={COMPANY.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-amber text-white text-sm font-semibold font-[family-name:var(--font-dm-sans)] border-2 border-amber hover:bg-amber/90 transition-colors"
              >
                Pesan Sekarang
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}