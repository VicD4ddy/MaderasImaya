"use client";

import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";

interface AboutBannerProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function AboutBanner({ onOpenQuoteModal }: AboutBannerProps) {
  return (
    <section id="nosotros" className="px-4 sm:px-8 lg:px-14 pb-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[480px] sm:min-h-[540px] flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 bg-[#0A1F13] shadow-lg">
          {/* Background Image (Clean Plywood - No Stencils) */}
          <Image
            src="/images/plant/planta-yaracuy-limpia.jpg"
            alt="Planta Maderas IMAYA en San Felipe, Yaracuy"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F13]/90 via-[#0A1F13]/70 to-[#0A1F13]/95" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white leading-[1.12] mb-5">
              Construido para un Futuro
              <br />
              más Firme y Sólido
            </h2>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-8 max-w-xl mx-auto">
              En <strong className="text-white font-semibold">{companyInfo.legalName}</strong>{" "}
              somos tu aliado estratégico en madera contrachapada de Pino Caribe. Ya sea que dirijas
              una obra civil, una carpintería industrial o una distribuidora ferretera, estamos listos
              para despachar tu pedido.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuoteModal("Construyamos tu próximo proyecto — juntos")}
                className="bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-md transition shadow-lg cursor-pointer hover:shadow-lime-pale/25 hover:-translate-y-0.5"
              >
                Construyamos tu próximo proyecto — juntos
              </button>
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-medium px-5 py-3.5 rounded-md transition"
              >
                <Instagram className="w-4 h-4 text-lime-pale" /> Ir a {companyInfo.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
