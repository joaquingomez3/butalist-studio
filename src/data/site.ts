/* Ruta a un archivo de /public respetando el `base` con el que se buildea.
   En local BASE_URL vale "/", pero el workflow de GitHub Pages buildea con
   --base, así que en un repo de proyecto pasa a valer "/nombre-del-repo/".
   Por eso nunca hay que escribir "/logo-mark.svg" a mano: se usa asset(). */
const BASE_URL: string = import.meta.env.BASE_URL;

export const asset = (path: string): string =>
  `${BASE_URL.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;

export const site = {
  name: "Binario Dev Labs",
  shortName: "BINARIO",
  domain: "binariodevlabs.com",
  tagline: "Construimos software a medida. Punto.",
  description:
    "Estudio independiente de desarrollo de software. Software a medida y SaaS. Dos desarrolladores, formación universitaria y código serio.",
  email: "binariodevlabs@gmail.com",
  url: "https://binariodevlabs.com",
  foundedYear: 2024,
  status: "DISPO PARA Q4 2026",
  location: "REMOTO / GLOBAL",
  // TODO(redes): descomentar el bloque de redes en Contact.astro cuando
  // estas cuentas existan de verdad.
  social: {
    linkedin: "https://www.linkedin.com/company/binariodevlabs",
    github: "https://github.com/binariodevlabs",
    twitter: "https://twitter.com/binariodevlabs",
    instagram: "https://instagram.com/binariodevlabs",
  },
  system: {
    build: "v2.0.0-brutal",
    astro: "astro v7",
    engine: "typescript",
    host: "static",
    uptime: "100%",
  },
} as const;

export type NavItem = { label: string; href: string };

/* El orden espeja el orden real de las secciones en index.astro. */
export const nav: NavItem[] = [
  { label: "INICIO", href: "#manifesto" },
  { label: "TRABAJOS", href: "#work" },
  { label: "GARANTÍAS", href: "#garantias" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "EQUIPO", href: "#equipo" },
];
