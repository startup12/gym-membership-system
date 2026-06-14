import { Clock, User, Calendar } from "lucide-react"
import { type GymClass } from "@/types/classes"
import { cn } from "@/utils/cn"
import { formatTime } from "@/utils/formatters"

const CATEGORY_BADGE: Record<GymClass["category"], string> = {
  Strength: "bg-brand-neon/10 text-brand-neon border-brand-neon/20",
  Cardio:   "bg-red-500/10 text-red-400 border-red-500/20",
  HIIT:     "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Yoga:     "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Wellness: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
}

const CATEGORY_ACCENT: Record<GymClass["category"], string> = {
  Strength: "border-l-brand-neon",
  Cardio:   "border-l-red-500",
  HIIT:     "border-l-orange-500",
  Yoga:     "border-l-purple-500",
  Wellness: "border-l-brand-cyan",
}

interface ClassCardProps {
  gymClass: GymClass
}

export function ClassCard({ gymClass }: ClassCardProps) {
  const { name, trainer, day, time, duration, category } = gymClass

  return (
    <div
      className={cn(
        "flex flex-col h-full rounded-xl border-l-2 border border-brand-border bg-brand-surface px-6 py-5",
        "transition-all duration-300 hover:shadow-[0_0_32px_rgba(200,241,53,0.04)]",
        CATEGORY_ACCENT[category]
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-base font-bold font-syne text-white leading-snug">{name}</h3>
        <span className={cn(
          "shrink-0 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider",
          CATEGORY_BADGE[category]
        )}>
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-brand-muted">
          <User size={13} strokeWidth={1.5} />
          <span>{trainer}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-brand-muted">
          <Calendar size={13} strokeWidth={1.5} />
          <span>{day}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-brand-muted">
          <Clock size={13} strokeWidth={1.5} />
          <span>{formatTime(time)} · {duration} min</span>
        </div>
      </div>
    </div>
  )
}