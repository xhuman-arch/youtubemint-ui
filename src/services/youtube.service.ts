/**
 * DEMO MODE — youtube.service.ts
 *
 * Production version: executes yt-dlp as a child process to extract
 * metadata, download audio/video streams, and invoke FFmpeg for
 * MP3 conversion. Manages a temp directory for staged files.
 *
 * Showcase version: this file is intentionally left as a typed stub.
 * All real logic lives in the private production repository.
 * The demo API routes (src/app/api/*) import from src/lib/demo-data.ts
 * instead of calling these functions.
 *
 * The function signatures below are preserved so TypeScript remains
 * valid and the architecture is clearly communicated to reviewers.
 */

import type { VideoMetadata } from "@/types";

/**
 * [STUBBED] Fetches video metadata from YouTube via yt-dlp.
 * Production implementation: spawns `yt-dlp --dump-json <url>` and
 * parses the JSON output into a VideoMetadata object.
 */
export async function fetchVideoMetadata(_url: string): Promise<VideoMetadata> {
  throw new Error("Not implemented in showcase build. See src/lib/demo-data.ts.");
}

/**
 * [STUBBED] Downloads the best available audio stream and converts to MP3.
 * Production implementation: runs yt-dlp with `--extract-audio --audio-format mp3`
 * into a temp directory, then returns the output file path.
 */
export async function downloadAudio(_url: string, _title: string): Promise<string> {
  throw new Error("Not implemented in showcase build.");
}

/**
 * [STUBBED] Downloads the video stream at the requested quality.
 * Production implementation: runs yt-dlp with a format selector string,
 * merges video+audio via FFmpeg, outputs an MP4 file, returns the path.
 */
export async function downloadVideo(
  _url: string,
  _title: string,
  _quality?: string
): Promise<string> {
  throw new Error("Not implemented in showcase build.");
}

/**
 * [STUBBED] Removes a single temp file after streaming.
 * Production implementation: fs.unlinkSync with existence check.
 */
export function cleanupFile(_filePath: string): void {
  // no-op in demo
}
