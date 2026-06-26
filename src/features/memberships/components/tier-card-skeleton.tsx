export default function TierCardSkeleton() {
  return (
    <div className="flex flex-col rounded-3xl border border-brand-border bg-brand-surface p-8 animate-pulse">
      {/* Popular badge skeleton */}
      <div className="h-6 w-28 rounded-full bg-brand-border mx-auto -mt-2 mb-6" />

      <div className="h-7 w-40 rounded-md bg-brand-border mb-2" />
      <div className="h-4 w-52 rounded-md bg-brand-border mb-10" />

      <div className="h-14 w-32 rounded-md bg-brand-border mb-10" />

      <div className="space-y-4 mb-10 flex-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full bg-brand-border shrink-0" />
            <div
              className="h-4 rounded-md bg-brand-border"
              style={{ width: `${60 + i * 7}%` }}
            />
          </div>
        ))}
      </div>

      <div className="h-14 rounded-2xl bg-brand-border" />
    </div>
  );
}