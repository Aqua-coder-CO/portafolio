import { Github, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { Logo } from "@/components/Logo";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function About() {
  return (
    <section id="sobre-mi" className="section px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          align="center"
          label="Conóceme"
          title="Sobre mí"
          description="Desarrollador orientado a resultados: modernización tecnológica, productos en producción e integración de IA."
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <RevealOnScroll className="flex">
            <aside className="flex w-full">
              <div className="card flex h-full w-full flex-col p-6 sm:p-8">
                <div className="flex flex-1 flex-col items-center text-center">
                  <Logo size={80} className="mb-5 shadow-md" />

                  <h3 className="text-xl font-bold">{profile.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-light">
                    {profile.title}
                  </p>

                  {profile.availability && (
                    <span className="tag-accent mt-4 inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                      {profile.availability}
                    </span>
                  )}

                  <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted">
                    <MapPin size={15} className="shrink-0 text-accent-light" />
                    {profile.location}
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {profile.bio}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className="icon-box h-9 w-9 text-muted transition-colors duration-300 hover:text-accent-light"
                      aria-label="Email"
                    >
                      <Mail size={16} />
                    </a>
                    {profile.social.github && (
                      <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-box h-9 w-9 text-muted transition-colors duration-300 hover:text-accent-light"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {profile.phone && (
                      <a
                        href={getWhatsAppUrl(profile.phone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-box h-9 w-9 text-muted transition-colors duration-300 hover:text-green-400"
                        aria-label="WhatsApp"
                      >
                        <WhatsAppIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </RevealOnScroll>

          <RevealOnScroll delayMs={150}>
            <div className="card flex h-full flex-col justify-center p-6 sm:p-8">
              <div className="space-y-5">
                {profile.about.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-base leading-relaxed text-muted sm:text-lg ${
                      index === 0
                        ? "border-l-2 border-accent/50 pl-4 text-foreground/90"
                        : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
