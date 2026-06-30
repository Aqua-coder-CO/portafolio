type ContactEmailParams = {
  name: string;
  email: string;
  message: string;
  attachments: { filename: string }[];
  logoSrc: string;
};

function getInitials(fullName: string): string {
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function formatSentAt(date: Date): string {
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
}

export function buildContactEmailHtml({
  name,
  email,
  message,
  attachments,
  logoSrc,
}: ContactEmailParams): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const sentAt = formatSentAt(new Date());
  const initials = escapeHtml(getInitials(name));

  const attachmentRows =
    attachments.length > 0
      ? attachments
          .map(
            (file) => `
              <tr>
                <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td width="36" valign="middle" style="padding-right: 12px;">
                        <div style="width: 36px; height: 36px; border-radius: 8px; background-color: #eff6ff; text-align: center; line-height: 36px; font-size: 16px;">
                          📎
                        </div>
                      </td>
                      <td valign="middle" style="font-size: 14px; color: #0f172a; font-weight: 600;">
                        ${escapeHtml(file.filename)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`,
          )
          .join("")
      : "";

  const attachmentsSection =
    attachments.length > 0
      ? `
        <tr>
          <td style="padding: 0 32px 28px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
              <tr>
                <td style="padding: 14px 16px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                  <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b;">
                    Archivos adjuntos (${attachments.length})
                  </p>
                </td>
              </tr>
              ${attachmentRows}
            </table>
          </td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuevo mensaje de contacto</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #eef2f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #eef2f7; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #dbe3ee; box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);">
            <tr>
              <td style="padding: 28px 32px 24px 32px; background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 55%, #60a5fa 100%);">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td valign="middle">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td valign="middle" style="padding-right: 12px;">
                            <img
                              src="${logoSrc}"
                              width="48"
                              height="48"
                              alt="Logo del portafolio"
                              style="display: block; border-radius: 10px;"
                            />
                          </td>
                          <td valign="middle">
                            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255, 255, 255, 0.85);">
                              Portafolio · Contacto
                            </p>
                            <h1 style="margin: 0; font-size: 26px; line-height: 1.2; font-weight: 700; color: #ffffff;">
                              Nuevo mensaje recibido
                            </h1>
                            <p style="margin: 10px 0 0 0; font-size: 14px; line-height: 1.5; color: rgba(255, 255, 255, 0.9);">
                              Alguien escribió desde el formulario de tu sitio web.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width="64" align="right" valign="top">
                      <div style="width: 56px; height: 56px; border-radius: 999px; background-color: rgba(255, 255, 255, 0.18); border: 1px solid rgba(255, 255, 255, 0.25); text-align: center; line-height: 56px; font-size: 18px; font-weight: 700; color: #ffffff;">
                        ${initials}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 24px 32px 8px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 16px 18px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="50%" valign="top" style="padding-right: 8px;">
                            <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b;">
                              Nombre
                            </p>
                            <p style="margin: 0; font-size: 16px; font-weight: 700; color: #0f172a;">
                              ${safeName}
                            </p>
                          </td>
                          <td width="50%" valign="top" style="padding-left: 8px;">
                            <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b;">
                              Email
                            </p>
                            <p style="margin: 0; font-size: 15px; font-weight: 600;">
                              <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">
                                ${safeEmail}
                              </a>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 32px 20px 32px;">
                <p style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b;">
                  Mensaje
                </p>
                <div style="padding: 18px 20px; background-color: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 0 12px 12px 0; border-top: 1px solid #dbeafe; border-right: 1px solid #dbeafe; border-bottom: 1px solid #dbeafe;">
                  <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #1e293b;">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>

            ${attachmentsSection}

            <tr>
              <td style="padding: 4px 32px 28px 32px;" align="center">
                <a
                  href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: Contacto web de ${name}`)}"
                  style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 700; border-radius: 999px; box-shadow: 0 8px 20px rgba(37, 99, 235, 0.28);"
                >
                  Responder a ${safeName}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding: 18px 32px 24px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 6px 0; font-size: 12px; line-height: 1.5; color: #64748b; text-align: center;">
                  Recibido el ${escapeHtml(sentAt)} · Formulario de contacto del portafolio
                </p>
                <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #94a3b8; text-align: center;">
                  Puedes responder directamente a este correo; el remitente quedará en <strong style="color: #64748b;">Responder a</strong>.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildContactEmailText({
  name,
  email,
  message,
  attachments,
}: ContactEmailParams): string {
  const sentAt = formatSentAt(new Date());
  const attachmentBlock =
    attachments.length > 0
      ? `\n\nArchivos adjuntos:\n${attachments.map((file) => `  • ${file.filename}`).join("\n")}`
      : "";

  return [
    "══════════════════════════════════════",
    "  NUEVO MENSAJE DESDE TU PORTAFOLIO",
    "══════════════════════════════════════",
    "",
    `Fecha: ${sentAt}`,
    "",
    "── Datos del contacto ──",
    `Nombre: ${name}`,
    `Email:  ${email}`,
    "",
    "── Mensaje ──",
    message,
    attachmentBlock,
    "",
    "──────────────────────────────────────",
    "Responde a este correo para contactar al remitente.",
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
