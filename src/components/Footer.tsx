import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-forest text-cloud/90 mt-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
        <div>
          <p className="font-display text-xl text-white mb-3">{site.name}</p>
          <p className="text-cloud/70 leading-relaxed">
            Desarrollado por {site.developer}, con {site.developerYears} de
            trayectoria en el sector inmobiliario. Registrados ante SUNARP.
            Miembros de la Cámara de Comercio de Lima.
          </p>
        </div>

        <div>
          <p className="text-cloud/50 uppercase tracking-wider text-xs mb-3">Navegación</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-cloud/50 uppercase tracking-wider text-xs mb-3">Contacto</p>
          <ul className="space-y-2 text-cloud/80">
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href={site.social.instagram} target="_blank" className="hover:text-white transition">Instagram</a>
            <a href={site.social.tiktok} target="_blank" className="hover:text-white transition">TikTok</a>
            <a href={site.social.facebook} target="_blank" className="hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cloud/10 py-4 text-center text-xs text-cloud/50">
        © {new Date().getFullYear()} {site.fullName}
      </div>
    </footer>
  );
}
