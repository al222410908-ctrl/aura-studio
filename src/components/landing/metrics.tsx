/** Sección 2 — Prueba social: métricas del taller + stack tecnológico. */
import { metrics, techLogos } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";
import { CornerMarks } from "./corner-marks";

export function Metrics() {
  return (
    <section className="border-y border-border/70 bg-surface/40 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {metrics.map((m) => (
            <RevealItem key={m.label} className="relative min-w-0 pl-3">
              <span aria-hidden className="absolute left-0 top-1 h-8 w-px bg-rust/60" />
              <p className="font-stencil text-3xl font-extrabold tracking-tight text-rust sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">{m.label}</p>
              <p className="mt-1 text-xs text-foreground/65">{m.detail}</p>
            </RevealItem>
          ))}
        </Reveal>

        <div className="relative mt-12 rounded-2xl border border-rust/15 bg-background/40 p-6 backdrop-blur-xl">
          <CornerMarks size={12} inset={-7} />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust/90">
            Stack tecnológico general
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {techLogos.map((tech) => (
              <li key={tech} className="text-sm font-semibold tracking-tight text-foreground/75">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}