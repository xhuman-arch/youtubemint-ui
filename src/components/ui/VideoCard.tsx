"use client";

import Image from "next/image";
import type { VideoMetadata } from "@/types";
import { formatViewCount } from "@/utils/validators";

interface VideoCardProps {
  metadata: VideoMetadata;
}

export default function VideoCard({ metadata }: VideoCardProps) {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-scale-in">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-black/60 overflow-hidden">
        <Image
          src={metadata.thumbnail}
          alt={metadata.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 640px"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg tabular-nums">
          {metadata.durationFormatted}
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-red-600/85 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl shadow-red-900/50 transition-transform duration-200 hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.5 4L14.5 9L6.5 14V4Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4">
        <h3 className="text-white font-semibold text-[0.95rem] sm:text-base leading-snug line-clamp-2 mb-3">
          {metadata.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <MetaStat icon={<PersonIcon />} label={metadata.author} highlight />
          {metadata.viewCount > 0 && (
            <MetaStat icon={<ViewIcon />} label={`${formatViewCount(metadata.viewCount)} views`} />
          )}
          {metadata.uploadDate !== "Unknown" && (
            <MetaStat icon={<CalIcon />} label={metadata.uploadDate} />
          )}
        </div>
      </div>
    </div>
  );
}

function MetaStat({ icon, label, highlight }: { icon: React.ReactNode; label: string; highlight?: boolean }) {
  return (
    <span className={`flex items-center gap-1.5 text-xs ${highlight ? "text-white/70" : "text-white/38"}`}>
      <span className="opacity-70">{icon}</span>
      {label}
    </span>
  );
}

const PersonIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="4" r="2.2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M1.5 10.5c0-2 2-3.5 4.5-3.5s4.5 1.5 4.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
const ViewIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M1 6C1 6 2.8 2.5 6 2.5S11 6 11 6s-1.8 3.5-5 3.5S1 6 1 6Z" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="6" cy="6" r="1.3" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
const CalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="1" y="2" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M1 5h10M4 1v2M8 1v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
