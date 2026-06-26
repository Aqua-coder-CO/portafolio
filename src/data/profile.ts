export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  about: string[];
  avatar?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  cvUrl?: string;
};

export const profile: Profile = {
  name: "Tu Nombre",
  title: "Desarrollador Full Stack",
  tagline: "Creo experiencias digitales que combinan diseño, código y propósito.",
  email: "tu.email@ejemplo.com",
  phone: "+34 600 000 000",
  location: "Madrid, España",
  bio: "Apasionado por la tecnología y el diseño. Me especializo en construir aplicaciones web modernas, escalables y centradas en el usuario.",
  about: [
    "Soy desarrollador con experiencia en el ecosistema JavaScript/TypeScript. Me gusta transformar ideas complejas en productos digitales claros y funcionales.",
    "Trabajo con enfoque en calidad de código, buenas prácticas y colaboración en equipo. Siempre busco aprender nuevas tecnologías y mejorar mis habilidades.",
    "Cuando no estoy programando, disfruto leyendo, contribuyendo a proyectos open source o explorando nuevas herramientas del sector tech.",
  ],
  social: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "API REST", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Herramientas",
      items: ["Git", "Docker", "Figma", "VS Code", "Linux"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Moderno",
      description:
        "Plataforma de comercio electrónico con carrito, pagos y panel de administración.",
      longDescription:
        "Desarrollé una tienda online completa con autenticación, gestión de productos, carrito de compras e integración de pagos. El panel admin permite control total del inventario y pedidos.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://ejemplo.com",
      githubUrl: "https://github.com/tu-usuario/proyecto",
      featured: true,
    },
    {
      id: "2",
      title: "App de Gestión de Tareas",
      description:
        "Aplicación colaborativa para equipos con tableros Kanban y notificaciones en tiempo real.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/tu-usuario/tareas",
      featured: true,
    },
    {
      id: "3",
      title: "Dashboard Analytics",
      description:
        "Panel de métricas con gráficos interactivos y exportación de informes.",
      tags: ["Vue.js", "Chart.js", "Node.js"],
      liveUrl: "https://ejemplo-dashboard.com",
      featured: false,
    },
  ],
  experience: [
    {
      id: "1",
      role: "Desarrollador Full Stack",
      company: "Empresa Tech S.L.",
      period: "2023 — Presente",
      description: "Desarrollo de aplicaciones web y mantenimiento de APIs.",
      highlights: [
        "Lideré la migración del frontend a Next.js, mejorando el rendimiento un 40%",
        "Implementé CI/CD con GitHub Actions",
        "Colaboré con diseño UX para mejorar la experiencia de usuario",
      ],
    },
    {
      id: "2",
      role: "Desarrollador Junior",
      company: "Startup Innovadora",
      period: "2021 — 2023",
      description: "Desarrollo frontend y soporte backend.",
      highlights: [
        "Construí componentes reutilizables en React",
        "Participé en code reviews y pair programming",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "Grado en Ingeniería Informática",
      institution: "Universidad de Ejemplo",
      period: "2017 — 2021",
      description: "Especialización en desarrollo de software y bases de datos.",
    },
  ],
};
