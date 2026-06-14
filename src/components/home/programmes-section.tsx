"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { Dumbbell, Activity, Zap, Layers, Target, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";

// ─── WhatsApp ────────────────────────────────────────────────────────────────

const WA_NUMBER = "233546376114";

function waProgrammeEnquiry(programme: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi Chairman Fitness Centre! I'd like to know more about your ${programme} training programme. Can you help me get started?`
  )}`;
}

const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi Chairman Fitness Centre! I'd like to start training. Can you tell me more about membership and getting started?"
)}`;

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Programme {
  icon: LucideIcon;
  name: string;
  description: string;
  tag: string;
}

const PROGRAMMES: Programme[] = [
  {
    icon: Dumbbell,
    name: "Strength Training",
    description:
      "Build raw strength with barbell, dumbbell, and machine programmes. Progressive overload, every single session.",
    tag: "Foundation",
  },
  {
    icon: Activity,
    name: "Cardio & Conditioning",
    description:
      "Treadmills, bikes, and cardio equipment. Build your aerobic base, improve endurance, and burn calories efficiently.",
    tag: "Endurance",
  },
  {
    icon: Zap,
    name: "HIIT",
    description:
      "High-intensity intervals that torch fat and build conditioning in less time. Short sessions, serious results.",
    tag: "High Intensity",
  },
  {
    icon: Layers,
    name: "Functional Fitness",
    description:
      "Core stability, mobility, and movement patterns that carry over into everyday life and prevent injury.",
    tag: "Movement",
  },
  {
    icon: Target,
    name: "Body Composition",
    description:
      "Structured programmes that combine resistance training and cardio to hit your weight and physique goals.",
    tag: "Body Goals",
  },
  {
    icon: Heart,
    name: "Recovery & Wellness",
    description:
      "Massage therapy and physiotherapy to recover faster, prevent injury, and keep you performing at your peak.",
    tag: "Recovery",
  },
];

// ─── Programme Card ────────────────────────────────────────────────────────────

interface ProgrammeCardProps {
  programme: Programme;
  delay: number;
}

function ProgrammeCard({ programme, delay }: ProgrammeCardProps) {
  const Icon = programme.icon;

  return (
    <FadeUp delay={delay}>
      <div
        className="group flex flex-col h-full
                   bg-brand-surface border border-brand-border rounded-2xl p-6
                   hover:border-brand-neon/25 transition-colors duration-300">

        {/* Icon + Tag row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl
                       bg-brand-neon/10 border border-brand-neon/15
                       group-hover:bg-brand-neon/15 transition-colors duration-300">
            <Icon className="w-6 h-6 text-brand-neon" strokeWidth={1.75} />
          </div>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full
                       text-[10px] font-mono font-medium uppercase tracking-wider
                       bg-white/5 text-brand-muted border border-white/8">
            {programme.tag}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold font-display text-white mb-2">
          {programme.name}
        </h3>

        {/* Description */}
        <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-5">
          {programme.description}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={waProgrammeEnquiry(programme.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${programme.name} on WhatsApp`}
          className="inline-flex items-center gap-2
                     px-4 py-2.5 rounded-lg w-full justify-center
                     min-h-[44px] cursor-pointer
                     bg-brand-neon/8 text-brand-neon border border-brand-neon/20
                     hover:bg-brand-neon/15 hover:border-brand-neon/35
                     transition-colors duration-200
                     text-sm font-medium
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-brand-neon focus-visible:ring-offset-2
                     focus-visible:ring-offset-brand-dark">
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>Enquire about this programme</span>
        </a>
      </div>
    </FadeUp>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProgrammesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <FadeUp>
          <p className="text-brand-neon text-sm font-mono uppercase tracking-widest mb-3">
            Training Programmes
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
                Train with{" "}
                <span className="text-brand-neon">purpose.</span>
              </h2>
              <p className="text-brand-muted max-w-lg mt-4 text-base leading-relaxed">
                No timetables. No waiting. Access every type of training you
                need — morning and evening, seven days a week.
              </p>
            </div>
            {/* Desktop general CTA — visible on sm+ */}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 shrink-0
                         px-5 py-3 rounded-xl min-h-[44px] cursor-pointer
                         bg-brand-neon text-brand-dark font-semibold text-sm
                         hover:bg-brand-neon/90 transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-brand-neon focus-visible:ring-offset-2
                         focus-visible:ring-offset-brand-dark">
              <span>Start Training Today</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </FadeUp>

        {/* Programme cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {PROGRAMMES.map((programme, i) => (
            <ProgrammeCard
              key={programme.name}
              programme={programme}
              delay={0.05 + i * 0.08}
            />
          ))}
        </div>

        {/* Mobile CTA — visible on mobile only */}
        <FadeUp delay={0.6}>
          <div className="mt-8 sm:hidden">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2
                         w-full px-6 py-3.5 rounded-xl min-h-[44px] cursor-pointer
                         bg-brand-neon text-brand-dark font-semibold text-sm
                         hover:bg-brand-neon/90 transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-brand-neon focus-visible:ring-offset-2
                         focus-visible:ring-offset-brand-dark">
              <span>Start Training Today</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}