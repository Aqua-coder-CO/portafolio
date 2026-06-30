export const MAX_ATTACHMENTS = 3;
export const MAX_ATTACHMENT_SIZE_BYTES = 5 * 1024 * 1024;

export const ALLOWED_ATTACHMENT_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const;

export function isAllowedAttachmentType(type: string): boolean {
  return (ALLOWED_ATTACHMENT_MIME_TYPES as readonly string[]).includes(type);
}

export function formatMaxAttachmentSizeMb(): string {
  return String(MAX_ATTACHMENT_SIZE_BYTES / (1024 * 1024));
}

export function validateAttachmentFile(file: File): string | null {
  if (!isAllowedAttachmentType(file.type)) {
    return "Solo se permiten archivos PDF o imágenes (JPG, PNG, WEBP, GIF).";
  }

  if (file.size > MAX_ATTACHMENT_SIZE_BYTES) {
    return `Cada archivo debe pesar menos de ${formatMaxAttachmentSizeMb()} MB.`;
  }

  return null;
}

export function sanitizeAttachmentFilename(name: string): string {
  const base = name.replace(/[/\\]/g, "_").trim();
  return base.slice(0, 255) || "adjunto";
}
