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

export const team: TeamMember[] = [
  {
    id: "federico",
    code: "DEV_01",
    name: "Federico González",
    role: "Co-founder & Full-Stack Developer",
    initials: "FG",
    bio: "Desarrollador full-stack con formación universitaria en informática. Le gusta el código prolijo, los sistemas simples y el café bien cargado. Construye frontend y backend sin dramas.",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: "joaquin",
    code: "DEV_02",
    name: "Joaquín Gómez",
    role: "Co-founder & Full-Stack Developer",
    initials: "JG",
    bio: "Desarrollador full-stack, formación universitaria en informática. Fan de las APIs limpias, la docu clara y los tests que valen la pena. Si hay un problema raro, probablemente lo está depurando.",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
];