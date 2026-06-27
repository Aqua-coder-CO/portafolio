"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  return (
    <section id="contacto" className="section section-alt px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Hablemos"
          title="Contacto"
          description="¿Buscas un desarrollador junior con ganas de aprender? Escríbeme para oportunidades laborales, prácticas o proyectos pequeños."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="card card-interactive flex items-center gap-4 p-4"
            >
              <div className="icon-box h-10 w-10 shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-medium">{profile.email}</p>
              </div>
            </a>

            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="card card-interactive flex items-center gap-4 p-4"
              >
                <div className="icon-box h-10 w-10 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Teléfono</p>
                  <p className="text-sm font-medium">{profile.phone}</p>
                </div>
              </a>
            )}

            <div className="card flex items-center gap-4 p-4">
              <div className="icon-box h-10 w-10 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-muted">Ubicación</p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>
          </div>

          <form
            className="card p-6"
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
                className="input-field"
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
                className="input-field"
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
                className="input-field resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send size={16} />
              Enviar mensaje
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              O escríbeme directamente a{" "}
              <a href={`mailto:${profile.email}`} className="link-accent">
                {profile.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
