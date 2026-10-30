"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Layers, Truck, Ruler, Trees, Expand } from "lucide-react";
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

  const textStrokeStyle: React.CSSProperties = {
    WebkitTextStroke: "1.5px black",
    paintOrder: "stroke fill",
    textShadow: "0 1px 4px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,0.9)",
  };

  const subtextShadowStyle: React.CSSProperties = {
    textShadow: "0 1px 3px rgba(0,0,0,1)",
  };

  return (
    <section id="calidad" className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Heading + Narrative + Testimonial */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-imaya-green font-medium tracking-wider block mb-3">
                [ Calidad y Firmeza ]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight leading-[1.15] text-forest-dark mb-6">
                Una Buena Elección
                <br />
                Lo Cambia Todo
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Desde nuestra planta en la Carretera Panamericana, San Felipe, Yaracuy,
                seleccionamos rolas de Pino Caribe de primera y procesamos láminas contrachapadas
                diseñadas para resistir el trabajo pesado en obra y lucir impecables en carpintería.
              </p>
              <button
                onClick={() => onOpenQuoteModal?.("Solicitar Catálogo de Productos")}
                className="inline-flex items-center gap-2 bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs font-semibold px-4 py-2.5 rounded transition shadow-sm cursor-pointer"
              >
                Solicitar Catálogo de Productos <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Left Testimonial Block */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-800 mb-4">
                <Layers className="w-4 h-4 text-imaya-green" /> CONSTRUCTORA & ENCOFRADOS DEL CENTRO
              </div>
              <blockquote className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 italic">
                &ldquo;IMAYA entendió nuestros tiempos de obra desde el primer día. Su madera
                contrachapada de Pino Caribe nos dio la firmeza estructural, el escuadrado exacto y
                la reutilización en encofrado que ningún otro proveedor logró igualar.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/testimonials/carlos-mendez.jpg"
                  alt="Ing. Carlos Méndez"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-lime-pale"
                />
                <div>
                  <div className="text-xs font-semibold text-gray-900">Ing. Carlos Méndez</div>
                  <div className="text-[11px] text-gray-500">
                    Director de Operaciones, Obras Civiles
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid (Protected Frosted-Glass Pills + Heavy Black Stroke) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Slot 1: Top Full-Span Video (Torno Rotatorio Industrial) */}
            <div
              onClick={() => openLightbox(0)}
              className="sm:col-span-2 h-52 sm:h-60 rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(0);
                }
              }}
              aria-label="Abrir video de Torno Rotatorio en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/quality/torno-rotatorio-poster.jpg"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              >
                <source src="/videos/quality/torno-rotatorio.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 flex flex-col justify-between p-4 sm:p-5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-lime-pale animate-pulse" />
                    Lotes Calibrados • San Felipe, Yaracuy
                  </span>
                  <span className="text-[11px] font-mono text-lime-pale bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5 shadow-lg group-hover:bg-lime-pale group-hover:text-forest-dark transition">
                    <Expand className="w-3.5 h-3.5" /> Ver en Galería ↗
                  </span>
                </div>
                <div className="bg-black/80 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-white/15 shadow-xl max-w-xl">
                  <h3
                    className="text-base sm:text-lg font-bold text-white uppercase tracking-wide leading-tight"
                    style={textStrokeStyle}
                  >
                    Desenrollado Continuo de Rolas
                  </h3>
                  <p className="text-xs text-white/95 mt-1" style={subtextShadowStyle}>
                    Torno rotatorio industrial • Tolerancia micrométrica ±0.2mm
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 2: Video Gandola GMC (Logística & Despacho) */}
            <div
              onClick={() => openLightbox(1)}
              className="h-[170px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(1);
                }
              }}
              aria-label="Abrir video de Logística y Despacho en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/quality/gandola-transporte-poster.jpg"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              >
                <source src="/videos/quality/gandola-transporte.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 shadow-md">
                    <Truck className="w-3.5 h-3.5 text-lime-pale" /> Logística
                  </span>
                  <span className="bg-black/80 backdrop-blur-md p-1.5 rounded-lg border border-white/15 shadow-md group-hover:bg-lime-pale transition">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition" />
                  </span>
                </div>
                <div className="bg-black/80 backdrop-blur-md p-2.5 rounded-lg border border-white/15 shadow-xl">
                  <h4
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textStrokeStyle}
                  >
                    IMPORTACIÓN Y DISTRIBUCIÓN
                  </h4>
                  <p className="text-[11px] text-white/95 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Despacho seguro en paletas flejadas y gandolas
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 3: Video Apilado de Chapas (Especialidad Contrachapado) */}
            <div
              onClick={() => openLightbox(2)}
              className="h-[170px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(2);
                }
              }}
              aria-label="Abrir video de Especialidad en Contrachapado en galería"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/quality/apilado-chapas-poster.jpg"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              >
                <source src="/videos/quality/apilado-chapas.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 shadow-md">
                    <Layers className="w-3.5 h-3.5 text-lime-pale" /> Especialidad
                  </span>
                  <span className="bg-black/80 backdrop-blur-md p-1.5 rounded-lg border border-white/15 shadow-md group-hover:bg-lime-pale transition">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition" />
                  </span>
                </div>
                <div className="bg-black/80 backdrop-blur-md p-2.5 rounded-lg border border-white/15 shadow-xl">
                  <h4
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textStrokeStyle}
                  >
                    CONTRACHAPADO DE PINO CARIBE
                  </h4>
                  <p className="text-[11px] text-white/95 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Chapas cruzadas a 90° prensadas a alta temperatura
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 4: Foto Patio Industrial y Cargador (Versatilidad & Calibración) */}
            <div
              onClick={() => openLightbox(3)}
              style={{ position: "relative" }}
              className="h-[170px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(3);
                }
              }}
              aria-label="Abrir foto de Patio Industrial en galería"
            >
              <Image
                src="/images/quality/patio-industrial-yaracuy.jpg"
                alt="Patio industrial y cargador frontal en planta IMAYA Yaracuy"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 shadow-md">
                    <Ruler className="w-3.5 h-3.5 text-lime-pale" /> Versatilidad
                  </span>
                  <span className="bg-black/80 backdrop-blur-md p-1.5 rounded-lg border border-white/15 shadow-md group-hover:bg-lime-pale transition">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition" />
                  </span>
                </div>
                <div className="bg-black/80 backdrop-blur-md p-2.5 rounded-lg border border-white/15 shadow-xl">
                  <h4
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textStrokeStyle}
                  >
                    CALIBRACIÓN Y CORTE PRECISO
                  </h4>
                  <p className="text-[11px] text-white/95 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Espesores desde 6 mm hasta 18 mm sin alabeo
                  </p>
                </div>
              </div>
            </div>

            {/* Slot 5: Foto Gandola de Descarga (Rolas de Pino Caribe 100%) */}
            <div
              onClick={() => openLightbox(4)}
              style={{ position: "relative" }}
              className="h-[170px] rounded-xl overflow-hidden relative group bg-forest-dark border border-forest-dark/10 shadow-sm cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(4);
                }
              }}
              aria-label="Abrir foto de Rolas de Pino Caribe en galería"
            >
              <Image
                src="/images/quality/gandola-rolas-descarga.jpg"
                alt="Rolas de Pino Caribe en plataforma de gandola para descarga"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-3.5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-lime-pale font-mono tracking-wider flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 shadow-md">
                    <Trees className="w-3.5 h-3.5 text-lime-pale" /> Materia Prima
                  </span>
                  <span className="bg-black/80 backdrop-blur-md p-1.5 rounded-lg border border-white/15 shadow-md group-hover:bg-lime-pale transition">
                    <Expand className="w-3.5 h-3.5 text-white/90 group-hover:text-forest-dark transition" />
                  </span>
                </div>
                <div className="bg-black/80 backdrop-blur-md p-2.5 rounded-lg border border-white/15 shadow-xl">
                  <h4
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-white leading-tight"
                    style={textStrokeStyle}
                  >
                    ROLAS DE PINO CARIBE 100%
                  </h4>
                  <p className="text-[11px] text-white/95 mt-0.5 line-clamp-1" style={subtextShadowStyle}>
                    Selección directa en patio San Felipe, Yaracuy
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
