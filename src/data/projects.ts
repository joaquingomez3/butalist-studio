export type ProjectType = "SAAS" | "A MEDIDA";

export type MockupKind = "terminal" | "ui" | "graph" | "code" | "mobile";

export type Project = {
  id: string;
  index: string;
  title: string;
  tag: string;
  type: ProjectType;
  status: string;
  description: string;
  mockup: MockupKind;
  href: string;
};

export const projects: Project[] = [
  {
    id: "alpha",
    index: "01",
    title: "Proyecto Alpha",
    tag: "SaaS / Gestión",
    type: "SAAS",
    status: "EN DESARROLLO",
    description:
      "Plataforma en la nube para equipos que necesitan organizar la operación sin perder horas en hojas de cálculo.",
    mockup: "ui",
    href: "#",
  },
  {
    id: "beta",
    index: "02",
    title: "Proyecto Beta",
    tag: "SaaS / Dev-tool",
    type: "SAAS",
    status: "BETA PRIVADA",
    description:
      "Utility para desarrolladores. Reduce fricción en flujos repetitivos y deja tiempo para lo que importa.",
    mockup: "terminal",
    href: "#",
  },
  {
    id: "gamma",
    index: "03",
    title: "Proyecto Gamma",
    tag: "SaaS / Datos",
    type: "SAAS",
    status: "PRÓXIMAMENTE",
    description:
      "Visualización y análisis de datos en tiempo real. Información dispersa convertida en decisiones.",
    mockup: "graph",
    href: "#",
  },
  {
    id: "custom-1",
    index: "04",
    title: "Plataforma web a medida",
    tag: "Trabajo a medida",
    type: "A MEDIDA",
    status: "ENTREGADO",
    description:
      "Sistema web completo para un cliente: frontend, backend e integraciones. De cero a producción.",
    mockup: "code",
    href: "#",
  },
  {
    id: "custom-2",
    index: "05",
    title: "App móvil para equipos",
    tag: "Trabajo a medida",
    type: "A MEDIDA",
    status: "ENTREGADO",
    description:
      "Aplicación móvil iOS/Android con una sola base de código. Diseñada, construida y publicada.",
    mockup: "mobile",
    href: "#",
  },
  {
    id: "custom-3",
    index: "06",
    title: "Sistema de integraciones",
    tag: "Trabajo a medida",
    type: "A MEDIDA",
    status: "ENTREGADO",
    description:
      "Backend de integraciones con APIs externas, colas y procesamiento. Scale, data, zero drama.",
    mockup: "terminal",
    href: "#",
  },
];