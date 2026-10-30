"use client";

import React, { useEffect, useState, useRef } from "react";
import { metricsData } from "@/data/metrics";

interface MetricsSectionProps {
  onOpenQuoteModal: (title?: string) => void;
}

export function MetricsSection({ onOpenQuoteModal }: MetricsSectionProps) {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    "m-1": 0,
    "m-2": 0,
    "m-3": 0,
    "m-4": 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          metricsData.forEach((metric) => {
            const duration = 1500;
            const steps = 40;
            const stepTime = duration / steps;
            const increment = metric.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= metric.target) {
                current = metric.target;
                clearInterval(timer);
              }
              setCounts((prev) => ({
                ...prev,
                [metric.id]: Math.round(current),
              }));
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="metricas" className="px-6 sm:px-10 lg:px-14 py-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="bg-lime-pale rounded-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-between shadow-sm">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-forest-dark/70 tracking-wider block mb-3 font-semibold">
                [ Métricas de Respaldo ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-forest-dark leading-tight">
                Resultados Medibles.
                <br />
                Firmeza Garantizada
              </h2>
              <p className="text-xs sm:text-sm text-forest-dark/80 mt-4 max-w-sm leading-relaxed">
                Cada paquete de madera contrachapada que sale de nuestra planta en San Felipe,
                Yaracuy pasa por un control riguroso de espesor, prensado y escuadrado.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <button
                onClick={() => onOpenQuoteModal("Solicitar Lista de Espesores y Precios al Mayor")}
                className="bg-forest-dark hover:bg-black text-white text-xs font-medium px-5 py-3 rounded transition shadow-sm cursor-pointer"
              >
                Solicitar Lista de Espesores
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Big Metrics Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {metricsData.map((m) => (
              <div key={m.id}>
                <div className="text-5xl sm:text-6xl font-normal tracking-tight text-forest-dark mb-2 font-mono tabular-nums">
                  {m.prefix}
                  <span>{counts[m.id]}</span>
                  <span className="text-forest-dark/40">{m.suffix}</span>
                </div>
                <p className="text-xs text-forest-dark/80 max-w-[230px] leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

