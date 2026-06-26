"use client";

import { useEffect, useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import TierCard from "@/features/memberships/components/tier-card";
import TierCardSkeleton from "@/features/memberships/components/tier-card-skeleton";
import { fetchMembershipTiers } from "@/services/membership-service";
import type { MembershipTier } from "@/types/membership";
import { MessageCircle } from "lucide-react";

export default function PricingSection() {
  const [tiers, setTiers] = useState<MembershipTier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembershipTiers()
      .then(setTiers)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-primary/70 text-sm font-mono uppercase tracking-[3px] mb-4">
              MEMBERSHIP PLANS
            </p>
            <h2 className="text-5xl md:text-6xl font-bold font-display text-white tracking-tighter mb-6">
              Invest in your strongest self.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Serious training deserves serious commitment. 
              Choose the plan that matches your dedication.
            </p>
          </div>
        </FadeUp>

        {/* Pricing Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <StaggerItem key={i}>
                  <TierCardSkeleton />
                </StaggerItem>
              ))
            : tiers.map((tier, index) => (
                <StaggerItem key={tier.id}>
                  <TierCard tier={tier} />
                </StaggerItem>
              ))}
        </StaggerContainer>

        {/* Footer note */}
        <FadeUp delay={0.4}>
          <div className="mt-16 text-center border-t border-brand-border/60 pt-8">
            <p className="text-white/50 text-sm">
              All prices in Ghana Cedis (GHS).{" "}
              <span className="text-white">Daily access available at GHS 20.</span>
            </p>
            <p className="text-white/50 text-sm mt-2">
              Corporate, student, and annual plans available —{" "}
              <a
                href="#contact"
                className="text-brand-primary hover:text-[#22c55e] transition-colors inline-flex items-center gap-1 group"
              >
                speak with us
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}