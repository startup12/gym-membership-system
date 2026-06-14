"use client";

import Link from "next/link";
import { ArrowRight, Sun, Moon, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSubtext, FadeUp } from "@/components/shared/motion-wrapper";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";

const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")";

const VIGNETTE_BG =
  "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(10,10,10,0.85) 100%)";

// Subtle energy glow (using the new green)
const ENERGY_GLOW_BG =
  "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(37, 211, 102, 0.06) 0%, transparent 75%)";

const headlineWords = [
  { text: "TRAIN", accent: false },
  { text: "HARDER", accent: false },
  { text: "THAN", accent: false },
  { text: "YESTERDAY.", accent: true },
];

export function HeroSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">

      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.04,
          backgroundImage: GRAIN_BG,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Subtle energy glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: ENERGY_GLOW_BG }}
      />

      {/* Edge vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: VIGNETTE_BG }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl w-full mx-auto px-6 pt-24 pb-20">

        {/* Overline */}
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-brand-border" />
            <span className="text-[10px] tracking-[0.22em] text-brand-muted uppercase font-medium">
              CHAIRMAN FITNESS CENTRE
            </span>
            <span className="h-px w-8 bg-brand-border" />
          </div>
        </FadeUp>

        {/* Headline */}
        <h1
          className="font-display font-black uppercase leading-[0.88] tracking-[-0.045em] mb-8"
          style={{ fontSize: "clamp(44px, 7.2vw, 92px)" }}
          aria-label="Train harder than yesterday."
        >
          {headlineWords.map((word, i) => (
            <span
              key={word.text}
              className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
            >
              <motion.span
                className={`inline-block ${word.accent ? "text-brand-primary" : "text-white"}`}
                initial={shouldReduce ? undefined : { opacity: 0, y: 45, filter: "blur(10px)" }}
                animate={shouldReduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.1,
                  ease: [0.23, 0.48, 0.38, 0.96],
                }}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <AnimatedSubtext
          delay={0.55}
          className="text-brand-muted text-[15.5px] leading-relaxed max-w-[420px] mx-auto mb-10"
        >
          Ghana&apos;s premier training facility. Morning and evening sessions
          for people who take their goals seriously.
        </AnimatedSubtext>

        {/* CTA row */}
        <FadeUp delay={0.7}>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <a
              href={buildGeneralEnquiryMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center
                min-h-[56px] px-10
                bg-brand-primary hover:bg-[#22C55E] text-brand-dark
                font-black uppercase tracking-[0.08em] text-sm
                rounded-xl shadow-glow-md hover:shadow-glow-lg
                transition-all duration-200 active:scale-[0.985]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark
              "
            >
              JOIN NOW
            </a>

            <Link
              href="/classes"
              className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-8 border border-brand-border hover:border-white/40 text-white/80 hover:text-white text-sm font-medium uppercase tracking-wider rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              VIEW CLASSES
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeUp>

        {/* Hours + Price Strip */}
        <FadeUp delay={0.85}>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 border border-brand-border bg-brand-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden w-full max-w-[420px]">

              <div className="px-6 py-5 border-r border-brand-border text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <Sun size={13} className="text-brand-muted" />
                  <p className="text-[10px] tracking-[0.12em] text-brand-muted uppercase">MORNING</p>
                </div>
                <p className="text-sm text-white/90">5:30 – 10:00 am</p>
              </div>

              <div className="px-6 py-5 border-r border-brand-border text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <Moon size={13} className="text-brand-muted" />
                  <p className="text-[10px] tracking-[0.12em] text-brand-muted uppercase">EVENING</p>
                </div>
                <p className="text-sm text-white/90">4:00 – 8:00 pm</p>
              </div>

              <div className="px-6 py-5 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <Tag size={13} className="text-brand-muted" />
                  <p className="text-[10px] tracking-[0.12em] text-brand-muted uppercase">DAILY FROM</p>
                </div>
                <p className="text-brand-primary text-xl font-bold tracking-tight">GHS 20</p>
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}