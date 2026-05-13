import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Downloader from "@/components/ui/Downloader";
import Features from "@/components/ui/Features";
import HowItWorks from "@/components/ui/HowItWorks";
import FAQ from "@/components/ui/FAQ";

/**
 * Homepage — identical layout to production.
 * Ad zones are removed from the showcase build.
 * The downloader section uses the demo-mode Downloader component.
 */
export default function HomePage() {
  return (
    <div className="gradient-mesh min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1" id="main-content">
        {/* Hero + Downloader */}
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-20">
          <Hero />
          <Downloader />
        </section>

        <HowItWorks />
        <Features />
        <FAQ />

        {/* SEO text block */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-2xl text-white tracking-wide mb-4">About This Project</h2>
            <div className="space-y-3 text-sm text-white/38 leading-relaxed">
              <p>
                YouTubeMint is a creator-friendly media utility built with Next.js 15,
                TypeScript, TailwindCSS, and a custom dark design system. This repository
                is a public portfolio showcase — the UI, component architecture, animations,
                and API contract are all real and production-grade.
              </p>
              <p>
                The backend processing logic (yt-dlp integration, FFmpeg audio conversion,
                temp file management, and rate limiting) lives in a separate private
                repository and is not included here.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
