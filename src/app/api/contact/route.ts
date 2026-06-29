import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_FROM = "Portfolio <onboarding@resend.dev>";

function getApiKey(): string | undefined {
  const raw = process.env.RESEND_API_KEY?.trim();
  if (!raw) return undefined;
  return raw.replace(/^["']|["']$/g, "");
}

function getFromAddress(): string {
  const custom = process.env.RESEND_FROM_EMAIL?.trim().replace(/^["']|["']$/g, "");
  if (!custom) return DEFAULT_FROM;
  if (custom.includes("@")) return custom;
  return DEFAULT_FROM;
}

export async function POST(request: Request) {
  try {
    const apiKey = getApiKey();

    if (!apiKey) {
      return NextResponse.json(
        { error: "El servicio de correo no está configurado." },
        { status: 503 },
      );
    }

    let body: ContactBody;

    try {
      body = (await request.json()) as ContactBody;
    } catch {
      return NextResponse.json(
        { error: "Datos del formulario inválidos." },
        { status: 400 },
      );
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Por favor completa todos los campos." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Introduce un email válido." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "El mensaje es demasiado largo." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: getFromAddress(),
      to: profile.email,
      replyTo: email,
      subject: `Contacto web de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>Nuevo mensaje desde tu portfolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
