import { Code2, Github, Mail, MapPin, Wrench } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section id="sobre-mi" className="section px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          align="left"
          label="Conóceme"
          title="Sobre mí"
          description="Un poco de quién soy, qué hago y con qué tecnologías trabajo."
        />

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Tarjeta de perfil */}
          <aside className="lg:col-span-4">
            <div className="card relative overflow-hidden p-6 lg:sticky lg:top-24">
              <div
                className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl"
                aria-hidden
              />

              <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal-400">
                  {profile.title}
                </p>

                {profile.availability && (
                  <span className="tag-accent mt-4 inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    {profile.availability}
                  </span>
                )}

                <div className="mt-5 flex w-full items-center justify-center gap-2 text-sm text-muted lg:justify-start">
                  <MapPin size={15} className="shrink-0 text-teal-400" />
                  {profile.location}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {profile.bio}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                  <a
                    href={`mailto:${profile.email}`}
                    className="icon-box h-9 w-9 text-muted transition-colors hover:text-teal-400"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </a>
                  {profile.social.github && (
                    <a
                      href={profile.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-box h-9 w-9 text-muted transition-colors hover:text-teal-400"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Contenido principal */}
          <div className="space-y-8 lg:col-span-8">
            <div className="card p-6 sm:p-8">
              <div className="space-y-5">
                {profile.about.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-base leading-relaxed text-muted sm:text-lg ${
                      index === 0
                        ? "border-l-2 border-teal-500/40 pl-4 text-foreground/90"
                        : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold">
                <span className="section-accent-bar !mb-0 !h-[3px] !w-8" />
                Habilidades
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.skills.map((skillGroup, index) => {
                  const Icon = index === 0 ? Code2 : Wrench;
                  return (
                    <div
                      key={skillGroup.category}
                      className="card card-interactive p-5"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="icon-box h-9 w-9 shrink-0">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm font-semibold text-teal-400">
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span key={skill} className="tag-accent">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
