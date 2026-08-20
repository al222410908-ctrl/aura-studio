/** Secciones 4 — Casos de éxito con selector interactivo y preview visual del producto. */
import { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2, Wrench } from "lucide-react";
import showcaseImage from "@/assets/showcase-pos.jpg";
import { projects } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";
import { CornerMarks } from "./corner-marks";

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active]!;

  return (
    <section id="proyectos" className="border-t border-border/70 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust">
              Casos de éxito
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 font-stencil text-3xl font-extrabold uppercase tracking-tight text-balance sm:text-5xl">
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
                  ? "border-rust/45 bg-rust/10"
                  : "border-border/80 bg-steel/60 hover:border-rust/30 hover:bg-steel"
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
            className="relative min-w-0 lg:col-span-3"
          >
            <CornerMarks size={16} inset={-9} mixed />
            <div className="precision-card h-full rounded-2xl p-6 sm:p-8">
              <dl className="space-y-6">
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <AlertTriangle className="size-4 text-rust" strokeWidth={1.75} />
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
                    className="rounded-md border border-border/80 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Preview visual del producto */}
          <div className="relative min-w-0 lg:col-span-2">
            <CornerMarks size={16} inset={-9} />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[var(--shadow-soft)]">
              <img
                src={showcaseImage}
                alt="Punto de venta en tablet y recordatorios de citas por WhatsApp"
                loading="lazy"
                width={1200}
                height={912}
                className="block h-full w-full object-cover"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 forge-light mix-blend-screen" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-8 w-28 bg-rust/25 blur-3xl mix-blend-screen"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -right-8 w-24 bg-primary/20 blur-3xl mix-blend-screen"
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