"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#downloader", label: "Downloader" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.06] py-3 shadow-xl shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 bg-red-700 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.5 4.5L12 8L6.5 11.5V4.5Z" fill="white" />
              </svg>
            </div>
          </div>
          <span className="font-display text-xl text-white tracking-wider">
            YouTube<span className="text-red-500">Mint</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-white/50 hover:text-white/90 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#downloader"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150 hover:shadow-lg hover:shadow-red-600/20 active:scale-95"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v8M4 6l2.5 3L9 6M1.5 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Free
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.06]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
          </div>
        </button>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="px-4 pb-5 pt-2 bg-black/95 backdrop-blur-2xl border-t border-white/[0.05] space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#downloader"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 bg-red-600 hover:bg-red-500 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors w-full"
          >
            Download Free
          </Link>
        </div>
      </div>
    </header>
  );
}
