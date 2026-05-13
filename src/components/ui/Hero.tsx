export default function Hero() {
  return (
    <div className="text-center mb-14 sm:mb-18 pt-2">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-dot" />
        <span className="text-xs font-medium text-red-400 tracking-widest uppercase">
          Creator Utility Tool · Free · No Sign-Up
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] text-white tracking-wide leading-[1.0] mb-6 animate-slide-up">
        Save YouTube
        <br />
        <span className="text-red-500">Videos &amp; Audio</span>
        <br />
        <span className="text-white/70 text-4xl sm:text-5xl lg:text-6xl">Instantly.</span>
      </h1>

      {/* Sub */}
      <p
        className="text-white/45 text-base sm:text-lg max-w-[38ch] mx-auto leading-relaxed animate-slide-up"
        style={{ animationDelay: "80ms" }}
      >
        Paste any YouTube link to extract video or audio for personal use.
        No ads. No registration. No nonsense.
      </p>

      {/* Trust indicators */}
      <div
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-9 animate-fade-in"
        style={{ animationDelay: "160ms" }}
      >
        {[
          { value: "4K", label: "Max Quality" },
          { value: "320kbps", label: "MP3 Bitrate" },
          { value: "0 Ads", label: "Always Free" },
          { value: "~5s", label: "Avg. Fetch Time" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-xl sm:text-2xl text-white tracking-wider">{stat.value}</div>
            <div className="text-xs text-white/28 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
