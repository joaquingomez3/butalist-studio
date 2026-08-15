export type StackCategory = {
  cat: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    cat: "LENGUAJE",
    items: ["TypeScript", "JavaScript"],
  },
  {
    cat: "FRONTEND",
    items: ["Astro", "React", "Next.js", "Tailwind CSS"],
  },
  {
    cat: "BACKEND",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    cat: "INFRA / DEVOPS",
    items: ["Docker", "AWS", "Cloudflare", "GitHub Actions"],
  },
  {
    cat: "PAGOS & OTROS",
    items: ["Stripe", "GraphQL", "REST"],
  },
];