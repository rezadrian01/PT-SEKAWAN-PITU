export interface Product {
  id: string;
  name: string;
  category: "Telur" | "Daging" | "Susu";
  description: string;
  unit: string;
  imageUrl: string;
  imageAlt: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "telur-ayam-kampung",
    name: "Telur Ayam Kampung",
    category: "Telur",
    description: "Telur ayam kampung dari ayam free-range, tanpa tambahan hormon, rasa gurih alami. Langsung dari peternak lokal untuk menjamin kesegaran.",
    unit: "per butir / per karpet (30 butir)",
    imageUrl: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&q=80",
    imageAlt: "Telur ayam kampung segar di atas nampan",
  },
  {
    id: "telur-itik",
    name: "Telur Itik",
    category: "Telur",
    description: "Telur itik dari bebek free-range, protein lebih tinggi, kuning telur berwarna oranye tua. Cocok untuk berbagai cara memasak.",
    unit: "per butir / per karpet (25 butir)",
    imageUrl: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&q=80",
    imageAlt: "Telur itik segar berwarna coklat natural",
  },
  {
    id: "telur-puyuh",
    name: "Telur Puyuh",
    category: "Telur",
    description: "Telur puyuh kecil dan kaya nutrisi, cocok sebagai bahan pelengkap berbagai masakan. Langsung dari peternakan untuk kesegaran optimal.",
    unit: "per butir / per tray (40 butir)",
    imageUrl: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&q=80",
    imageAlt: "Telur puyuh dalam tray di atas meja kayu",
  },
  {
    id: "daging-sapi",
    name: "Daging Sapi",
    category: "Daging",
    description: "Daging sapi pilihan, tekstur empuk dan juicy, tanpa tambahan hormon. Berasal dari sapi lokal yang dipelihara dengan standar kesehatan tinggi.",
    unit: "per kg",
    imageUrl: "https://images.unsplash.com/photo-1606677661991-446cea8ee182?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Daging sapi segar tanpa tulang di atas piring",
  },
  {
    id: "daging-ayam",
    name: "Daging Ayam",
    category: "Daging",
    description: "Daging ayam tanpa tulang, tekstur lembut dan segar, kaya protein. Langsung dari peternakan untuk menjamin kualitas dan kesegaran.",
    unit: "per kg",
    imageUrl: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Daging ayam segar tanpa kulit di atas piring",
  },
  {
    id: "daging-kambing",
    name: "Daging Kambing/Domba",
    category: "Daging",
    description: "Daging kambing dan domba kaya protein, rendah lemak, tanpa hormon. Pilihan daging sehat untuk keluarga.",
    unit: "per kg",
    imageUrl: "https://images.unsplash.com/photo-1695683948382-868cd8d516fe?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Daging kambing segar dengan tekstur tanpa lemak",
  },
  {
    id: "susu-sapi",
    name: "Susu Sapi Murni",
    category: "Susu",
    description: "Susu sapi murni tanpa pengawet dan tambahan bahan kimia. Langsung dari peternakan, kaya kalsium dan protein berkualitas tinggi.",
    unit: "per liter",
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
    imageAlt: "Botol susu sapi murni berwarna putih kental",
  },
  {
    id: "susu-kambing",
    name: "Susu Kambing Murni",
    category: "Susu",
    description: "Susu kambing murni kaya nutrisi, mudah dicerna, tanpa tambahan bahan kimia. Langsung dari peternakan lokal untuk kesegaran terbaik.",
    unit: "per liter",
    imageUrl: "https://images.unsplash.com/photo-1639151082235-406d8eb262b9?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Botol susu kambing murni dalam wadah kayu",
  },
];
