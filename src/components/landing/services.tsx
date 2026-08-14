/** Sección 3 — Matriz de servicios en bento grid asimétrico. */
import { Laptop, Settings2, Smartphone, Plug } from "lucide-react";
import { services, type Service } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";

const icons = {
  laptop: Laptop,
  settings: Settings2,
  smartphone: Smartphone,
  plug: Plug,
} as const;

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <RevealItem className={`min-w-0 ${service.span}`}>
      <article className="surface-card wash-emerald flex h-full flex-col rounded-2xl p-6 sm:p-7">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-lg font-bold tracking-tight">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {service.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border/80 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
    </RevealItem>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Servicios</p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Cuatro frentes para digitalizar tu operación
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Cada servicio se selecciona por rendimiento, seguridad y mantenibilidad a largo plazo,
              nunca por moda tecnológica.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}