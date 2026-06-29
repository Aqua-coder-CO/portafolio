import { Code2, Database, Rocket, Wrench, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const stackIcons: LucideIcon[] = [Code2, Wrench, Database, Rocket];

export function TechStack() {
  return (
    <section id="stack" className="section section-alt px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Tecnologías"
          title="Stack tecnológico"
          description="Áreas en las que trabajo y las herramientas que utilizo para construir productos web."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {profile.skills.map((group, index) => {
            const Icon = stackIcons[index] ?? Code2;
            return (
              <RevealOnScroll key={group.category} delayMs={index * 100}>
                <article className="card card-interactive h-full p-6 sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="icon-box h-10 w-10 shrink-0">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{group.category}</h3>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag-accent">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
