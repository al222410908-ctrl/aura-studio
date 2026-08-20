/** Marca "AV" — logo a color para header y footer. */
export function Monogram({ className = "size-9" }: { className?: string }) {
  return (
    <span className={`grid ${className} shrink-0 place-items-center overflow-hidden`}>
      <img src="/logo.png" alt="" width={64} height={64} className="h-full w-full object-contain" />
    </span>
  );
}
