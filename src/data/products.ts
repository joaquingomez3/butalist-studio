export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  href: string;
  accent: "blue" | "violet" | "amber";
};

export const products: Product[] = [
  {
    id: "alpha",
    name: "Proyecto Alpha",
    tagline: "SaaS de gestión",
    description:
      "Plataforma en la nube para equipos que necesitan organizar su operación sin perder tiempo en hojas de cálculo.",
    badge: "En desarrollo",
    href: "#",
    accent: "blue",
  },
  {
    id: "beta",
    name: "Proyecto Beta",
    tagline: "Herramienta para devs",
    description:
      "Utility para desarrolladores. Reducí fricción en flujos de trabajo repetitivos y enfocá el tiempo en lo que importa.",
    badge: "Beta privada",
    href: "#",
    accent: "violet",
  },
  {
    id: "gamma",
    name: "Proyecto Gamma",
    tagline: "Producto de datos",
    description:
      "Visualización y análisis de datos en tiempo real. Convierta información dispersa en decisiones concretas.",
    badge: "Próximamente",
    href: "#",
    accent: "amber",
  },
];