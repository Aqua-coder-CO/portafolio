import { ArrowDown, ArrowRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { HeroVisual } from "@/components/HeroVisual";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="glow-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda — texto */}
        <div className="text-left">
          {profile.availability && (
            <p
              className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-medium text-teal-300"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              {profile.availability}
            </p>
          )}

          <div
            className="animate-fade-in-up hero-accent-bar mb-6"
            style={{ animationDelay: "0.1s" }}
          />

          <h1
            className="animate-fade-in-up mb-6 space-y-3 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-[3.25rem]"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="block">{profile.name}</span>
            <span className="gradient-text block text-[0.72em] font-semibold leading-snug sm:text-[0.68em]">
              {profile.title}
            </span>
          </h1>

          <p
            className="animate-fade-in-up mb-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-in-up flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.35s" }}
          >
            <a href="#contacto" className="hero-cta group">
              Contáctame
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#proyectos" className="btn-secondary">
              Ver proyectos
            </a>
          </div>

          <div
            className="animate-fade-in-up mt-10 flex items-center gap-3"
            style={{ animationDelay: "0.45s" }}
          >
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-teal-500/30 hover:text-teal-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-teal-500/30 hover:text-teal-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            {profile.phone && (
              <a
                href={getWhatsAppUrl(profile.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-green-500/30 hover:text-green-400"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Columna derecha — tarjetas visuales */}
        <div
          className="animate-fade-in-up lg:pl-4"
          style={{ animationDelay: "0.3s" }}
        >
          <HeroVisual />
        </div>
      </div>

      <a
        href="#sobre-mi"
        className="animate-float absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-teal-400"
        aria-label="Ir a sobre mí"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
