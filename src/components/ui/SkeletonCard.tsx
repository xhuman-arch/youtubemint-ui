export default function SkeletonCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-fade-in" aria-hidden="true">
      <div className="shimmer aspect-video" />
      <div className="px-5 py-4 space-y-3">
        <div className="shimmer h-4 rounded-lg w-full" />
        <div className="shimmer h-4 rounded-lg w-3/4" />
        <div className="flex gap-3 pt-1">
          <div className="shimmer h-3 rounded w-24" />
          <div className="shimmer h-3 rounded w-16" />
          <div className="shimmer h-3 rounded w-28" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonDownloadOptions() {
  return (
    <div className="glass rounded-2xl p-5 space-y-4 animate-fade-in" aria-hidden="true">
      <div className="shimmer h-3.5 rounded w-28" />
      <div className="flex justify-between items-center gap-4">
        <div className="shimmer h-3.5 rounded w-24" />
        <div className="shimmer h-8 rounded-lg w-52" />
      </div>
      <div className="shimmer h-12 rounded-xl" />
      <div className="shimmer h-px rounded w-full opacity-50" />
      <div className="shimmer h-12 rounded-xl" />
    </div>
  );
}
