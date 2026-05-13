import Link from "next/link";

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, subtitle, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen gradient-mesh">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/30 mb-8">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/50">{title}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-wide mb-3">{title}</h1>
          {subtitle && <p className="text-white/45 text-base">{subtitle}</p>}
          <p className="text-xs text-white/28 mt-3">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-6 sm:p-8 prose-dark">
          {children}
        </div>

        {/* Footer note */}
        <p className="text-xs text-white/22 text-center mt-8 leading-relaxed">
          Questions? <Link href="/contact" className="underline hover:text-white/45 transition-colors">Contact us</Link>
        </p>
      </div>
    </div>
  );
}
