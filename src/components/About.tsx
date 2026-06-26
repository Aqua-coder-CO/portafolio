import { MapPin, User } from "lucide-react";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent-light uppercase">
            Conóceme
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre mí
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent via-purple-500 to-pink-500 opacity-20 blur" />
              <div className="relative flex aspect-square items-center justify-center rounded-2xl border border-border bg-card">
                {profile.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-muted">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
                      <User size={48} className="text-accent-light" />
                    </div>
                    <p className="text-sm">Añade tu foto en profile.ts</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center gap-2 text-sm text-muted lg:justify-start">
                <MapPin size={16} className="text-accent-light" />
                {profile.location}
              </div>
              <p className="text-sm leading-relaxed text-muted">{profile.bio}</p>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-3">
            {profile.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-muted/90 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <h3 className="mb-4 text-lg font-semibold">Habilidades</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.skills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <h4 className="mb-3 text-sm font-medium text-accent-light">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-background px-3 py-1 text-xs text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
