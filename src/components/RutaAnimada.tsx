"use client";

import { useEffect, useRef } from "react";

/**
 * Mapa esquemático Lima → Tarapoto (avión) → Hanak (carrito/van).
 * El avión recorre el primer tramo, se desvanece, y el carrito recorre
 * el segundo — en loop, arrancando cuando la sección entra en pantalla.
 * Pedido explícito de Bryan: "la animacion del avion y carrito en COMO LLEGAR".
 */
export default function RutaAnimada() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // Arranca pausada; se activa al entrar en viewport.
    svg.pauseAnimations();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          svg.unpauseAnimations();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-cloud-soft p-4 sm:p-8">
      <svg
        ref={svgRef}
        viewBox="0 0 900 320"
        className="w-full h-auto"
        role="img"
        aria-label="Ruta desde Lima hasta Hanak: vuelo a Tarapoto y trayecto en carrito hasta el resort"
      >
        {/* Rutas guía */}
        <path
          id="ruta-vuelo"
          d="M70,235 Q250,20 430,80"
          fill="none"
          stroke="var(--color-forest, #2f4a3c)"
          strokeWidth="2"
          strokeDasharray="2 10"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          id="ruta-tierra"
          d="M430,80 C560,150 650,115 820,195"
          fill="none"
          stroke="var(--color-forest, #2f4a3c)"
          strokeWidth="2"
          strokeDasharray="2 10"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Etiquetas de tramo */}
        <text x="220" y="105" textAnchor="middle" className="fill-forest/70 text-[13px] uppercase tracking-wider">
          ✈ Vuelo directo
        </text>
        <text x="640" y="130" textAnchor="middle" className="fill-forest/70 text-[13px] uppercase tracking-wider">
          🚐 30 min por tierra
        </text>

        {/* Puntos */}
        <g>
          <circle cx="70" cy="235" r="7" className="fill-forest" />
          <text x="70" y="262" textAnchor="middle" className="fill-charcoal font-display text-[16px]">Lima</text>
        </g>
        <g>
          <circle cx="430" cy="80" r="7" className="fill-forest" />
          <text x="430" y="55" textAnchor="middle" className="fill-charcoal font-display text-[16px]">Tarapoto</text>
        </g>
        <g>
          <circle cx="820" cy="195" r="8" className="fill-forest" />
          <circle cx="820" cy="195" r="13" className="fill-none stroke-forest" strokeWidth="1.5" opacity="0.5" />
          <text x="820" y="222" textAnchor="middle" className="fill-charcoal font-display text-[16px]">Hanak</text>
        </g>

        {/* Avión */}
        <g fill="#fff" stroke="var(--color-forest, #2f4a3c)" strokeWidth="1.2" opacity="0">
          <path d="M0,-6 L14,0 L0,6 L3,0 Z" />
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            keyPoints="0;1;1"
            keyTimes="0;0.4;1"
            calcMode="linear"
            rotate="auto"
          >
            <mpath href="#ruta-vuelo" />
          </animateMotion>
          <animate
            attributeName="opacity"
            dur="9s"
            repeatCount="indefinite"
            values="1;1;0;0"
            keyTimes="0;0.4;0.48;1"
          />
        </g>

        {/* Carrito */}
        <g stroke="var(--color-forest, #2f4a3c)" strokeWidth="1.2" opacity="0">
          <rect x="-11" y="-6" width="22" height="10" rx="3" className="fill-white" />
          <circle cx="-5" cy="5" r="2.6" className="fill-forest" stroke="none" />
          <circle cx="6" cy="5" r="2.6" className="fill-forest" stroke="none" />
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            keyPoints="0;0;1;1"
            keyTimes="0;0.5;0.9;1"
            calcMode="linear"
            rotate="auto"
          >
            <mpath href="#ruta-tierra" />
          </animateMotion>
          <animate
            attributeName="opacity"
            dur="9s"
            repeatCount="indefinite"
            values="0;0;1;1;0"
            keyTimes="0;0.42;0.5;0.9;1"
          />
        </g>
      </svg>
    </div>
  );
}
