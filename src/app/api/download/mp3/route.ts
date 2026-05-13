import { NextRequest, NextResponse } from "next/server";
import { isValidYouTubeUrl } from "@/utils/validators";
import { getDemoVideo, DEMO_DOWNLOAD_DELAY_MS } from "@/lib/demo-data";

/**
 * DEMO MODE — /api/download/mp3
 *
 * Production version: runs yt-dlp audio extraction + FFmpeg MP3 conversion,
 * then streams the binary file to the client.
 *
 * Showcase version: validates the URL, simulates processing time, then
 * returns a JSON response that triggers the frontend's demo download state.
 * No actual file is produced or streamed.
 */
export async function POST(request: NextRequest) {
  let body: { url?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const url = (body.url ?? "").trim();

  if (!url || !isValidYouTubeUrl(url)) {
    return NextResponse.json(
      { success: false, error: "Valid YouTube URL required." },
      { status: 400 }
    );
  }

  // Simulate processing time (yt-dlp extraction + ffmpeg conversion)
  await delay(DEMO_DOWNLOAD_DELAY_MS);

  const meta = getDemoVideo(url);

  // DEMO: Return a JSON success response instead of a binary MP3 stream.
  // The frontend Downloader component detects the demo flag and shows
  // a success toast without triggering a real browser download.
  return NextResponse.json({
    success: true,
    demo: true,
    filename: `${meta.title.slice(0, 60)}.mp3`,
    message: "Demo mode — no real file was generated.",
  });
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
