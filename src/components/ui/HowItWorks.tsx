const steps = [
  {
    num: "01",
    title: "Paste Your Link",
    desc: "Copy any YouTube URL — video, Short, or Live — and paste it into the input field. It auto-validates instantly.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 3h9a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 3V1M3 6H1M6 3L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Preview Metadata",
    desc: "We fetch the video title, thumbnail, channel name, and duration in seconds — no waiting.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7l5 2-5 2V7Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Pick Format",
    desc: "Choose MP4 video at your preferred quality (360p–4K) or extract audio as a 320 kbps MP3.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9h10M4 5h10M4 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Save to Device",
    desc: "Your file is processed server-side and delivered directly to your browser. Temp files are deleted automatically.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2v10M6 9l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12" aria-labelledby="how-heading">
      <div className="relative overflow-hidden glass rounded-3xl p-8 sm:p-12">
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-red-800/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1 mb-4">
                <span className="text-[0.65rem] font-medium text-white/40 uppercase tracking-widest">Simple Process</span>
              </div>
              <h2 id="how-heading" className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                How It Works
              </h2>
            </div>
            <a
              href="#downloader"
              className="inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors font-medium flex-shrink-0 mb-1"
            >
              Try it now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-5 left-[calc(100%_+_4px)] w-[calc(100%_-_8px)] h-px pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-full h-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/15 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-600/15 transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <div className="font-display text-3xl text-red-600/20 mb-2 leading-none">{step.num}</div>

                  <h3 className="font-semibold text-white/90 mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-white/38 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
