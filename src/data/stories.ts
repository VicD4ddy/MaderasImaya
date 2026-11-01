import { StoryItem } from "@/types";
import { assetPath } from "@/lib/utils";

export const storiesData: StoryItem[] = [
  {
    id: "desarrollos-del-centro",
    company: "DESARROLLOS DEL CENTRO",
    location: "Valencia, Carabobo",
    sector: "OBRA CIVIL",
    image: assetPath("/images/testimonials/desarrollos-centro.jpg"),
    quote:
      "\"Trabajar con Maderas IMAYA nos permitió estandarizar todos nuestros tableros de encofrado de 18mm con una firmeza extraordinaria y entregas puntuales directo en obra.\"",
    resultLabel: "RESULTADO :",
    resultValue: "+35% vida útil en ciclos de encofrado",
  },
  {
    id: "grupo-maderero-lara",
    company: "GRUPO MADERERO LARA",
    location: "Barquisimeto, Lara",
    sector: "CARPINTERÍA",
    image: assetPath("/images/testimonials/maderero-lara.jpg"),
    quote:
      "\"El contraenchapado de Pino Caribe de IMAYA no presenta vacíos internos al cortar. Nuestros carpinteros ahorran tiempo en lijado y logran muebles de primera.\"",
    resultLabel: "RESULTADO :",
    resultValue: "0% desperdicio por alabeo o delaminación",
  },
  {
    id: "ferre-suministros",
    company: "FERRE-SUMINISTROS C.A.",
    location: "Caracas, Distrito Capital",
    sector: "MAYORISTA",
    image: assetPath("/images/testimonials/ferre-suministros.jpg"),
    quote:
      "\"La cercanía de su planta en la Carretera Panamericana en Yaracuy nos garantiza reposición de inventario rápida y paquetes perfectamente flejados.\"",
    resultLabel: "RESULTADO :",
    resultValue: "Despacho directo en menos de 48h",
  },
  {
    id: "estudio-arq-madera",
    company: "ESTUDIO ARQ & MADERA",
    location: "San Felipe, Yaracuy",
    sector: "DISEÑO",
    image: assetPath("/images/testimonials/estudio-arq.jpg"),
    quote:
      "\"La calidez visual de la veta del Pino Caribe de IMAYA nos permitió diseñar revestimientos acústicos y mobiliario corporativo con sello venezolano.\"",
    resultLabel: "RESULTADO :",
    resultValue: "100% madera de origen sostenible",
  },
];
