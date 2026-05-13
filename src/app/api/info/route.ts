import { NextRequest, NextResponse } from "next/server";
import { isValidYouTubeUrl } from "@/utils/validators";
import { getDemoVideo, DEMO_FETCH_DELAY_MS } from "@/lib/demo-data";

/**
 * DEMO MODE — /api/info
 *
 * Production version: calls yt-dlp to extract real video metadata.
 * Showcase version: validates the URL format, then returns static demo
 * metadata after a simulated delay to demonstrate the real UX flow.
 *
 * The response shape is identical to production so all frontend
 * components render exactly as they would with live data.
 */
export async function POST(request: NextRequest) {
  let body: { url?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const url = (body.url ?? "").trim();

  if (!url) {
    return NextResponse.json({ success: false, error: "URL is required." }, { status: 400 });
  }

  if (!isValidYouTubeUrl(url)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid YouTube URL." },
      { status: 400 }
    );
  }

  // Simulate realistic network + processing latency
  await delay(DEMO_FETCH_DELAY_MS);

  // Return deterministic demo metadata for this URL
  const metadata = getDemoVideo(url);

  return NextResponse.json({ success: true, data: metadata });
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
