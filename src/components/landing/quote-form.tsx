/** Sección — Cotización: formulario que arma el mensaje de WhatsApp. */
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { brand, services } from "./data";
import { Reveal, RevealItem } from "./motion-primitives";
import { CornerMarks } from "./corner-marks";

const inputClass =
  "w-full rounded-xl border border-border bg-card/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors duration-200 ease-out focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

const labelClass = "mb-1.5 block text-xs font-semibold text-foreground/85";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const text = [
      "Hola, quiero cotizar un proyecto.",
      "",
      `*Nombre:* ${name}`,
      `*Teléfono:* ${phone}`,
      `*Servicio:* ${service}`,
      message ? `*Descripción:* ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${brand.whatsappLink}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="cotizar" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <RevealItem>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Cotización gratuita
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Cuéntame tu proyecto y te respondo en menos de 24 h
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sin costo y por escrito, con alcance, tiempos y entregables definidos.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl">
          <RevealItem>
            <div className="relative">
              <CornerMarks size={16} inset={-9} mixed />
              <div className="rounded-2xl border border-border/80 bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
                {sent ? (
                  <div className="flex flex-col items-center py-8 text-center">
                    <CheckCircle2 className="size-12 text-primary" strokeWidth={1.5} />
                    <h3 className="mt-4 text-xl font-bold tracking-tight">
                      ¡Listo! Tu cotización está en camino
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                      Se abrió WhatsApp con tu mensaje. Si no se abrió, escríbeme directo al{" "}
                      <a
                        href={brand.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        {brand.whatsapp}
                      </a>
                      . Respondo en menos de 24 horas.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 rounded-lg border border-border bg-card/60 px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:bg-secondary"
                    >
                      Enviar otra cotización
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Nombre
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Teléfono / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="55 0000 0000"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="service" className={labelClass}>
                        ¿Qué necesitas?
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Selecciona un servicio
                        </option>
                        {services.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Otro">Otro / no estoy seguro</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        Cuéntame el detalle
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        minLength={20}
                        placeholder="Describe brevemente tu proyecto o el cuello de botella que quieres resolver…"
                        className={`${inputClass} resize-y`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="glow-emerald inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/60 bg-primary px-6 text-sm font-semibold text-primary-foreground duration-200 ease-out hover:bg-primary/90 sm:col-span-2"
                    >
                      <MessageCircle className="size-4" strokeWidth={1.75} />
                      Enviar por WhatsApp
                      <ArrowRight className="size-4" strokeWidth={2} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
