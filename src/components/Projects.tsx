import { ExternalLink, Folder, Github } from "lucide-react";
import { profile } from "@/data/profile";

export function Projects() {
  const featuredProjects = profile.projects.filter((p) => p.featured);
  const otherProjects = profile.projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="bg-card/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent-light uppercase">
            Mi trabajo
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Proyectos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Una selección de proyectos que demuestran mis habilidades técnicas y
            mi capacidad para resolver problemas reales.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:bg-card-hover"
            >
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent/10 to-purple-500/10">
                  <Folder
                    size={48}
                    className="text-accent-light/50 transition-transform group-hover:scale-110"
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
                        className="text-muted transition-colors hover:text-accent-light"
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
                        className="text-muted transition-colors hover:text-accent-light"
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
                    <span
                      key={tag}
                      className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-light"
                    >
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
                  className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:bg-card-hover"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-semibold">{project.title}</h4>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent-light"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent-light"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-background px-2 py-0.5 text-xs text-muted"
                      >
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
