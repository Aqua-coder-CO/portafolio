import { ExternalLink, Folder, Github } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  const featuredProjects = profile.projects.filter((p) => p.featured);
  const otherProjects = profile.projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="section section-alt px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Mi trabajo"
          title="Proyectos"
          description="Proyectos en los que he participado mientras aprendo y construyo experiencia en desarrollo web."
        />

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="card card-interactive group overflow-hidden"
            >
              {project.image ? (
                <div className="flex h-52 items-center justify-center bg-white p-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10">
                  <Folder
                    size={48}
                    className="text-teal-400/40 transition-transform group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex shrink-0 gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-1.5 text-muted transition-colors hover:bg-teal-500/10 hover:text-teal-400"
                        aria-label={`GitHub de ${project.title}`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-1.5 text-muted transition-colors hover:bg-teal-500/10 hover:text-teal-400"
                        aria-label={`Demo de ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="mb-6 text-lg font-semibold text-muted">
              Otros proyectos
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className="card card-interactive p-5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-semibold">{project.title}</h4>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-teal-400"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-teal-400"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
