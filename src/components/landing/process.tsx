/** Sección — Proceso: cómo trabajamos en 4 pasos. */
import { FileText, Layers, Rocket, Search } from "lucide-react";
import { process, type Step } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";

const icons = {
  search: Search,
  file: FileText,
  layers: Layers,
  rocket: Rocket,
} as const;

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = icons[step.icon];
  return (
    <RevealItem className="min-w-0">
      <div className="relative h-full rounded-2xl border border-border/80 bg-steel/60 p-6 transition-colors duration-300 ease-out hover:border-rust/40">
        <span className="absolute right-5 top-4 text-3xl font-extrabold text-rust/25">
          0{index + 1}
        </span>
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-lg font-bold tracking-tight">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">{step.description}</p>
      </div>
    </RevealItem>
  );
}

export function Process() {
  return (
    <section
      id="proceso"
      className="bg-stripes border-t border-border/70 bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Reveal className="min-w-0">
            <RevealItem>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Cómo trabajamos
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Sin sorpresas: proceso claro de inicio a fin
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Trabajo por entregas parciales para que valides cada avance y tengas certeza del
                resultado antes de terminar.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
            {process.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
