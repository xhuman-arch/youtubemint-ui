import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact — YouTubeMint",
  description: "Get in touch with the YouTubeMint team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-mesh">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-24 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/30 mb-8">
          <a href="/" className="hover:text-white/60 transition-colors">Home</a>
          <span>/</span>
          <span className="text-white/50">Contact</span>
        </div>

        <div className="mb-10">
          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-wide mb-3">Contact Us</h1>
          <p className="text-white/45">Questions, feedback, DMCA requests, or abuse reports — we read everything.</p>
        </div>

        <div className="grid gap-4 mb-8">
          {[
            { title: "General Inquiries", desc: "Questions about the service or how it works.", email: "hello@youtubemint.com" },
            { title: "DMCA / Copyright", desc: "Copyright takedown requests and infringement reports.", email: "dmca@youtubemint.com" },
            { title: "Abuse Reports", desc: "Report misuse or terms of service violations.", email: "abuse@youtubemint.com" },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-5">
              <h3 className="font-semibold text-white/90 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-white/40 mb-2 leading-relaxed">{item.desc}</p>
              <a
                href={`mailto:${item.email}`}
                className="text-sm text-red-400 hover:text-red-300 transition-colors font-medium"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-5">
          <p className="text-xs text-white/30 leading-relaxed">
            We aim to respond within 2–5 business days. For DMCA notices, please include all required information as outlined in our{" "}
            <a href="/dmca" className="underline hover:text-white/50 transition-colors">DMCA Policy</a>{" "}
            to ensure prompt processing.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
