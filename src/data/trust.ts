/* ==========================================================================
   SEÑALES DE CONFIANZA
   Alimenta dos secciones vivas: Sectors (franja bajo el hero) y
   Guarantees (§03). Editar acá; los componentes se actualizan solos.
   ========================================================================== */

/* --- Franja "Ya construimos" -------------------------------------------- */
export const sectors: string[] = [
  "SaaS B2B",
  "Dashboards internos",
  "E-commerce",
  "Apps móviles",
  "APIs e integraciones",
  "Herramientas para devs",
  "Portales de clientes",
  "Automatización de procesos",
];

/* --- Antes / después [ARCHIVADO] -----------------------------------------
   Estos datos alimentaban la sección "Qué cambia con nosotros", que hoy vive
   en _sin-uso/BeforeAfter.astro. Se dejan acá para que restaurar la sección
   sea solo mover el .astro de vuelta a src/components/.
   Cada par se lee en una línea: izquierda el status quo, derecha cómo
   trabajamos. Conviene que uno responda al otro, punto por punto.
   ------------------------------------------------------------------------ */
export type BeforeAfterPair = { before: string; after: string };

export const beforeAfter: BeforeAfterPair[] = [
  {
    before: "Pedís presupuesto y te llega un PDF con un número y ningún detalle.",
    after: "Recibís alcance, etapas y precio cerrado por escrito antes de la primera línea de código.",
  },
  {
    before: "Hablás con un vendedor. El que programa nunca aparece.",
    after: "Hablás directo con las dos personas que escriben tu código. No hay capa intermedia.",
  },
  {
    before: "Pasan meses de silencio hasta la gran entrega final.",
    after: "Cada dos semanas ves una build funcionando y decidís qué entra en la siguiente.",
  },
  {
    before: "El proyecto rota entre juniors y el que lo entendía se fue.",
    after: "Los mismos dos devs de la primera charla al último deploy. Sin rotación.",
  },
  {
    before: "El código vive en un repo de la agencia y nunca lo viste.",
    after: "Repositorio, accesos, infraestructura y documentación a tu nombre desde el día uno.",
  },
  {
    before: "El día del lanzamiento se corta el hilo y empezás de cero con otro.",
    after: "Después del deploy queda soporte, monitoreo y un plan de mantenimiento claro.",
  },
];

/* --- Garantías -----------------------------------------------------------
   `tag` es la etiqueta corta en mono que va arriba a la derecha de cada una.
   ------------------------------------------------------------------------ */
export type Guarantee = {
  id: string;
  tag: string;
  title: string;
  text: string;
};

export const guarantees: Guarantee[] = [
  {
    id: "precio",
    tag: "precio",
    title: "El presupuesto no se mueve",
    text: "El número que firmás es el que pagás. Si estimamos de menos, es problema nuestro, no una línea nueva en tu factura.",
  },
  {
    id: "diseno",
    tag: "diseño",
    title: "Aprobás antes de que exista el código",
    text: "Primero ves las pantallas y el flujo completo. Se ajusta las veces que haga falta; recién después se programa.",
  },
  {
    id: "soporte",
    tag: "soporte",
    title: "30 días de soporte incluidos",
    text: "Un mes entero después de la entrega para ajustes, dudas y lo que aparezca en producción. Sin volver a facturar.",
  },
  {
    id: "propiedad",
    tag: "propiedad",
    title: "Todo queda a tu nombre",
    text: "Código, accesos, dominio e infraestructura son tuyos desde el primer commit. Si mañana sigue otro equipo, puede.",
  },
];
