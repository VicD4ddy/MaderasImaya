"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { storiesData } from "@/data/stories";
import { companyInfo } from "@/data/company";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";

interface StoriesSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function StoriesSection({ onOpenQuoteModal }: StoriesSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const offset = direction === "left" ? -360 : 360;
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleCardClick = (id: string) => {
    setActiveStoryId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="historias" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs text-imaya-green font-medium tracking-wider block mb-2">
            [ Nuestro Respaldo ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-forest-dark mb-4">
            Aliados que Construyen con IMAYA
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
            Descubre cómo constructoras, carpinteros industriales y distribuidores en toda Venezuela
            confían en la firmeza de nuestra madera contrachapada.
          </p>
          <a
            href={companyInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs font-semibold px-4 py-2.5 rounded transition shadow-sm"
          >
            <Instagram className="w-3.5 h-3.5 text-forest-dark" /> Ver Obras en {companyInfo.instagramHandle}
          </a>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
        >
          {storiesData.map((story) => {
            const isFlipped = activeStoryId === story.id;
            return (
              <div
                key={story.id}
                onClick={() => handleCardClick(story.id)}
                className="min-w-[280px] sm:min-w-[330px] flex-1 snap-start bg-forest-card rounded-xl overflow-hidden relative group cursor-pointer select-none shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-[340px] w-full overflow-hidden relative">
                  <Image
                    src={story.image}
                    alt={story.company}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-gray-500">
                      {story.company}
                    </div>
                    <div className="text-xs font-medium text-gray-800">{story.location}</div>
                  </div>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-forest-dark">
                    {story.sector}
                  </span>
                </div>

                {/* Hover / Active Flip Overlay */}
                <div
                  className={`absolute inset-0 bg-forest-card p-6 flex flex-col justify-between z-10 transition-opacity duration-300 ${
                    isFlipped
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-5">
                      <div>
                        <div className="text-[11px] font-mono uppercase text-gray-500">
                          {story.company}
                        </div>
                        <div className="text-xs font-medium text-gray-800">{story.location}</div>
                      </div>
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-imaya-green">
                        {story.sector}
                      </span>
                    </div>
                    <p className="text-sm text-forest-dark leading-relaxed italic">
                      {story.quote}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-gray-500 mb-1">
                        {story.resultLabel}
                      </div>
                      <div className="text-base font-semibold text-forest-dark leading-tight">
                        {story.resultValue}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(`Cotizar para ${story.company}`);
                      }}
                      className="bg-forest-dark hover:bg-black text-white text-[11px] px-3 py-1.5 rounded transition cursor-pointer"
                    >
                      Cotizar igual
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-100 hover:bg-lime-pale text-gray-700 transition cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-forest-dark" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-100 hover:bg-lime-pale text-gray-700 transition cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
