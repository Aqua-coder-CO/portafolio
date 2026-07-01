import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Contacto | ${profile.name}`,
  description:
    "¿Buscas acelerar la modernización de tu empresa o producto digital? Escríbeme para hablar de integración tecnológica, automatización o desarrollo de software a medida.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
