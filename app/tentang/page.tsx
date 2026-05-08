import type { Metadata } from "next";
import { TentangBanner } from "./components/TentangBanner";
import { CompanyStorySection } from "./components/CompanyStorySection";
import { TimelineSection } from "./components/TimelineSection";
import { TeamSection } from "./components/TeamSection";
import { VisiMisiSection } from "./components/VisiMisiSection";

export const metadata: Metadata = {
  title: "Tentang Kami | PT. Sekawan Pitu",
  description:
    "Cerita di balik PT. Sekawan Pitu — perusahaan peternakan yang didirikan 2026 di Sukabumi untuk menghadirkan protein hewani segar dan berkualitas.",
  robots: { index: true, follow: true },
};

export default function TentangPage() {
  return (
    <>
      <TentangBanner />
      <CompanyStorySection />
      <TimelineSection />
      <TeamSection />
      <VisiMisiSection />
    </>
  );
}