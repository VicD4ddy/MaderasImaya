import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://maderasimaya.pages.dev";

export const viewport: Viewport = {
  themeColor: "#0A1F13",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Madera Contrachapada en Venezuela | Maderas IMAYA",
    template: "%s | Maderas IMAYA",
  },
  description:
    "Fabricación, importación y distribución nacional de madera contrachapada de Pino Caribe. Tableros fenólicos para encofrado y carpintería industrial desde San Felipe, Yaracuy.",
  applicationName: "Maderas IMAYA",
  authors: [{ name: "Industria Maderera Yaracuy C.A. (IMAYACA)" }],
  generator: "Next.js 16",
  keywords: [
    "madera contrachapada Venezuela",
    "contrachapado pino caribe",
    "tableros de madera para encofrado",
    "madera fenólica San Felipe Yaracuy",
    "distribuidora de contrachapado mayorista",
    "laminas de contrachapado 1.22 x 2.44",
    "Maderas IMAYA",
    "IMAYACA",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: SITE_URL,
    siteName: "Maderas IMAYA",
    title: "Madera Contrachapada de Pino Caribe en Venezuela | Maderas IMAYA",
    description:
      "Tableros contrachapados de alto rendimiento para encofrado y carpintería. Calibración milimétrica y despacho directo a toda Venezuela.",
    images: [
      {
        url: "/images/og/imaya-og.jpg",
        width: 1200,
        height: 630,
        alt: "Maderas IMAYA - Tableros de Pino Caribe en Planta San Felipe, Yaracuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maderas IMAYA | Madera Contrachapada en Venezuela",
    description:
      "Suministro de tableros contrachapados de Pino Caribe para construcción y encofrados.",
    images: ["/images/og/imaya-og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen bg-[#D2EAD9] text-forest-dark selection:bg-lime-pale selection:text-forest-dark">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
