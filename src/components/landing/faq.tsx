/** Sección 6 — Preguntas frecuentes en accordion. */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { brand, faqs } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-glow-emerald border-t border-border/70 bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Reveal className="min-w-0">
            <RevealItem>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Preguntas frecuentes
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Lo que preguntan antes de arrancar
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                ¿Falta algo por resolver? Escríbeme por WhatsApp al {brand.whatsapp} y lo aclaramos
                el mismo día.
              </p>
            </RevealItem>
          </Reveal>

          <div className="min-w-0 lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border/70">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold tracking-tight hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
