import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/dmca", label: "DMCA" },
  { href: "/contact", label: "Contact" },
];

const TOOL_LINKS = [
  { href: "/#downloader", label: "Video Downloader" },
  { href: "/#downloader", label: "MP3 Extractor" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7 flex-shrink-0">
                <div className="absolute inset-0 bg-red-700 rounded-md rotate-6 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-md flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M5 3L10.5 6.5L5 10V3Z" fill="white" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-lg text-white tracking-wider">
                YouTube<span className="text-red-500">Mint</span>
              </span>
            </Link>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              A creator-friendly media utility for saving publicly accessible YouTube content for personal use.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Tools</h4>
            <ul className="space-y-2.5">
              {TOOL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-white/80 transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-white/80 transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-xl p-4 mb-8">
          <p className="text-xs text-white/30 leading-relaxed text-center">
            <strong className="text-white/45">Disclaimer:</strong> YouTubeMint is a personal media utility tool. Users are solely responsible for complying with YouTube&apos;s Terms of Service and all applicable copyright laws. This tool is intended for saving publicly accessible content for personal, non-commercial use only.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
          <p className="text-xs text-white/20">© {new Date().getFullYear()} YouTubeMint. All rights reserved.</p>
          <p className="text-xs text-white/15">Not affiliated with YouTube™ or Google LLC.</p>
        </div>
      </div>
    </footer>
  );
}
