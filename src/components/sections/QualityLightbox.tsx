"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface QualityItem {
  id: string;
  type: "video" | "image";
  src: string;
  poster?: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string;
}

export const QUALITY_ITEMS: QualityItem[] = [
  {
    id: "torno-rotatorio",
    type: "video",
    src: "/videos/quality/torno-rotatorio.mp4",
    poster: "/images/quality/torno-rotatorio-poster.jpg",
    badge: "Torno Rotatorio Industrial",
    title: "Desenrollado Continuo de Rolas",
    subtitle: "Corte Tangencial a Alta Velocidad",
    description:
      "La rola de Pino Caribe gira a alta velocidad en el torno mientras una cuchilla micrométrica la desenrolla en una lámina continua de madera uniforme, sin fracturas ni desviaciones.",
    specs: "Tolerancia ±0.2 mm • San Felipe, Yaracuy",
  },
  {
    id: "gandola-transporte",
    type: "video",
    src: "/videos/quality/gandola-transporte.mp4",
    poster: "/images/quality/gandola-transporte-poster.jpg",
    badge: "Logística Pesada",
    title: "Recepción de Rolas en Planta",
    subtitle: "Gandola GMC Brigadier",
    description:
      "Llegada continua de gandolas de estacas cargadas de troncos cosechados directamente de plantaciones de Pino Caribe para su descarga inmediata en el patio de procesamiento.",
    specs: "Transporte Pesado • Carga Forestal",
  },
  {
    id: "apilado-chapas",
    type: "video",
    src: "/videos/quality/apilado-chapas.mp4",
    poster: "/images/quality/apilado-chapas-poster.jpg",
    badge: "Mesa de Corte y Clasificación",
    title: "Apilado Mecánico de Láminas",
    subtitle: "Guillotina y Separación Estructural",
    description:
      "Las chapas recién desenrolladas pasan por la guillotina automática y se apilan ordenadamente para su clasificación según densidad y preparación previa al prensado en caliente.",
    specs: "Láminas Calibradas • Chapa de Pino",
  },
  {
    id: "patio-industrial",
    type: "image",
    src: "/images/quality/patio-industrial-yaracuy.jpg",
    badge: "Patio de Acopio",
    title: "Clasificación y Carga Pesada",
    subtitle: "Tractor Cargador Frontal",
    description:
      "Vista panorámica del patio industrial en la Carretera Panamericana. El cargador frontal organiza y alimenta continuamente las líneas de aserrío y torno con troncos seleccionados.",
    specs: "Patio Industrial • San Felipe, Yaracuy",
  },
  {
    id: "gandola-descarga",
    type: "image",
    src: "/images/quality/gandola-rolas-descarga.jpg",
    badge: "Materia Prima 100%",
    title: "Rolas de Pino Caribe Seleccionadas",
    subtitle: "Plataforma de Descarga",
    description:
      "Detalle de las rolas de Pino Caribe flejadas en plataforma. Selección estricta de diámetro, densidad y rectitud para garantizar la resistencia estructural del contrachapado final.",
    specs: "Pino Caribe Certificado • 100% Madera Nacional",
  },
];

interface QualityLightboxProps {
  initialIndex?: number;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export function QualityLightbox({
  initialIndex = 0,
  onClose,
}: QualityLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % QUALITY_ITEMS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + QUALITY_ITEMS.length) % QUALITY_ITEMS.length);
  }, []);

  // Keyboard navigation & Esc handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleNext, handlePrev, onClose]);

  if (!isClient) return null;

  const currentItem = QUALITY_ITEMS[currentIndex];

  const modalContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galería Industrial IMAYA"
    >
      {/* Modal Dialog Card (Guaranteed Fullscreen Height & Width, Solid Contrast) */}
      <div
        className="relative flex flex-col bg-[#0B100D] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          width: "min(1080px, 94vw)",
          height: "min(880px, 90vh)",
          maxHeight: "90vh",
          zIndex: 1000000,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="shrink-0 flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-lime-pale bg-forest-dark px-3 py-1 rounded-md border border-white/15 tabular-nums">
              {String(currentIndex + 1).padStart(2, "0")} / {String(QUALITY_ITEMS.length).padStart(2, "0")}
            </span>
            <span className="text-xs text-white/80 font-mono hidden sm:inline-block">
              {currentItem.badge}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-block text-[11px] font-mono text-white/45">
              [←] [→] Navegar &nbsp;•&nbsp; [ESC] Salir
            </span>
            <button
              onClick={onClose}
              className="text-white/90 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 transition cursor-pointer flex items-center justify-center shadow-md"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Viewing Area (Takes full flex height with object-contain) */}
        <div className="relative flex-1 w-full bg-black flex items-center justify-center p-3 sm:p-5 overflow-hidden">
          {currentItem.type === "video" ? (
            <video
              key={currentItem.src}
              autoPlay
              loop
              muted
              playsInline
              poster={currentItem.poster}
              className="w-full h-full object-contain mx-auto"
            >
              <source src={currentItem.src} type="video/mp4" />
            </video>
          ) : (
            <div className="relative w-full h-full">
              <Image
                key={currentItem.src}
                src={currentItem.src}
                alt={currentItem.title}
                fill
                priority
                sizes="(max-width: 1280px) 95vw, 1100px"
                className="object-contain"
              />
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 hover:bg-black/95 text-white/90 hover:text-white border border-white/30 flex items-center justify-center transition shadow-2xl hover:scale-110 cursor-pointer z-30"
            aria-label="Elemento anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 hover:bg-black/95 text-white/90 hover:text-white border border-white/30 flex items-center justify-center transition shadow-2xl hover:scale-110 cursor-pointer z-30"
            aria-label="Elemento siguiente"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Footer Details */}
        <div className="shrink-0 px-5 sm:px-6 py-4 bg-black/75 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {currentItem.title}
              </h3>
              <span className="text-xs text-lime-pale font-mono hidden sm:inline-block">
                — {currentItem.subtitle}
              </span>
            </div>
            <p className="text-xs text-white/80 max-w-2xl leading-relaxed">
              {currentItem.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-[11px] font-mono text-lime-pale bg-forest-dark/95 px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-md">
              <Maximize2 className="w-3.5 h-3.5 text-lime-pale" /> {currentItem.specs}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
