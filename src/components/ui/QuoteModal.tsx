"use client";

import React, { useState } from "react";
import { companyInfo, buildWhatsAppQuoteUrl } from "@/data/company";
import { X, Send } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";

interface QuoteModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export function QuoteModal({ isOpen, title, onClose }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(
    "Contraenchapado de Pino Caribe (15mm / 18mm - Encofrado)"
  );
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waUrl = buildWhatsAppQuoteUrl({
      product,
      name,
      phone,
      notes,
    });

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="font-mono text-[11px] uppercase text-imaya-green font-semibold tracking-wider block mb-1">
          [ Maderas IMAYA • Ventas Directas ]
        </span>

        <h3 className="text-2xl font-normal text-forest-dark mb-2">{title || "Solicitar Cotización"}</h3>

        <p className="text-xs text-gray-500 mb-6">
          Déjanos tus datos y el requerimiento de láminas contrachapadas. Se abrirá una conversación
          directa en WhatsApp con nuestro equipo de ventas en San Felipe, Yaracuy.
        </p>

        {submitted ? (
          <div className="p-4 bg-lime-soft text-forest-dark text-xs rounded-lg text-center font-medium border border-lime-pale">
            ¡Redirigiendo a WhatsApp Business de Maderas IMAYA! En breve nos pondremos en contacto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Nombre o Empresa *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Constructora / Carpintería..."
                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-imaya-green focus:ring-1 focus:ring-imaya-green"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+58 412 / 414 / 424..."
                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-imaya-green focus:ring-1 focus:ring-imaya-green"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Producto / Espesor de Interés
              </label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-imaya-green focus:ring-1 focus:ring-imaya-green bg-white"
              >
                <option value="Contraenchapado de Pino Caribe (15mm / 18mm - Encofrado)">
                  Contraenchapado de Pino Caribe (15mm / 18mm - Encofrado)
                </option>
                <option value="Contraenchapado de Pino Caribe (9mm / 12mm - Carpintería)">
                  Contraenchapado de Pino Caribe (9mm / 12mm - Carpintería)
                </option>
                <option value="Contraenchapado de Pino Caribe (6mm - Revestimiento)">
                  Contraenchapado de Pino Caribe (6mm - Revestimiento)
                </option>
                <option value="Compra Mayorista / Distribución por Paleta o Gandola">
                  Compra Mayorista / Distribución por Paleta o Gandola
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Cantidad estimada o notas (Opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej. Requiero 120 láminas de 18mm para vaciado en Valencia..."
                rows={2}
                className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-imaya-green focus:ring-1 focus:ring-imaya-green resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-pale hover:bg-lime-hover text-forest-dark font-semibold text-xs py-3.5 rounded-lg transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" /> Enviar Solicitud a WhatsApp Ventas
            </button>
          </form>
        )}

        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <a
            href={companyInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-imaya-green font-medium hover:underline"
          >
            <Instagram className="w-3.5 h-3.5" /> También puedes escribirnos por DM en{" "}
            {companyInfo.instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}
