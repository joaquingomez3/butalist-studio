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
    title: "App de Servicios para tu hogar",
    tag: "App Mobile / Panel de Administracion",
    type: "SAAS",
    status: "EN DESARROLLO",
    description:
      "Aplicacion Android/IOS para prestadores de servicios con un panel web de administracion.",
    mockup: "mobile",
    href: "#",
  },
  {
    id: "beta",
    index: "02",
    title: "Radio FM",
    tag: "App Mobile / Panel de Administracion",
    type: "SAAS",
    status: "TERMINADO",
    description:
      "Aplicacion Android para escuchar la radio desde tu celular con un panel web de administracion.",
    mockup: "mobile",
    href: "#",
  },
  {
    id: "gamma",
    index: "03",
    title: "Sistema De Ventas",
    tag: "Sistema Web De Ventas",
    type: "A MEDIDA",
    status: "ENTREGADO",
    description:
      "Sistema Web de gestion de ventas, productos y stock a medida para una empresa de ventas de articulos de limpieza.",
    mockup: "graph",
    href: "#",
  },
  {
    id: "custom-1",
    index: "04",
    title: "Sistema POS 2.0",
    tag: "Sistema De Ventas",
    type: "SAAS",
    status: "TERMINADO",
    description:
      "Sistema Offline de gestión de ventas, productos y stock a medida.",
    mockup: "graph",
    href: "#",
  },
  {
    id: "custom-2",
    index: "05",
    title: "Proyecto Gimnasio",
    tag: "Sistema de Gestion",
    type: "SAAS",
    status: "PROXIMAMENTE",
    description:
      "Sistema de gestión de rutinas, planes y asistencia para gimnasios.",
    mockup: "code",
    href: "#",
  },
  {
    id: "custom-3",
    index: "06",
    title: "Proyecto Turnos",
    tag: "Sistema de Gestion de Turnos",
    type: "SAAS",
    status: "PROXIMAMENTE",
    description: "Sistema de gestion de turnos para tu negocio.",
    mockup: "terminal",
    href: "#",
  },
];
