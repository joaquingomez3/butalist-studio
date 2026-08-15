export type Service = {
  id: string;
  icon: "web" | "mobile" | "backend" | "product" | "support";
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "web",
    icon: "web",
    title: "Desarrollo web a medida",
    description:
      "Sitios y aplicaciones web construidos desde cero, no plantillas. Lo que no se adapta a vos, se descarta.",
    bullets: ["Landing pages y sitios institucionales", "E-commerce y dashboards internos", "Aplicaciones web full-stack"],
  },
  {
    id: "mobile",
    icon: "mobile",
    title: "Aplicaciones móviles",
    description:
      "Apps para iOS y Android con base de código única. Dos tiendas, una sola fuente de verdad.",
    bullets: ["iOS y Android con código compartido", "Diseño de experiencia y prototipado", "Publicación en App Store y Play Store"],
  },
  {
    id: "backend",
    icon: "backend",
    title: "Backend, APIs y sistemas",
    description:
      "La parte que no se ve pero sostiene todo. API sólidas, bases bien modeladas, integraciones que no duermen.",
    bullets: ["APIs REST y GraphQL", "Integraciones con servicios externos", "Bases de datos y performance"],
  },
  {
    id: "product",
    icon: "product",
    title: "Producto, consultoría y diseño",
    description:
      "Antes de escribir código, ayudamos a definir qué construir. Validamos ideas, diseñamos la experiencia, elegimos el camino.",
    bullets: ["Definición de producto y requisitos", "Diseño UX/UI y arquitectura", "Consultoría técnica y auditorías"],
  },
  {
    id: "support",
    icon: "support",
    title: "Mantenimiento y soporte",
    description:
      "El software no termina el día del lanzamiento. Lo cuidamos, lo actualizamos y lo dejamos mejor.",
    bullets: ["Mantenimiento de sistemas existentes", "DevOps, CI/CD y cloud", "Mejoras y nuevas features"],
  },
];