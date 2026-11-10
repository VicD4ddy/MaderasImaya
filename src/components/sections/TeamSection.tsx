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
      className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-transparent border-t border-white/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Institutional Tribute & Human Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="rounded-2xl p-6 sm:p-8 bg-forest-dark/85 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.28)] mb-6">
              {/* Technical Tag */}
              <span className="font-mono text-xs text-lime-pale font-semibold tracking-wider block mb-3">
                [ TALENTO HUMANO • SAN FELIPE, YARACUY ]
              </span>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white leading-snug mb-4">
                El Orgullo y la Fuerza Detrás de Cada Lámina
              </h2>

              {/* Narrative Paragraph */}
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                La precisión de nuestra maquinaria se respalda en personal calificado en planta,
                garantizando tableros homogéneos, escuadrados y con entrega inmediata.
              </p>
            </div>

            {/* 3 Pillars of Human Excellence (Swiss Precision Industrial Badges) */}
            <div className="space-y-3.5 mb-8">
              {/* Pillar 1 */}
              <div
                className="group relative p-4 sm:p-5 rounded-xl bg-forest-dark/80 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.28)] hover:bg-forest-dark/90 hover:shadow-[0_12px_32px_rgba(0,0,0,0.38)] hover:-translate-y-0.5 hover:border-lime-pale/40 transition-all duration-300"
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
                    className="rounded-md bg-white/10 border border-white/15 text-lime-pale flex items-center justify-center shrink-0 group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all duration-300 shadow-sm"
                  >
                    <ShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-lime-pale transition-colors">
                        Rigor Técnico y Seguridad Operativa
                      </h3>
                      <span className="font-mono text-xs font-semibold text-lime-pale/90 tabular-nums shrink-0">
                        01
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      Operación en tornos, secadores continuos y prensas térmicas bajo estrictas normas de seguridad industrial.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div
                className="group relative p-4 sm:p-5 rounded-xl bg-forest-dark/80 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.28)] hover:bg-forest-dark/90 hover:shadow-[0_12px_32px_rgba(0,0,0,0.38)] hover:-translate-y-0.5 hover:border-lime-pale/40 transition-all duration-300"
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
                    className="rounded-md bg-white/10 border border-white/15 text-lime-pale flex items-center justify-center shrink-0 group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all duration-300 shadow-sm"
                  >
                    <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-lime-pale transition-colors">
                        Destreza y Calibración Milimétrica
                      </h3>
                      <span className="font-mono text-xs font-semibold text-lime-pale/90 tabular-nums shrink-0">
                        02
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      Selección de veta y calibración milimétrica para máxima resistencia al empuje del concreto en encofrados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div
                className="group relative p-4 sm:p-5 rounded-xl bg-forest-dark/80 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.28)] hover:bg-forest-dark/90 hover:shadow-[0_12px_32px_rgba(0,0,0,0.38)] hover:-translate-y-0.5 hover:border-lime-pale/40 transition-all duration-300"
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
                    className="rounded-md bg-white/10 border border-white/15 text-lime-pale flex items-center justify-center shrink-0 group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all duration-300 shadow-sm"
                  >
                    <HeartHandshake className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-lime-pale transition-colors">
                        Arraigo Regional y Empleo Digno
                      </h3>
                      <span className="font-mono text-xs font-semibold text-lime-pale/90 tabular-nums shrink-0">
                        03
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      Producción continua y transparente con mano de obra especializada en el estado Yaracuy.
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
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-lime-pale hover:text-white bg-forest-dark/85 backdrop-blur-md border border-white/15 hover:border-lime-pale/40 px-4 py-2.5 rounded-xl shadow-md transition group cursor-pointer"
                >
                  <span>Contactar al equipo de planta</span>
                  <ArrowRight className="w-4 h-4 text-lime-pale group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Seamless Living GIF Loop */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              style={{ position: "relative" }}
              className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(20,32,25,0.12)] border border-black/5 bg-forest-dark select-none"
            >
              {/* Native Continuous Silent Loop (Living GIF behavior) with Cine Industrial grading */}
              <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                poster={assetPath("/images/team/trabajadores-imaya-poster.jpg")}
                style={{ filter: "brightness(0.58) contrast(1.20) saturate(1.05)" }}
                className="w-full h-full object-cover object-center brightness-[0.58] contrast-[1.20] saturate-[1.05] pointer-events-none"
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

