/** Navegación superior con drawer móvil pulido y efecto cristal al hacer scroll. */
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";
import { brand, navLinks } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "border-b border-border bg-background/70 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5 sm:h-18 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Terminal className="size-4.5" strokeWidth={1.75} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-tight">AV Tech Solutions</span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">Software a la medida</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 ease-out hover:bg-secondary/60 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn-emerald ml-auto hidden h-10 items-center rounded-lg px-4 text-sm font-semibold md:ml-0 md:inline-flex"
        >
          Solicitar cotización
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="btn-titanium ml-auto grid size-11 shrink-0 place-items-center rounded-lg md:hidden"
        >
          {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
        </button>
      </div>

      {/* Drawer móvil */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-t border-border bg-background/90 backdrop-blur-xl md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-base text-foreground/90 transition-colors duration-200 ease-out hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald mt-2 flex min-h-12 items-center justify-center rounded-lg px-4 text-base font-semibold"
            >
              Solicitar cotización
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}