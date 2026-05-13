"use client";

/**
 * DEMO MODE — Downloader.tsx
 *
 * The fetch and metadata display logic is real and unchanged.
 * The download handler is adapted for demo mode:
 *   - Production: receives a binary blob and triggers a real browser download.
 *   - Demo: receives a JSON response with { demo: true } and shows a success
 *     toast explaining this is a showcase build. No file is downloaded.
 *
 * The full UX flow (loading states, skeletons, error states, reset) is
 * identical to production so the portfolio demo is visually authentic.
 */

import { useState, useCallback } from "react";
import { toast } from "sonner";
import UrlInput from "./UrlInput";
import VideoCard from "./VideoCard";
import DownloadOptions from "./DownloadOptions";
import SkeletonCard, { SkeletonDownloadOptions } from "./SkeletonCard";
import DemoBanner from "./DemoBanner";
import type { VideoMetadata, DownloadState } from "@/types";

export default function Downloader() {
  const [state, setState] = useState<DownloadState>("idle");
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState("");

  // ── Fetch metadata ───────────────────────────────────────────────────────
  const handleFetch = useCallback(async (url: string) => {
    setState("fetching");
    setError(null);
    setMetadata(null);
    setCurrentUrl(url);

    try {
      const res = await fetch("/api/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
        signal: AbortSignal.timeout(35_000),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.error || "Failed to fetch video info.");

      setMetadata(json.data);
      setState("ready");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
      setState("error");
      toast.error("Could not load video", { description: msg });
    }
  }, []);

  // ── Demo download handler ────────────────────────────────────────────────
  // DEMO MODE: Instead of streaming a binary file, the API returns JSON with
  // { demo: true, filename }. We show an informative toast instead of saving.
  const handleDownload = useCallback(async (type: "video" | "mp3", quality?: string) => {
    if (!currentUrl || !metadata) return;
    setState("downloading");

    const endpoint = type === "mp3" ? "/api/download/mp3" : "/api/download/video";
    const body: Record<string, string> = { url: currentUrl };
    if (quality && type === "video") body.quality = quality;

    const toastId = toast.loading(
      type === "mp3" ? "Extracting audio…" : `Preparing video (${quality || "best"})…`,
      { description: "Simulating server processing…" }
    );

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(30_000),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || `Request failed (${res.status})`);
      }

      // DEMO: api returns { demo: true, filename } — show success without real download
      if (json.demo) {
        toast.success(
          type === "mp3" ? "✓ Audio ready  (Demo)" : "✓ Video ready  (Demo)",
          {
            id: toastId,
            description: `"${json.filename}" — real downloads available in the production build.`,
            duration: 5000,
          }
        );
        setState("ready");
        return;
      }

      // Fallback: handle a real binary response if somehow present
      setState("ready");
      toast.dismiss(toastId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Request failed.";
      toast.error("Failed", { id: toastId, description: msg });
      setState("ready");
    }
  }, [currentUrl, metadata]);

  // ── Reset ────────────────────────────────────────────────────────────────
  const handleReset = () => {
    setState("idle");
    setMetadata(null);
    setError(null);
    setCurrentUrl("");
  };

  return (
    <section id="downloader" className="max-w-2xl mx-auto px-4 sm:px-6 w-full" aria-label="Video downloader">

      {/* Demo mode banner */}
      <DemoBanner />

      {/* URL input */}
      <div className="mb-5">
        <UrlInput onSubmit={handleFetch} state={state} defaultValue={currentUrl} />
      </div>

      {/* Error state */}
      {state === "error" && error && (
        <div className="glass rounded-2xl p-4 border border-red-500/15 bg-red-950/10 animate-fade-in mb-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/12 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2L1 12h12L7 2Z" stroke="#f87171" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M7 6v2.5M7 10v.5" stroke="#f87171" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-red-400">Unable to load video</p>
              <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{error}</p>
            </div>
            <button
              onClick={handleReset}
              className="text-white/25 hover:text-white/55 transition-colors p-1 rounded-lg"
              aria-label="Dismiss error"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 2l9 9M11 2L2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <button
            onClick={handleReset}
            className="mt-3 text-xs text-red-400/70 hover:text-red-400 flex items-center gap-1 transition-colors"
          >
            ← Try again
          </button>
        </div>
      )}

      {/* Skeleton loading */}
      {state === "fetching" && (
        <div className="space-y-4">
          <SkeletonCard />
          <SkeletonDownloadOptions />
        </div>
      )}

      {/* Video card + download options */}
      {(state === "ready" || state === "downloading") && metadata && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-0.5">
            <div className="flex items-center gap-2 text-xs text-white/35">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              Video found
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-white/28 hover:text-white/60 transition-colors flex items-center gap-1.5 py-1"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5a4 4 0 014-4c1 0 2 .4 2.7 1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M9.5 5.5a4 4 0 01-4 4c-1 0-2-.4-2.7-1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M7.8 2L9.5 3.7l1.5-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              New search
            </button>
          </div>

          <VideoCard metadata={metadata} />
          <DownloadOptions
            metadata={metadata}
            onDownload={handleDownload}
            downloadState={state}
          />
        </div>
      )}
    </section>
  );
}
