"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Үйлчилгээ" },
  { href: "#pricing", label: "Үнэ тариф" },
  { href: "#portfolio", label: "Ажлын жишээ" },
  { href: "#about", label: "Бидний тухай" },
  { href: "#contact", label: "Холбоо барих" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-line shadow-[0_4px_24px_#00000060]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center transition-all group-hover:bg-gold/20 group-hover:border-gold/50">
            <span className="font-serif text-gold font-bold text-sm leading-none">A</span>
          </div>
          <span className="font-sans font-semibold text-base tracking-wider text-text-primary">
            AWD <span className="text-gold-light">Agency</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded text-sm font-sans font-medium bg-gold/10 border border-gold/30 text-gold-light hover:bg-gold/20 hover:border-gold/50 transition-all duration-200"
          >
            Холбоо барих
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Цэс"
        >
          <span
            className={`block w-5 h-px bg-text-secondary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-text-secondary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-text-secondary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 border-b border-line" : "max-h-0"
        } bg-surface/98 backdrop-blur-md`}
      >
        <nav className="container mx-auto py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 text-sm font-sans text-text-secondary hover:text-text-primary border-b border-line/50 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 text-center text-sm font-sans font-medium bg-gold/10 border border-gold/30 text-gold-light rounded hover:bg-gold/20 transition-all"
          >
            Холбоо барих
          </a>
        </nav>
      </div>
    </header>
  );
}
