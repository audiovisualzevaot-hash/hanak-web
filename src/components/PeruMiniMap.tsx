// Mapa esquemático de la zona de Tarapoto, tal como aparece en el export
// de Illustrator de Inicio: contorno de la región, pin de "El Resort de
// Yanashpa" (referencia cercana, con su nombre real — antes decía por
// error "El Resort de Tarapoto"), pin de HANAK, etiquetas de Lamas y
// Tarapoto, y una ruta punteada hacia el aeropuerto. No son fronteras
// reales — es una ilustración esquemática, en el mismo lenguaje visual
// que RutaAnimada.
//
// Verificado contra el export a zoom: en ambos pines el texto va DENTRO
// de la forma (color crema sobre el relleno olive/forest), no como
// etiqueta flotante aparte — por eso los pines son más grandes que en la
// versión anterior, con espacio real para el texto.
export default function PeruMiniMap({
  className = "",
  maxWidthClassName = "max-w-[280px] sm:max-w-[640px]",
}: {
  className?: string;
  /** Ancho máximo del mapa — se pasa aparte para no chocar con la clase
   *  base w-full/mx-auto (dos utilidades max-w-* en el mismo elemento
   *  compiten de forma impredecible en Tailwind). */
  maxWidthClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 460 320"
      className={`w-full mx-auto ${maxWidthClassName} ${className}`}
      role="img"
      aria-label="Ubicación de Hanak, entre Lamas, Tarapoto y el aeropuerto"
    >
      {/* Contorno esquemático de la región */}
      <path
        d="M118 44
           C 150 30, 188 28, 218 40
           C 246 52, 242 70, 268 76
           C 302 84, 340 80, 362 106
           C 382 130, 374 158, 350 170
           C 326 182, 310 168, 286 178
           C 264 187, 260 210, 238 224
           C 214 239, 188 232, 168 246
           C 146 261, 132 278, 106 272
           C 80 266, 72 242, 78 218
           C 84 194, 102 186, 98 162
           C 94 138, 72 128, 74 104
           C 76 80, 94 56, 118 44 Z"
        fill="var(--color-forest)"
        fillOpacity="0.05"
        stroke="var(--color-forest)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Ruta punteada de Hanak al aeropuerto */}
      <path
        d="M228 156 C 264 172, 292 190, 316 222"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="1.4"
        strokeDasharray="1.5 7"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Lamas */}
      <g transform="translate(126,166)">
        <rect x="-34" y="-15" width="68" height="29" rx="14.5" fill="var(--color-forest)" />
        <text x="0" y="4.5" textAnchor="middle" className="fill-cloud font-sans text-[12px] tracking-wide">
          Lamas
        </text>
      </g>

      {/* Pin — El Resort de Yanashpa (referencia cercana), texto adentro.
          Separado lo suficiente del pin HANAK para que solo se toquen las
          puntas (como en el export) y no tape el texto "de Yanashpa". */}
      <g transform="translate(156,86)">
        <path
          d="M0 -30 C 16.5 -30 28.5 -18 28.5 -1.5 C 28.5 18 0 42 0 42 C 0 42 -28.5 18 -28.5 -1.5 C -28.5 -18 -16.5 -30 0 -30 Z"
          fill="var(--color-olive)"
        />
        <text x="0" y="-6" textAnchor="middle" className="fill-cloud font-display text-[9.5px]">
          El Resort
        </text>
        <text x="0" y="4" textAnchor="middle" className="fill-cloud/85 font-sans text-[6px] tracking-wide">
          de Yanashpa
        </text>
      </g>

      {/* Pin HANAK, texto e isotipo adentro */}
      <g transform="translate(224,146)">
        <path
          d="M0 -50 C 27.5 -50 47.5 -29.5 47.5 -3.8 C 47.5 28.5 0 68.5 0 68.5 C 0 68.5 -47.5 28.5 -47.5 -3.8 C -47.5 -29.5 -27.5 -50 0 -50 Z"
          fill="var(--color-forest-dark)"
        />
        <image href="/images/brand/isotipo-cream.png" x="-9" y="-38" width="18" height="18" />
        <text x="0" y="-11" textAnchor="middle" className="fill-cloud font-display text-[13px]">
          HANAK
        </text>
        <line x1="-19" y1="-4" x2="19" y2="-4" stroke="var(--color-cloud)" strokeWidth="0.5" opacity="0.7" />
        <text x="0" y="3" textAnchor="middle" className="fill-cloud/85 font-sans text-[4.2px] tracking-[0.12em] uppercase">
          Sky Resort &amp; Villas Club
        </text>
      </g>

      {/* Tarapoto */}
      <g transform="translate(246,230)">
        <rect x="-42" y="-15" width="84" height="29" rx="14.5" fill="var(--color-forest)" />
        <text x="0" y="4.5" textAnchor="middle" className="fill-cloud font-sans text-[12px] tracking-wide">
          Tarapoto
        </text>
      </g>

      {/* Aeropuerto */}
      <g transform="translate(334,236)">
        <path
          d="M-6.5 1 L6.5 1 M0 -6.5 L0 7.5 M-4.5 5.5 L4.5 5.5"
          stroke="var(--color-forest)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text x="0" y="20" textAnchor="middle" className="fill-forest/80 font-sans text-[10px] uppercase tracking-[0.15em]">
          Aeropuerto
        </text>
      </g>
    </svg>
  );
}
