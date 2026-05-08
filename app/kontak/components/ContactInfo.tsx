"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="bg-forest text-white rounded-2xl p-8 lg:p-10 flex flex-col gap-8 h-full">
      <div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold italic text-dark-amber mb-2">
          {COMPANY.name}
        </h3>
        <p className="font-[family-name:var(--font-dm-sans)] font-light text-white/65 text-sm leading-relaxed">
          {COMPANY.tagline}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <MapPin size={18} className="mt-0.5 shrink-0 text-dark-amber" aria-hidden="true" />
          <span className="font-[family-name:var(--font-dm-sans)] text-sm text-white/70 leading-relaxed">
            {COMPANY.address}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Phone size={18} className="shrink-0 text-dark-amber" aria-hidden="true" />
          <a
            href={`tel:${COMPANY.phone}`}
            className="font-[family-name:var(--font-dm-sans)] text-sm text-white/70 hover:text-dark-amber transition-colors"
          >
            {COMPANY.phone}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={18} className="shrink-0 text-dark-amber" aria-hidden="true" />
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-[family-name:var(--font-dm-sans)] text-sm text-white/70 hover:text-dark-amber transition-colors"
          >
            {COMPANY.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Clock size={18} className="shrink-0 text-dark-amber" aria-hidden="true" />
          <span className="font-[family-name:var(--font-dm-sans)] text-sm text-white/70">
            Senin - Sabtu: 07.00 - 17.00 WIB
          </span>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="relative h-48 rounded-xl overflow-hidden bg-forest/50 border border-white/10">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <MapPin size={32} className="text-dark-amber/60" aria-hidden="true" />
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-white/40 text-center px-4">
            Jl. Sarasa No. 45 Babakan, Kec. Cibeureum, Kota Sukabumi
          </p>
        </div>
      </div>
    </div>
  );
}