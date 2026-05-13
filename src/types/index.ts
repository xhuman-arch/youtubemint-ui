/**
 * Shared TypeScript types for YouTubeMint.
 * These are identical between the showcase and production builds —
 * the architecture is preserved for portfolio review purposes.
 */

export interface VideoMetadata {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
  durationFormatted: string;
  author: string;
  channelId: string;
  viewCount: number;
  uploadDate: string;
  description: string;
  formats: VideoFormat[];
  url: string;
}

export interface VideoFormat {
  formatId: string;
  quality: string;
  resolution?: string;
  fps?: number;
  filesize?: number;
  ext: string;
  vcodec?: string;
  acodec?: string;
  tbr?: number;
}

export interface DownloadRequest {
  url: string;
  type: "video" | "mp3";
  formatId?: string;
  quality?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  /** Present only in demo/showcase build responses */
  demo?: boolean;
  filename?: string;
}

export type DownloadState = "idle" | "fetching" | "ready" | "downloading" | "error";
