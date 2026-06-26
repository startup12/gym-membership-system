export type BillingCycle = "monthly" | "annual";

export interface MembershipFeature {
  label: string;
  included: boolean;
}

export interface MembershipTier {
  id: string;
  name: string;
  priceMonthly: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaLabel: string;
}
