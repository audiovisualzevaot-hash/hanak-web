// Mapa esquemático pequeño Lima → Hanak (Tarapoto), usado en la intro de
// Inicio para dar contexto de ubicación. Formas abstractas (no fronteras
// reales), en el mismo lenguaje visual que RutaAnimada.
export default function PeruMiniMap() {
  return (
    <svg
      viewBox="0 0 320 220"
      className="w-full max-w-xs mx-auto"
      role="img"
      aria-label="Ubicación de Hanak respecto a Lima"
    >
      <path
        d="M30 40c20-15 40-10 45 10 4 16-6 26-2 44 4 20 22 30 18 50-4 22-30 28-48 18C24 152 10 130 12 104 14 78 12 54 30 40Z"
        fill="var(--color-forest)"
        opacity="0.12"
      />
      <path
        d="M190 60c30-10 70-4 90 18 18 20 20 48 4 66-14 16-40 14-62 24-20 9-32 30-54 28-20-2-30-22-28-42 2-22 20-32 24-54 4-18 8-32 26-40Z"
        fill="var(--color-forest)"
        opacity="0.12"
      />
      <path
        d="M55 90 Q120 40 195 95"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="1.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="55" cy="90" r="6" className="fill-forest" />
      <text x="55" y="116" textAnchor="middle" className="fill-forest font-display text-[15px]">
        Lima
      </text>
      <circle cx="195" cy="95" r="7" className="fill-forest" />
      <circle cx="195" cy="95" r="12" className="fill-none stroke-forest" strokeWidth="1.3" opacity="0.5" />
      <text x="195" y="122" textAnchor="middle" className="fill-forest font-display text-[15px]">
        Hanak
      </text>
    </svg>
  );
}
