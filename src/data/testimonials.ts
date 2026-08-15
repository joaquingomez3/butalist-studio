export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Nos ayudaron a clarificar qué construir antes de escribir una sola línea. El resultado fue justo lo que necesitábamos, ni más ni menos.",
    author: "María López",
    role: "CEO, Startup de retail",
  },
  {
    id: "t2",
    quote:
      "Comunicación impecable durante todo el proyecto. Siempre supimos en qué punto estábamos y qué venía después. Lo recomiendo sin dudar.",
    author: "Carlos Méndez",
    role: "Fundador, Plataforma SaaS",
  },
  {
    id: "t3",
    quote:
      "Vinieron con un equipo previo caído y no solo lo levantaron, lo dejaron mejor. Profesionales serios y código de calidad.",
    author: "Lucía Fernández",
    role: "CTO, Empresa de logística",
  },
];