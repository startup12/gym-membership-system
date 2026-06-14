import { Skeleton } from "@/components/ui/skeleton"

export function ClassCardSkeleton() {
  return (
    <div className="flex flex-col h-full rounded-xl border-l-2 border border-brand-border bg-brand-surface px-6 py-5">
      <div className="flex items-start justify-between gap-3 mb-4">
        <Skeleton className="h-5 w-36 bg-brand-border" />
        <Skeleton className="h-5 w-16 rounded-full bg-brand-border" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-28 bg-brand-border" />
        <Skeleton className="h-4 w-20 bg-brand-border" />
        <Skeleton className="h-4 w-36 bg-brand-border" />
      </div>
    </div>
  )
}