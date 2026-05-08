"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { WA_BASE } from "@/lib/constants";

export function WhatsAppFloat() {
  const pathname = usePathname();

  // Hide on /belanja (mobile sticky bar handles it there)
  if (pathname === "/belanja") return null;

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .wa-float-btn {
          animation: wa-pulse 2s ease-in-out infinite;
        }
      `}</style>
      <a
        href={WA_BASE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="wa-float-btn fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-lg transition-colors hover:bg-forest/90"
      >
        <MessageCircle size={26} fill="currentColor" aria-hidden="true" />
      </a>
    </>
  );
}