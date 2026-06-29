"use client";

import { FormEvent, useState } from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSent(false);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const text = await response.text();
      let data: { error?: string } = {};

      if (text) {
        try {
          data = JSON.parse(text) as { error?: string };
        } catch {
          setError("No se pudo enviar el mensaje. Inténtalo de nuevo.");
          return;
        }
      }

      if (!response.ok) {
        setError(data.error ?? "No se pudo enviar el mensaje. Inténtalo de nuevo.");
        return;
      }

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError("Error de conexión. Comprueba tu internet e inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="section section-alt px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Hablemos"
          title="Contacto"
          description="¿Buscas un desarrollador junior con ganas de aprender? Escríbeme para oportunidades laborales, prácticas o proyectos pequeños."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <RevealOnScroll>
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
          </RevealOnScroll>

          <RevealOnScroll delayMs={150}>
          <form className="card p-6" onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="input-field"
                required
                autoComplete="name"
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="input-field"
                required
                autoComplete="email"
                disabled={isSubmitting}
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
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntame sobre tu proyecto..."
                className="input-field resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <p className="mb-4 text-sm text-red-400" role="alert">
                {error}
              </p>
            )}

            {sent && (
              <p className="mb-4 text-sm text-accent-light" role="status">
                ¡Mensaje enviado! Lo recibiré en mi correo y te responderé pronto.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar mensaje
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              O escríbeme directamente a{" "}
              <a href={`mailto:${profile.email}`} className="link-accent">
                {profile.email}
              </a>
            </p>
          </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
