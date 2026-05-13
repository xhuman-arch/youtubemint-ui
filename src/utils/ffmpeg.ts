/**
 * DEMO MODE — ffmpeg.ts
 *
 * Production version: wraps fluent-ffmpeg to convert audio files to
 * 320 kbps MP3, verify FFmpeg availability, and schedule temp file cleanup.
 *
 * Showcase version: stubs only. No filesystem operations are performed.
 * The real implementation lives in the private production repository.
 */

/**
 * [STUBBED] Removes a temporary file after a download completes.
 */
export function cleanupFile(_filePath: string): void {
  // no-op in demo mode
}

/**
 * [STUBBED] Removes files older than maxAgeMs from the temp directory.
 * Production implementation runs on a setInterval schedule.
 */
export function cleanupOldFiles(_dir: string, _maxAgeMs?: number): void {
  // no-op in demo mode
}
