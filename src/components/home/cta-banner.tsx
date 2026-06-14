"use client";

import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";

export default function CtaBanner() {
  const waHref = `https://wa.me/233546376114?text=${encodeURIComponent(
    buildGeneralEnquiryMessage()
  )}`;

  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* Green bloom background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(37,211,102,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-brand-dark" />

      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <span className="block text-xs font-semibold tracking-widest uppercase text-brand-neon mb-6">
            Start Today
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne text-white mb-6 leading-tight">
            Your strongest self
            <br />
            is waiting.
          </h2>
          <p className="text-brand-muted text-base max-w-md mx-auto mb-10 leading-relaxed">
            Join Chairman Fitness Centre and train with purpose.
            Morning and evening sessions available, seven days a week.
          </p>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Chairman Fitness Centre on WhatsApp"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-neon px-8 py-4 text-brand-dark font-semibold text-sm min-h-[44px] cursor-pointer hover:bg-brand-neon/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            Join Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}