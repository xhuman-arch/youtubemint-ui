/**
 * DEMO MODE — Mock Data
 *
 * This file provides static demo responses for the public showcase version.
 * In the production build, this is replaced by real yt-dlp metadata extraction.
 */

import type { VideoMetadata } from "@/types";

export const DEMO_VIDEOS: Record<string, VideoMetadata> = {
  // Demo entry 1 — short nature clip
  dQw4w9WgXcY: {
    id: "dQw4w9WgXcY",
    title: "Stunning 4K Nature Timelapse — Mountains & Clouds",
    thumbnail: "https://picsum.photos/seed/nature1/1280/720",
    duration: 215,
    durationFormatted: "3:35",
    author: "Nature Visuals",
    channelId: "UC_demo_1",
    viewCount: 4820341,
    uploadDate: "March 12, 2024",
    description: "A breathtaking 4K timelapse journey through mountain landscapes and dramatic cloud formations. Perfect for relaxation and screensavers.",
    formats: [
      { formatId: "137", quality: "1080p", resolution: "1920x1080", fps: 30, ext: "mp4" },
      { formatId: "136", quality: "720p",  resolution: "1280x720",  fps: 30, ext: "mp4" },
      { formatId: "135", quality: "480p",  resolution: "854x480",   fps: 30, ext: "mp4" },
      { formatId: "134", quality: "360p",  resolution: "640x360",   fps: 30, ext: "mp4" },
    ],
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcY",
  },

  // Demo entry 2 — tech talk
  abc123XYZdef: {
    id: "abc123XYZdef",
    title: "Building Scalable APIs with Next.js 15 — Full Tutorial",
    thumbnail: "https://picsum.photos/seed/tech2/1280/720",
    duration: 3672,
    durationFormatted: "1:01:12",
    author: "Dev Mastery",
    channelId: "UC_demo_2",
    viewCount: 192500,
    uploadDate: "January 8, 2025",
    description: "In this comprehensive tutorial we build a production-ready REST API using Next.js 15 App Router, TypeScript, and Zod validation.",
    formats: [
      { formatId: "137", quality: "1080p", resolution: "1920x1080", fps: 60, ext: "mp4" },
      { formatId: "136", quality: "720p",  resolution: "1280x720",  fps: 60, ext: "mp4" },
      { formatId: "134", quality: "360p",  resolution: "640x360",   fps: 30, ext: "mp4" },
    ],
    url: "https://www.youtube.com/watch?v=abc123XYZdef",
  },

  // Demo entry 3 — music/audio focused
  LoFiBeatsXXX: {
    id: "LoFiBeatsXXX",
    title: "Lo-Fi Hip Hop Radio — Beats to Study & Relax To [2h Mix]",
    thumbnail: "https://picsum.photos/seed/lofi3/1280/720",
    duration: 7200,
    durationFormatted: "2:00:00",
    author: "ChillHop Music",
    channelId: "UC_demo_3",
    viewCount: 18_400_000,
    uploadDate: "November 3, 2023",
    description: "Two hours of carefully curated lo-fi beats. Perfect for late night coding sessions, studying, or just unwinding.",
    formats: [
      { formatId: "137", quality: "1080p", resolution: "1920x1080", fps: 30, ext: "mp4" },
      { formatId: "136", quality: "720p",  resolution: "1280x720",  fps: 30, ext: "mp4" },
    ],
    url: "https://www.youtube.com/watch?v=LoFiBeatsXXX",
  },
};

/**
 * Returns a deterministic demo video based on the URL's video ID.
 * Falls back to the first demo entry for any unrecognized ID.
 */
export function getDemoVideo(url: string): VideoMetadata {
  // Extract video ID from URL to pick a consistent demo
  const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  const id = match?.[1] ?? "";

  // Check if we have a specific demo for this ID
  if (DEMO_VIDEOS[id]) return DEMO_VIDEOS[id];

  // Otherwise pick deterministically based on URL length (so same URL always returns same demo)
  const keys = Object.keys(DEMO_VIDEOS);
  const index = (url.length + id.charCodeAt(0)) % keys.length;
  const picked = { ...DEMO_VIDEOS[keys[index]] };

  // Patch in the real-looking ID so the UI feels authentic
  picked.id = id || picked.id;
  picked.url = url;
  return picked;
}

/** Simulated download delay in ms — makes the demo feel realistic */
export const DEMO_FETCH_DELAY_MS = 1800;
export const DEMO_DOWNLOAD_DELAY_MS = 3200;
