export type FaqItem = { id: string; question: string; answer: string };

export const faq: FaqItem[] = [
  {
    id: "q1",
    question: "¿Cuánto cuesta desarrollar un proyecto a medida?",
    answer:
      "Depende del alcance. Después de la charla inicial te entregamos una propuesta con precio cerrado y etapas. Trabajamos por proyecto o por etapas, lo que se acomode mejor a tu caso.",
  },
  {
    id: "q2",
    question: "¿Cuánto tarda un desarrollo típico?",
    answer:
      "Un MVP suele tomar entre 6 y 12 semanas. Proyectos más grandes los dividimos en fases para que veas progreso real cada par de semanas.",
  },
  {
    id: "q3",
    question: "¿Quién escribe el código, ustedes o lo tercerizan?",
    answer:
      "Lo escribimos nosotros. Somos dos desarrolladores y ese es el punto: sabés quién hace tu proyecto y hablás directo con quien está tipeando el código.",
  },
  {
    id: "q4",
    question: "¿Trabajan con clientes de otros países?",
    answer:
      "Sí. Somos un estudio remoto. Nos manejamos por email, videollamada y un tablero compartido. La distancia nunca fue un problema.",
  },
  {
    id: "q5",
    question: "¿El código queda en mi poder?",
    answer:
      "Sí, todo tuyo. Te entregamos el código fuente, accesos y documentación. Si mañana querés que lo mantenga otro equipo, puede hacerlo sin problema.",
  },
  {
    id: "q6",
    question: "¿Ofrecen soporte después de la entrega?",
    answer:
      "Sí. El software no termina el día del lanzamiento. Tenemos planes de mantenimiento mensuales y también atendemos puntuales cuando surge algo.",
  },
];