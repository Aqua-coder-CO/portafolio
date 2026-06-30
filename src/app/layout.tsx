import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { LOGO_PATH } from "@/lib/brand";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | Portafolio`,
  description: profile.tagline,
  keywords: [
    profile.title,
    "portafolio",
    "desarrollador",
    ...profile.skills.flatMap((s) => s.items),
  ],
  authors: [{ name: profile.name }],
  icons: {
    icon: LOGO_PATH,
    apple: LOGO_PATH,
  },
  openGraph: {
    title: `${profile.name} | Portafolio`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
