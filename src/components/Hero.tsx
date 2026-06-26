import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="glow-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p
          className="animate-fade-in-up mb-4 text-sm font-medium tracking-widest text-accent-light uppercase"
          style={{ animationDelay: "0.1s" }}
        >
          Hola, soy
        </p>

        <h1
          className="animate-fade-in-up mb-6 text-5xl leading-tight font-bold tracking-tight sm:text-7xl"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="gradient-text">
            {profile.name.split(" ").slice(1).join(" ") || ""}
          </span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mb-4 max-w-2xl text-xl text-muted sm:text-2xl"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.title}
        </p>

        <p
          className="animate-fade-in-up mx-auto mb-10 max-w-xl text-base text-muted/80"
          style={{ animationDelay: "0.4s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fade-in-up mb-12 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#proyectos"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40"
          >
            Ver proyectos
          </a>
          <a
            href="/cv"
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-accent/50 hover:bg-card-hover"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </div>

        <div
          className="animate-fade-in-up flex items-center justify-center gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="animate-float absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent-light"
          aria-label="Ir a sobre mí"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
