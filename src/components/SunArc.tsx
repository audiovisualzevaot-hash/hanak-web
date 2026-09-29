// Ícono decorativo "sol/arco" que aparece debajo de los títulos hero en
// Inicio, Hanak, Cómo Llegar, etc. — un semicírculo relleno con una línea
// vertical y un punto arriba, como un amanecer esquemático.
export default function SunArc({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width="64"
      height="40"
      viewBox="0 0 64 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <line x1="32" y1="0" x2="32" y2="16" stroke={color} strokeWidth="1" opacity="0.8" />
      <circle cx="32" cy="1.5" r="1.5" fill={color} />
      <path d="M8 32a24 24 0 0 1 48 0Z" fill={color} opacity="0.9" />
    </svg>
  );
}
