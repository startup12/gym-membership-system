"use client";

import { Check, MessageCircle } from "lucide-react";
import { cn } from "@/utils/cn";
import { formatGHS } from "@/utils/formatters";
import type { MembershipTier } from "@/types/membership";

interface TierCardProps {
  tier: MembershipTier;
}

export default function TierCard({ tier }: TierCardProps) {
  const waMessage = `Hi Chairman Fitness Centre! I'm interested in the ${tier.name} membership. Can you tell me more?`;
  const waHref = `https://wa.me/233546376114?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border p-8 transition-all duration-300 group",
        "bg-brand-surface hover:shadow-2xl hover:-translate-y-1",
        tier.isPopular
          ? "border-brand-primary shadow-2xl shadow-brand-primary/20 scale-[1.02] z-10"
          : "border-brand-border hover:border-brand-primary/30"
      )}
    >
      {tier.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center rounded-full bg-brand-primary px-6 py-1.5 text-sm font-semibold text-brand-dark tracking-widest uppercase shadow-lg shadow-black/50">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold font-display text-white tracking-tight mb-2">
          {tier.name}
        </h3>
        <p className="text-white/60 text-[15px] leading-relaxed">
          {tier.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-10">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-bold font-display text-white tracking-tighter">
            {formatGHS(tier.priceMonthly)}
          </span>
          <span className="text-white/50 text-lg mb-1">/month</span>
        </div>
        {tier.isPopular && (
          <p className="text-brand-primary text-sm mt-1 font-medium">Best value for serious athletes</p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-12 flex-1">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1">
              <Check className="w-5 h-5 text-brand-primary shrink-0" />
            </div>
            <span className="text-white/80 text-[15px] leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire about the ${tier.name} membership on WhatsApp`}
        className={cn(
          "group/btn inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 w-full font-semibold text-base transition-all duration-200 active:scale-[0.985]",
          tier.isPopular
            ? "bg-brand-primary text-brand-dark hover:bg-[#22c55e] shadow-lg shadow-black/40"
            : "border border-brand-border hover:border-brand-primary text-white hover:bg-brand-primary/5"
        )}
      >
        <MessageCircle className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
        Enquire on WhatsApp
      </a>
    </div>
  );
}