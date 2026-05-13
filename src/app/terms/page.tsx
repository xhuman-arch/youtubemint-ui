import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — YouTubeMint",
  description: "Read the terms of use for YouTubeMint.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-mesh">
      <Navbar />
      <main className="flex-1">
        <LegalPage title="Terms of Use" lastUpdated="January 1, 2025">
          <h2>1. Acceptance</h2>
          <p>By using YouTubeMint, you agree to these Terms of Use. If you do not agree, please discontinue use immediately.</p>

          <h2>2. Permitted Use</h2>
          <p>YouTubeMint is a personal media utility tool. You may only use it to save publicly accessible YouTube content that you have the right to access and download, including:</p>
          <ul>
            <li>Content you own or created</li>
            <li>Public domain or Creative Commons licensed content</li>
            <li>Content you have explicit permission to download</li>
          </ul>

          <h2>3. Prohibited Use</h2>
          <p>You must not use YouTubeMint to:</p>
          <ul>
            <li>Download copyrighted content without authorization</li>
            <li>Circumvent YouTube&apos;s access controls or DRM</li>
            <li>Distribute, resell, or commercially exploit downloaded content</li>
            <li>Violate YouTube&apos;s Terms of Service</li>
            <li>Automate requests or use bots to abuse the service</li>
          </ul>

          <h2>4. User Responsibility</h2>
          <p><strong>Users are solely responsible for complying with YouTube&apos;s Terms of Service and all applicable copyright laws in their jurisdiction.</strong> YouTubeMint accepts no liability for misuse of the service.</p>

          <h2>5. No Warranty</h2>
          <p>The service is provided &quot;as is&quot; without warranty. We do not guarantee uninterrupted availability, accuracy, or fitness for any particular purpose.</p>

          <h2>6. Limitation of Liability</h2>
          <p>YouTubeMint shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the service.</p>

          <h2>7. Modifications</h2>
          <p>We reserve the right to modify or discontinue the service at any time. Terms may change; continued use constitutes acceptance.</p>

          <h2>8. Governing Law</h2>
          <p>These terms are governed by applicable law. Disputes shall be resolved through good-faith negotiation or binding arbitration.</p>
        </LegalPage>
      </main>
      <Footer />
    </div>
  );
}
