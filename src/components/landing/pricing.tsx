/** Sección 5 — Planes con toggle mensual/anual. */
import { useState } from "react";
import { Check } from "lucide-react";
import { brand, plans } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="planes" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Planes</p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-titanium mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Precios claros, sin letras chiquitas
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Todos los planes incluyen desarrollo, mantenimiento y soporte directo con el fundador.
              La cotización formal siempre es gratuita.
            </p>
          </RevealItem>
        </Reveal>

        {/* Toggle mensual / anual */}
        <div className="mt-8 inline-flex items-center gap-1 rounded-xl border border-border bg-card/50 p-1 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`min-h-11 rounded-lg px-4 text-sm font-semibold transition-colors duration-200 ease-out ${
              annual ? "text-muted-foreground hover:text-foreground" : "btn-emerald"
            }`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`min-h-11 rounded-lg px-4 text-sm font-semibold transition-colors duration-200 ease-out ${
              annual ? "btn-emerald" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Anual <span className="text-[11px] font-medium opacity-80">−20%</span>
          </button>
        </div>

        <Reveal className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <RevealItem key={plan.name} className="min-w-0">
              <article
                className={`surface-card flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                  plan.featured ? "wash-emerald border-primary/35" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
                  {plan.featured && (
                    <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      Más solicitado
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.summary}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    ${(annual ? plan.annual : plan.monthly).toLocaleString("es-MX")}
                  </span>
                  <span className="text-xs text-muted-foreground">{plan.unit}</span>
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
                      ? "btn-emerald"
                      : "btn-titanium"
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