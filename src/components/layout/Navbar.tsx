"use client";

import React, { useState } from "react";
import { companyInfo } from "@/data/company";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-14 py-5 border-b border-white/15 backdrop-blur-[2px]">
        {/* Custom SVG Recreation of Maderas IMAYA Logo (Light Version for Dark Hero) */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group"
          aria-label="IMAYA Industria Maderera Yaracuy C.A."
        >
          <svg
            viewBox="0 0 280 95"
            className="h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stylized Green Pine Tree Icon (Matching IMAYA Brand Identity) */}
            <g fill="#25B862">
              <path d="M46 10C38 10 32 13 32 16.5C32 19 36 20.5 29 21.5C21 22.5 17 25 18 28.5C19 31.5 28 32 23 33.5C15 35.5 13 38.5 15 41.5C17 44 26 44.5 21 46C12 48 10 51 13 54.5C16 57.5 26 57.5 20 59.5C11 61.5 9 64.5 13 67.5C17 70 28 70 35 70V82H42V70H45V82H52V70C61 70 72 68.5 74 64.5C76 60.5 66 59 58 58.5C67 57.5 74 55 73 51.5C72 48 62 47 55 46.5C65 45.5 72 43 71 39C70 35.5 60 34.5 53 34C62 33 69 30.5 68 26.5C67 23 58 22 52 21.5C58 20 63 17.5 61 14C59 11 52 10 46 10Z" />
            </g>
            {/* IMAYA Bold Geometric Wordmark */}
            <g fill="#FFFFFF">
              <rect x="88" y="34" width="8" height="38" />
              <path d="M103 72V34H111L122 50L133 34H141V72H133V47L122 62L111 47V72H103Z" />
              <path d="M147 72L161 34H170L184 72H175L172 63H159L156 72H147ZM161.5 56H169.5L165.5 44L161.5 56Z" />
              <path d="M196 55L182 34H191L200 48L209 34H218L204 55V72H196V55Z" />
              <path d="M216 72L230 34H239L253 72H244L241 63H228L225 72H216ZM230.5 56H238.5L234.5 44L230.5 56Z" />
            </g>
            {/* Green Horizontal Rule */}
            <rect x="12" y="76" width="242" height="3" fill="#25B862" />
            {/* Subtitle: INDUSTRIA MADERERA YARACUY C.A. */}
            <text
              x="13"
              y="91"
              fill="#E4F8B2"
              fontFamily="Inter, sans-serif"
              fontSize="10.3"
              fontWeight="700"
              letterSpacing="1.15"
            >
              INDUSTRIA MADERERA YARACUY C.A.
            </text>
          </svg>
        </a>

        {/* Desktop Menu Links - Exactly as in sample image */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-normal text-white/85">
          <a href="#inicio" className="text-white font-medium hover:text-lime-pale transition">
            Inicio
          </a>
          <a href="#calidad" className="hover:text-lime-pale transition">
            Planta y Calidad
          </a>
          <a href="#nuestra-gente" className="hover:text-lime-pale transition">
            Nuestra Gente
          </a>
          <a href="#nosotros" className="hover:text-lime-pale transition">
            Infraestructura Yaracuy
          </a>
        </div>

        {/* Right Actions: Instagram & CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={companyInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-white/90 hover:text-lime-pale bg-white/10 hover:bg-white/20 px-3 py-2.5 rounded-md transition backdrop-blur-sm border border-white/10"
            title="Síguenos en Instagram @maderas.imaya"
          >
            <InstagramIcon className="w-4 h-4 text-lime-pale" />
            <span className="font-mono text-xs">@maderas.imaya</span>
          </a>

          <button
            onClick={() => onOpenQuoteModal("Solicitar Cotización")}
            className="bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-md transition shadow-sm hover:shadow-lime-pale/20 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Solicitar Cotización
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="relative z-20 bg-forest-dark/95 backdrop-blur-md px-6 py-5 border-b border-white/10 lg:hidden shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm text-white/90">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-lime-pale"
            >
              Inicio
            </a>
            <a
              href="#calidad"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-lime-pale"
            >
              Planta y Calidad
            </a>
            <a
              href="#nuestra-gente"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-lime-pale"
            >
              Nuestra Gente
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-lime-pale"
            >
              Infraestructura Yaracuy
            </a>
            <a
              href={companyInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lime-pale font-mono pt-2 border-t border-white/10"
            >
              <InstagramIcon className="w-4 h-4" /> @maderas.imaya
            </a>
          </div>
        </div>
      )}
    </>
  );
}
