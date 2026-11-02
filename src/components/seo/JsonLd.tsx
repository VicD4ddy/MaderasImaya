export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://maderasimaya.pages.dev/#organization",
        name: "INDUSTRIA MADERERA YARACUY C.A. (IMAYACA)",
        alternateName: "Maderas IMAYA",
        url: "https://maderasimaya.pages.dev/",
        logo: "https://maderasimaya.pages.dev/images/brand/imaya-logo.png",
        image: "https://maderasimaya.pages.dev/images/og/imaya-og.jpg",
        telephone: "+58-424-5884248",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Carretera Panamericana",
          addressLocality: "San Felipe",
          addressRegion: "Yaracuy",
          addressCountry: "VE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "10.3394",
          longitude: "-68.7456",
        },
        sameAs: ["https://www.instagram.com/maderas.imaya/"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+58-424-5884248",
          contactType: "sales",
          areaServed: "VE",
          availableLanguage: ["Spanish"],
        },
      },
      {
        "@type": "Product",
        "@id": "https://maderasimaya.pages.dev/#product-contrachapado",
        name: "Madera Contrachapada de Pino Caribe",
        description:
          "Tableros contrachapados de Pino Caribe prensados en caliente con encolado fenólico de alta resistencia. Diseñados para encofrado de concreto en obras civiles y carpintería pesada. Formato estándar 1.22 m × 2.44 m (4' × 8').",
        image: "https://maderasimaya.pages.dev/images/gallery/producto-terminado.png",
        brand: {
          "@type": "Brand",
          name: "Maderas IMAYA",
        },
        manufacturer: {
          "@id": "https://maderasimaya.pages.dev/#organization",
        },
        material: "Pino Caribe",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": "https://maderasimaya.pages.dev/#organization",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://maderasimaya.pages.dev/#faq",
        mainEntity: [
          {
            "@type": "Question",
            "name": "¿Cuáles son las medidas y espesores de los tableros contrachapados IMAYA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestros tableros se suministran en el formato industrial estándar de 1.22 m × 2.44 m (4' × 8'), con espesores calibrados desde 9 mm hasta 18 mm, ideales para encofrado estructural y carpintería.",
            },
          },
          {
            "@type": "Question",
            "name": "¿La madera contrachapada es apta para encofrados de concreto pesado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Gracias a la disposición de chapas cruzadas a 90° y al prensado térmico con resinas de alta adherencia, ofrece máxima resistencia a la flexión y alta reutilización en obra sin alabeo.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Realizan despachos a nivel nacional en Venezuela?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Despachamos en paletas flejadas y gandolas completas directamente desde nuestra planta en San Felipe, Yaracuy, a constructoras, madereras y ferreterías en todo el territorio nacional.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Cómo solicitar una cotización directa de planta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puede solicitar cotización inmediata a través del botón de contacto en nuestra web o comunicándose directamente por WhatsApp con nuestro departamento comercial al +58 424-5884248.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
