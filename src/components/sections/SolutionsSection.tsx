"use client";

import React from "react";
import Image from "next/image";
import { productsData } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

interface SolutionsSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function SolutionsSection({ onOpenQuoteModal }: SolutionsSectionProps) {
  return (
    <section id="soluciones" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-xs text-imaya-green font-medium tracking-wider block mb-8">
          [ Nuestras Líneas y Soluciones en Madera ]
        </span>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {productsData.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenQuoteModal(item.quoteTitle)}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group cursor-pointer"
            >
              <div className="lg:col-span-6 pr-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-mono bg-lime-pale text-forest-dark px-2.5 py-0.5 rounded font-medium">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400">{item.calibers}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-forest-dark group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                  {item.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-imaya-green transition duration-300" />
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-md leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="h-40 sm:h-48 w-full rounded-xl overflow-hidden relative shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-lime-pale text-[10px] font-mono px-2.5 py-1 rounded z-10">
                    {item.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

