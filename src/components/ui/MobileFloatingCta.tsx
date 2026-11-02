"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, FileText } from "lucide-react";
import { companyInfo, buildWhatsAppQuoteUrl } from "@/data/company";

interface MobileFloatingCtaProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function MobileFloatingCta({ onOpenQuoteModal }: MobileFloatingCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 250px down from Hero
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const directWhatsAppUrl = buildWhatsAppQuoteUrl({
    product: "Madera Contrachapada de Pino Caribe",
    notes: "Consulta directa desde botón móvil",
  });

  return (
    <div className="sm:hidden fixed bottom-4 inset-x-3 z-40 animate-slideUp">
      <div className="bg-[#142019]/95 backdrop-blur-lg border border-white/15 p-2 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.35)] flex items-center gap-2">
        {/* Direct WhatsApp Action */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition shadow-xs select-none"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span>WhatsApp Planta</span>
        </a>

        {/* Modal Quote Action */}
        <button
          onClick={() => onOpenQuoteModal("Solicitar Cotización Rápida")}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-lime-pale hover:bg-lime-hover text-forest-dark text-xs font-semibold py-2.5 px-3 rounded-xl transition shadow-xs cursor-pointer select-none"
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span>Cotizar Lista</span>
        </button>
      </div>
    </div>
  );
}

