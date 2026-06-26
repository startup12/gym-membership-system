"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Users, Calendar, Dumbbell, Award } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import type { LucideIcon } from "lucide-react";

// ─── Stats data ───────────────────────────────────────────────────────────────
// Update these values when client confirms real numbers

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: Users,    value: 300, suffix: "+", label: "Members"          },
  { icon: Calendar, value: 14,  suffix: "",  label: "Classes Per Week" },
  { icon: Dumbbell, value: 6,   suffix: "+", label: "Expert Trainers"  },
  { icon: Award,    value: 3,   suffix: "+", label: "Years Open"       },
];

// Border classes per index — accounts for 2-col mobile and 4-col desktop
const BORDER_CLASSES: Record<number, string> = {
  0: "border-b border-r md:border-b-0",
  1: "border-b md:border-b-0 md:border-r",
  2: "border-r",
  3: "",
};

// ─── Counter hook ─────────────────────────────────────────────────────────────

function useCountUp(
  target: number,
  inView: boolean,
  duration: number = 2000
): number {
  const [count, setCount] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;

    if (shouldReduce) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration, shouldReduce]);

  return count;
}

// ─── StatItem ─────────────────────────────────────────────────────────────────

interface StatItemProps {
  stat: Stat;
  index: number;
}

function StatItem({ stat, index }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.value, inView);
  const Icon = stat.icon;

  return (
    <StaggerItem>
      <div
        ref={ref}
        className={`flex flex-col items-center text-center px-6 py-10 border-brand-border ${BORDER_CLASSES[index] ?? ""}`}
      >
        <Icon
          size={18}
          className="text-brand-muted mb-4"
          aria-hidden="true"
        />

        <p
          className="font-display font-black text-white leading-none mb-3"
          style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
          aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
        >
          {count}
          <span className="text-brand-neon">{stat.suffix}</span>
        </p>

        <p className="text-[11px] tracking-[0.16em] text-brand-muted uppercase">
          {stat.label}
        </p>
      </div>
    </StaggerItem>
  );
}

// ─── StatsBar ─────────────────────────────────────────────────────────────────

export function StatsBar() {
  return (
    <section
      className="border-y border-brand-border"
      style={{ background: "#111113" }}
      aria-label="Gym statistics"
    >
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </StaggerContainer>
    </section>
  );
}