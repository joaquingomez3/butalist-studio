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
    bio: "Desarrollador full-stack, formación universitaria en informática. Fan de las APIs limpias, la docu clara y los tests que valen la pena. Si hay un problema raro, probablemente lo está depurando.",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: "federico",
    code: "DEV_02",
    name: "Federico González",
    role: "Co-founder & Full-Stack Developer",
    initials: "FG",
    bio: "Desarrollador full-stack con formación universitaria en informática. Le gusta el código prolijo, los sistemas simples y el café bien cargado. Construye frontend y backend sin dramas.",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
];
