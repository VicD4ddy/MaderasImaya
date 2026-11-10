"use client";

import React from "react";
import { companyInfo } from "@/data/company";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";

interface FooterProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function Footer({ onOpenQuoteModal }: FooterProps) {
  return (
    <footer className="px-6 sm:px-10 lg:px-14 pt-14 pb-10 bg-forest-dark/85 backdrop-blur-md text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/15">
          {/* Left Brand & Tagline */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
            <a href="#inicio" className="shrink-0" aria-label="Maderas IMAYA">
              <svg
                viewBox="0 0 280 95"
                className="h-14 w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Green Pine Tree Icon */}
                <g fill="#22C55E">
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
                <rect x="12" y="76" width="242" height="3" fill="#22C55E" />
                {/* Subtitle */}
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
            <div>
              <p className="text-xl sm:text-2xl font-normal tracking-tight text-white max-w-xs leading-snug mb-2">
                Calidad y firmeza en madera contrachapada
              </p>
              <p className="text-xs text-white/70">{companyInfo.address}</p>
            </div>
          </div>

          {/* Right Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            <div>
              <p className="font-mono text-[10px] uppercase text-lime-pale/80 mb-3 tracking-wider font-semibold">
                PRODUCTOS
              </p>
              <ul className="space-y-2.5 text-white/85">
                <li>
                  <a href="#calidad" className="hover:text-lime-pale transition">
                    Pino Caribe
                  </a>
                </li>
                <li>
                  <a href="#calidad" className="hover:text-lime-pale transition">
                    Encofrados
                  </a>
                </li>
                <li>
                  <a href="#calidad" className="hover:text-lime-pale transition">
                    Carpintería
                  </a>
                </li>
                <li>
                  <a href="#metricas" className="hover:text-lime-pale transition">
                    Medidas y Calibres
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase text-lime-pale/80 mb-3 tracking-wider font-semibold">
                OPERACIONES
              </p>
              <ul className="space-y-2.5 text-white/85">
                <li>
                  <a href="#nosotros" className="hover:text-lime-pale transition">
                    Planta Yaracuy
                  </a>
                </li>
                <li>
                  <a href="#calidad" className="hover:text-lime-pale transition">
                    Importación
                  </a>
                </li>
                <li>
                  <a href="#calidad" className="hover:text-lime-pale transition">
                    Distribución
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase text-lime-pale/80 mb-3 tracking-wider font-semibold">
                NOSOTROS
              </p>
              <ul className="space-y-2.5 text-white/85">
                <li>
                  <a href="#nosotros" className="hover:text-lime-pale transition">
                    IMAYACA
                  </a>
                </li>
                <li>
                  <a href="#nuestra-gente" className="hover:text-lime-pale transition">
                    Nuestra Gente
                  </a>
                </li>
                <li>
                  <a href="#capacidades" className="hover:text-lime-pale transition">
                    Galería de Planta
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onOpenQuoteModal("Contacto Directo IMAYA")}
                    className="hover:text-lime-pale transition cursor-pointer"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase text-lime-pale/80 mb-3 tracking-wider font-semibold">
                CONECTA
              </p>
              <ul className="space-y-2.5 text-white/85">
                <li>
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent("Hola, me comunico desde la web de Maderas IMAYA para solicitar información y cotización.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-pale font-mono transition"
                  >
                    WhatsApp: {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-pale flex items-center gap-1 font-medium transition"
                  >
                    <Instagram className="w-3.5 h-3.5" /> Instagram
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onOpenQuoteModal("Solicitar Cotización de Ventas al Mayor")}
                    className="hover:text-lime-pale transition cursor-pointer"
                  >
                    Ventas al Mayor
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenQuoteModal("Solicitar Ficha Técnica y Guía de Uso")}
                    className="hover:text-lime-pale transition cursor-pointer"
                  >
                    Ficha Técnica
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>© 2026 {companyInfo.legalName}. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a
              href={companyInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-lime-pale transition"
            >
              {companyInfo.instagramHandle}
            </a>
            <button
              onClick={() => onOpenQuoteModal("Condiciones de Despacho y Venta")}
              className="underline hover:text-lime-pale transition cursor-pointer"
            >
              Condiciones de Despacho
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
