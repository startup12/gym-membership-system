import type { MembershipTier } from "@/types/membership";

export const fetchMembershipTiers = async (): Promise<MembershipTier[]> => {
  await new Promise((r) => setTimeout(r, 800));
  return [
    {
      id: "basic",
      name: "Basic",
      ctaLabel: "Join Basic",
      priceMonthly: 150,
      description: "Everything you need to get started.",
      features: [
        "Full gym floor access",
        "Cardio equipment",
        "Free weights & machines",
        "Locker room access",
        "Morning & evening sessions",
      ],
      isPopular: false,
    },
    {
      id: "premium",
      name: "Premium",
      ctaLabel: "Start Premium",
      priceMonthly: 280,
      description: "The most popular choice for serious members.",
      features: [
        "Everything in Basic",
        "Group training sessions",
        "Programme consultation",
        "Priority floor access",
        "Guest pass (1/month)",
        "Nutrition guidance",
      ],
      isPopular: true,
    },
    {
      id: "elite",
      name: "Elite",
      ctaLabel: "Go Elite",
      priceMonthly: 450,
      description: "Full access, maximum results.",
      features: [
        "Everything in Premium",
        "Massage & physiotherapy sessions",
        "Personalised training plan",
        "Body composition tracking",
        "Unlimited guest passes",
        "Priority WhatsApp support",
      ],
      isPopular: false,
    },
  ];
};