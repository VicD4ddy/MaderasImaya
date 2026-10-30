# DESIGN SYSTEM: IMAYA LANDING (ORIGINAL BRAND IDENTITY)

> **Regla de Estilo:** Preservar al 100% el diseño, colores, tipografía, estética visual, componentes y micro-interacciones definidos en el HTML original (`maderas_imaya_landing_page.html`), aplicando la eliminación del marco/borde exterior para una experiencia full-bleed.

---

## 1. Paleta de Colores Oficial

- **Forest Dark (Fondo Principal Hero y Footer):** `#142019`
- **Forest Card (Tarjetas de contenido y fondos suaves):** `#F2F5F6`
- **IMAYA Green (Color de Marca):** `#138844`
- **IMAYA Bright (Acentos verdes vivos):** `#22C55E`
- **Lime Pale (Botones principales y acentos destacados):** `#E4F8B2`
- **Lime Hover:** `#D5F092`
- **Lime Soft (Badges y fondos de éxito):** `#F1FBD6`
- **Blanco Puro:** `#FFFFFF`
- **Bordes sutiles:** `rgba(255, 255, 255, 0.15)` en hero oscuro, y `rgba(0, 0, 0, 0.08)` / `border-gray-200` en secciones claras.

---

## 2. Tipografía

- **Sans Principal (Cuerpo, títulos y navegación):** `Inter`, sans-serif (pesos 300, 400, 500, 600, 700, 800).
- **Monoespaciada (Etiquetas técnicas, números, calibres y brackets):** `JetBrains Mono`, monospace (pesos 400, 500).
  - Todo calibre (`18 mm`, `15 mm`, `12 mm`), métrica (`+100`, `50.000 m²`) y badge técnico DEBE usar `font-mono` y `tabular-nums`.
  - Estilo de brackets característico de la marca: `[ YARACUY • PINO CARIBE ]`, `[ aliado estratégico de +100 constructoras ]`.

---

## 3. Layout y Eliminación del Marco Exterior

- **Viewport Full-Bleed:** El sitio ocupa el 100% del ancho del viewport (`100vw`). Se elimina completamente el padding exterior del `body` y el fondo `#5B6756`.
- **Contenedores de Contenido:** `max-w-7xl` / `max-w-[1360px]` centrado con padding responsivo horizontal (`px-6 sm:px-10 lg:px-14`).
- **Secciones Alternadas:**
  - Hero: Full bleed `#142019` con poster de alta resolución y gradientes oscuros esmeralda.
  - Secciones de Contenido: Fondo `#FFFFFF` y `#F2F5F6` con espaciado amplio y aireado (`py-20 lg:py-28`).
  - Footer: `#142019` o fondo blanco estructurado con tipografía técnica.

---

## 4. Componentes y Micro-Interacciones

- **Botones Primarios:** Fondo `#E4F8B2`, texto `#142019`, bordes redondeados (`rounded-full`), hover con micro-desplazamiento suave.
- **Botones Secundarios:** Fondo `white/10` con `backdrop-blur-md`, borde `border-white/15`, texto blanco.
- **Badges Técnicos:** Cápsulas redondeadas con punto de estado pulsante (`pulse-ring`) o etiquetas entre corchetes técnicos en `JetBrains Mono`.
- **Marquee:** Cinta de desplazamiento continuo con los sectores aliados y tipos de madera.
- **Modal de Cotización:** Despliegue centrado con backdrop blur (`backdrop-blur-sm`), campos limpios y enlace directo a WhatsApp Business.

