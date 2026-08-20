/** Secciones 4 — Casos de éxito con selector interactivo y preview visual del producto. */
import { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2, Wrench } from "lucide-react";
import { projects } from "./data";
import { MediCitasMockup, PinturasPosMockup } from "./project-mockups";
import { Reveal, RevealItem } from "./motion-primitives";

const previews = {
  citas: MediCitasMockup,
  pos: PinturasPosMockup,
} as const;

const captions: Record<keyof typeof previews, string> = {
  citas: "Recordatorio interactivo de citas y panel de control centralizado.",
  pos: "Cobro offline-first en mostrador con conversión automática de unidades.",
};

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active]!;
  const Preview = previews[project.preview];

  return (
    <section
      id="proyectos"
      className="bg-dots border-t border-border/70 bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust">
              Casos de éxito
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
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
              aria-pressed={i === active}
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
            <div className="precision-card h-full rounded-2xl p-6 sm:p-8">
              <dl className="space-y-6">
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <AlertTriangle className="size-4 text-rust" strokeWidth={1.75} />
                    El reto
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {project.challenge}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <Wrench className="size-4 text-primary" strokeWidth={1.75} />
                    La solución
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {project.solution}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary" strokeWidth={1.75} />
                    Impacto de negocio
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {project.impact}
                  </dd>
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
          <motion.div
            key={`preview-${project.name}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative min-w-0 lg:col-span-2"
          >
            <Preview />
            <p className="mt-3 text-xs text-muted-foreground">{captions[project.preview]}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
