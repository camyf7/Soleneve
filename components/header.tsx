"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    bg-[#1a0a10]
    ${isScrolled ? "shadow-lg py-2" : "py-4"}
  `}
>


      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
<Link href="/" className="flex items-center gap-3 group">
  <div className="relative">
    <div className="w-12 h-12 rounded-full bg-[#d41d51] flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
      <Image
        src="/logo.png"
        alt="Logo Sol & Neve"
        width={290}
        height={40}
        className="object-contain"
        priority
      />

    </div>
  </div>

  <div className="flex flex-col">
    <span className="text-white font-serif text-xl font-bold tracking-tight leading-tight">
      Sol & Neve
    </span>
    <span className="text-[#FFD700] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase">
      Caraguatatuba
    </span>
  </div>
</Link>


        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-3">
          {[
            { href: "/", label: "Inicio" },
            { href: "/produtos", label: "Produtos" },
            { href: "/sobre", label: "Sobre" },
            { href: "/contato", label: "Contato" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-5 py-2 text-white/90 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + iFood */}
<div className="hidden lg:flex items-center gap-3">
  <a
    href="https://www.ifood.com.br/delivery/caraguatatuba-sp/sorveteria-sol--neve----caragua-centro/478c0603-4ca3-4de5-8c8a-d136fc94cafa"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-[#EA1D2C] hover:bg-[#c91724] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#EA1D2C]/30 hover:-translate-y-0.5"
  >
    {/* iFood icon (simplificado) */}
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 3h18v2H3V3zm2 4h14l-1.5 14h-11L5 7zm4 2v8h2V9H9zm4 0v8h2V9h-2z" />
    </svg>
    Peça pelo iFood
  </a>
</div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#1a0a10]/98 backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {[
            { href: "/", label: "Inicio" },
            { href: "/produtos", label: "Produtos" },
            { href: "/sobre", label: "Sobre" },
            { href: "/contato", label: "Contato" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
             className="text-black hover:text-gray py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
 
            >
              {link.label}
            </Link>
          ))}
          <a
    href="https://www.ifood.com.br/delivery/caraguatatuba-sp/sorveteria-sol--neve----caragua-centro/478c0603-4ca3-4de5-8c8a-d136fc94cafa"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-[#EA1D2C] hover:bg-[#c91724] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#EA1D2C]/30 hover:-translate-y-0.5"
  >
           <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 3h18v2H3V3zm2 4h14l-1.5 14h-11L5 7zm4 2v8h2V9H9zm4 0v8h2V9h-2z" />
    </svg>
            Peça pelo Ifood
          </a>
        </nav>
      </div>
    </header>
  );
}
