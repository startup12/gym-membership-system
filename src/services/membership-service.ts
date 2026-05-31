import type { MembershipTier } from "@/types/membership";

const mockTiers: MembershipTier[] = [
  {
    id: "tier-basic",
    name: "Basic",
    priceMonthly: 150,
    description: "Everything you need to get started and build a consistent habit.",
    isPopular: false,
    ctaLabel: "Get Started",
    features: [
      { label: "Gym floor access", included: true },
      { label: "Locker room access", included: true },
      { label: "2 group classes per month", included: true },
      { label: "Fitness assessment", included: false },
      { label: "Personal training sessions", included: false },
      { label: "Massage & physiotherapy discount", included: false },
    ],
  },
  {
    id: "tier-premium",
    name: "Premium",
    priceMonthly: 280,
    description: "The most popular plan. Unlimited classes and expert guidance included.",
    isPopular: true,
    ctaLabel: "Get Started",
    features: [
      { label: "Gym floor access", included: true },
      { label: "Locker room access", included: true },
      { label: "Unlimited group classes", included: true },
      { label: "Monthly fitness assessment", included: true },
      { label: "2 personal training sessions", included: true },
      { label: "Massage & physiotherapy discount", included: false },
    ],
  },
  {
    id: "tier-elite",
    name: "Elite",
    priceMonthly: 450,
    description: "The full experience. Unlimited access, priority booking, and wellness perks.",
    isPopular: false,
    ctaLabel: "Get Started",
    features: [
      { label: "Gym floor access", included: true },
      { label: "Locker room access", included: true },
      { label: "Unlimited group classes", included: true },
      { label: "Monthly fitness assessment", included: true },
      { label: "4 personal training sessions", included: true },
      { label: "Massage & physiotherapy discount", included: true },
    ],
  },
];

export async function fetchMembershipTiers(): Promise<MembershipTier[]> {
  await new Promise((r) => setTimeout(r, 1000));
  return mockTiers;
}