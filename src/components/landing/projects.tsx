/** Secciones 4 — Casos de éxito con selector interactivo y preview visual del producto. */
import { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2, Wrench } from "lucide-react";
import showcaseImage from "@/assets/showcase-pos.jpg";
import { projects } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active]!;

  return (
    <section id="proyectos" className="relative border-t border-border py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 ambient-glow" />
      <div className="relative mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Casos de éxito
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-titanium mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Sistemas que ya operan todos los días
            </h2>
          </RevealItem>
        </Reveal>

        {/* Selector de proyecto */}
        <div className="mt-10 flex flex-col gap-2 sm:flex-row">
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setActive(i)}
              className={`min-h-12 flex-1 rounded-xl border px-4 text-left transition-colors duration-200 ease-out sm:px-5 ${
                i === active
                  ? "border-primary/40 bg-primary/10 shadow-[var(--shadow-emerald)]"
                  : "border-border bg-card/40 backdrop-blur-xl hover:bg-card/70"
              }`}
            >
              <span className="block text-sm font-bold tracking-tight">{p.name}</span>
              <span className="block text-xs text-muted-foreground">{p.kicker}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-w-0 lg:col-span-3"
          >
            <div className="surface-card h-full rounded-2xl p-6 sm:p-8">
              <dl className="space-y-6">
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <AlertTriangle className="size-4 text-accent" strokeWidth={1.75} />
                    El reto
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{project.challenge}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <Wrench className="size-4 text-primary" strokeWidth={1.75} />
                    La solución
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{project.solution}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary" strokeWidth={1.75} />
                    Impacto de negocio
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{project.impact}</dd>
                </div>
              </dl>
              <ul className="mt-7 flex flex-wrap gap-2 border-t border-border/70 pt-6">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Preview visual del producto */}
          <div className="min-w-0 lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <img
                src={showcaseImage}
                alt="Punto de venta en tablet y recordatorios de citas por WhatsApp"
                loading="lazy"
                width={1200}
                height={912}
                className="block h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Interfaces reales en operación: cobro offline-first en mostrador y recordatorios
              automáticos de citas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}