"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/data/faq";

export function FAQAccordion() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-surface last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left font-[family-name:var(--font-playfair)] text-base sm:text-lg font-bold text-warm-black hover:text-amber transition-colors group-data-[state=open]:text-amber [&>svg]:text-amber [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:group-data-[state=open]:rotate-180">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}