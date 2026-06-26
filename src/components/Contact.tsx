"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contacto" className="bg-card/30 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-accent-light uppercase">
            Hablemos
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contacto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y te
            responderé lo antes posible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:bg-card-hover"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Mail size={18} className="text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-medium">{profile.email}</p>
              </div>
            </a>

            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:bg-card-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Phone size={18} className="text-accent-light" />
                </div>
                <div>
                  <p className="text-xs text-muted">Teléfono</p>
                  <p className="text-sm font-medium">{profile.phone}</p>
                </div>
              </a>
            )}

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <MapPin size={18} className="text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-muted">Ubicación</p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-muted"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light"
            >
              <Send size={16} />
              Enviar mensaje
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              O escríbeme directamente a{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-accent-light hover:underline"
              >
                {profile.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
