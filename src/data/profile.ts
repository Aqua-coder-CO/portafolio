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

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  availability?: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  about: string[];
  avatar?: string;
  social: {
    github?: string;
    twitter?: string;
    portfolio?: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experience: Experience[];
};

export const profile: Profile = {
  name: "César Garcia",
  title: "Desarrollador web junior",
  tagline:
    "Estoy empezando en el desarrollo web y construyo mi camino proyecto a proyecto. Busco aprender, colaborar y crecer como profesional.",
  availability: "Abierto a oportunidades",
  email: "sismelyt083@gmail.com",
  phone: "+57 302 704 3665",
  location: "Colombia, Bogotá",
  bio: "Desarrollador web junior de Bogotá, apasionado por aprender y crear. Me enfoco en React, Next.js y interfaces claras mientras sigo formándome.",
  about: [
    "Comencé en el desarrollo web hace poco, pero con dedicación constante. Aprendo con proyectos reales, práctica diaria y recursos en línea.",
    "Colaboré en Bonhome, una plataforma CRM inmobiliario, donde pude aplicar React, Next.js y TypeScript en un entorno de producto real.",
    "Busco oportunidades para seguir creciendo: primer empleo, prácticas, proyectos pequeños o colaboraciones donde pueda aportar ganas de aprender.",
  ],
  social: {
    github: "https://github.com/Aqua-coder-CO",
  },
  skills: [
    {
      category: "Tecnologías que uso",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "Cursor", "Figma", "Vercel"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Bonhome",
      description:
        "Plataforma CRM inmobiliario con IA y WhatsApp, donde colaboré en frontend y backend.",
      longDescription:
        "Participé en Bonhome, un SaaS inmobiliario desplegado en Vercel. Trabajé con Next.js, React y TypeScript en la interfaz, InstantDB como base de datos en tiempo real y Stripe para suscripciones y pagos.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "InstantDB",
        "Stripe",
        "Vercel",
      ],
      image: "/projects/bonhome.png",
      liveUrl: "https://bonhome.co",
      githubUrl: "https://github.com/thadallender/bonhome",
      featured: true,
    },
  ],
  experience: [
    {
      id: "1",
      role: "Desarrollador web junior",
      company: "Bonhome",
      period: "2025 — 2026",
      description:
        "CRM inmobiliario con IA y WhatsApp, desplegado en Vercel.",
      highlights: [
        "Frontend con Next.js, React, TypeScript y Tailwind CSS",
        "Datos en tiempo real con InstantDB y pagos con Stripe",
        "Integraciones de WhatsApp, IA y Google Maps",
        "Trabajo en producto real desplegado en Vercel",
      ],
    },
  ],
};
