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
        logo: "https://maderasimaya.pages.dev/images/og/imaya-og.jpg",
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
