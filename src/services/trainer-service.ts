import type { Trainer } from "@/types/trainer";

const mockTrainers: Trainer[] = [
  {
    id: "trn-001",
    name: "Kofi Mensah",
    role: "Head Strength Coach",
    bio: "Kofi has over 10 years of experience coaching athletes across Ghana and West Africa. His programming blends powerlifting principles with functional movement to build durable, strong bodies.",
    specializations: ["Powerlifting", "Strength & Conditioning", "HIIT"],
    certifications: ["NSCA-CSCS", "CrossFit Level 2", "First Aid Certified"],
    schedule: ["Monday 06:00", "Wednesday 06:30", "Saturday 08:00"],
    photoUrl: "/images/trainers/kofi-mensah.jpg",
    instagramHandle: "@kofi.trains",
  },
  {
    id: "trn-002",
    name: "Abena Owusu",
    role: "Conditioning Specialist",
    bio: "Abena is a former national-level sprinter turned conditioning coach. She designs programs that improve athletic performance, body composition, and mental toughness.",
    specializations: ["Cardio", "HIIT", "Athletic Performance"],
    certifications: ["ACE Personal Trainer", "Precision Nutrition Level 1"],
    schedule: ["Monday 08:00", "Thursday 07:00"],
    photoUrl: "/images/trainers/abena-owusu.jpg",
    instagramHandle: "@abena.fit",
  },
  {
    id: "trn-003",
    name: "Efua Asante",
    role: "Wellness & Mobility Coach",
    bio: "Efua brings a holistic approach to fitness, integrating yoga, mobility work, and breathwork. She helps clients recover faster, move better, and reduce injury risk.",
    specializations: ["Yoga", "Mobility", "Recovery", "Wellness"],
    certifications: ["RYT-200 Yoga Alliance", "FMS Certified", "Sports Massage Diploma"],
    schedule: ["Tuesday 07:00", "Friday 09:00", "Sunday 10:00"],
    photoUrl: "/images/trainers/efua-asante.jpg",
    instagramHandle: "@efua.wellness",
  },
];

export async function fetchAllTrainers(): Promise<Trainer[]> {
  await new Promise((r) => setTimeout(r, 1000));
  return mockTrainers;
}

export async function fetchTrainerById(id: string): Promise<Trainer | undefined> {
  await new Promise((r) => setTimeout(r, 500));
  return mockTrainers.find((t) => t.id === id);
}