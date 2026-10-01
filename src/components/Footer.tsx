import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";
import Marquee from "./Marquee";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
  PinterestIcon,
  WhatsappIcon,
} from "./SocialIcons";

const languages = ["English", "Español", "Français", "Italiano", "Português"];

export default function Footer() {
  const [first, ...rest] = nav;
  const last = rest.pop()!;

  return (
    <footer className="mt-auto">
      <Marquee />

      <div className="bg-forest text-cloud">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 sm:pt-16 flex flex-col sm:flex-row sm:items-start justify-between gap-8">
          <div>
            <p className="font-display italic text-lg sm:text-xl text-cloud/90 mb-4">
              Descubre Hanak Sky Resort
            </p>
            <div className="flex items-center gap-4 text-cloud/80">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                <InstagramIcon />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                <FacebookIcon />
              </a>
              <span aria-hidden className="opacity-50">
                <YoutubeIcon />
              </span>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition">
                <TiktokIcon />
              </a>
              <span aria-hidden className="opacity-50">
                <PinterestIcon />
              </span>
              <a href={`https://wa.me/51${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white transition">
                <WhatsappIcon />
              </a>
            </div>
          </div>

          <div className="text-right">
            <p className="font-display italic text-lg sm:text-xl text-cloud/90 mb-4">Lenguaje</p>
            <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-sm">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className={lang === "Español" ? "text-white" : "text-cloud/50"}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Marca centrada — lockup real (isotipo + wordmark), tono crema para fondo oscuro */}
        <div className="flex flex-col items-center text-center pt-10 sm:pt-14 pb-8">
          <Image
            src="/images/brand/lockup-cream.png"
            alt={`${site.name} — Sky Resort & Villas Club`}
            width={280}
            height={176}
            className="w-40 sm:w-52 h-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="border-t border-cloud/15" />
          <nav className="flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-3 py-6 text-xs uppercase tracking-[0.12em]">
            <Link href={first.href} className="italic text-cloud/70 hover:text-white transition">
              {first.label}
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-cloud/80">
              {rest.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href={last.href} className="italic text-cloud/70 hover:text-white transition">
              {last.label}
            </Link>
          </nav>
          <div className="border-t border-cloud/15" />
          <p className="text-center text-[11px] sm:text-xs text-cloud/50 py-5">
            © HANAK · Prototipo digital. Datos comerciales, legales,
            ambientales, tiempos y disponibilidades deben validarse antes de
            publicación.
          </p>
        </div>
      </div>
    </footer>
  );
}
