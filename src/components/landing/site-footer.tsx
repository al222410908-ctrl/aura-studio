/** Sección 7 — CTA de contacto + footer completo con enlaces y badge de estado. */
import { Github, Mail, MapPin, MessageCircle, Terminal } from "lucide-react";
import { brand, navLinks, services } from "./data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      {/* CTA de contacto */}
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="surface-card wash-emerald rounded-2xl p-7 sm:p-10">
          <h2 className="max-w-xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            Cuéntame el cuello de botella de tu operación y te propongo la solución.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Revisión inicial y cotización por escrito sin costo, con alcance, tiempos y entregables
            definidos.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/90"
            >
              <MessageCircle className="size-4" strokeWidth={1.75} />
              WhatsApp {brand.whatsapp}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:bg-secondary"
            >
              <Mail className="size-4" strokeWidth={1.75} />
              {brand.email}
            </a>
          </div>
        </div>
      </div>

      {/* Enlaces */}
      <div className="border-t border-border/70">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <Terminal className="size-4.5" strokeWidth={1.75} />
              </span>
              <span className="truncate text-sm font-bold tracking-tight">{brand.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{brand.tagline}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" strokeWidth={1.75} />
              {brand.location}
            </p>
          </div>

          <nav className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 transition-colors duration-200 ease-out hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Servicios
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicios"
                    className="text-sm text-foreground/80 transition-colors duration-200 ease-out hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-200 ease-out hover:text-primary"
                >
                  <MessageCircle className="size-4" strokeWidth={1.75} />
                  {brand.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-200 ease-out hover:text-primary"
                >
                  <Mail className="size-4" strokeWidth={1.75} />
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-200 ease-out hover:text-primary"
                >
                  <Github className="size-4" strokeWidth={1.75} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright + badge de estado */}
      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-xs text-muted-foreground">
            © {year} {brand.name} · {brand.founder}. Todos los derechos reservados.
          </p>
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[11px] font-medium text-primary sm:self-auto">
            <span className="size-1.5 rounded-full bg-primary" />
            Sistemas operando con normalidad
          </span>
        </div>
      </div>
    </footer>
  );
}