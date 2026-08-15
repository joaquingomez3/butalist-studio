export const site = {
  name: "Binario Dev Labs",
  shortName: "BINARIO",
  domain: "binariodevlabs.com",
  tagline: "Construimos software a medida. Punto.",
  description:
    "Estudio independiente de desarrollo de software. Software a medida y SaaS. Dos desarrolladores, formación universitaria y código serio.",
  email: "hola@binariodevlabs.com",
  url: "https://binariodevlabs.com",
  foundedYear: 2024,
  status: "DISPO PARA Q4 2026",
  location: "REMOTO / GLOBAL",
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

export const nav: NavItem[] = [
  { label: "INICIO", href: "#manifesto" },
  { label: "TRABAJOS", href: "#work" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "GARANTÍAS", href: "#garantias" },
  { label: "EQUIPO", href: "#equipo" },
  { label: "FAQ", href: "#faq" },
];
