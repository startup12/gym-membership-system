"use client";

import Link from "next/link";
import { ArrowRight, Sun, Moon, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSubtext, FadeUp } from "@/components/shared/motion-wrapper";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";

const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")";

const VIGNETTE_BG =
  "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(9,9,11,0.7) 100%)";

// Neon bloom — brand-neon at 3% opacity, creates warmth behind the headline
const NEON_BLOOM_BG =
  "radial-gradient(ellipse 55% 40% at 50% 48%, rgba(200,241,53,0.03) 0%, transparent 70%)";

const headlineWords = [
  { text: "TRAIN", neon: false },
  { text: "HARDER", neon: false },
  { text: "THAN", neon: false },
  { text: "YESTERDAY.", neon: true },
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
          opacity: 0.035,
          backgroundImage: GRAIN_BG,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Neon bloom — subtle warmth behind headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: NEON_BLOOM_BG }}
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
            <span className="text-[10px] tracking-[0.22em] text-brand-muted uppercase">
              Chairman Fitness Centre
            </span>
            <span className="h-px w-8 bg-brand-border" />
          </div>
        </FadeUp>

        {/* Headline */}
        <h1
          className="font-display font-black uppercase leading-[0.88] tracking-[-0.04em] mb-7"
          style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
          aria-label="Train harder than yesterday."
        >
          <span className="block">
            {headlineWords.slice(0, 2).map((word, i) => (
              <span
                key={word.text}
                className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
              >
                <motion.span
                  className="inline-block text-white"
                  initial={shouldReduce ? undefined : { opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={shouldReduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </span>

          <span className="block">
            {headlineWords.slice(2).map((word, i) => (
              <span
                key={word.text}
                className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
              >
                <motion.span
                  className={`inline-block ${word.neon ? "text-brand-neon" : "text-white"}`}
                  initial={shouldReduce ? undefined : { opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={shouldReduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: (i + 2) * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        {/* Subtext */}
        <AnimatedSubtext
          delay={0.6}
          className="text-brand-muted text-[15px] leading-[1.65] max-w-[400px] mx-auto mb-9"
        >
          Ghana&apos;s premier training facility. Morning and evening sessions
          for people who take their goals seriously.
        </AnimatedSubtext>

        {/* CTA row */}
        <FadeUp delay={0.75}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <a
              href={buildGeneralEnquiryMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                min-h-[44px] px-8
                bg-brand-neon text-brand-dark
                text-[12px] font-black uppercase tracking-[0.1em]
                rounded-[3px] cursor-pointer
                transition-all duration-200
                hover:brightness-110 hover:shadow-[0_0_24px_rgba(200,241,53,0.35)]
                active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark
              "
            >
              Join Now
            </a>
            <Link
              href="/classes"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 border border-brand-border text-[#A1A1AA] text-[12px] font-medium uppercase tracking-[0.08em] rounded-[3px] transition-colors duration-200 hover:border-[#3F3F46] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              View Classes
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </FadeUp>

        {/* Hours + daily price strip */}
        <FadeUp delay={0.9}>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 border border-brand-border rounded-md overflow-hidden w-full max-w-[400px]">

              <div className="px-4 py-4 border-r border-brand-border text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <Sun size={11} className="text-[#52525B]" aria-hidden="true" />
                  <p className="text-[11px] tracking-[0.16em] text-[#52525B] uppercase">
                    Morning
                  </p>
                </div>
                <p className="text-[12px] text-[#D4D4D8]">5:30 – 10:00 am</p>
              </div>

              <div className="px-4 py-4 border-r border-brand-border text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <Moon size={11} className="text-[#52525B]" aria-hidden="true" />
                  <p className="text-[11px] tracking-[0.16em] text-[#52525B] uppercase">
                    Evening
                  </p>
                </div>
                <p className="text-[12px] text-[#D4D4D8]">4:00 – 8:00 pm</p>
              </div>

              <div className="px-4 py-4 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <Tag size={11} className="text-[#52525B]" aria-hidden="true" />
                  <p className="text-[11px] tracking-[0.16em] text-[#52525B] uppercase">
                    Daily from
                  </p>
                </div>
                <p className="text-[12px] text-brand-neon font-bold">GHS 20</p>
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}