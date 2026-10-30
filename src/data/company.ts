export const companyInfo = {
  name: "IMAYA — Industria Maderera Yaracuy C.A.",
  shortName: "Maderas IMAYA",
  legalName: "INDUSTRIA MADERERA YARACUY C.A. (IMAYACA)",
  address: "Carretera Panamericana, San Felipe, Estado Yaracuy, Venezuela",
  instagram: "https://www.instagram.com/maderas.imaya/",
  instagramHandle: "@maderas.imaya",
  phone: "+58 424-5884248",
  whatsappNumber: "584245884248",
  standardFormat: "1.22 m × 2.44 m (4' × 8')",
};

export function buildWhatsAppQuoteUrl(params: {
  product?: string;
  name?: string;
  phone?: string;
  notes?: string;
}): string {
  const parts: string[] = [
    `*Solicitud de Cotización — Maderas IMAYA*`,
    ``,
    `*Cliente / Empresa:* ${params.name || "Interesado"}`,
    `*Teléfono de contacto:* ${params.phone || "No indicado"}`,
    `*Producto / Requerimiento:* ${params.product || "Contraenchapado de Pino Caribe"}`,
  ];

  if (params.notes) {
    parts.push(`*Detalles adicionales:* ${params.notes}`);
  }

  parts.push(``);
  parts.push(`_Enviado desde la web de Maderas IMAYA_`);

  const fullText = parts.join("\n");
  return `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

