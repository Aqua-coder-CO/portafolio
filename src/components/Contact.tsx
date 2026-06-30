"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Loader2, Mail, MapPin, Paperclip, Phone, Send, X } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import {
  MAX_ATTACHMENTS,
  formatMaxAttachmentSizeMb,
  validateAttachmentFile,
} from "@/lib/contact-attachments";

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function Contact() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleAttachmentChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    e.target.value = "";

    if (selected.length === 0) return;

    setError("");
    setSent(false);

    const next = [...attachments];

    for (const file of selected) {
      if (next.length >= MAX_ATTACHMENTS) {
        setError(`Máximo ${MAX_ATTACHMENTS} archivos adjuntos.`);
        break;
      }

      const validationError = validateAttachmentFile(file);
      if (validationError) {
        setError(validationError);
        continue;
      }

      next.push(file);
    }

    setAttachments(next);
  }

  function removeAttachment(index: number) {
    setAttachments((current) => current.filter((_, i) => i !== index));
  }

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
      const formData = new FormData();
      formData.append("name", trimmedName);
      formData.append("email", trimmedEmail);
      formData.append("message", trimmedMessage);
      attachments.forEach((file) => formData.append("attachments", file));

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
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
      setAttachments([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
            <div className="mb-4">
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

            <div className="mb-6">
              <label htmlFor="attachments" className="mb-2 block text-sm text-muted">
                Archivos adjuntos{" "}
                <span className="text-xs">(opcional)</span>
              </label>
              <input
                ref={fileInputRef}
                id="attachments"
                name="attachments"
                type="file"
                accept="application/pdf,image/jpeg,image/png,image/webp,image/gif"
                multiple
                className="sr-only"
                onChange={handleAttachmentChange}
                disabled={isSubmitting || attachments.length >= MAX_ATTACHMENTS}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-background/40 px-4 py-3 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting || attachments.length >= MAX_ATTACHMENTS}
              >
                <Paperclip size={16} />
                {attachments.length >= MAX_ATTACHMENTS
                  ? `Máximo ${MAX_ATTACHMENTS} archivos`
                  : "Adjuntar PDF o imagen"}
              </button>
              <p className="mt-2 text-xs text-muted">
                Hasta {MAX_ATTACHMENTS} archivos, máximo {formatMaxAttachmentSizeMb()} MB
                cada uno.
              </p>

              {attachments.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {attachments.map((file, index) => (
                    <li
                      key={`${file.name}-${file.size}-${index}`}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background/40 px-3 py-2"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm text-foreground">{file.name}</p>
                        <p className="text-xs text-muted">{formatFileSize(file.size)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="shrink-0 rounded-md p-1 text-muted transition-colors hover:bg-surface hover:text-foreground"
                        aria-label={`Quitar ${file.name}`}
                        disabled={isSubmitting}
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
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
