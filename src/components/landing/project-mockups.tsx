/** Mockups en UI pura (sin imágenes) para diferenciar cada caso de éxito. */
import { Check, CheckCheck, WifiOff } from "lucide-react";

const base =
  "relative h-full overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[var(--shadow-soft)]";

function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border/70 bg-card">
      <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-rust/50" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-primary/60" />
        </span>
        <span className="ml-auto text-[10px] font-medium text-muted-foreground">
          app.avtechsolutions.mx
        </span>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function MediCitasMockup() {
  return (
    <div className={base}>
      <DeviceFrame>
        <div className="flex h-full flex-col bg-[var(--surface)]">
          <div className="flex items-center gap-3 border-b border-border/70 bg-steel px-4 py-3">
            <span className="grid size-8 place-items-center rounded-full bg-primary/20 text-xs font-bold text-primary">
              MC
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold">MediCitas Sync</p>
              <p className="text-[10px] text-primary">en línea</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2.5 p-4">
            <div className="mx-auto rounded-md bg-secondary/60 px-2 py-1 text-[9px] text-muted-foreground">
              Hoy · 09:42
            </div>
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-steel px-3 py-2 text-[11px] leading-relaxed text-foreground/85">
              Buen día, su cita con la Dra. Gómez es <b>mañana a las 10:00</b>. ¿Confirma su
              asistencia?
            </div>
            <div className="max-w-[85%] self-end rounded-xl rounded-tr-sm border border-primary/30 bg-primary/15 px-3 py-2 text-[11px] text-foreground">
              Sí, confirmo.
              <span className="ml-1 inline-flex items-center gap-0.5 align-middle text-primary">
                <CheckCheck className="size-3" />
              </span>
            </div>
            <div className="mt-1 flex gap-2">
              <span className="rounded-lg bg-primary px-3 py-1.5 text-[10px] font-semibold text-primary-foreground">
                Confirmar cita
              </span>
              <span className="rounded-lg border border-border bg-steel px-3 py-1.5 text-[10px] font-medium text-foreground/80">
                Reprogramar
              </span>
            </div>
            <p className="mt-auto border-t border-border/70 pt-2 text-center text-[9px] text-muted-foreground">
              Recordatorio automático · flujo de WhatsApp
            </p>
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

export function PinturasPosMockup() {
  return (
    <div className={base}>
      <DeviceFrame>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border/70 bg-steel px-4 py-3">
            <p className="text-xs font-bold">Pinturas POS</p>
            <span className="inline-flex items-center gap-1 rounded-full border border-rust/30 bg-rust/10 px-2 py-0.5 text-[9px] font-medium text-rust">
              <WifiOff className="size-3" />
              Modo offline
            </span>
          </div>

          <div className="flex-1 space-y-2 p-4">
            {[
              ["Esmalte blanco", "2 gal"],
              ["Pintura vinílica", "5 litros"],
              ["Cubeta 19 L", "1 pza"],
            ].map(([name, qty]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-lg border border-border/70 bg-secondary/40 px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-foreground/90">{name}</p>
                  <p className="text-[9px] text-muted-foreground">{qty}</p>
                </div>
                <span className="text-[11px] font-bold text-foreground">
                  {qty === "1 pza" ? "$520" : "$185"}
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2">
              <span className="text-[10px] font-semibold text-primary">Conversión automática</span>
              <span className="text-[10px] text-foreground/80">
                2 gal = 7.57 L <Check className="inline size-3 text-primary" />
              </span>
            </div>

            <div className="border-t border-border/70 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Total</span>
                <span className="text-xl font-extrabold text-rust">$890.00</span>
              </div>
              <button
                type="button"
                className="mt-2 w-full rounded-lg bg-primary py-2.5 text-[11px] font-bold text-primary-foreground"
              >
                Cobrar · guardado local
              </button>
            </div>
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}
