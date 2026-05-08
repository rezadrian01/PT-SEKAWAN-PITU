export const COMPANY = {
  name: "PT. Sekawan Pitu",
  tagline: "Dari Kandang Sehat, Untuk Keluarga Kuat",
  address:
    "Jl. Sarasa No. 45 Babakan, Kec. Cibeureum, Kota Sukabumi, Jawa Barat 43142",
  phone: "0857-2088-7079",
  waLink: "https://wa.me/6285720887079",
  email: "ptsekawanpitu@gmail.com",
  instagram: "https://www.instagram.com/pt.sekawanpitu",
  tiktok: "https://www.tiktok.com/@pt.sekawan.pitu",
} as const;

export const WA_BASE = "https://wa.me/6285720887079";

export function buildWaMessage(productName: string): string {
  const text = encodeURIComponent(
    `Halo PT. Sekawan Pitu, saya ingin memesan ${productName}`
  );
  return `${WA_BASE}?text=${text}`;
}

export function buildContactMessage(params: {
  name: string;
  email: string;
  whatsapp: string;
  topic: string;
  message: string;
}): string {
  const text = encodeURIComponent(
    [
      `Halo PT. Sekawan Pitu,`,
      ``,
      `Nama: ${params.name}`,
      `Email: ${params.email}`,
      `No. WhatsApp: ${params.whatsapp}`,
      `Topik: ${params.topic}`,
      ``,
      `Pesan:`,
      params.message,
    ].join("\n")
  );
  return `${WA_BASE}?text=${text}`;
}