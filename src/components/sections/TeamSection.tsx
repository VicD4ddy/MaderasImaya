"use client";

import React from "react";
import { assetPath } from "@/lib/utils";
import { ShieldCheck, Award, HeartHandshake, ArrowRight } from "lucide-react";

interface TeamSectionProps {
  onOpenQuoteModal?: (title?: string) => void;
}

export function TeamSection({ onOpenQuoteModal }: TeamSectionProps) {
  return (
    <section
      id="nuestra-gente"
      className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-transparent border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Institutional Tribute & Human Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Technical Tag */}
            <span className="font-mono text-xs text-imaya-green font-semibold tracking-wider block mb-3">
              [ TALENTO HUMANO • SAN FELIPE, YARACUY ]
            </span>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-forest-dark leading-snug mb-6">
              El Orgullo y la Fuerza Detrás de Cada Lámina
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              En IMAYA, la ingeniería y la maquinaria pesada cobran verdadero sentido gracias a
              las manos de nuestros trabajadores. Cada tablero de Pino Caribe es el resultado del
              compromiso técnico, la experiencia y la dedicación de hombres y mujeres yaracuyanos
              que transforman con orgullo los recursos de nuestra tierra en madera de máxima firmeza
              para los proyectos de construcción más exigentes de Venezuela.
            </p>

            {/* 3 Pillars of Human Excellence (Swiss Precision Industrial Badges) */}
            <div className="space-y-3.5 mb-8">
              {/* Pillar 1 */}
              <div
                style={{ borderColor: "rgba(0, 0, 0, 0.06)" }}
                className="group relative p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_4px_20px_rgba(20,32,25,0.04)] hover:shadow-[0_8px_30px_rgba(19,136,68,0.08)] hover:-translate-y-0.5 hover:border-imaya-green/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      minHeight: "40px",
                      maxWidth: "40px",
                      maxHeight: "40px",
                      flexShrink: 0,
                      alignSelf: "flex-start",
                    }}
                    className="rounded-md bg-forest-dark border border-white/10 text-lime-pale flex items-center justify-center shrink-0 group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all duration-300 shadow-sm"
                  >
                    <ShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-medium text-forest-dark group-hover:text-imaya-green transition-colors">
                        Rigor Técnico y Seguridad Operativa
                      </h3>
                      <span className="font-mono text-xs font-semibold text-imaya-green/80 tabular-nums shrink-0">
                        01
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Operación calificada en tornos continuos, secadores y prensas térmicas de alta
                      presión bajo estrictas normas de protección industrial y bienestar laboral.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div
                style={{ borderColor: "rgba(0, 0, 0, 0.06)" }}
                className="group relative p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_4px_20px_rgba(20,32,25,0.04)] hover:shadow-[0_8px_30px_rgba(19,136,68,0.08)] hover:-translate-y-0.5 hover:border-imaya-green/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      minHeight: "40px",
                      maxWidth: "40px",
                      maxHeight: "40px",
                      flexShrink: 0,
                      alignSelf: "flex-start",
                    }}
                    className="rounded-md bg-forest-dark border border-white/10 text-lime-pale flex items-center justify-center shrink-0 group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all duration-300 shadow-sm"
                  >
                    <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-medium text-forest-dark group-hover:text-imaya-green transition-colors">
                        Destreza y Calibración Milimétrica
                      </h3>
                      <span className="font-mono text-xs font-semibold text-imaya-green/80 tabular-nums shrink-0">
                        02
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Años de criterio seleccionando grano, espesores y vetas de pino para entregar
                      tableros perfectamente escuadrados, resistentes al empuje del concreto y listos
                      para su uso en obra.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div
                style={{ borderColor: "rgba(0, 0, 0, 0.06)" }}
                className="group relative p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_4px_20px_rgba(20,32,25,0.04)] hover:shadow-[0_8px_30px_rgba(19,136,68,0.08)] hover:-translate-y-0.5 hover:border-imaya-green/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      minHeight: "40px",
                      maxWidth: "40px",
                      maxHeight: "40px",
                      flexShrink: 0,
                      alignSelf: "flex-start",
                    }}
                    className="rounded-md bg-forest-dark border border-white/10 text-lime-pale flex items-center justify-center shrink-0 group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all duration-300 shadow-sm"
                  >
                    <HeartHandshake className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-medium text-forest-dark group-hover:text-imaya-green transition-colors">
                        Arraigo Regional y Empleo Digno
                      </h3>
                      <span className="font-mono text-xs font-semibold text-imaya-green/80 tabular-nums shrink-0">
                        03
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Familias yaracuyanas que impulsan la soberanía productiva del país desde San
                      Felipe, forjando un modelo maderero transparente, seguro y de clase mundial.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            {onOpenQuoteModal && (
              <div>
                <button
                  onClick={() => onOpenQuoteModal("Contacto con Equipo y Ventas IMAYA")}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-forest-dark hover:text-imaya-green transition group cursor-pointer"
                >
                  <span>Conectar con el equipo comercial y operativo de planta</span>
                  <ArrowRight className="w-4 h-4 text-imaya-green group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Seamless Living GIF Loop */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              style={{ position: "relative" }}
              className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(20,32,25,0.12)] border border-black/5 bg-forest-dark group select-none cursor-pointer"
            >
              {/* Native Continuous Silent Loop (Living GIF behavior) */}
              <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                poster={assetPath("/images/team/trabajadores-imaya-poster.jpg")}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out pointer-events-none"
              >
                <source src={assetPath("/videos/team/trabajadores-imaya.mp4")} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

