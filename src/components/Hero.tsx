import { ArrowDown, ArrowRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ValuePillars } from "@/components/ValuePillars";

export function Hero() {
  return (
    <section id="inicio" className="relative px-6 pt-28 pb-20">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {profile.availability && (
          <p
            className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-md"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-accent-light" />
            {profile.availability}
          </p>
        )}

        <div
          className="animate-fade-in-up hero-accent-bar mx-auto mb-6"
          style={{ animationDelay: "0.1s" }}
        />

        <h1
          className="animate-fade-in-up mb-4 text-4xl leading-tight font-bold tracking-tight sm:text-5xl"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.title}
        </h1>

        <p
          className="animate-fade-in-up mb-2 text-lg font-medium gradient-text sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.name}
        </p>

        <p
          className="animate-fade-in-up mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "0.25s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          <a href="#contacto" className="hero-cta group">
            Contáctame
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div
          className="animate-fade-in-up mt-8 flex items-center justify-center gap-3"
          style={{ animationDelay: "0.45s" }}
        >
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card/60 p-2.5 text-muted backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:text-accent-light"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-border bg-card/60 p-2.5 text-muted backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:text-accent-light"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          {profile.phone && (
            <a
              href={getWhatsAppUrl(profile.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card/60 p-2.5 text-muted backdrop-blur-md transition-all duration-300 hover:border-green-500/40 hover:text-green-400"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
          )}
        </div>
      </div>

      <div
        className="animate-fade-in-up relative z-10 mx-auto mt-16 max-w-6xl"
        style={{ animationDelay: "0.5s" }}
      >
        <ValuePillars />
      </div>

      <a
        href="#sobre-mi"
        className="animate-float absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors duration-300 hover:text-accent-light"
        aria-label="Ir a sobre mí"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
