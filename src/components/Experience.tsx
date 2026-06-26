import { Briefcase, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent-light uppercase">
            Trayectoria
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experiencia y formación
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Briefcase size={20} className="text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold">Experiencia laboral</h3>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative border-l-2 border-border pl-6 pb-2"
                >
                  {index < profile.experience.length - 1 && (
                    <div className="absolute top-8 bottom-0 left-[-1px] w-0.5 bg-border" />
                  )}
                  <div className="absolute top-1.5 left-[-5px] h-2 w-2 rounded-full bg-accent" />

                  <div className="rounded-xl border border-border bg-card p-5">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{exp.role}</h4>
                        <p className="text-sm text-accent-light">{exp.company}</p>
                      </div>
                      <span className="rounded-full bg-background px-3 py-1 text-xs text-muted">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-muted">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm text-muted/90 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent-light"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <GraduationCap size={20} className="text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold">Formación académica</h3>
            </div>

            <div className="space-y-6">
              {profile.education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-sm text-accent-light">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="rounded-full bg-background px-3 py-1 text-xs text-muted">
                      {edu.period}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-muted">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
