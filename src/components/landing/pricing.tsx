/** Sección 5 — Planes con toggle mensual/anual. */
import { useState } from "react";
import { Check } from "lucide-react";
import { brand, plans } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";
import { CornerMarks } from "./corner-marks";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="planes" className="bg-grid-fine py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust">
              Planes
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Precios claros, sin letras chiquitas
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              Todos los planes incluyen desarrollo, mantenimiento y soporte directo con el fundador.
              La cotización formal siempre es gratuita.
            </p>
          </RevealItem>
        </Reveal>

        {/* Toggle mensual / anual */}
        <div
          role="group"
          aria-label="Periodo de facturación"
          className="mt-8 inline-flex items-center gap-1 rounded-xl border border-border/80 bg-card/60 p-1"
        >
          <button
            type="button"
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
            className={`min-h-11 rounded-lg px-4 text-sm font-semibold transition-colors duration-200 ease-out ${
              annual
                ? "text-muted-foreground hover:text-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={`min-h-11 rounded-lg px-4 text-sm font-semibold transition-colors duration-200 ease-out ${
              annual
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Anual <span className="text-[11px] font-medium opacity-80">−20%</span>
          </button>
        </div>

        <Reveal className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <RevealItem key={plan.name} className="relative min-w-0">
              {plan.featured && <CornerMarks size={14} inset={-8} />}
              <article
                className={`precision-card flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                  plan.featured ? "wash-emerald border-rust/35" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
                  {plan.featured && (
                    <span className="shrink-0 rounded-full border border-rust/35 bg-rust/10 px-2.5 py-1 text-[11px] font-semibold text-rust">
                      Más solicitado
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.summary}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight text-rust sm:text-5xl">
                    ${(annual ? plan.annual : plan.monthly).toLocaleString("es-MX")}
                  </span>
                  <span className="text-xs font-semibold text-rust/80">{plan.unit}</span>
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {annual ? "Facturación anual, precio ya con descuento" : "Sin contrato forzoso"}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-colors duration-200 ease-out ${
                    plan.featured
                      ? "glow-emerald border border-primary/60 bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-rust/30 bg-steel text-foreground hover:border-rust/60 hover:bg-steel/70"
                  }`}
                >
                  Solicitar propuesta
                </a>
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
