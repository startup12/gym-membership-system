"use client";

import { useEffect, useState } from "react";
import { type GymClass } from "@/types/classes";
import { fetchAllClasses } from "@/services/class-service";
import { cn } from "@/utils/cn";
import { formatTime } from "@/utils/formatters";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { MessageCircle, Clock } from "lucide-react";

const DAYS = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
] as const;

const DAY_SHORT = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// JS Date.getDay(): 0=Sun → 6, 1=Mon → 0, ...
const JS_TO_DAY_INDEX: Record<number, number> = {
  0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5,
};

type DayName = (typeof DAYS)[number];

// Premium category styles — unified around brand-primary with tasteful accents
const CATEGORY_STYLES: Record<
  GymClass["category"],
  { border: string; badge: string; dot: string }
> = {
  Strength: {
    border: "border-l-brand-primary",
    badge: "text-brand-primary bg-brand-primary/10 border border-brand-primary/20",
    dot: "bg-brand-primary",
  },
  Cardio: {
    border: "border-l-emerald-400",
    badge: "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  HIIT: {
    border: "border-l-amber-400",
    badge: "text-amber-400 bg-amber-500/10 border border-amber-500/20",
    dot: "bg-amber-400",
  },
  Yoga: {
    border: "border-l-violet-400",
    badge: "text-violet-400 bg-violet-500/10 border border-violet-500/20",
    dot: "bg-violet-400",
  },
  Wellness: {
    border: "border-l-cyan-400",
    badge: "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20",
    dot: "bg-cyan-400",
  },
};

export function ClassesSection() {
  const [classes, setClasses] = useState<GymClass[]>([]);
  const [loading, setLoading] = useState(true);
  const todayIndex = JS_TO_DAY_INDEX[new Date().getDay()];
  const waHref = buildGeneralEnquiryMessage();

  useEffect(() => {
    fetchAllClasses()
      .then(setClasses)
      .finally(() => setLoading(false));
  }, []);

  const classesByDay = DAYS.reduce<Record<DayName, GymClass[]>>((acc, day) => {
    acc[day] = classes.filter((c) => c.day === day);
    return acc;
  }, {} as Record<DayName, GymClass[]>);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <p className="text-brand-primary/70 text-sm font-mono uppercase tracking-[3px] mb-3">
                WEEKLY SCHEDULE
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold font-display text-white tracking-tighter">
                Class Schedule
              </h2>
              <p className="mt-4 text-white/60 text-lg max-w-md">
                Structured training for serious results. Train with purpose.
              </p>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 min-h-[52px] px-8 rounded-2xl 
                         bg-brand-primary hover:bg-[#22c55e] text-brand-dark font-semibold text-base
                         transition-all duration-200 active:scale-[0.985] shadow-xl shadow-black/50
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 
                         focus-visible:ring-offset-brand-dark focus-visible:ring-brand-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Book a Session
            </a>
          </div>
        </FadeUp>

        {/* Category Legend */}
        <FadeUp delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {Object.entries(CATEGORY_STYLES).map(([cat, style]) => (
              <div key={cat} className="flex items-center gap-2">
                <div className={cn("w-2.5 h-2.5 rounded-full", style.dot)} />
                <span className="text-sm text-white/70 font-medium">{cat}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Days Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-5">
          {DAYS.map((day, i) => {
            const dayClasses = loading ? [] : (classesByDay[day] ?? []);
            const isToday = i === todayIndex;
            const count = loading ? null : dayClasses.length;

            return (
              <StaggerItem key={day}>
                <div
                  className={cn(
                    "group flex flex-col rounded-3xl border overflow-hidden h-full transition-all duration-300",
                    isToday
                      ? "border-brand-primary/50 shadow-2xl shadow-brand-primary/10 bg-gradient-to-b from-brand-primary/[0.03] to-transparent"
                      : "border-brand-border hover:border-brand-border/70 hover:shadow-xl hover:shadow-black/60"
                  )}
                >
                  {/* Day Header */}
                  <div
                    className={cn(
                      "px-6 pt-6 pb-4 border-b",
                      isToday
                        ? "border-brand-primary/30 bg-black/40"
                        : "border-brand-border/80 bg-brand-surface/50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "font-mono text-sm tracking-[2px] font-bold",
                          isToday ? "text-brand-primary" : "text-white/70"
                        )}
                      >
                        {DAY_SHORT[i]}
                      </span>
                      {isToday && (
                        <span className="px-3 py-1 text-[10px] font-mono tracking-widest bg-brand-primary/10 text-brand-primary border border-brand-primary/30 rounded-full">
                          TODAY
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-white/50 font-mono mt-1">
                      {count === null ? (
                        <span className="inline-block w-16 h-2 bg-white/10 rounded animate-pulse" />
                      ) : (
                        `${count} class${count !== 1 ? "es" : ""}`
                      )}
                    </p>
                  </div>

                  {/* Classes List */}
                  <div className="flex-1 p-3 flex flex-col gap-2 bg-black/30">
                    {loading ? (
                      <>
                        <SkeletonCard />
                        <SkeletonCard dim />
                      </>
                    ) : dayClasses.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-32 text-white/30">
                        <Clock className="w-8 h-8 mb-2 opacity-40" />
                        <p className="font-mono text-sm">No classes</p>
                      </div>
                    ) : (
                      dayClasses.map((cls) => (
                        <DayClassCard key={cls.id} gymClass={cls} />
                      ))
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ─── Day Class Card ─────────────────────────────────────────────────────────

function DayClassCard({ gymClass }: { gymClass: GymClass }) {
  const { name, trainer, time, duration, category } = gymClass;
  const styles = CATEGORY_STYLES[category];

  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-border/60 bg-brand-surface/70 p-5 transition-all duration-200 hover:border-brand-primary/30 hover:bg-brand-surface group/card",
        styles.border
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <p className="font-display font-semibold text-lg leading-tight text-white pr-2">
          {name}
        </p>
        <span
          className={cn(
            "text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shrink-0",
            styles.badge
          )}
        >
          {duration} MIN
        </span>
      </div>

      <div className="flex items-center text-sm text-white/60 mb-1">
        <Clock className="w-4 h-4 mr-2 text-white/40" />
        {formatTime(time)}
      </div>

      <p className="text-sm text-white/50">
        <span className="text-white/40">with </span>
        {trainer}
      </p>
    </div>
  );
}

// ─── Skeleton ────────────────────────────────────────────────────────────────

function SkeletonCard({ dim }: { dim?: boolean }) {
  return (
    <div className={cn("rounded-2xl bg-brand-surface/60 p-5", dim && "opacity-50")}>
      <div className="h-5 w-3/4 bg-white/10 rounded mb-4 animate-pulse" />
      <div className="h-3 w-1/2 bg-white/10 rounded mb-2.5 animate-pulse" />
      <div className="h-3 w-2/3 bg-white/10 rounded animate-pulse" />
    </div>
  );
}