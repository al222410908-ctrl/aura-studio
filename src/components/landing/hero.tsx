/** Sección 1 — Hero: propuesta de valor, badge flotante, visual principal y CTAs. */
import { motion } from "motion/react";
import { ArrowRight, Github, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import { brand } from "./data";
import { fadeInUp, staggerContainer } from "./motion-primitives";
import { CornerMarks } from "./corner-marks";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Textura y halo de fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[380px] w-[520px] max-w-[120vw] rounded-full bg-rust/10 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-rust/30 bg-rust/10 px-3 py-1.5 text-xs font-medium text-rust">
              <Sparkles className="size-3.5" strokeWidth={1.75} />
              Fundado y desarrollado por {brand.founder}
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative mt-8 pr-2">
            <CornerMarks tone="white" mixed size={16} inset={-10} />
            <h1 className="font-stencil text-[2.6rem] font-extrabold uppercase leading-[0.95] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
              Transformamos ideas y necesidades de tu negocio en{" "}
              <span className="text-rust">software a la medida</span>.
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Resolvemos cuellos de botella operativos con aplicaciones web, APIs RESTful, soluciones
            móviles e integraciones automatizadas. Herramientas limpias, rápidas e intuitivas,
            alineadas al flujo real de tu negocio.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group glow-emerald inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/60 bg-primary px-6 text-sm font-semibold text-primary-foreground duration-200 ease-out hover:bg-primary/90"
            >
              Cotizar mi proyecto
              <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
            <a
              href="#proyectos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-rust/35 bg-steel px-6 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:border-rust/60 hover:bg-steel/70"
            >
              Ver casos de éxito
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/65">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-rust" strokeWidth={1.75} />
              Código propio, sin plantillas
            </span>
            <a
              href={brand.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 ease-out hover:text-foreground"
            >
              <Github className="size-4" strokeWidth={1.75} />
              github.com/al222410908-ctrl
            </a>
          </motion.div>
        </motion.div>

        {/* Visual principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 sm:mt-20"
        >
          <CornerMarks size={18} inset={-11} mixed />
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[var(--shadow-lift)]">
            <img
              src={heroImage}
              alt="Dashboard administrativo desarrollado por AV Tech Solutions"
              width={1408}
              height={1008}
              className="block w-full"
            />
            {/* Iluminación lateral dramática naranja/cobre mezclada con esmeralda */}
            <div aria-hidden className="pointer-events-none absolute inset-0 forge-light mix-blend-screen" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-10 w-40 bg-rust/25 blur-3xl mix-blend-screen"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -right-10 w-32 bg-primary/20 blur-3xl mix-blend-screen"
            />
          </div>
          {/* Badge flotante sobre el visual */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-rust/25 bg-background/80 px-4 py-3 backdrop-blur-xl sm:left-8">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium text-foreground">
              Sistemas en producción · {brand.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}