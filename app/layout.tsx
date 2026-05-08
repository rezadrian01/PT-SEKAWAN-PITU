import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PT. Sekawan Pitu — Protein Hewani Segar dari Kandang",
    template: "%s | PT. Sekawan Pitu",
  },
  description:
    "Dari Kandang Sehat, Untuk Keluarga Kuat. Telur, daging, dan susu segar langsung dari kandang sehat di Sukabumi, Jawa Barat.",
  openGraph: {
    siteName: "PT. Sekawan Pitu",
    locale: "id_ID",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}