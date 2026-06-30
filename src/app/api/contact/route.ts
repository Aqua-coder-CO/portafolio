import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/profile";
import {
  MAX_ATTACHMENTS,
  MAX_ATTACHMENT_SIZE_BYTES,
  isAllowedAttachmentType,
  sanitizeAttachmentFilename,
  validateAttachmentFile,
} from "@/lib/contact-attachments";
import {
  buildContactEmailHtml,
  buildContactEmailText,
} from "@/lib/contact-email-template";
import { getLogoCidSrc, getLogoInlineAttachment } from "@/lib/logo-email";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_FROM = "Portafolio <onboarding@resend.dev>";

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

function getRecipientEmail(): string {
  const custom = process.env.CONTACT_TO_EMAIL?.trim().replace(/^["']|["']$/g, "");
  return custom || profile.email;
}

type ParsedAttachment = {
  filename: string;
  content: Buffer;
};

async function parseAttachments(
  formData: FormData,
): Promise<{ attachments: ParsedAttachment[]; error?: string }> {
  const entries = formData.getAll("attachments");
  const attachments: ParsedAttachment[] = [];

  for (const entry of entries) {
    if (!(entry instanceof File) || entry.size === 0) {
      continue;
    }

    if (attachments.length >= MAX_ATTACHMENTS) {
      return { attachments: [], error: `Máximo ${MAX_ATTACHMENTS} archivos adjuntos.` };
    }

    const validationError = validateAttachmentFile(entry);
    if (validationError) {
      return { attachments: [], error: validationError };
    }

    if (!isAllowedAttachmentType(entry.type)) {
      return {
        attachments: [],
        error: "Solo se permiten archivos PDF o imágenes (JPG, PNG, WEBP, GIF).",
      };
    }

    if (entry.size > MAX_ATTACHMENT_SIZE_BYTES) {
      return {
        attachments: [],
        error: `Cada archivo debe pesar menos de ${MAX_ATTACHMENT_SIZE_BYTES / (1024 * 1024)} MB.`,
      };
    }

    const buffer = Buffer.from(await entry.arrayBuffer());
    attachments.push({
      filename: sanitizeAttachmentFilename(entry.name),
      content: buffer,
    });
  }

  return { attachments };
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

    const contentType = request.headers.get("content-type") ?? "";
    let name = "";
    let email = "";
    let message = "";
    let attachments: ParsedAttachment[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = String(formData.get("name") ?? "").trim();
      email = String(formData.get("email") ?? "").trim();
      message = String(formData.get("message") ?? "").trim();

      const parsed = await parseAttachments(formData);
      if (parsed.error) {
        return NextResponse.json({ error: parsed.error }, { status: 400 });
      }
      attachments = parsed.attachments;
    } else {
      let body: ContactBody;

      try {
        body = (await request.json()) as ContactBody;
      } catch {
        return NextResponse.json(
          { error: "Datos del formulario inválidos." },
          { status: 400 },
        );
      }

      name = body.name?.trim() ?? "";
      email = body.email?.trim() ?? "";
      message = body.message?.trim() ?? "";
    }

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
    const logoInline = getLogoInlineAttachment();
    const emailPayload = {
      name,
      email,
      message,
      logoSrc: getLogoCidSrc(),
      attachments: attachments.map((attachment) => ({
        filename: attachment.filename,
      })),
    };

    const emailAttachments = [
      {
        filename: logoInline.filename,
        content: logoInline.content,
        contentId: logoInline.contentId,
      },
      ...attachments.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content,
      })),
    ];

    const { data, error } = await resend.emails.send({
      from: getFromAddress(),
      to: getRecipientEmail(),
      replyTo: email,
      subject: `Nuevo contacto: ${name}`,
      text: buildContactEmailText(emailPayload),
      html: buildContactEmailHtml(emailPayload),
      attachments: emailAttachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
        { status: 500 },
      );
    }

    if (!data?.id) {
      console.error("Resend sin ID de confirmación:", { data, error });
      return NextResponse.json(
        { error: "No se pudo confirmar el envío del mensaje." },
        { status: 500 },
      );
    }

    console.info("Correo enviado:", data.id, "→", getRecipientEmail());

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 },
    );
  }
}
