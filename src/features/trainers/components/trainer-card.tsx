"use client";

import { MessageCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";
import type { Trainer } from "@/types/trainer";

interface TrainerCardProps {
  trainer: Trainer;
}

const WHATSAPP_NUMBER = "233546376114";

const ACCENT_COLORS: Record<string, string> = {
  "Strength & Conditioning": "bg-[#C8F135]/10 text-[#C8F135] border-[#C8F135]/20",
  "Cardio & HIIT":           "bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/20",
  "Yoga & Flexibility":      "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Physiotherapy":           "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Massage Therapy":         "bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/20",
  "Nutrition":               "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const DEFAULT_ACCENT = "bg-zinc-800 text-zinc-300 border-zinc-700";

function getSpecializationStyle(spec: string): string {
  return ACCENT_COLORS[spec] ?? DEFAULT_ACCENT;
}

// Deterministic avatar color from name
function getAvatarColor(name: string): string {
  const colors = [
    "from-[#C8F135]/30 to-[#C8F135]/10",
    "from-[#00D4AA]/30 to-[#00D4AA]/10",
    "from-purple-500/30 to-purple-500/10",
    "from-blue-500/30 to-blue-500/10",
    "from-orange-500/30 to-orange-500/10",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildGeneralEnquiryMessage()
  )}`;

  const avatarGradient = getAvatarColor(trainer.name);

  return (
    <article className="group relative flex flex-col bg-[#111115] border border-[#1F1F25] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C8F135]/30 hover:shadow-[0_0_32px_rgba(200,241,53,0.06)]">

      {/* Top accent bar — neon line at very top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8F135]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-5">

        {/* Avatar + name row */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${avatarGradient} border border-[#1F1F25] flex items-center justify-center`}>
            <span className="font-syne text-lg font-bold text-white/90 tracking-tight">
              {getInitials(trainer.name)}
            </span>
            {/* Online dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#C8F135] border-2 border-[#111115]" />
          </div>

          {/* Name + role */}
          <div className="min-w-0">
            <h3 className="font-syne font-bold text-white text-base leading-tight truncate">
              {trainer.name}
            </h3>
            <p className="text-[#71717A] text-sm mt-0.5 truncate">
              {trainer.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[#71717A] text-sm leading-relaxed line-clamp-3 flex-1">
          {trainer.bio}
        </p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2">
          {trainer.specializations.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border ${getSpecializationStyle(spec)}`}>
              <Award className="w-3 h-3 shrink-0" />
              {spec}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#C8F135]/10 hover:bg-[#C8F135]/20 border border-[#C8F135]/20 hover:border-[#C8F135]/40 text-[#C8F135] text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F135]/50">
          <MessageCircle className="w-4 h-4" />
          Train with {trainer.name.split(" ")[0]}
        </a>
      </div>
    </article>
  );
}