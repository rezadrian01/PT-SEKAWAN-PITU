export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-001",
    name: "Ibu Ratna",
    location: "Sukabumi Kota",
    rating: 5,
    quote:
      "Telur ayam kampungnya segar banget! Dimasak jadi telur balado anak-anak suka banget. Pengirimannya juga cepat dan tepat waktu.",
  },
  {
    id: "t-002",
    name: "Pak Hendra",
    location: "Cianjur",
    rating: 5,
    quote:
      "Daging sapinya empuk dan fresh. Saya biasa beli untuk restoran kecil saya. Harganya bersaing dan kualitasnya konsisten.",
  },
  {
    id: "t-003",
    name: "Ibu Dewi",
    location: "Bogor",
    rating: 5,
    quote:
      "Susu sapinya murni dan segar. Anak saya yang tadinya tidak suka susu, sekarang minta setiap hari. Terima kasih PT Sekawan Pitu!",
  },
  {
    id: "t-004",
    name: "Pak Asep",
    location: "Garut",
    rating: 4,
    quote:
      "Belanja via WhatsApp sangat praktis. Responnya cepat, packingannya rapih. Saya sudah langganan 3 bulan ini.",
  },
  {
    id: "t-005",
    name: "Ibu Maria",
    location: "Bandung",
    rating: 5,
    quote:
      "Telur itiknya besar-besar dan kuningnya orange tua. Cocok untuk bikin kue nastar. Recommended banget!",
  },
  {
    id: "t-006",
    name: "Pak Dedi",
    location: "Subang",
    rating: 5,
    quote:
      "Daging ayamnya tidak pernah mengecewakan. Selalu fresh dan bersih. Harga dari kandang, jelas lebih murah.",
  },
];