"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import {
  ArrowDownRight,
  Building2,
  Hammer,
  Layers,
  Truck,
  Trees,
} from "lucide-react";

interface HeroSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

const marqueeItems = [
  { icon: Building2, text: "ENCOFRADOS DE OBRA CIVIL" },
  { icon: Hammer, text: "CARPINTERÍA ARQUITECTÓNICA" },
  { icon: Layers, text: "CONTRAENCHAPADO PINO CARIBE" },
  { icon: Truck, text: "IMPORTACIÓN Y DISTRIBUCIÓN MAYORISTA" },
  { icon: Trees, text: "MADERA SOSTENIBLE YARACUY" },
];

export function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  return (
    <header
      id="inicio"
      className="relative w-full min-h-[620px] lg:min-h-[80vh] flex flex-col justify-between text-white overflow-hidden bg-forest-dark"
    >
      {/* Background Video + High-Res Poster Image (Bosque Yaracuy) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/bosque-yaracuy.jpg"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 ease-out"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-road-in-the-middle-of-a-forest-41539-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-green-forest-on-a-sunny-day-42862-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Poster fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('/images/hero/bosque-yaracuy.jpg')`,
          }}
        />
      </div>

      {/* Rich Emerald & Dark Gradient Overlays for Optimal Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#142019]/50 to-[#0d1611]/95 pointer-events-none" />

      {/* Top Navigation Bar: Integrated Seamlessly inside the Forest Header */}
      <Navbar onOpenQuoteModal={onOpenQuoteModal} />

      {/* Main Hero Content (Middle: 2-column layout with looping video on right) */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 pb-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Heading and Actions */}
        <div className="lg:col-span-7 xl:col-span-8 max-w-2xl">
          {/* Animated Staggered Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-normal tracking-tight leading-[1.06] mb-6">
            <span className="hero-word" style={{ animationDelay: "0.05s" }}>Del</span>{" "}
            <span className="hero-word" style={{ animationDelay: "0.12s" }}>Bosque</span>{" "}
            <span className="hero-word" style={{ animationDelay: "0.19s" }}>a</span>{" "}
            <span className="hero-word" style={{ animationDelay: "0.26s" }}>tu</span>{" "}
            <span className="hero-word" style={{ animationDelay: "0.33s" }}>Obra</span>{" "}
            <span className="hero-word" style={{ animationDelay: "0.40s" }}>—</span>
            <br className="hidden sm:block" />
            <span className="hero-word" style={{ animationDelay: "0.47s" }}>Firmeza,</span>{" "}
            <span className="hero-word text-lime-pale" style={{ animationDelay: "0.56s" }}>
              Calidad,
            </span>{" "}
            <span className="hero-word text-lime-pale" style={{ animationDelay: "0.65s" }}>
              Respaldo
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-xl font-light leading-relaxed mb-8 opacity-0 animate-[wordReveal_0.9s_0.75s_forwards]">
            Una buena elección lo cambia todo. Especialistas en{" "}
            <strong className="text-white font-semibold">madera contrachapada de Pino Caribe</strong>,
            importación y distribución nacional — tu aliado estratégico en construcción y carpintería.
          </p>

          {/* Primary Action Button */}
          <div className="flex items-center opacity-0 animate-[wordReveal_0.9s_0.9s_forwards]">
            <button
              onClick={() => onOpenQuoteModal("Solicitar Catálogo de Pino Caribe")}
              className="inline-flex items-center gap-2 bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-md transition shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Explorar Catálogo de Pino Caribe <ArrowDownRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Animated Looping Video / GIF Card (Pure Video Only) */}
        <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden max-w-[225px] sm:max-w-[250px] w-full shadow-2xl border border-white/20 bg-black/40 backdrop-blur-md group hover:border-lime-pale/50 transition-all duration-500">
            {/* Looping Video Container */}
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-black/80">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                poster="/images/capabilities/seleccion-forestal.jpg"
              >
                <source src="/videos/troncos.mp4" type="video/mp4" />
                <source src="/videos/troncos.mov" type="video/quicktime" />
                {/* Fallback to GIF image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/troncos.gif"
                  alt="Rolas de Pino Caribe en movimiento"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Hero Content (Bottom Section) */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-14 pb-8 pt-4 text-center max-w-5xl mx-auto w-full">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal leading-snug tracking-tight mb-6 text-white max-w-3xl mx-auto">
          Impulsamos la construcción y la carpintería con tableros contrachapados de máxima
          resistencia — prensados en caliente, estables y listos para grandes exigencias
        </h2>

        <p className="font-mono text-[11px] sm:text-xs text-white/75 tracking-wider mb-5">
          [ aliado estratégico de +100 constructoras, ferreterías, madereras y carpinterías en
          Venezuela ]
        </p>

        {/* Infinite Smooth Marquee Ticker */}
        <div className="overflow-hidden border-t border-white/15 pt-5 relative">
          <div className="animate-marquee gap-12 items-center">
            {/* First Set */}
            <div className="flex items-center gap-12 shrink-0 pr-12">
              {marqueeItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <span
                    key={`m1-${idx}`}
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90"
                  >
                    <IconComponent className="w-4 h-4 text-lime-pale shrink-0" />
                    {item.text}
                  </span>
                );
              })}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex items-center gap-12 shrink-0 pr-12" aria-hidden="true">
              {marqueeItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <span
                    key={`m2-${idx}`}
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90"
                  >
                    <IconComponent className="w-4 h-4 text-lime-pale shrink-0" />
                    {item.text}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
