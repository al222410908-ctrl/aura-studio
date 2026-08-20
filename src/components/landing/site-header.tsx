/** Navegación superior con drawer móvil pulido y efecto cristal al hacer scroll. */
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";
import { brand, navLinks } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    drawerRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5 sm:h-18 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Terminal className="size-4.5" strokeWidth={1.75} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-tight">
              AV Tech Solutions
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Software a la medida
            </span>
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
          className="ml-auto hidden h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/90 md:ml-0 md:inline-flex"
        >
          Solicitar cotización
        </a>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ml-auto grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-card/60 text-foreground transition-colors duration-200 ease-out hover:bg-secondary md:hidden"
        >
          {open ? (
            <X className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu className="size-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Drawer móvil */}
      {open && (
        <motion.div
          id="mobile-nav"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex min-h-11 items-center rounded-lg px-3 text-base text-foreground/90 transition-colors duration-200 ease-out hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-primary px-4 text-base font-semibold text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/90"
            >
              Solicitar cotización
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
