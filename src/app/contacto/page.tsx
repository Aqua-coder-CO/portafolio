import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Contacto | ${profile.name}`,
  description:
    "¿Buscas un desarrollador junior con ganas de aprender? Escríbeme para oportunidades laborales, prácticas o proyectos pequeños.",
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
