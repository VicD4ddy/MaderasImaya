"use client";

import React, { useState, useEffect } from "react";
import { buildWhatsAppQuoteUrl } from "@/data/company";

interface MobileFloatingCtaProps {
  onOpenQuoteModal?: (title?: string) => void;
}

export function MobileFloatingCta(_props: MobileFloatingCtaProps) {
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
    <div className="sm:hidden fixed bottom-5 right-5 z-40 animate-slideUp">
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 text-white shadow-[0_8px_28px_rgba(0,0,0,0.4)] border border-white/25 flex items-center justify-center transition-all duration-200 select-none"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          aria-hidden="true"
        >
          <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.461 3.484 1.336 4.992L2 22l5.188-1.359c1.461.797 3.109 1.219 4.843 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.82 14.125c-.242.688-1.414 1.313-1.969 1.391-.516.078-1.172.109-1.898-.125-.445-.141-1.016-.336-1.742-.648-3.055-1.32-5.047-4.406-5.203-4.609-.156-.203-1.242-1.656-1.242-3.156s.781-2.242 1.063-2.547c.281-.305.609-.383.813-.383.203 0 .406.008.586.016.188.008.438-.07.688.523.258.617.867 2.125.945 2.281.078.156.125.336.023.539-.102.203-.156.328-.305.508-.156.18-.32.398-.461.539-.156.156-.313.32-.133.633.18.305.797 1.313 1.711 2.125 1.18 1.047 2.172 1.375 2.477 1.531.305.156.484.133.664-.078.18-.203.766-.891.969-1.195.203-.305.406-.258.688-.156.281.102 1.789.844 2.094.992.305.156.508.227.586.359.078.133.078.758-.164 1.445z" />
        </svg>
      </a>
    </div>
  );
}


