/** Secciones 4 — Casos de éxito con selector, modo foco y preview del producto. */
import { useState, type KeyboardEvent } from "react";
import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2, Maximize2, Minimize2, Wrench } from "lucide-react";
import { projects } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";

const previewImages = {
  citas: "/pantalla-citas.png",
  pos: "/pantalla-pinturas.png",
} as const;

const captions: Record<keyof typeof previewImages, string> = {
  citas: "Recordatorio interactivo de citas y panel de control centralizado.",
  pos: "Cobro offline-first en mostrador con conversión automática de unidades.",
};

type Focus = "text" | "image";

function ScreenshotFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-2 border-b border-border/70 bg-steel px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-rust/50" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-primary/60" />
        </span>
        <span className="ml-3 truncate rounded-md bg-background/60 px-2 py-1 text-[10px] text-muted-foreground">
          app.avtechsolutions.mx
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" width={1842} height={800} className="block w-full" />
    </div>
  );
}

function FocusBadge({ focused }: { focused: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors duration-200 ease-out ${
        focused
          ? "border-primary/40 bg-primary/15 text-primary"
          : "border-border bg-steel/60 text-foreground/70"
      }`}
    >
      {focused ? <Minimize2 className="size-3" /> : <Maximize2 className="size-3" />}
      {focused ? "Expandido" : "Expandir"}
    </span>
  );
}

export function Projects() {
  const [active, setActive] = useState(0);
  const [focus, setFocus] = useState<Focus | null>(null);
  const project = projects[active]!;
  const previewSrc = previewImages[project.preview];

  const toggleFocus = (panel: Focus) => {
    setFocus((current) => (current === panel ? null : panel));
  };

  const onKeyDown = (panel: Focus) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFocus(panel);
    }
  };

  const textFlex = focus === "image" ? 1 : focus === "text" ? 4 : 3;
  const imageFlex = focus === "image" ? 4 : focus === "text" ? 1 : 2;

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
              onClick={() => {
                setActive(i);
                setFocus(null);
              }}
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
        <p className="mt-4 text-xs text-muted-foreground">
          Haz clic en la <b className="text-foreground/80">descripción</b> o en la{" "}
          <b className="text-foreground/80">imagen</b> para expandirlos; vuelve a hacer clic para
          restablecer.
        </p>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          {/* Panel de texto */}
          <motion.div
            key={`text-${project.name}`}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ flex: textFlex }}
            role="button"
            tabIndex={0}
            aria-pressed={focus === "text"}
            onClick={() => toggleFocus("text")}
            onKeyDown={onKeyDown("text")}
            className="min-w-0 cursor-pointer"
          >
            <div className="precision-card h-full rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Ficha del caso
                </p>
                <FocusBadge focused={focus === "text"} />
              </div>
              <dl className="mt-5 space-y-6">
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

          {/* Panel de imagen */}
          <motion.div
            key={`image-${project.name}`}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ flex: imageFlex }}
            role="button"
            tabIndex={0}
            aria-pressed={focus === "image"}
            onClick={() => toggleFocus("image")}
            onKeyDown={onKeyDown("image")}
            className="min-w-0 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Captura real
              </p>
              <FocusBadge focused={focus === "image"} />
            </div>
            <div className="mt-3">
              <ScreenshotFrame src={previewSrc} alt={`Interfaz en producción de ${project.name}`} />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{captions[project.preview]}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
