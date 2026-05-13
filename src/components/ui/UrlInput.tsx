"use client";

import { useState, useCallback, useRef, type KeyboardEvent, type ClipboardEvent } from "react";
import { isValidYouTubeUrl } from "@/utils/validators";
import type { DownloadState } from "@/types";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  state: DownloadState;
  defaultValue?: string;
}

export default function UrlInput({ onSubmit, state, defaultValue = "" }: UrlInputProps) {
  const [value, setValue] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isLoading = state === "fetching";
  const isDisabled = isLoading || state === "downloading";
  const isValid = isValidYouTubeUrl(value);
  const showError = touched && value.length > 3 && !isValid;

  const handleSubmit = useCallback(() => {
    setTouched(true);
    if (!isValid || isDisabled) return;
    onSubmit(value.trim());
  }, [isValid, isDisabled, onSubmit, value]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").trim();
    if (isValidYouTubeUrl(pasted)) {
      setValue(pasted);
      setTimeout(() => onSubmit(pasted), 60);
    }
  };

  const handleClear = () => {
    setValue("");
    setTouched(false);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full">
      <div
        className={`
          relative flex items-center rounded-2xl transition-all duration-250
          ${showError
            ? "ring-2 ring-red-500/40 bg-red-950/15"
            : isValid && value
            ? "ring-2 ring-red-600/40 bg-white/[0.035]"
            : "ring-1 ring-white/[0.09] bg-white/[0.025] focus-within:ring-white/[0.15] focus-within:bg-white/[0.035]"
          }
        `}
      >
        {/* YT icon */}
        <div className="absolute left-4 pointer-events-none">
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${isValid && value ? "bg-red-600 shadow-lg shadow-red-900/40" : "bg-white/10"}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 3.5L10.5 7L5.5 10.5V3.5Z" fill="white" />
            </svg>
          </div>
        </div>

        <input
          ref={inputRef}
          type="url"
          value={value}
          onChange={(e) => { setValue(e.target.value); if (touched) setTouched(false); }}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onBlur={() => value.length > 3 && setTouched(true)}
          placeholder="Paste YouTube link here..."
          disabled={isDisabled}
          className="
            w-full pl-[3.25rem] pr-36 py-4 sm:py-[1.1rem] bg-transparent text-white
            placeholder:text-white/28 text-sm sm:text-[0.95rem] focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          aria-label="YouTube URL input"
          autoComplete="off"
          spellCheck={false}
          inputMode="url"
        />

        {/* Right controls */}
        <div className="absolute right-2 flex items-center gap-1.5">
          {value && !isDisabled && (
            <button
              onClick={handleClear}
              className="p-1.5 text-white/25 hover:text-white/60 transition-colors rounded-lg hover:bg-white/[0.06]"
              aria-label="Clear input"
              tabIndex={-1}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
          )}

          <button
            onClick={handleSubmit}
            disabled={isDisabled || (showError)}
            aria-label="Fetch video info"
            className={`
              flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-medium text-sm
              transition-all duration-200 active:scale-[0.97] whitespace-nowrap select-none
              ${isLoading
                ? "bg-red-600/40 text-white/60 cursor-not-allowed"
                : showError
                ? "bg-white/5 text-white/25 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-900/30 hover:shadow-red-800/40"
              }
            `}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
                  <path d="M6.5 1.5A5 5 0 0111.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="hidden sm:inline">Fetching…</span>
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1v8M4 6l2.5 3L9 6M1.5 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Get Info
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error / hint */}
      <div className="mt-2 min-h-[1.25rem]">
        {showError ? (
          <p className="text-xs text-red-400/80 flex items-center gap-1.5 animate-fade-in">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M5.5 3.5v2.5M5.5 7.5v.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Please enter a valid YouTube URL
          </p>
        ) : !value ? (
          <p className="text-xs text-white/22 text-center">
            Supports youtube.com/watch · youtu.be · Shorts · Live
          </p>
        ) : null}
      </div>
    </div>
  );
}
