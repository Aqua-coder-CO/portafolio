"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { Logo } from "@/components/Logo";
import { lerp, useHeroShrink } from "@/hooks/useHeroShrink";

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#stack", label: "Stack" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shrinkProgress = useHeroShrink();
  const logoSize = Math.round(lerp(52, 36, shrinkProgress));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-background/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/#inicio"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Logo size={logoSize} className="transition-[width,height] duration-100" />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            {profile.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contacto" className="btn-primary ml-2 !px-5 !py-2 text-xs">
              Contáctame
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/80 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link block !py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contacto"
                className="btn-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
