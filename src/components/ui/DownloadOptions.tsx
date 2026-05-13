"use client";

import { useState } from "react";
import type { VideoMetadata, DownloadState } from "@/types";

interface DownloadOptionsProps {
  metadata: VideoMetadata;
  onDownload: (type: "video" | "mp3", quality?: string) => void;
  downloadState: DownloadState;
}

const QUALITIES = [
  { value: "best",   label: "Best" },
  { value: "1080p",  label: "1080p" },
  { value: "720p",   label: "720p" },
  { value: "480p",   label: "480p" },
  { value: "360p",   label: "360p" },
];

export default function DownloadOptions({ metadata, onDownload, downloadState }: DownloadOptionsProps) {
  const [quality, setQuality] = useState("720p");
  const [activeType, setActiveType] = useState<"video" | "mp3" | null>(null);
  const isDownloading = downloadState === "downloading";

  const handle = (type: "video" | "mp3") => {
    if (isDownloading) return;
    setActiveType(type);
    onDownload(type, type === "video" ? quality : undefined);
  };

  const videoLoading = isDownloading && activeType === "video";
  const mp3Loading   = isDownloading && activeType === "mp3";

  return (
    <div className="glass rounded-2xl p-5 sm:p-6 animate-slide-up space-y-5" style={{ animationDelay: "60ms" }}>
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-dot" />
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Save Options</span>
      </div>

      {/* Video section */}
      <div className="space-y-3">
        {/* Quality selector */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs text-white/40">Video quality</span>
          <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-lg p-0.5">
            {QUALITIES.map((q) => (
              <button
                key={q.value}
                onClick={() => setQuality(q.value)}
                disabled={isDownloading}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 disabled:cursor-not-allowed ${
                  quality === q.value
                    ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                    : "text-white/38 hover:text-white/70 disabled:opacity-40"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* MP4 button */}
        <button
          onClick={() => handle("video")}
          disabled={isDownloading}
          className={`
            w-full flex items-center gap-3 py-3.5 px-5 rounded-xl font-medium text-sm
            transition-all duration-200 active:scale-[0.985]
            ${videoLoading
              ? "bg-red-600/50 text-white/60 cursor-not-allowed"
              : isDownloading
              ? "bg-white/[0.04] text-white/25 cursor-not-allowed border border-white/[0.05]"
              : "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/30 hover:shadow-red-800/40"
            }
          `}
        >
          {videoLoading ? (
            <>
              <Spinner />
              <span className="flex-1 text-left">Preparing video…</span>
              <ProgressPill />
            </>
          ) : (
            <>
              <VideoIcon />
              <span className="flex-1 text-left">Save as MP4</span>
              <span className="text-xs opacity-50 font-normal">{quality === "best" ? "Highest" : quality}</span>
            </>
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/[0.06]" />
        <span className="text-[0.65rem] text-white/22 font-medium uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* MP3 button */}
      <button
        onClick={() => handle("mp3")}
        disabled={isDownloading}
        className={`
          w-full flex items-center gap-3 py-3.5 px-5 rounded-xl font-medium text-sm
          transition-all duration-200 active:scale-[0.985] border
          ${mp3Loading
            ? "bg-white/[0.04] border-white/[0.08] text-white/50 cursor-not-allowed"
            : isDownloading
            ? "bg-white/[0.02] border-white/[0.04] text-white/20 cursor-not-allowed"
            : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/15 text-white"
          }
        `}
      >
        {mp3Loading ? (
          <>
            <Spinner />
            <span className="flex-1 text-left">Converting audio…</span>
            <ProgressPill />
          </>
        ) : (
          <>
            <MusicIcon />
            <span className="flex-1 text-left">Extract MP3 Audio</span>
            <span className="text-xs opacity-40 font-normal">320 kbps</span>
          </>
        )}
      </button>

      {/* Legal note */}
      <p className="text-[0.68rem] text-white/18 text-center leading-relaxed pt-1">
        For personal use only. Files are processed in real-time and never stored on our servers.
        <br />
        By downloading you agree to our{" "}
        <a href="/terms" className="underline hover:text-white/35 transition-colors">Terms of Use</a>.
      </p>
    </div>
  );
}

const Spinner = () => (
  <svg className="animate-spin flex-shrink-0" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
    <path d="M7.5 1.5A6 6 0 0113.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ProgressPill = () => (
  <div className="overflow-hidden rounded-full bg-white/10 w-16 h-1 flex-shrink-0">
    <div className="h-full bg-current opacity-50 rounded-full progress-bar-anim" />
  </div>
);

const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
    <rect x="1" y="2" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M11 6l4-2v8l-4-2V6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const MusicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
    <path d="M6 12V4l8-2v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4.5" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12.5" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
