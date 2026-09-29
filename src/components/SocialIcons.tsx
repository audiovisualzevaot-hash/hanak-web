// Set mínimo de íconos sociales (trazo simple, monolínea) para el footer.
// No son los logotipos oficiales — son glifos genéricos equivalentes, en
// currentColor, consistentes con el estilo lineal del resto de la marca.
type IconProps = { className?: string };

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M14.5 21v-7.5h2.5l.5-3h-3V8.2c0-.9.3-1.6 1.7-1.6H17.6V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.5H8.7v3h2.5V21" />
    </svg>
  );
}

export function YoutubeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.5v5l4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M14 3v10.7a3.3 3.3 0 1 1-3.3-3.3c.3 0 .6 0 .9.1" />
      <path d="M14 3c.3 2.2 1.9 3.9 4 4.2" />
    </svg>
  );
}

export function PinterestIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 18c1-3.5 1.7-6.2 2.1-8 .4-1.7 2.9-1.9 3.6-.3.5 1.1 0 2.6-.5 3.9-.6 1.6.5 2.9 2.1 2.4 2.1-.7 2.7-4.6 1-6.5-1.9-2.2-6-2.1-7.6.1-1 1.4-1 3 .1 3.9" />
    </svg>
  );
}

export function WhatsappIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 18.5 4.8 21l2.6-1.1A8 8 0 1 0 6 18.5Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.3-.7.3-1.4 0-1.7l-1.6-.8c-.3-.1-.6 0-.8.2l-.4.5a5 5 0 0 1-2.4-2.4l.5-.4c.2-.2.3-.5.2-.8L9.7 8.1c-.3-.4-1-.4-1.7 0Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
