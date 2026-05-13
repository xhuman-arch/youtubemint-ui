import { NextResponse } from "next/server";

/**
 * DEMO MODE — /api/health
 *
 * Production version: pings yt-dlp and ffmpeg binaries to verify they
 * are installed and functional on the server.
 *
 * Showcase version: returns a static healthy response so Docker/CI
 * health checks pass without requiring system binaries.
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    mode: "demo",
    ytdlp: "demo-mode",
    ffmpeg: "demo-mode",
    timestamp: new Date().toISOString(),
  });
}
