import { NextRequest, NextResponse } from "next/server";
import { isValidYouTubeUrl } from "@/utils/validators";
import { getDemoVideo, DEMO_DOWNLOAD_DELAY_MS } from "@/lib/demo-data";

/**
 * DEMO MODE — /api/download/video
 *
 * Production version: runs yt-dlp with format selection, merges video+audio
 * streams via FFmpeg, then serves the MP4 binary to the browser.
 *
 * Showcase version: validates inputs, simulates processing delay, then
 * returns a JSON success response. No video file is produced or streamed.
 */

const ALLOWED_QUALITIES = new Set(["best", "1080p", "720p", "480p", "360p"]);

export async function POST(request: NextRequest) {
  let body: { url?: string; quality?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const url = (body.url ?? "").trim();
  const quality = ALLOWED_QUALITIES.has(body.quality ?? "") ? body.quality! : "720p";

  if (!url || !isValidYouTubeUrl(url)) {
    return NextResponse.json(
      { success: false, error: "Valid YouTube URL required." },
      { status: 400 }
    );
  }

  // Simulate processing time (yt-dlp download + merge)
  await delay(DEMO_DOWNLOAD_DELAY_MS);

  const meta = getDemoVideo(url);

  // DEMO: Return success metadata instead of a binary MP4 stream.
  return NextResponse.json({
    success: true,
    demo: true,
    filename: `${meta.title.slice(0, 60)}_${quality}.mp4`,
    quality,
    message: "Demo mode — no real file was generated.",
  });
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
