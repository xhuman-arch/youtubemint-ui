import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About — YouTubeMint",
  description: "Learn about YouTubeMint, a creator-friendly media utility for YouTube.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-mesh">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/30 mb-8">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/50">About</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-wide mb-4">About YouTubeMint</h1>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl">
            A lightweight, creator-friendly utility for saving publicly accessible YouTube content to your device — fast, private, and free.
          </p>
        </div>

        {/* Mission */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-6">
          <h2 className="font-semibold text-white/90 mb-3 text-base">Our Mission</h2>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            YouTubeMint was built with one purpose: give creators and researchers a clean, reliable way to extract media from YouTube for personal and legitimate use. We believe in speed, privacy, and simplicity — no bloat, no dark patterns, no misleading claims.
          </p>
          <p className="text-sm text-white/50 leading-relaxed">
            Unlike many tools in this space, we position ourselves as a <strong className="text-white/75">personal media utility</strong>, not a piracy enabler. We take copyright seriously and comply with DMCA requirements.
          </p>
        </div>

        {/* Tech */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-6">
          <h2 className="font-semibold text-white/90 mb-3 text-base">Technology</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Next.js 15", desc: "React framework with API routes" },
              { name: "yt-dlp", desc: "Industry-standard YouTube extraction" },
              { name: "FFmpeg", desc: "Professional audio/video processing" },
              { name: "TypeScript", desc: "End-to-end type safety" },
            ].map((tech) => (
              <div key={tech.name} className="flex items-start gap-3 p-3 bg-white/[0.03] rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-white/85">{tech.name}</div>
                  <div className="text-xs text-white/38 mt-0.5">{tech.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-2xl p-5 border border-yellow-500/10 bg-yellow-950/5">
          <p className="text-xs text-white/38 leading-relaxed">
            <strong className="text-white/55">Important:</strong> YouTubeMint is a personal utility tool. Users are solely responsible for ensuring their use complies with YouTube&apos;s Terms of Service and applicable copyright laws. Do not use this tool to download content you do not have the right to save.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Link href="/" className="text-sm text-red-400 hover:text-red-300 transition-colors font-medium">
            ← Back to Tool
          </Link>
          <Link href="/contact" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
