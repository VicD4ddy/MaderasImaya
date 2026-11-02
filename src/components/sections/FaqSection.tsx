"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

interface FaqSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

const faqs = [
  {
    question: "¿Cuáles son las medidas y espesores de los tableros contrachapados IMAYA?",
    answer:
      "Nuestros tableros se suministran en el formato industrial estándar de 1.22 m × 2.44 m (4' × 8'), con espesores calibrados desde 9 mm hasta 18 mm, ideales para encofrado estructural y carpintería pesada.",
  },
  {
    question: "¿La madera contrachapada es apta para encofrados de concreto pesado?",
    answer:
      "Sí. Gracias a la disposición de chapas cruzadas a 90° y al prensado térmico con resinas fenólicas de alta adherencia, ofrece máxima resistencia a la flexión y alta reutilización en obra sin alabeo.",
  },
  {
    question: "¿Realizan despachos a nivel nacional en Venezuela?",
    answer:
      "Sí. Despachamos en paletas flejadas y gandolas completas directamente desde nuestra planta en San Felipe, Yaracuy, a constructoras, madereras y ferreterías en todo el territorio nacional.",
  },
  {
    question: "¿Cómo solicitar una cotización directa de planta?",
    answer:
      "Puede solicitar cotización inmediata a través del botón de contacto en nuestra web o comunicándose directamente por WhatsApp con nuestro departamento comercial al +58 424-5884248.",
  },
];

export function FaqSection({ onOpenQuoteModal }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-imaya-green font-semibold tracking-wider block mb-3">
            [ PREGUNTAS FRECUENTES • SUMINISTRO Y ASESORÍA ]
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-forest-dark leading-snug mb-4">
            Dudas Frecuentes sobre Madera Contrachapada
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Respuestas directas sobre formatos, resistencia en encofrados de concreto y despacho
            mayorista en toda Venezuela.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-black/5 bg-white/95 backdrop-blur-md overflow-hidden shadow-xs transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 hover:bg-lime-soft/20 transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-imaya-green shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-forest-dark">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-imaya-green" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-black/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onOpenQuoteModal("Consulta adicional de FAQ")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest-dark hover:text-imaya-green transition cursor-pointer"
          >
            <span>¿Tienes otra consulta técnica sobre tu proyecto? Escríbenos</span>
            <ArrowRight className="w-4 h-4 text-imaya-green" />
          </button>
        </div>
      </div>
    </section>
  );
}
