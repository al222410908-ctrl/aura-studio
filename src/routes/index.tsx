import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Metrics } from "@/components/landing/metrics";
import { Services } from "@/components/landing/services";
import { Process } from "@/components/landing/process";
import { Projects } from "@/components/landing/projects";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { QuoteForm } from "@/components/landing/quote-form";
import { Faq } from "@/components/landing/faq";
import { SiteFooter } from "@/components/landing/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AV Tech Solutions | Software y sistemas web a la medida" },
      {
        name: "description",
        content:
          "Desarrollamos sistemas web, APIs, apps móviles y automatizaciones a la medida para negocios en México. Cotiza tu proyecto con AV Tech Solutions.",
      },
      {
        property: "og:title",
        content: "AV Tech Solutions | Software y sistemas web a la medida",
      },
      {
        property: "og:description",
        content:
          "Transformamos ideas y necesidades de tu negocio en software a la medida: web, móvil, APIs e integraciones.",
      },
    ],
  }),
  component: Index,
});

/** Landing principal de AV Tech Solutions. */
function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Pricing />
        <QuoteForm />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
