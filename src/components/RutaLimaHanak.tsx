// Mapa Lima → Tarapoto → Hanak, tal como lo exportó Bryan directamente de
// Illustrator (fondo transparente, mismo criterio que PeruMiniMap.tsx en
// INICIO). El gráfico base (mapa-lima-hanak.webp) es ese mismo export, pero
// "limpio": el avioncito y el carrito que Bryan dibujó ahí como referencia de
// tamaño/posición se borraron a mano (rellenando con el color plano de fondo
// que había debajo — blanco junto a Lima, crema sobre la silueta de San
// Martín) y el tramo de línea punteada que quedaba debajo de cada ícono se
// volvió a trazar, para poder animarlos de verdad en vez de dejarlos fijos.
//
// Igual mecanismo que PeruMiniMap: cada ícono viaja sobre una curva
// <animateMotion> ajustada pixel a pixel a la línea punteada real del propio
// gráfico (no una curva inventada), con rotate="auto" y un fundido de
// entrada/salida para que el reinicio del loop sea invisible. La diferencia
// es que acá son DOS tramos en relevo, como pidió Bryan ("el avion de lima a
// tarapoto, y el carrito de tarapoto a Hanak"): el avión hace su recorrido,
// se apaga, y recién entonces el carrito hace el suyo — igual idea que ya
// tenía RutaAnimada.tsx (el mapa esquemático anterior), ahora sobre el mapa
// real.
export default function RutaLimaHanak({
  className = "",
  maxWidthClassName = "max-w-[640px] sm:max-w-[820px] lg:max-w-[960px]",
}: {
  className?: string;
  maxWidthClassName?: string;
}) {
  return (
    <div className={`w-full mx-auto ${maxWidthClassName} ${className}`}>
      <svg
        viewBox="0 0 1440 1440"
        className="w-full h-auto"
        role="img"
        aria-label="Mapa de Lima a Hanak: vuelo directo a Tarapoto y 30 minutos por tierra hasta el resort"
      >
        <image href="/images/como-llegar/mapa-lima-hanak.webp" width={1440} height={1440} />

        {/* Avión — Lima → Tarapoto (1h 20min) */}
        <image
          href="/images/como-llegar/avioncito-mapa.webp"
          width={46}
          height={46}
          x={-23}
          y={-23}
          opacity={0}
        >
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0;1;1"
            keyTimes="0;0.38;1"
            calcMode="linear"
            path="M 277,788 Q 599.5,430.7 922,764"
          />
          <animate
            attributeName="opacity"
            dur="10s"
            repeatCount="indefinite"
            values="0;1;1;0;0"
            keyTimes="0;0.04;0.34;0.38;1"
          />
        </image>

        {/* Carrito — Tarapoto → Hanak (30 min) */}
        <image
          href="/images/como-llegar/carrito-mapa.webp"
          width={44}
          height={38}
          x={-22}
          y={-19}
          opacity={0}
        >
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0;0;1;1"
            keyTimes="0;0.46;0.86;1"
            calcMode="linear"
            path="M 922,764 C 965.2,704.3 807.6,644.7 1075,585"
          />
          <animate
            attributeName="opacity"
            dur="10s"
            repeatCount="indefinite"
            values="0;0;1;1;0;0"
            keyTimes="0;0.46;0.5;0.82;0.86;1"
          />
        </image>
      </svg>
    </div>
  );
}
