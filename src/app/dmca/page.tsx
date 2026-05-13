import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "DMCA Policy — YouTubeMint",
  description: "YouTubeMint DMCA and copyright policy.",
};

export default function DmcaPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-mesh">
      <Navbar />
      <main className="flex-1">
        <LegalPage title="DMCA Policy" subtitle="Digital Millennium Copyright Act Compliance" lastUpdated="January 1, 2025">
          <h2>Our Position</h2>
          <p>YouTubeMint does not host, store, or distribute copyrighted content. We provide a tool that processes publicly accessible YouTube URLs on demand. All processed files are deleted within minutes.</p>
          <p>We respect intellectual property rights and respond promptly to valid DMCA notices.</p>

          <h2>Filing a Takedown Notice</h2>
          <p>If you believe content accessible through our service infringes your copyright, submit a DMCA notice including:</p>
          <ul>
            <li>Your name, address, phone number, and email address</li>
            <li>A description of the copyrighted work you claim has been infringed</li>
            <li>The specific URL(s) involved</li>
            <li>A statement that you have a good-faith belief the use is not authorized</li>
            <li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act</li>
            <li>Your physical or electronic signature</li>
          </ul>

          <h2>Submit Notices To</h2>
          <p>Please send DMCA notices via our <a href="/contact">Contact page</a> with subject line &quot;DMCA Takedown Request&quot;.</p>

          <h2>Counter-Notices</h2>
          <p>If you believe content was removed in error, you may submit a counter-notice with the information required under 17 U.S.C. § 512(g)(3).</p>

          <h2>Repeat Infringers</h2>
          <p>We reserve the right to block IP addresses associated with repeat copyright infringement.</p>
        </LegalPage>
      </main>
      <Footer />
    </div>
  );
}
