"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";
import { ArrowRight, Layers, Truck, Ruler, Trees, Expand, Flame, Scissors, Boxes } from "lucide-react";
import { QualityLightbox } from "./QualityLightbox";

interface QualitySectionProps {
  onOpenQuoteModal?: (title?: string) => void;
}

export function QualitySection({ onOpenQuoteModal }: QualitySectionProps) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const textTitleStyle: React.CSSProperties = {
    textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)",
  };

  const subtextShadowStyle: React.CSSProperties = {
    textShadow: "0 1px 4px rgba(0,0,0,0.95)",
  };

  return (
    <section id="calidad" className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Heading + Narrative + Featured Prensa Video Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-6 lg:mb-8">
              <span className="font-mono text-xs text-imaya-green font-medium tracking-wider block mb-3">
                [ Calidad y Firmeza ]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight leading-[1.15] text-forest-dark mb-5">
                Madera Calibrada para{" "}
                <br />
                Exigencias Reales
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Selección directa de rolas y prensado térmico de precisión para entregar tableros sin
                alabeo, estables y de acabado superior.
              </p>
              <button
                onClick={() => onOpenQuoteModal?.("Solicitar Catálogo de Productos")}
                className="inline-flex items-center gap-2 bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs font-semibold px-4 py-2.5 rounded transition shadow-sm cursor-pointer"
              >
                Solicitar Catálogo de Productos <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Left Slot: Video Prensa Térmica Hidráulica (Index 0 in Lightbox) */}
            <div
              onClick={() => openLightbox(0)}
              className="h-[280px] sm:h-[320px] lg:h-[480px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(0);
                }
              }}
              aria-label="Abrir video de Prensa Hidráulica en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={assetPath("/images/quality/prensa-hidraulica-poster.jpg")}
                style={{ filter: "brightness(0.75) contrast(1.15) saturate(1.05)" }}
                className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.15] saturate-[1.05] group-hover:scale-105 transition duration-700"
              >
                <source src={assetPath("/videos/quality/prensa-hidraulica.mp4")} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-all duration-500 flex flex-col justify-between p-4 sm:p-5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs font-mono uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 shadow-sm group-hover:bg-black/60 transition-colors">
                    <Flame className="w-3.5 h-3.5 text-lime-pale" />
                    Prensado Térmico Continuo
                  </span>
                  <span className="text-[11px] font-mono text-lime-pale bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-sm group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all">
                    <Expand className="w-3.5 h-3.5" /> Ver en Galería ↗
                  </span>
                </div>
                <div className="max-w-xl pb-1">
                  <h3
                    className="text-base sm:text-lg font-bold text-white uppercase tracking-wide leading-tight"
                    style={textTitleStyle}
                  >
                    Prensa Hidráulica Multicapa
                  </h3>
                  <p className="text-xs text-white/90 mt-1" style={subtextShadowStyle}>
                    Curado de resinas fenólicas a alta presión y temperatura uniforme
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid (Protected Frosted-Glass Pills + Heavy Black Stroke) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Slot 1: Top Full-Span Video (Torno Rotatorio Industrial) */}
            <div
              onClick={() => openLightbox(1)}
              className="sm:col-span-2 h-[290px] sm:h-[336px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(1);
                }
              }}
              aria-label="Abrir video de Torno Rotatorio en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={assetPath("/images/quality/torno-rotatorio-poster.jpg")}
                style={{ filter: "brightness(0.70) contrast(1.15) saturate(1.05)" }}
                className="w-full h-full object-cover object-center brightness-[0.70] contrast-[1.15] saturate-[1.05] group-hover:scale-105 transition duration-700"
              >
                <source src={assetPath("/videos/quality/torno-rotatorio.mp4")} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/55 transition-all duration-500 flex flex-col justify-between p-4 sm:p-5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs font-mono uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 shadow-sm group-hover:bg-black/60 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-lime-pale animate-pulse" />
                    Lotes Calibrados • San Felipe, Yaracuy
                  </span>
                  <span className="text-[11px] font-mono text-lime-pale bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-sm group-hover:bg-lime-pale group-hover:text-forest-dark group-hover:border-lime-pale transition-all">
                    <Expand className="w-3.5 h-3.5" /> Ver en Galería ↗
                  </span>
                </div>
                <div className="max-w-xl pb-1">
                  <h3
                    className="text-base sm:text-lg font-bold text-white uppercase tracking-wide leading-tight"
                    style={textTitleStyle}
                  >
                    Desenrollado Continuo de Rolas
                  </h3>
                  <p className="text-xs text-white/90 mt-1" style={subtextShadowStyle}>
                    Torno rotatorio industrial • Tolerancia micrométrica ±0.2mm
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 2: Video Gandola GMC (Logística & Despacho) */}
            <div
              onClick={() => openLightbox(2)}
              className="h-[238px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(2);
                }
              }}
              aria-label="Abrir video de Logística y Despacho en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={assetPath("/images/quality/gandola-transporte-poster.jpg")}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              >
                <source src={assetPath("/videos/quality/gandola-transporte.mp4")} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-all duration-500 flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm group-hover:bg-black/60 transition-colors">
                    <Truck className="w-3.5 h-3.5 text-lime-pale" /> Logística
                  </span>
                  <span className="bg-black/40 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-sm group-hover:bg-lime-pale group-hover:border-lime-pale transition-all">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition-colors" />
                  </span>
                </div>
                <div className="max-w-xl pb-0.5">
                  <h3
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textTitleStyle}
                  >
                    IMPORTACIÓN Y DISTRIBUCIÓN
                  </h3>
                  <p className="text-[11px] text-white/90 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Despacho seguro en paletas flejadas y gandolas
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 3: Video Apilado de Chapas (Especialidad Contrachapado) */}
            <div
              onClick={() => openLightbox(3)}
              className="h-[238px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(3);
                }
              }}
              aria-label="Abrir video de Especialidad en Contrachapado en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={assetPath("/images/quality/apilado-chapas-poster.jpg")}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              >
                <source src={assetPath("/videos/quality/apilado-chapas.mp4")} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-all duration-500 flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm group-hover:bg-black/60 transition-colors">
                    <Layers className="w-3.5 h-3.5 text-lime-pale" /> Especialidad
                  </span>
                  <span className="bg-black/40 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-sm group-hover:bg-lime-pale group-hover:border-lime-pale transition-all">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition-colors" />
                  </span>
                </div>
                <div className="max-w-xl pb-0.5">
                  <h3
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textTitleStyle}
                  >
                    CONTRACHAPADO DE PINO CARIBE
                  </h3>
                  <p className="text-[11px] text-white/90 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Chapas cruzadas a 90° prensadas a alta temperatura
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 4: Video Guillotina Industrial (Corte y Dimensionado) */}
            <div
              onClick={() => openLightbox(4)}
              className="h-[238px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(4);
                }
              }}
              aria-label="Abrir video de Guillotina Industrial en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={assetPath("/images/quality/guillotina-dimensionado-poster.jpg")}
                style={{ filter: "brightness(0.75) contrast(1.15) saturate(1.05)" }}
                className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.15] saturate-[1.05] group-hover:scale-105 transition duration-700"
              >
                <source src={assetPath("/videos/quality/guillotina-dimensionado.mp4")} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-all duration-500 flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm group-hover:bg-black/60 transition-colors">
                    <Scissors className="w-3.5 h-3.5 text-lime-pale" /> Guillotina
                  </span>
                  <span className="bg-black/40 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-sm group-hover:bg-lime-pale group-hover:border-lime-pale transition-all">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition-colors" />
                  </span>
                </div>
                <div className="max-w-xl pb-0.5">
                  <h3
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textTitleStyle}
                  >
                    CORTE Y GUILLOTINADO
                  </h3>
                  <p className="text-[11px] text-white/90 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Escuadrado milimétrico y clasificación de chapas
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 5: Video Montacargas y Despacho de Tableros */}
            <div
              onClick={() => openLightbox(5)}
              className="h-[238px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(5);
                }
              }}
              aria-label="Abrir video de Montacargas y Paletizado en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={assetPath("/images/quality/montacargas-despacho-poster.jpg")}
                style={{ filter: "brightness(0.75) contrast(1.15) saturate(1.05)" }}
                className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.15] saturate-[1.05] group-hover:scale-105 transition duration-700"
              >
                <source src={assetPath("/videos/quality/montacargas-despacho.mp4")} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-all duration-500 flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-sm group-hover:bg-black/60 transition-colors">
                    <Boxes className="w-3.5 h-3.5 text-lime-pale" /> Paletizado
                  </span>
                  <span className="bg-black/40 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-sm group-hover:bg-lime-pale group-hover:border-lime-pale transition-all">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition-colors" />
                  </span>
                </div>
                <div className="max-w-xl pb-0.5">
                  <h3
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textTitleStyle}
                  >
                    MONTACARGAS Y DESPACHO
                  </h3>
                  <p className="text-[11px] text-white/90 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Paletas flejadas y carga directa en planta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Quality Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <QualityLightbox
          initialIndex={activeLightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
