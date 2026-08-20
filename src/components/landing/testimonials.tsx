/** Sección — Testimonios: prueba social de clientes en producción. */
import { Quote } from "lucide-react";
import { testimonials } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-glow-cold py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust">
              Testimonios
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Lo que dicen quienes ya operan con nosotros
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.client} className="min-w-0">
              <figure className="surface-card flex h-full flex-col rounded-2xl p-6 sm:p-7">
                <Quote className="size-6 text-rust/70" strokeWidth={1.5} aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border/70 pt-4">
                  <p className="text-sm font-bold tracking-tight">{t.client}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
                  <span className="mt-2 inline-flex rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {t.project}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
