import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroVisual() {
  const project = profile.projects.find((p) => p.featured) ?? profile.projects[0];
  if (!project) return null;

  const visibleTags = project.tags.slice(0, 4);
  const extraTags = project.tags.length - visibleTags.length;

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-teal-500/15 via-transparent to-blue-500/10 blur-2xl"
        aria-hidden
      />

      <div className="absolute -top-3 right-4 z-10 rounded-full border border-teal-500/30 bg-card px-3 py-1 text-xs font-medium text-teal-400 shadow-lg">
        En producción
      </div>

      <article className="card relative overflow-hidden border-teal-500/20 shadow-2xl shadow-black/20">
        <div className="border-b border-border bg-gradient-to-r from-teal-500/10 via-card to-blue-500/10 px-6 py-5">
          <p className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            Proyecto destacado
          </p>
          <h3 className="mt-1 text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="p-6">
          {project.image && (
            <div className="mb-5 overflow-hidden rounded-xl border border-border bg-gradient-to-b from-slate-50 to-slate-100 p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto h-14 w-auto max-w-full object-contain"
              />
            </div>
          )}

          <div className="mb-6 flex flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <span key={tag} className="tag-accent">
                {tag}
              </span>
            ))}
            {extraTags > 0 && (
              <span className="tag">+{extraTags} más</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border/60 bg-background/50 px-4 py-3">
              <p className="text-[10px] font-semibold tracking-wider text-muted uppercase">
                Rol
              </p>
              <p className="mt-1 text-sm font-medium">Desarrollo web</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/50 px-4 py-3">
              <p className="text-[10px] font-semibold tracking-wider text-muted uppercase">
                Tipo
              </p>
              <p className="mt-1 text-sm font-medium">CRM / SaaS</p>
            </div>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-5 w-full justify-center"
            >
              Ver bonhome.co
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
