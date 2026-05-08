"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { buildContactMessage } from "@/lib/constants";

const TOPICS = ["Pemesanan", "Kerjasama / Grosir", "Kunjungan Kandang", "Lainnya"];

interface FormState {
  name: string;
  email: string;
  whatsapp: string;
  topic: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = buildContactMessage(form);
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center gap-4 py-12"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-black mb-1">
            Pesan Anda telah terkirim!
          </h3>
          <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-sm">
            Tim kami akan segera merespons pesan Anda via WhatsApp.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-warm-black">
          Nama Lengkap *
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Masukkan nama lengkap Anda"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="rounded-none border-surface bg-card font-[family-name:var(--font-dm-sans)] text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-warm-black">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="email@contoh.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="rounded-none border-surface bg-card font-[family-name:var(--font-dm-sans)] text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="whatsapp" className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-warm-black">
          Nomor WhatsApp *
        </Label>
        <Input
          id="whatsapp"
          type="tel"
          placeholder="08xxxxxxxxxx"
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          required
          className="rounded-none border-surface bg-card font-[family-name:var(--font-dm-sans)] text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="topic" className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-warm-black">
          Topik *
        </Label>
        <Select
          value={form.topic}
          onValueChange={(val) => setForm({ ...form, topic: val })}
          required
        >
          <SelectTrigger id="topic" className="rounded-none border-surface bg-card font-[family-name:var(--font-dm-sans)] text-sm">
            <SelectValue placeholder="Pilih topik pesan" />
          </SelectTrigger>
          <SelectContent>
            {TOPICS.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-warm-black">
          Pesan *
        </Label>
        <Textarea
          id="message"
          placeholder="Tulis pesan atau pertanyaan Anda di sini..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          className="rounded-none border-surface bg-card font-[family-name:var(--font-dm-sans)] text-sm resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-none bg-amber text-white font-[family-name:var(--font-dm-sans)] font-semibold border-2 border-amber hover:bg-amber/90 transition-colors py-3 mt-1"
      >
        Kirim via WhatsApp
      </Button>
    </form>
  );
}