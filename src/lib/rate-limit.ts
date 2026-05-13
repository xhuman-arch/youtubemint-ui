/**
 * DEMO MODE — rate-limit.ts
 *
 * Production version: in-memory per-IP rate limiting with sliding windows,
 * Cloudflare IP header support, and a periodic sweep to expire old entries.
 *
 * Showcase version: all requests are allowed through (returns success: true).
 * The real implementation lives in the private production repository.
 */

import { NextResponse } from "next/server";

export interface RateLimitConfig {
  windowMs: number;
  max: number;
}

/**
 * [DEMO] Returns a rate-limit checker that always allows requests.
 * Production version tracks per-IP request counts with time windows.
 */
export function rateLimit(_config: RateLimitConfig) {
  return function check(_identifier: string) {
    return { success: true, remaining: 99, reset: Date.now() + 60_000 };
  };
}

/** Extracts the real client IP from request headers. */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "demo-client"
  );
}

/** Returns a 429 Too Many Requests response. */
export function rateLimitResponse(reset: number) {
  return NextResponse.json(
    { success: false, error: "Too many requests. Please wait and try again." },
    { status: 429, headers: { "Retry-After": String(Math.ceil((reset - Date.now()) / 1000)) } }
  );
}
