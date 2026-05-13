const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Processing",
    description: "Our servers use yt-dlp — the gold standard in YouTube extraction — for maximum speed and reliability.",
  },
  {
    icon: "🎞️",
    title: "Multiple Video Qualities",
    description: "Choose from 360p to 4K. We auto-select the best available format for each video.",
  },
  {
    icon: "🎵",
    title: "High-Quality MP3 Extraction",
    description: "Extract crystal-clear 320 kbps MP3 audio from any YouTube video using FFmpeg conversion.",
  },
  {
    icon: "🔒",
    title: "Private & Secure",
    description: "Files are processed in real-time on our servers and automatically deleted within minutes. Nothing is retained.",
  },
  {
    icon: "📱",
    title: "Works on Any Device",
    description: "Fully responsive — works flawlessly on desktop, tablet, and mobile. No app install required.",
  },
  {
    icon: "🆓",
    title: "Always Free",
    description: "No account. No subscription. No payment. YouTubeMint is a free personal media utility tool.",
  },
];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span className="text-xs font-medium text-red-400 uppercase tracking-widest">Why YouTubeMint</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-white mb-4 tracking-wide">
          Built for Creators
        </h2>
        <p className="text-white/40 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
          A professional-grade utility for saving and repurposing your own content.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feat, i) => (
          <div
            key={i}
            className="glass glass-hover rounded-2xl p-5 group"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="text-2xl mb-4 w-10 h-10 flex items-center justify-center bg-white/[0.04] rounded-xl group-hover:bg-white/[0.07] transition-colors duration-300">
              {feat.icon}
            </div>
            <h3 className="font-semibold text-white/90 mb-1.5 text-sm sm:text-base">{feat.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
