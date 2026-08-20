/** Marcas de esquina en "L" (referencia de corte de precisión industrial). */

type Tone = "rust" | "white";

const toneClass: Record<Tone, string> = {
  rust: "border-rust",
  white: "border-foreground/70",
};

/**
 * Envuelve un bloque y dibuja cuatro marcas en "L" en sus esquinas.
 * Puramente decorativo: no altera el flujo del contenido.
 */
export function CornerMarks({
  tone = "rust",
  size = 14,
  inset = -8,
  mixed = false,
}: {
  tone?: Tone;
  size?: number;
  inset?: number;
  mixed?: boolean;
}) {
  const a = toneClass[tone];
  const b = mixed ? toneClass[tone === "rust" ? "white" : "rust"] : a;
  const style = { width: size, height: size, top: inset, left: inset } as const;

  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span className={`absolute border-t-2 border-l-2 ${a}`} style={style} />
      <span
        className={`absolute border-t-2 border-r-2 ${b}`}
        style={{ width: size, height: size, top: inset, right: inset }}
      />
      <span
        className={`absolute border-b-2 border-l-2 ${b}`}
        style={{ width: size, height: size, bottom: inset, left: inset }}
      />
      <span
        className={`absolute border-b-2 border-r-2 ${a}`}
        style={{ width: size, height: size, bottom: inset, right: inset }}
      />
    </span>
  );
}
