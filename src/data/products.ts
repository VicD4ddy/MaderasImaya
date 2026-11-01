import { ProductItem, CapabilityItem } from "@/types";
import { assetPath } from "@/lib/utils";

export const productsData: ProductItem[] = [
  {
    id: "contraenchapado-pino-caribe",
    title: "Contraenchapado de Pino Caribe",
    tag: "1.22 x 2.44 m",
    calibers: "6mm • 9mm • 12mm • 15mm • 18mm",
    description:
      "Láminas fabricadas con chapas seleccionadas de Pino Caribe, prensadas al calor para ofrecer firmeza superior, estabilidad y durabilidad comprobada.",
    image: assetPath("/images/products/contraenchapado-pino.jpg"),
    badge: "Tableros Multicapa",
    quoteTitle: "Cotizar Contraenchapado de Pino Caribe",
  },
  {
    id: "construccion-encofrado",
    title: "Aliado en Construcción y Encofrado",
    tag: "Grado Estructural",
    calibers: "15mm / 18mm",
    description:
      "Tableros de alta densidad pensados para soportar el empuje del concreto en obra civil, losas, columnas, techos y cerramientos perimetrales.",
    image: assetPath("/images/products/encofrado-construccion.jpg"),
    badge: "Alta Firmeza en Obra",
    quoteTitle: "Cotizar Madera para Construcción y Encofrado",
  },
  {
    id: "carpinteria-diseno",
    title: "Soluciones para Carpintería y Diseño",
    tag: "Acabado Lijado Superior",
    calibers: "Cara A/B",
    description:
      "Superficies uniformes con la veta cálida del Pino Caribe, listas para corte preciso, entintado, barnizado o laminado en mobiliario e interiorismo.",
    image: assetPath("/images/products/carpinteria-taller.jpg"),
    badge: "Corte Limpio Sin Vacíos",
    quoteTitle: "Cotizar Línea de Carpintería y Mueblería",
  },
  {
    id: "importacion-distribucion",
    title: "Importación y Distribución Mayorista",
    tag: "Despacho Nacional",
    calibers: "Yaracuy",
    description:
      "Abastecemos distribuidores, ferreterías, aserraderos y contratistas en toda Venezuela desde nuestra planta en la Carretera Panamericana, San Felipe.",
    image: assetPath("/images/products/distribucion-mayorista.jpg"),
    badge: "Suministro por Paleta o Gandola",
    quoteTitle: "Cotizar Importación y Distribución al Mayor",
  },
];

export const capabilitiesData: CapabilityItem[] = [
  {
    id: 1,
    title: "Contrachapado Pino Caribe",
    description:
      "Tableros multicapa formato 1.22m x 2.44m con resistencia superior a la flexión, ideales para uso estructural e interior.",
  },
  {
    id: 2,
    title: "Construcción y Encofrado",
    description:
      "Firmeza garantizada para vaciados de concreto, losas, columnas y estructuras temporales con alto índice de reutilización.",
  },
  {
    id: 3,
    title: "Carpintería y Mueblería",
    description:
      "Caras limpias de veta cálida, lijado uniforme y excelente agarre de tornillería para cocinas, closets y mobiliario comercial.",
  },
  {
    id: 4,
    title: "Suministro Mayorista",
    description:
      "Inventario constante en nuestra sede de San Felipe para abastecer ferreterías, madereras y grandes desarrollos sin demoras.",
  },
];
