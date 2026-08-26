export type TeamMember = {
  id: string;
  code: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

/* El orden del array es el orden visual de la grilla: el primero cae a la
   izquierda y el segundo a la derecha. */
export const team: TeamMember[] = [
  {
    id: "joaquin",
    code: "DEV_01",
    name: "Joaquín Gómez",
    role: "Co-founder & Full-Stack Developer",
    initials: "JG",
    bio: "Desarrollador full-stack, formación universitaria en informática. Amante de los retos y el aprendizaje constante. Si algo no lo entiendo, lo investigo y lo aprendo.",
    social: {
      github: "https://github.com/joaquingomez3",
      linkedin: "https://www.linkedin.com/in/joaquingomez-dev/",
    },
  },
  {
    id: "federico",
    code: "DEV_02",
    name: "Federico González",
    role: "Co-founder & Full-Stack Developer",
    initials: "FG",
    bio: "Desarrollador full-stack con formación universitaria. Siempre hay algo para aprender, algo para construir o alguna pregunta técnica dando vueltas en mi cabeza. A veces las tres cosas al mismo tiempo.",
    social: {
      github: "https://github.com/federicodg",
      linkedin: "https://www.linkedin.com/in/fededg/",
    },
  },
];
