import { Layout, MessageSquare, Rocket, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const pillarIcons: LucideIcon[] = [Rocket, Layout, MessageSquare];

export function ValuePillars() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
      {profile.valuePillars.map((pillar, index) => {
        const Icon = pillarIcons[index] ?? Layout;
        return (
          <RevealOnScroll key={pillar.title} delayMs={index * 120}>
            <article className="card card-interactive h-full p-6">
              <div className="icon-box mb-4 h-11 w-11">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 text-base font-semibold">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </article>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
