"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface SpecsSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

const specsData = [
  {
    thickness: "9 mm",
    layers: "5 capas",
    approxWeight: "18 kg",
    mainUse: "Moldajes livianos, fondos de encofrado y carpintería interior",
    reusability: "Alta",
  },
  {
    thickness: "12 mm",
    layers: "7 capas",
    approxWeight: "24 kg",
    mainUse: "Revestimientos estructurales, vigas y encofrado modular",
    reusability: "Alta",
  },
  {
    thickness: "15 mm",
    layers: "9 capas",
    approxWeight: "30 kg",
    mainUse: "Columnas, muros de vaciado continuo y entrepisos",
    reusability: "Muy alta",
  },
  {
    thickness: "18 mm",
    layers: "11 capas",
    approxWeight: "36 kg",
    mainUse: "Encofrado pesado de losas de concreto, puentes y muros de contención",
    reusability: "Máxima",
  },
];

export function SpecsSection({ onOpenQuoteModal }: SpecsSectionProps) {
  return (
    <section id="especificaciones" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-xs text-imaya-green font-semibold tracking-wider block mb-3">
            [ ESPECIFICACIONES TÉCNICAS • FORMATO ESTÁNDAR 1.22 × 2.44 M ]
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-forest-dark leading-snug mb-4">
            Calibres de Madera Contrachapada y Rendimiento en Obra
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Tableros de Pino Caribe prensados con resinas fenólicas de alta adherencia. Calibración
            milimétrica para un escuadrado exacto y máxima reutilización en vaciados de concreto.
          </p>
        </div>

        {/* Technical Specification Table */}
        <div className="overflow-x-auto rounded-2xl border border-black/5 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(20,32,25,0.04)]">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-black/5 bg-forest-dark text-white">
                <th className="py-4 px-4 sm:px-6 font-mono font-medium tracking-wider uppercase text-[11px]">
                  Espesor
                </th>
                <th className="py-4 px-4 sm:px-6 font-mono font-medium tracking-wider uppercase text-[11px]">
                  Chapas Cruzadas
                </th>
                <th className="py-4 px-4 sm:px-6 font-mono font-medium tracking-wider uppercase text-[11px]">
                  Peso Aprox.
                </th>
                <th className="py-4 px-4 sm:px-6 font-mono font-medium tracking-wider uppercase text-[11px]">
                  Aplicación Recomendada
                </th>
                <th className="py-4 px-4 sm:px-6 font-mono font-medium tracking-wider uppercase text-[11px] text-right">
                  Cotización
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-gray-700">
              {specsData.map((spec) => (
                <tr
                  key={spec.thickness}
                  className="hover:bg-lime-soft/40 transition-colors"
                >
                  <td className="py-4 px-4 sm:px-6 font-mono font-bold text-forest-dark text-sm sm:text-base tabular-nums">
                    {spec.thickness}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-gray-600 tabular-nums">
                    {spec.layers}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-gray-600 tabular-nums">
                    {spec.approxWeight}
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-imaya-green shrink-0" />
                      <span>{spec.mainUse}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <button
                      onClick={() =>
                        onOpenQuoteModal(`Cotizar Tableros de ${spec.thickness}`)
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-dark hover:text-imaya-green bg-lime-pale hover:bg-lime-hover px-3 py-1.5 rounded transition shadow-xs cursor-pointer"
                    >
                      Cotizar <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
