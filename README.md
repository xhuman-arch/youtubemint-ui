<div align="center">

# YouTubeMint

**A modern YouTube media utility — UI showcase & portfolio demo**

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript_5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Demo](https://img.shields.io/badge/mode-demo-amber?style=flat-square)

[Live Demo](https://youtubemint.vercel.app/)

![YouTubeMint Screenshot](./public/preview.png)
</div>

---

## Overview

YouTubeMint is a full-stack YouTube media utility built to showcase modern frontend architecture, custom design system work, and clean API design. Paste any YouTube URL to see the complete UI flow in action — metadata preview, animated loading states, quality selection, and download interactions.

> **This is a public portfolio showcase.** The UI/UX, component architecture, TypeScript types, and API contract are all real and production-grade. The actual media processing logic (yt-dlp integration, FFmpeg conversion, rate limiting) lives in a private production repository and is replaced here with realistic mock responses.

## Features

- **Smart URL validation** — accepts `youtube.com/watch`, `youtu.be`, `youtube.com/shorts`, `youtube.com/live`, and `music.youtube.com`
- **Metadata preview** — title, channel, view count, upload date, duration badge
- **Quality selector** — 360p / 480p / 720p / 1080p / Best, with per-format FPS info
- **MP3 extraction UI** — dedicated audio-focused download path (320 kbps in production)
- **Full loading flow** — skeleton loaders, animated progress indicators, disabled states

---

## Getting Started

No system dependencies required — this is a pure Next.js app.

```bash
# 1. Clone
git clone https://github.com/yourname/youtubemint.git
cd youtubemint

# 2. Install
npm install

# 3. Run
npm run dev
# → http://localhost:3000
```

```bash
# Type check
npm run type-check

# Build for production (Vercel / Netlify)
npm run build && npm start
```
---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">
  <sub>Built with Next.js 15 · TypeScript · TailwindCSS</sub>
</div>
