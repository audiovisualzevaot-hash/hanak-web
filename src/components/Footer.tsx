"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/content";
import Marquee from "./Marquee";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
  WhatsappIcon,
} from "./SocialIcons";
import { useDictionary } from "@/lib/i18n/I18nProvider";
import { locales, localeNames, localeHref, stripLocale, getLocaleFromPathname } from "@/lib/i18n/locales";

export default function Footer() {
  const [first, ...rest] = nav;
  const last = rest.pop()!;
  const dict = useDictionary();
  const rawPathname = usePathname();
  const activeLocale = getLocaleFromPathname(rawPathname);
  // Ruta canónica actual (sin prefijo) — se reusa para armar el link de
  // CADA idioma al cambiar, sin perder la página en la que está el visitante
  // (Bryan: los botones deben "traducir la web completa", no solo llevar al
  // inicio en el otro idioma).
  const canonicalPath = stripLocale(rawPathname);

  return (
    <footer className="mt-auto">
      <Marquee />

      <div className="bg-forest text-cloud">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 sm:pt-16 flex flex-col sm:flex-row sm:items-start justify-between gap-8">
          <div>
            <p className="font-display italic text-lg sm:text-xl text-cloud/90 mb-4">
              {dict.footer.discover}
            </p>
            <div className="flex items-center gap-4 text-cloud/80">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                <InstagramIcon />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                <FacebookIcon />
              </a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition">
                <YoutubeIcon />
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition">
                <TiktokIcon />
              </a>
              <a href={`https://wa.me/51${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white transition">
                <WhatsappIcon />
              </a>
            </div>
          </div>

          <div className="text-right">
            <p className="font-display italic text-lg sm:text-xl text-cloud/90 mb-4">
              {dict.footer.language}
            </p>
            {/* Bryan: solo Español/English/Italiano, como botones reales que
                traducen la web completa (no una lista decorativa). Cada uno
                lleva a la MISMA página en la que está el visitante, solo que
                en ese idioma — localeHref() arma esa URL a partir de la ruta
                canónica actual (ver stripLocale más arriba). */}
            <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-sm">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={localeHref(loc, canonicalPath)}
                  hrefLang={loc}
                  aria-current={loc === activeLocale ? "true" : undefined}
                  className={
                    loc === activeLocale
                      ? "text-white"
                      : "text-cloud/50 hover:text-cloud/80 transition"
                  }
                >
                  {localeNames[loc]}
                </Link>
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
            <Link href={localeHref(activeLocale, first.href)} className="italic text-cloud/70 hover:text-white transition">
              {dict.nav[first.key]}
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-cloud/80">
              {rest.map((item) => (
                <Link key={item.href} href={localeHref(activeLocale, item.href)} className="hover:text-white transition">
                  {dict.nav[item.key]}
                </Link>
              ))}
            </div>
            <Link href={localeHref(activeLocale, last.href)} className="italic text-cloud/70 hover:text-white transition">
              {dict.nav[last.key]}
            </Link>
          </nav>
          <div className="border-t border-cloud/15" />
          <p className="text-center text-[11px] sm:text-xs text-cloud/50 py-5">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
