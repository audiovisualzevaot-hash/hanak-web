"use client";

import { useReserve } from "./ReserveContext";

export default function FloatingCapsule() {
  const { open } = useReserve();

  function share() {
    if (navigator.share) {
      navigator.share({ title: "HANAK Sky Resort & Villas Club", url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado");
    }
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-charcoal/80 backdrop-blur-md text-white rounded-full px-2 py-2 flex items-center gap-1 shadow-xl text-xs sm:text-sm">
      <button
        onClick={open}
        className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition"
      >
        <span aria-hidden>✉</span> Contact Us
      </button>
      <span className="w-px h-4 bg-white/20" />
      <a
        href="/como-llegar"
        className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition"
      >
        <span aria-hidden>📍</span> Getting Here
      </a>
      <span className="w-px h-4 bg-white/20" />
      <button
        onClick={share}
        className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition"
      >
        <span aria-hidden>⤴</span> Share
      </button>
    </div>
  );
}
