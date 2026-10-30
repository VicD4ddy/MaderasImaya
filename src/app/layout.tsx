import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Maderas IMAYA — Calidad y Firmeza en Madera Contrachapada de Pino Caribe",
  description:
    "Especialistas en madera contrachapada de Pino Caribe, importación y distribución nacional desde San Felipe, Yaracuy. Tu aliado estratégico en construcción y carpintería.",
  keywords: [
    "Maderas IMAYA",
    "IMAYACA",
    "Pino Caribe",
    "Madera contrachapada",
    "Encofrados",
    "Carpintería",
    "San Felipe Yaracuy",
    "Venezuela",
  ],
  icons: {
    icon: "/favicon.ico",
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
      <body className="font-sans min-h-screen bg-white text-forest-dark selection:bg-lime-pale selection:text-forest-dark">
        {children}
      </body>
    </html>
  );
}
