/**
 * Mock data real de AV Tech Solutions (dossier oficial).
 * Textos en español, ajustados al nicho de desarrollo de software a la medida.
 */

export const brand = {
  name: "AV Tech Solutions",
  tagline: "Desarrollo de Software & Soluciones Web a la Medida",
  founder: "Alan Alcántara Valencia",
  whatsapp: "+52 55 9106 5973",
  whatsappLink: "https://wa.me/525591065973",
  email: "al222410908@gmail.com",
  github: "https://github.com/al222410908-ctrl",
  location: "México",
};

export const metrics = [
  { value: "2", label: "Sistemas en producción", detail: "Clínicas y punto de venta" },
  { value: "100%", label: "Código propio", detail: "Sin plantillas genéricas" },
  { value: "< 24 h", label: "Respuesta a cotizaciones", detail: "Vía WhatsApp o correo" },
  { value: "Offline", label: "Arquitectura first", detail: "Opera sin internet" },
];

export const techLogos = [
  "React",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "React Native",
];

export type Service = {
  icon: "laptop" | "settings" | "smartphone" | "plug";
  title: string;
  description: string;
  stack: string[];
  span: string;
};

export const services: Service[] = [
  {
    icon: "laptop",
    title: "Desarrollo Web & Landing Pages",
    description:
      "Sitios modernos, rápidos y 100% adaptados a móvil. Enfocados en experiencia de usuario y clean code para proyectar máxima credibilidad y captar clientes.",
    stack: ["React", "Tailwind CSS", "HTML5 / CSS3"],
    span: "lg:col-span-3",
  },
  {
    icon: "settings",
    title: "Sistemas Web & APIs a la Medida",
    description:
      "Plataformas de gestión interna, sistemas de cotización, dashboards administrativos y APIs RESTful robustas para automatizar procesos operativos.",
    stack: ["Python", "FastAPI", "Node.js", "Express.js"],
    span: "lg:col-span-3",
  },
  {
    icon: "smartphone",
    title: "Aplicaciones Móviles",
    description:
      "Apps multiplataforma (iOS y Android) fluidas e interactivas, conectadas en tiempo real con servicios backend.",
    stack: ["React Native", "TypeScript", "Mobile UI/UX"],
    span: "lg:col-span-2",
  },
  {
    icon: "plug",
    title: "Integraciones & Automatizaciones",
    description:
      "Conexión con APIs de terceros, automatización de mensajería por WhatsApp, almacenamiento offline y despliegue en VPS o cloud.",
    stack: ["Docker", "Linux / VPS", "IndexedDB / PWA"],
    span: "lg:col-span-4",
  },
];

export type Project = {
  name: string;
  kicker: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "MediCitas Sync",
    kicker: "Sistema de citas médicas & bot de WhatsApp",
    challenge:
      "Alto ausentismo de pacientes y cancelaciones de último momento que afectaban los ingresos y la agenda de clínicas y consultorios.",
    solution:
      "Plataforma integral de gestión médica con recordatorios masivos e interactivos por WhatsApp y panel de administración web para el control centralizado de pacientes y turnos.",
    impact:
      "Automatización del seguimiento de citas, optimización del tiempo de recepción y reducción drástica del ausentismo.",
    stack: ["Node.js", "Express.js", "SQLite", "EJS", "whatsapp-web.js"],
  },
  {
    name: "Pinturas POS",
    kicker: "Punto de venta & inventario offline-first",
    challenge:
      "Cobro y descuento de inventario al convertir fracciones de volumen (litros, galones, cubetas), más pérdida de ventas por fallas de conexión en mostrador.",
    solution:
      "PWA instalable con arquitectura offline-first: conversión de unidades al instante, escaneo de códigos de barras, alertas de resurtido y sincronización automática al recuperar señal.",
    impact:
      "Continuidad de cobro sin internet, cobros sin errores de cálculo y control exacto de stock.",
    stack: ["React", "TypeScript", "Vite", "IndexedDB (Dexie)", "PWA"],
  },
];

export type Plan = {
  name: string;
  monthly: number;
  annual: number;
  unit: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Presencia",
    monthly: 4900,
    annual: 3900,
    unit: "MXN / mes",
    summary: "Landing page o sitio corporativo con mantenimiento continuo.",
    features: [
      "Sitio de hasta 5 secciones",
      "Diseño responsivo y optimización móvil",
      "Formulario y botón directo a WhatsApp",
      "Hospedaje y dominio gestionados",
      "Soporte por correo en 48 h",
    ],
  },
  {
    name: "Operación",
    monthly: 12900,
    annual: 10400,
    unit: "MXN / mes",
    summary: "Sistema web a la medida con panel administrativo y API propia.",
    features: [
      "Dashboard de gestión con roles de usuario",
      "API RESTful documentada",
      "Base de datos PostgreSQL respaldada",
      "Integración con WhatsApp o correo",
      "Iteraciones mensuales de mejora",
      "Soporte prioritario en 24 h",
    ],
    featured: true,
  },
  {
    name: "Ecosistema",
    monthly: 24900,
    annual: 19900,
    unit: "MXN / mes",
    summary: "Web + app móvil + automatizaciones bajo un solo backend.",
    features: [
      "App móvil iOS y Android (React Native)",
      "Arquitectura offline-first y PWA",
      "Automatizaciones e integraciones a terceros",
      "Despliegue en VPS con Docker y monitoreo",
      "Reuniones de seguimiento quincenales",
      "Canal directo con el fundador",
    ],
  },
];

export const faqs = [
  {
    q: "¿Cuánto tarda un proyecto en estar en producción?",
    a: "Una landing page se entrega entre 1 y 2 semanas. Un sistema web con panel administrativo y API toma de 4 a 8 semanas, dependiendo de la cantidad de módulos y las integraciones necesarias. Siempre se trabaja por entregas parciales para que veas avances desde la primera semana.",
  },
  {
    q: "¿El código y la base de datos son míos?",
    a: "Sí. Al liquidar el proyecto recibes el repositorio completo, los accesos a la base de datos y la documentación técnica. No hay dependencia forzada: puedes continuar con tu propio equipo cuando lo decidas.",
  },
  {
    q: "¿Trabajan con negocios fuera de la Ciudad de México?",
    a: "Sí. El trabajo es 100% remoto con reuniones por videollamada y seguimiento por WhatsApp. Actualmente se atienden clientes en distintos estados de la República.",
  },
  {
    q: "¿Qué pasa si mi negocio se queda sin internet?",
    a: "Para operaciones críticas como punto de venta se implementa arquitectura offline-first: la aplicación sigue registrando ventas en el dispositivo y sincroniza con la nube en cuanto regresa la señal, como en Pinturas POS.",
  },
  {
    q: "¿Cómo son los pagos y las cotizaciones?",
    a: "La cotización es gratuita y se entrega por escrito con alcance, tiempos y entregables. El esquema habitual es 50% de anticipo y 50% contra entrega, o mensualidad fija en los planes con mantenimiento.",
  },
  {
    q: "¿Incluye mantenimiento después de la entrega?",
    a: "Los planes incluyen mantenimiento, respaldos y correcciones. Si prefieres un proyecto cerrado sin mensualidad, se entrega con 30 días de garantía sobre errores funcionales.",
  },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
];
