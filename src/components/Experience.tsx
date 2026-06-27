import { Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  return (
    <section id="experiencia" className="section px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Trayectoria" title="Experiencia" />

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="icon-box h-10 w-10">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-semibold">Experiencia laboral</h3>
          </div>

          <div className="space-y-6">
            {profile.experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative border-l-2 border-teal-500/20 pl-6 pb-2"
              >
                {index < profile.experience.length - 1 && (
                  <div className="absolute top-8 bottom-0 left-[-1px] w-0.5 bg-border" />
                )}
                <div className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-gradient-to-br from-teal-400 to-blue-500" />

                <div className="card card-interactive p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <p className="text-sm font-medium text-teal-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="tag-accent shrink-0">{exp.period}</span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <p className="mb-3 text-xs font-semibold tracking-wider text-teal-400 uppercase">
                    Stack y responsabilidades
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 rounded-lg border border-border/60 bg-background/50 px-3 py-2.5 text-sm leading-snug text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
