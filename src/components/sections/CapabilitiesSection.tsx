"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const galleryImages = [
  {
    id: "proceso",
    src: "/images/gallery/proceso-calidad.jpg",
    title: "Detrás de cada pieza hay un Proceso",
    subtitle: "Compromiso con la Calidad y Equipo Humano",
  },
  {
    id: "materia-prima",
    src: "/images/gallery/materia-prima.png",
    title: "Materia Prima",
    subtitle: "Pino Caribe Seleccionado de Primera",
  },
  {
    id: "capas-prensado",
    src: "/images/gallery/capas-prensado.png",
    title: "Capas y Prensado",
    subtitle: "Prensado Térmico y Resina de Alta Adherencia",
  },
  {
    id: "escuadrado-lijado",
    src: "/images/gallery/escuadrado-lijado.png",
    title: "Escuadrado y Lijado",
    subtitle: "Corte Milimétrico y Acabado Listo para Usar",
  },
  {
    id: "producto-terminado",
    src: "/images/gallery/producto-terminado.png",
    title: "Producto Terminado",
    subtitle: "Madera Contrachapada Confiable y Versátil",
  },
];

export function CapabilitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="capacidades" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-imaya-green font-medium tracking-wider block mb-3 font-semibold">
              [ Galería de Producción • Planta Yaracuy ]
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-forest-dark leading-snug">
              Asóciate con IMAYA para superar los retos más exigentes en construcción y carpintería
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full border border-gray-200 hover:bg-lime-pale text-forest-dark transition cursor-pointer shadow-sm"
              aria-label="Desplazar a la izquierda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full border border-gray-200 hover:bg-lime-pale text-forest-dark transition cursor-pointer shadow-sm"
              aria-label="Desplazar a la derecha"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Carousel Showcase */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 pt-2"
        >
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.src)}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] flex-1 snap-start group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200/80 bg-white"
            >
              {/* Image Container with 4:5 Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 340px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Hover Overlay with Expand Indicator */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-lime-pale" /> Ver en Grande
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caption Hint */}
        <div className="flex items-center text-xs text-gray-500 pt-2 font-mono">
          <span>Desliza para explorar la galería de la planta</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition cursor-pointer"
              aria-label="Cerrar vista grande"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-[4/5] max-h-[82vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <Image
                src={selectedImage}
                alt="Fotografía de Maderas IMAYA"
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
