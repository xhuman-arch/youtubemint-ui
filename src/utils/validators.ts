/**
 * Validates whether a given string is a valid YouTube URL.
 * Supports: youtube.com/watch, youtu.be, youtube.com/shorts, /embed, /live
 */
export function isValidYouTubeUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) return false;

  let parsed: URL;
  try { parsed = new URL(trimmed); } catch { return false; }

  const host = parsed.hostname.replace(/^www\./, "");

  if (host === "youtube.com") {
    if (parsed.pathname === "/watch") {
      const v = parsed.searchParams.get("v");
      return isValidVideoId(v);
    }
    const pathMatch = parsed.pathname.match(/^\/(shorts|embed|live|v)\/([a-zA-Z0-9_-]{11})/);
    return !!pathMatch;
  }

  if (host === "youtu.be") {
    const id = parsed.pathname.slice(1).split("?")[0].split("/")[0];
    return isValidVideoId(id);
  }

  // music.youtube.com
  if (host === "music.youtube.com") {
    const v = parsed.searchParams.get("v");
    return isValidVideoId(v);
  }

  return false;
}

function isValidVideoId(id: string | null | undefined): boolean {
  return !!id && /^[a-zA-Z0-9_-]{11}$/.test(id);
}

/**
 * Extracts the YouTube video ID from a URL
 */
export function extractVideoId(url: string): string | null {
  if (!isValidYouTubeUrl(url)) return null;
  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "music.youtube.com") {
      if (parsed.pathname === "/watch") return parsed.searchParams.get("v");
      const m = parsed.pathname.match(/^\/(shorts|embed|live|v)\/([a-zA-Z0-9_-]{11})/);
      return m?.[2] ?? null;
    }
    if (host === "youtu.be") return parsed.pathname.slice(1).split("?")[0].split("/")[0];
  } catch { /* fall through */ }
  return null;
}

/**
 * Sanitizes a string to be safe as a filename.
 */
export function sanitizeFilename(name: string): string {
  return (name || "download")
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, "")     // remove illegal chars
    .replace(/[\s\u00A0]+/g, "_")                // spaces → underscores
    .replace(/_{2,}/g, "_")                      // collapse multiple underscores
    .replace(/^[._]+|[._]+$/g, "")              // strip leading/trailing dots/underscores
    .slice(0, 180)                               // max length
    .trim() || "download";
}

/**
 * Formats seconds → HH:MM:SS or MM:SS
 */
export function formatDuration(seconds: number): string {
  if (!seconds || isNaN(seconds) || seconds < 0) return "0:00";
  const s = Math.floor(seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${pad(m)}:${pad(sec)}`;
  return `${m}:${pad(sec)}`;
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Formats view count with K / M suffix
 */
export function formatViewCount(n: number): string {
  if (!n || n < 0) return "0";
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000)     return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)         return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

/**
 * Formats bytes into human-readable string
 */
export function formatFileSize(bytes: number): string {
  if (!bytes || bytes < 0) return "Unknown";
  if (bytes >= 1_073_741_824) return `${(bytes / 1_073_741_824).toFixed(1)} GB`;
  if (bytes >= 1_048_576)     return `${(bytes / 1_048_576).toFixed(1)} MB`;
  if (bytes >= 1_024)         return `${(bytes / 1_024).toFixed(1)} KB`;
  return `${bytes} B`;
}
