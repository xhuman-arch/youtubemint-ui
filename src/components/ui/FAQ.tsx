"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is YouTubeMint free to use?",
    a: "Yes, completely free. No registration, no subscription, no hidden fees. It's a personal media utility tool.",
  },
  {
    q: "What formats and qualities are available?",
    a: "For video: 360p, 480p, 720p, 1080p, or Best (auto-selects highest available). For audio: 320 kbps MP3 extracted with FFmpeg.",
  },
  {
    q: "Are my files stored on your servers?",
    a: "No. Files are processed in real-time and deleted automatically within 5 minutes after your download completes. We do not retain or log file content.",
  },
  {
    q: "Does it work with YouTube Shorts?",
    a: "Yes. YouTubeMint supports standard youtube.com/watch links, youtu.be short links, YouTube Shorts (/shorts/), and Live recordings.",
  },
  {
    q: "Why did my download fail?",
    a: "The most common reasons are: private or age-restricted video, regional blocks, or a network timeout for longer videos. Try refreshing or selecting a lower quality.",
  },
  {
    q: "Is this legal?",
    a: "YouTubeMint is designed for saving publicly accessible content you have rights to — such as your own uploads, royalty-free content, or content with explicit permission. Users are responsible for complying with YouTube's Terms of Service and applicable copyright laws.",
  },
  {
    q: "How do I report a problem or copyright issue?",
    a: "Please visit our Contact page or DMCA page for abuse reports and content takedown requests.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 mb-5">
          <span className="text-xs font-medium text-white/45 uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide">Common Questions</h2>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="glass rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
              aria-expanded={open === i}
            >
              <span className="text-sm sm:text-[0.95rem] font-medium text-white/85">{faq.q}</span>
              <svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                className={`flex-shrink-0 text-white/35 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              >
                <path d="M2.5 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-250 ${open === i ? "max-h-48" : "max-h-0"}`}>
              <p className="px-5 pb-4 text-sm text-white/48 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
