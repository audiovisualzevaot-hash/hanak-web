"use client";

import { site } from "@/lib/content";
import { useDictionary } from "@/lib/i18n/I18nProvider";
import { WhatsappIcon } from "./SocialIcons";

/**
 * Botón flotante de WhatsApp, fijo en la esquina inferior derecha de todas
 * las páginas — pedido explícito de Bryan: un canal de captación de leads
 * en paralelo al panel "Agenda tu cita" (ReservePanel), sin pasar por el
 * formulario.
 *
 * z-40: por debajo del panel de reserva (z-[100] en ReservePanel.tsx) y del
 * overlay del menú móvil, así queda naturalmente tapado cuando cualquiera
 * de los dos se abre, en vez de competir visualmente con ellos — no hace
 * falta ocultarlo a mano en esos casos.
 *
 * Color: se usa el verde característico de WhatsApp (no un tono de la
 * paleta HANAK) a propósito — es la decisión de diseño que más reconoce un
 * visitante de un vistazo, y ahí la recuperación de reconocimiento pesa más
 * que la consistencia de marca en un solo elemento puntual. El ícono en sí
 * sigue siendo el trazo monolínea propio del sitio (SocialIcons.tsx), no el
 * logo oficial.
 */
export default function WhatsAppButton() {
  const dict = useDictionary();
  const href = `https://wa.me/51${site.whatsapp}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.whatsappButton.ariaLabel}
      title={dict.whatsappButton.ariaLabel}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden
        className="animate-whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]"
      />
      <WhatsappIcon className="relative h-7 w-7" />
    </a>
  );
}
