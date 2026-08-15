export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "propuesta",
    number: "01",
    title: "Propuesta y plan",
    description:
      "Propuesta clara: alcance, plazos, presupuesto y etapas. Sabés qué vas a obtener y cuándo, sin sorpresas.",
  },
  {
    id: "desarrollo",
    number: "02",
    title: "Desarrollo iterativo",
    description:
      "Ciclos cortos. Cada par de semanas ves progreso real, das feedback y ajustamos. Nada de desaparecer durante meses.",
  },
  {
    id: "entrega",
    number: "03",
    title: "Entrega y soporte",
    description:
      "Producto funcionando, documentado y listo para usar. Quedamos cerca para mantenimiento y lo que venga.",
  },
];