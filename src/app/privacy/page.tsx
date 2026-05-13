import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — YouTubeMint",
  description: "Learn how YouTubeMint handles your data and protects your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-mesh">
      <Navbar />
      <main className="flex-1">
        <LegalPage title="Privacy Policy" lastUpdated="January 1, 2025">
          <h2>1. Information We Collect</h2>
          <p>YouTubeMint does not require registration. We do not collect personal information. The only data processed is the YouTube URL you submit, which is used solely to fulfill your request.</p>
          <p>We may collect anonymous, aggregated usage analytics (page views, error rates) to improve service quality. No personally identifiable information is included.</p>

          <h2>2. Temporary Files</h2>
          <p>When you request a download, the media file is temporarily stored on our server during processing. These files are automatically deleted within 5–15 minutes. We do not store, copy, or retain media content.</p>

          <h2>3. Cookies</h2>
          <p>We use strictly functional cookies only (e.g., rate-limiting session identifiers). We do not use tracking, advertising, or analytics cookies.</p>

          <h2>4. Third Parties</h2>
          <p>YouTubeMint uses YouTube&apos;s publicly accessible infrastructure via yt-dlp to retrieve video data. We are not affiliated with YouTube or Google LLC. We do not share data with advertising networks.</p>

          <h2>5. Log Data</h2>
          <p>Our servers maintain standard access logs (IP address, request timestamp, HTTP status) for security and abuse prevention. Logs are retained for no more than 30 days.</p>

          <h2>6. Children</h2>
          <p>YouTubeMint is not directed at children under 13. We do not knowingly collect data from minors.</p>

          <h2>7. Changes</h2>
          <p>We may update this policy. Continued use after changes constitutes acceptance.</p>

          <h2>8. Contact</h2>
          <p>For privacy-related questions, visit our <a href="/contact">Contact page</a>.</p>
        </LegalPage>
      </main>
      <Footer />
    </div>
  );
}
