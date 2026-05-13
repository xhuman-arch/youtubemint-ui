import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://youtubemint-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YouTubeMint — UI Showcase & Portfolio Demo",
    template: "%s | YouTubeMint",
  },
  description:
    "A modern YouTube media utility built with Next.js 15, TypeScript, and TailwindCSS. " +
    "This is a public portfolio showcase with simulated backend interactions.",
  keywords: [
    "Next.js portfolio",
    "YouTube downloader UI",
    "TypeScript project",
    "TailwindCSS showcase",
    "React component demo",
    "frontend portfolio",
  ],
  authors: [{ name: "YouTubeMint" }],
  openGraph: {
    title: "YouTubeMint — UI Showcase & Portfolio Demo",
    description: "Modern YouTube utility built with Next.js 15 + TypeScript. Portfolio showcase.",
    type: "website",
    siteName: "YouTubeMint",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTubeMint — UI Showcase",
    description: "Modern YouTube utility built with Next.js 15 + TypeScript. Portfolio showcase.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap"
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="noise min-h-screen antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
        <Toaster
          position="top-right"
          theme="dark"
          richColors
          toastOptions={{
            style: {
              background: "hsl(0 0% 9%)",
              border: "1px solid hsl(0 0% 15%)",
              color: "hsl(0 0% 94%)",
              borderRadius: "0.875rem",
            },
          }}
        />
      </body>
    </html>
  );
}
