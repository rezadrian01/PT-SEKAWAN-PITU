"use client";

import { MessageCircle } from "lucide-react";
import { WA_BASE } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-forest border-t border-white/10 safe-area-pb">
      <a
        href={WA_BASE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full px-6 py-4 bg-amber text-white font-[family-name:var(--font-dm-sans)] font-semibold text-sm hover:bg-amber/90 transition-colors"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Pesan via WhatsApp
      </a>
    </div>
  );
}