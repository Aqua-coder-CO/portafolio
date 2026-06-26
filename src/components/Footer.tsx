import { Github, Heart, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="flex items-center gap-1 text-sm text-muted">
          © {year} {profile.name} / Desarrolador Web Junior
          <Heart size={14} className="text-pink-500" fill="currentColor" />
        </p>

        <div className="flex items-center gap-4">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent-light"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent-light"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
