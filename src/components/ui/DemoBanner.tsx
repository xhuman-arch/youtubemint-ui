"use client";

/**
 * DemoBanner — Visible indicator that this is the public showcase build.
 * Shown above the downloader. Links to GitHub for context.
 * Not present in the production build.
 */
export default function DemoBanner() {
  return (
    <div className="mb-5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 flex items-start gap-3 animate-fade-in">
      {/* Icon */}
      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M5.5 1.5v4M5.5 7.5v.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="5.5" cy="5.5" r="4.5" stroke="#f59e0b" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-amber-400/90 mb-0.5">
          Demo / Showcase Mode
        </p>
        <p className="text-xs text-white/38 leading-relaxed">
          This is a public portfolio demo. Paste any YouTube URL to see the full
          UI flow — metadata preview, loading states, and download interactions
          are all simulated. No real files are downloaded.
        </p>
      </div>
    </div>
  );
}
