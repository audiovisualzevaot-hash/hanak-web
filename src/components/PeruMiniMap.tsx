// Mapa esquemático de la zona de Tarapoto, tal como aparece en el export
// de Illustrator de Inicio: contorno de la región, pin del "Resort de
// Tarapoto" (referencia cercana), pin de HANAK, etiquetas de Lamas y
// Tarapoto, y una ruta punteada hacia el aeropuerto. No son fronteras
// reales — es una ilustración esquemática, en el mismo lenguaje visual
// que RutaAnimada.
export default function PeruMiniMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 300"
      className={`w-full max-w-[190px] sm:max-w-sm mx-auto ${className}`}
      role="img"
      aria-label="Ubicación de Hanak, entre Lamas, Tarapoto y el aeropuerto"
    >
      {/* Contorno esquemático de la región */}
      <path
        d="M108 34
           C 140 20, 178 18, 208 30
           C 236 42, 232 60, 258 66
           C 292 74, 330 70, 352 96
           C 372 120, 364 148, 340 160
           C 316 172, 300 158, 276 168
           C 254 177, 250 200, 228 214
           C 204 229, 178 222, 158 236
           C 136 251, 122 268, 96 262
           C 70 256, 62 232, 68 208
           C 74 184, 92 176, 88 152
           C 84 128, 62 118, 64 94
           C 66 70, 84 46, 108 34 Z"
        fill="var(--color-forest)"
        fillOpacity="0.05"
        stroke="var(--color-forest)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Ruta punteada de Hanak al aeropuerto */}
      <path
        d="M214 142 C 250 158, 278 176, 302 208"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="1.4"
        strokeDasharray="1.5 7"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Lamas */}
      <g transform="translate(120,150)">
        <rect x="-32" y="-14" width="64" height="27" rx="13.5" fill="var(--color-forest)" />
        <text x="0" y="4" textAnchor="middle" className="fill-cloud font-sans text-[12px] tracking-wide">
          Lamas
        </text>
      </g>

      {/* Pin pequeño — referencia cercana (El Resort de Tarapoto) */}
      <g transform="translate(168,108)">
        <path
          d="M0 -20 C 11 -20 19 -12 19 -1 C 19 12 0 28 0 28 C 0 28 -19 12 -19 -1 C -19 -12 -11 -20 0 -20 Z"
          fill="var(--color-olive)"
        />
        <circle cx="0" cy="-2" r="6" fill="var(--hanak-cloud)" opacity="0.9" />
      </g>

      {/* Pin HANAK */}
      <g transform="translate(206,132)">
        <path
          d="M0 -26 C 14.5 -26 25 -15.5 25 -2 C 25 15 0 36 0 36 C 0 36 -25 15 -25 -2 C -25 -15.5 -14.5 -26 0 -26 Z"
          fill="var(--color-forest-dark)"
        />
        <circle cx="0" cy="-3" r="10.5" fill="var(--hanak-cloud)" />
        <image href="/images/brand/isotipo-forest.png" x="-7" y="-10" width="14" height="14" />
      </g>

      {/* Tarapoto */}
      <g transform="translate(228,214)">
        <rect x="-40" y="-14" width="80" height="27" rx="13.5" fill="var(--color-forest)" />
        <text x="0" y="4" textAnchor="middle" className="fill-cloud font-sans text-[12px] tracking-wide">
          Tarapoto
        </text>
      </g>

      {/* Aeropuerto */}
      <g transform="translate(312,220)">
        <circle cx="0" cy="0" r="14" fill="var(--hanak-cloud)" stroke="var(--color-forest)" strokeWidth="1.2" />
        <path
          d="M-6 1 L6 1 M0 -6 L0 7 M-4 5 L4 5"
          stroke="var(--color-forest)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <text x="0" y="28" textAnchor="middle" className="fill-forest/80 font-sans text-[10px] uppercase tracking-[0.15em]">
          Aeropuerto
        </text>
      </g>
    </svg>
  );
}
