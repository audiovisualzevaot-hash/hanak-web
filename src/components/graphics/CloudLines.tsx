"use client";

// Nubes en trazo fino que cruzan el bloque despacio, de izquierda a derecha.
// Cada una tiene su propio tamaño, altura, velocidad y desfase (negativo, así
// ya vienen repartidas por el recorrido desde el primer cuadro) para que no
// se vea un patrón repetido. Reflejan "sobre las nubes", la idea central de
// HANAK. Color vía className (currentColor). Decorativas.
const CLOUDS = [
  { top: "8%", w: 220, dur: 95, delay: -20, op: 0.9 },
  { top: "34%", w: 150, dur: 70, delay: -52, op: 0.6 },
  { top: "58%", w: 280, dur: 120, delay: -90, op: 0.75 },
  { top: "80%", w: 170, dur: 84, delay: -34, op: 0.5 },
];

export default function CloudLines({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none overflow-hidden ${className}`}>
      {CLOUDS.map((c, i) => (
        <svg
          key={i}
          viewBox="0 0 200 80"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-cloud-cross absolute left-0"
          style={{
            top: c.top,
            width: c.w,
            opacity: c.op,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M34 66 C14 66 6 51 16 41 C18 27 36 21 48 29 C54 11 82 7 96 23 C110 13 134 19 140 37 C158 33 174 45 168 59 C166 64 162 66 156 66 Z"
          />
        </svg>
      ))}
    </div>
  );
}
