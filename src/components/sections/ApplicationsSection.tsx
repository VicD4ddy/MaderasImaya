"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { applicationsData } from "@/data/applications";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ApplicationsSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function ApplicationsSection({ onOpenQuoteModal }: ApplicationsSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const offset = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="aplicaciones" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-imaya-green font-medium tracking-wider block mb-3">
              [ Aplicaciones y Guía Técnica ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-forest-dark leading-tight max-w-md">
              Soluciones en Madera que Perduran en cada Proyecto
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full border border-gray-200 hover:bg-lime-pale transition cursor-pointer"
              aria-label="Desplazar a la izquierda"
            >
              <ArrowLeft className="w-4 h-4 text-forest-dark" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full border border-gray-200 hover:bg-lime-pale transition cursor-pointer"
              aria-label="Desplazar a la derecha"
            >
              <ArrowRight className="w-4 h-4 text-forest-dark" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6"
        >
          {applicationsData.map((app) => (
            <article
              key={app.id}
              onClick={() => onOpenQuoteModal(`Asesoría Técnica: ${app.title}`)}
              className="min-w-[300px] sm:min-w-[380px] flex-1 snap-start group cursor-pointer"
            >
              <div style={{ position: "relative" }} className="h-60 rounded-xl overflow-hidden mb-4 relative">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-forest-dark/85 backdrop-blur-sm text-lime-pale text-[10px] font-mono px-2.5 py-1 rounded z-10">
                  {app.calibers}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-forest-dark mb-1">{app.title}</h3>
              <div className="flex items-end justify-between gap-4 pb-4 border-b border-gray-100">
                <p className="text-xs text-gray-600 max-w-xs leading-relaxed">{app.description}</p>
                <span className="bg-lime-pale group-hover:bg-lime-hover text-forest-dark text-[11px] font-medium px-3 py-1 rounded shrink-0 transition">
                  Consultar
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-3 font-mono">
                <span>{app.category}</span>
                <span>{app.material}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

