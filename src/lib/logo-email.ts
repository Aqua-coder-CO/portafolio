import { readFileSync } from "fs";
import path from "path";
import { LOGO_EMAIL_FILE } from "@/lib/brand";

export const LOGO_CID = "portfolio-logo";

export type LogoInlineAttachment = {
  filename: string;
  content: Buffer;
  contentId: string;
};

export function getLogoCidSrc(): string {
  return `cid:${LOGO_CID}`;
}

export function getLogoInlineAttachment(): LogoInlineAttachment {
  const logoPath = path.join(process.cwd(), "public", LOGO_EMAIL_FILE);
  const buffer = readFileSync(logoPath);

  return {
    filename: "logo.png",
    content: buffer,
    contentId: LOGO_CID,
  };
}
