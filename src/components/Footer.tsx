import { Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 px-6 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © 2026 | {profile.name} Personal Website | All rights Reserved
        </p>

        <div className="flex items-center gap-3">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-box h-9 w-9 text-muted transition-colors duration-300 hover:text-accent-light"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="icon-box h-9 w-9 text-muted transition-colors duration-300 hover:text-accent-light"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          {profile.phone && (
            <a
              href={getWhatsAppUrl(profile.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-box h-9 w-9 text-muted transition-colors duration-300 hover:text-green-400"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
