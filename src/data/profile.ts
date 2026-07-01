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

export type ValuePillar = {
  title: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
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
  valuePillars: ValuePillar[];
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
};

export const profile: Profile = {
  name: "César Garcia",
  title: "Desarrollador Full-Stack & Optimización Tecnológica",
  tagline:
    "Ayudo a empresas y startups a acelerar su transformación digital mediante desarrollo ágil de software, optimización de procesos e integración de Inteligencia Artificial. Con experiencia directa en productos SaaS en producción, transformo el feedback de los usuarios en código eficiente, escalable y libre de errores.",
  availability: "Disponible para proyectos y equipos",
  email: "sismelyt083@gmail.com",
  phone: "+57 302 704 3665",
  location: "Colombia, Bogotá",
  bio: "Desarrollador full-stack enfocado en modernización tecnológica, integración de IA y entrega rápida de productos digitales con impacto operativo real.",
  about: [
    "Mi enfoque está en el desarrollo de software moderno y de alto impacto para el negocio. Utilizo metodologías ágiles y entornos de desarrollo asistidos por IA (como Cursor) para reducir drásticamente los tiempos de entrega, diagnosticar fallas complejas y refactorizar sistemas de manera proactiva.",
    "Como pieza clave en el desarrollo de Bonhome —un SaaS CRM inmobiliario en producción— traduje las necesidades y entrevistas de usuarios reales en optimizaciones técnicas directas. Implementé integraciones críticas de IA, automatización de comunicaciones y pasarelas de pago (Stripe), asegurando la estabilidad y escalabilidad del producto.",
    "Busco integrarme a equipos u organizaciones que deseen modernizar sus flujos de trabajo, eliminar deuda técnica y desplegar soluciones tecnológicas de última generación con rapidez y precisión.",
  ],
  social: {
    github: "https://github.com/Aqua-coder-CO",
  },
  valuePillars: [
    {
      title: "Entrega acelerada con IA",
      description:
        "Desarrollo asistido por Cursor y herramientas de IA para reducir tiempos de entrega, detectar bugs antes de producción y mantener código limpio y mantenible.",
    },
    {
      title: "Producto en producción",
      description:
        "Experiencia directa en Bonhome, un SaaS inmobiliario desplegado con usuarios reales, pagos, automatizaciones y operación continua en Vercel.",
    },
    {
      title: "Optimización basada en el cliente",
      description:
        "Ciclos de entrevistas y feedback con usuarios finales para eliminar fricciones operativas, corregir fallas críticas y diseñar interfaces que no requieren capacitación técnica compleja.",
    },
  ],
  skills: [
    {
      category: "Desarrollo inteligente y eficiencia con IA",
      description:
        "Uso avanzado de Cursor y asistentes de IA en la arquitectura de código para acelerar el desarrollo de software limpio, la detección proactiva de bugs y la optimización de código legacy.",
      items: ["Cursor", "Git", "GitHub", "Figma"],
    },
    {
      category: "Arquitectura y despliegue ágil",
      description:
        "Migración de interfaces y sistemas hacia arquitecturas modernas y serverless que disminuyen los costos de infraestructura tradicional, optimizan el rendimiento y escalan sin fricciones.",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      category: "Optimización basada en el cliente",
      description:
        "Diseño e integración de bases de datos en tiempo real y pasarelas de pago, refinados mediante ciclos de feedback directo con el usuario final para garantizar una adopción intuitiva.",
      items: ["InstantDB", "Stripe", "REST APIs", "Node.js"],
    },
    {
      category: "Operación y estabilidad en producción",
      description:
        "Despliegue, configuración y mantenimiento de aplicaciones en entornos productivos con buenas prácticas de hosting, variables de entorno y optimización de rendimiento.",
      items: ["Vercel", "Variables de entorno", "Dominios", "Optimización"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Bonhome",
      description:
        "Co-desarrollé un ecosistema SaaS inmobiliario en producción, enfocado en automatizar los flujos de trabajo de los asesores con IA y WhatsApp.",
      longDescription:
        "Co-desarrollé un ecosistema SaaS inmobiliario en producción, enfocándome en automatizar los flujos de trabajo de los asesores. Integré APIs de Inteligencia Artificial y automatizaciones de WhatsApp para reducir los tiempos de respuesta de cara al cliente. Ejecuté un ciclo continuo de entrevistas con usuarios finales para identificar fricciones operativas, lo que resultó en la eliminación sistemática de bugs críticos y el diseño de una interfaz intuitiva que no requiere entrenamiento técnico complejo.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "InstantDB",
        "Stripe",
        "Vercel",
        "IA",
        "WhatsApp",
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
      role: "Desarrollador Full-Stack",
      company: "Bonhome",
      period: "2025 — 2026",
      description:
        "Co-desarrollo de un CRM inmobiliario SaaS en producción, con integraciones de IA, WhatsApp, pagos y datos en tiempo real.",
      highlights: [
        "Automatización de comunicaciones con WhatsApp para reducir tiempos de respuesta al cliente",
        "Integración de APIs de IA para optimizar flujos operativos de asesores inmobiliarios",
        "Implementación de pagos con Stripe e InstantDB para operación en tiempo real",
        "Ciclo continuo de entrevistas con usuarios para eliminar bugs críticos y mejorar la adopción",
        "Despliegue y mantenimiento en Vercel con arquitectura Next.js y TypeScript",
      ],
    },
  ],
};
