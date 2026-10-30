"use client";

import React, { useRef, useState } from "react";
import { Volume2, VolumeX, ShieldCheck, Award, HeartHandshake, ArrowRight } from "lucide-react";

interface TeamSectionProps {
  onOpenQuoteModal?: (title?: string) => void;
}

export function TeamSection({ onOpenQuoteModal }: TeamSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

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

          {/* Right Column: High-Craft Vertical Video Player */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/20 bg-forest-dark group">
              {/* Native Video Element with faststart and poster */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster="/images/team/trabajadores-imaya-poster.jpg"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              >
                <source src="/videos/team/trabajadores-imaya.mp4" type="video/mp4" />
                Tu navegador no soporta reproducción de video HTML5.
              </video>

              {/* Top Glassmorphic Controls Bar */}
              <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20 pointer-events-none">
                {/* Live Plant Status Badge */}
                <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] font-mono text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="tracking-wide">EQUIPO EN PLANTA</span>
                </div>

                {/* Interactive Audio Toggle Button */}
                <button
                  type="button"
                  onClick={toggleSound}
                  className="pointer-events-auto bg-black/80 hover:bg-black/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/15 text-white transition flex items-center gap-1.5 text-xs font-mono cursor-pointer shadow-lg active:scale-95"
                  aria-label={isMuted ? "Activar audio del video" : "Silenciar audio del video"}
                  title={isMuted ? "Activar audio" : "Silenciar audio"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-white/80" />
                      <span className="text-[11px]">Audio</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-lime-pale animate-bounce" />
                      <span className="text-[11px] text-lime-pale font-medium">Activo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bottom Glassmorphic Label Overlay */}
              <div className="absolute bottom-3.5 inset-x-3.5 z-20 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white shadow-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-lime-pale tracking-wide">
                      Operadores de Planta IMAYA
                    </span>
                    <span className="text-[10px] font-mono text-white/70">San Felipe</span>
                  </div>
                  <p className="text-[11px] text-white/85 leading-snug">
                    Carretera Panamericana, Yaracuy — Compromiso y pasión en cada jornada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

