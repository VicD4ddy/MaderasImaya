"use client";

import React from "react";
import { assetPath } from "@/lib/utils";
import { ArrowRight, Layers, Truck, Flame, Scissors, Boxes } from "lucide-react";

interface QualitySectionProps {
  onOpenQuoteModal?: (title?: string) => void;
}

export function QualitySection({ onOpenQuoteModal }: QualitySectionProps) {
  return (
    <section id="calidad" className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Heading + Narrative + Featured Prensa Video Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-6 lg:mb-8 rounded-2xl p-6 sm:p-8 bg-forest-dark/85 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
              <span className="font-mono text-xs text-lime-pale font-semibold tracking-wider block mb-3">
                [ Calidad y Firmeza ]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight leading-[1.15] text-white mb-5">
                Madera Calibrada para{" "}
                <br />
                Exigencias Reales
              </h2>
              <p className="text-sm text-white/90 leading-relaxed mb-6">
                Selección directa de rolas y prensado térmico de precisión para entregar tableros sin
                alabeo, estables y de acabado superior.
              </p>
              <button
                onClick={() => onOpenQuoteModal?.("Solicitar Catálogo de Productos")}
                className="inline-flex items-center gap-2 bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs font-semibold px-4 py-2.5 rounded transition shadow-md cursor-pointer"
              >
                Solicitar Catálogo de Productos <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Left Slot: Video Prensa Térmica Hidráulica */}
            <div className="flex flex-col gap-2">
              <span className="self-start text-white text-xs font-mono uppercase tracking-wider bg-forest-dark px-3 py-1.5 rounded-lg border border-forest-dark/15 flex items-center gap-2 shadow-sm">
                <Flame className="w-3.5 h-3.5 text-lime-pale" />
                Prensado Térmico Continuo
              </span>
              <div className="h-[420px] sm:h-[320px] lg:h-[480px] rounded-xl overflow-hidden relative bg-forest-dark border border-forest-dark/10 shadow-sm select-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={assetPath("/images/quality/prensa-hidraulica-poster.jpg")}
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={assetPath("/videos/quality/prensa-hidraulica.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid (External Pills + Clean Full-Bleed Videos) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Slot 1: Top Full-Span Video (Torno Rotatorio Industrial) */}
            <div className="sm:col-span-2 flex flex-col gap-2">
              <span className="self-start text-white text-xs font-mono uppercase tracking-wider bg-forest-dark px-3 py-1.5 rounded-lg border border-forest-dark/15 flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-lime-pale animate-pulse" />
                Lotes Calibrados • San Felipe, Yaracuy
              </span>
              <div className="h-[435px] sm:h-[336px] rounded-xl overflow-hidden relative bg-forest-dark border border-forest-dark/10 shadow-sm select-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={assetPath("/images/quality/torno-rotatorio-poster.jpg")}
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={assetPath("/videos/quality/torno-rotatorio.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Slot 2: Video Gandola GMC (Logística & Despacho) */}
            <div className="flex flex-col gap-2">
              <span className="self-start text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-forest-dark px-2.5 py-1 rounded-lg border border-forest-dark/15 shadow-sm">
                <Truck className="w-3.5 h-3.5 text-lime-pale" /> Logística
              </span>
              <div className="h-[357px] sm:h-[238px] rounded-xl overflow-hidden relative bg-forest-dark border border-forest-dark/10 shadow-sm select-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={assetPath("/images/quality/gandola-transporte-poster.jpg")}
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={assetPath("/videos/quality/gandola-transporte.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Slot 3: Video Apilado de Chapas (Especialidad Contrachapado) */}
            <div className="flex flex-col gap-2">
              <span className="self-start text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-forest-dark px-2.5 py-1 rounded-lg border border-forest-dark/15 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-lime-pale" /> Especialidad
              </span>
              <div className="h-[357px] sm:h-[238px] rounded-xl overflow-hidden relative bg-forest-dark border border-forest-dark/10 shadow-sm select-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={assetPath("/images/quality/apilado-chapas-poster.jpg")}
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={assetPath("/videos/quality/apilado-chapas.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Slot 4: Video Guillotina Industrial (Corte y Dimensionado) */}
            <div className="flex flex-col gap-2">
              <span className="self-start text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-forest-dark px-2.5 py-1 rounded-lg border border-forest-dark/15 shadow-sm">
                <Scissors className="w-3.5 h-3.5 text-lime-pale" /> Guillotina
              </span>
              <div className="h-[357px] sm:h-[238px] rounded-xl overflow-hidden relative bg-forest-dark border border-forest-dark/10 shadow-sm select-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={assetPath("/images/quality/guillotina-dimensionado-poster.jpg")}
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={assetPath("/videos/quality/guillotina-dimensionado.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Slot 5: Video Montacargas y Despacho de Tableros */}
            <div className="flex flex-col gap-2">
              <span className="self-start text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-forest-dark px-2.5 py-1 rounded-lg border border-forest-dark/15 shadow-sm">
                <Boxes className="w-3.5 h-3.5 text-lime-pale" /> Paletizado
              </span>
              <div className="h-[357px] sm:h-[238px] rounded-xl overflow-hidden relative bg-forest-dark border border-forest-dark/10 shadow-sm select-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={assetPath("/images/quality/montacargas-despacho-poster.jpg")}
                  className="w-full h-full object-cover object-center pointer-events-none"
                >
                  <source src={assetPath("/videos/quality/montacargas-despacho.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
