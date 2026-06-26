export function TrainerCardSkeleton() {
  return (
    <div className="flex flex-col bg-[#111115] border border-[#1F1F25] rounded-2xl overflow-hidden p-6 gap-5 animate-pulse">

      {/* Avatar + name row */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-[#1F1F25] shrink-0" />
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="h-4 w-32 rounded-md bg-[#1F1F25]" />
          <div className="h-3 w-20 rounded-md bg-[#1F1F25]" />
        </div>
      </div>

      {/* Bio lines */}
      <div className="flex flex-col gap-2">
        <div className="h-3 w-full rounded-md bg-[#1F1F25]" />
        <div className="h-3 w-5/6 rounded-md bg-[#1F1F25]" />
        <div className="h-3 w-4/6 rounded-md bg-[#1F1F25]" />
      </div>

      {/* Badge row */}
      <div className="flex gap-2">
        <div className="h-7 w-24 rounded-lg bg-[#1F1F25]" />
        <div className="h-7 w-20 rounded-lg bg-[#1F1F25]" />
      </div>

      {/* CTA button */}
      <div className="h-11 w-full rounded-xl bg-[#1F1F25]" />
    </div>
  );
}