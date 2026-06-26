"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="no-print sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Volver al portfolio
          </Link>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-card-hover"
            >
              <Printer size={16} />
              Imprimir / PDF
            </button>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
              >
                <Download size={16} />
                Descargar PDF
              </a>
            )}
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-12 print:max-w-none print:px-8 print:py-8">
        <header className="mb-10 border-b border-border pb-8 print:border-gray-300">
          <h1 className="mb-2 text-4xl font-bold print:text-black">
            {profile.name}
          </h1>
          <p className="mb-4 text-xl text-accent-light print:text-gray-700">
            {profile.title}
          </p>
          <p className="mb-6 max-w-2xl text-muted print:text-gray-600">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted print:text-gray-600">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-accent-light print:text-gray-700"
            >
              <Mail size={14} />
              {profile.email}
            </a>
            {profile.phone && (
              <span className="flex items-center gap-1.5">
                <Phone size={14} />
                {profile.phone}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {profile.location}
            </span>
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                className="flex items-center gap-1.5 hover:text-accent-light print:text-gray-700"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            )}
            {profile.social.github && (
              <a
                href={profile.social.github}
                className="flex items-center gap-1.5 hover:text-accent-light print:text-gray-700"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-accent-light print:text-black">
            Perfil
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-muted print:text-gray-700">
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-accent-light print:text-black">
            Experiencia profesional
          </h2>
          <div className="space-y-6">
            {profile.experience.map((exp) => (
              <div key={exp.id}>
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold print:text-black">{exp.role}</h3>
                  <span className="text-sm text-muted print:text-gray-600">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-2 text-sm font-medium text-accent-light print:text-gray-700">
                  {exp.company}
                </p>
                <p className="mb-2 text-sm text-muted print:text-gray-600">
                  {exp.description}
                </p>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted before:mr-2 before:content-['•'] print:text-gray-700"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-accent-light print:text-black">
            Formación
          </h2>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.id}>
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold print:text-black">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-muted print:text-gray-600">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-accent-light print:text-gray-700">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="mt-1 text-sm text-muted print:text-gray-600">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-accent-light print:text-black">
            Proyectos destacados
          </h2>
          <div className="space-y-4">
            {profile.projects
              .filter((p) => p.featured)
              .map((project) => (
                <div key={project.id}>
                  <h3 className="font-semibold print:text-black">
                    {project.title}
                  </h3>
                  <p className="mb-1 text-sm text-muted print:text-gray-600">
                    {project.longDescription || project.description}
                  </p>
                  <p className="text-xs text-muted print:text-gray-500">
                    {project.tags.join(" · ")}
                    {project.liveUrl && ` · ${project.liveUrl}`}
                  </p>
                </div>
              ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-accent-light print:text-black">
            Habilidades
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {profile.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="mb-2 text-sm font-semibold print:text-black">
                  {skillGroup.category}
                </h3>
                <p className="text-sm text-muted print:text-gray-600">
                  {skillGroup.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
