// src/features/trainers/components/trainers-page-client.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  BadgeCheck,
  Calendar,
  Link2,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { TrainerCardSkeleton } from "@/features/trainers/components/trainer-card-skeleton";
import { fetchAllTrainers } from "@/services/trainer-service";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";
import type { Trainer } from "@/types/trainer";

const WHATSAPP_NUMBER = "233546376114";

// ─── Helpers ────────────────────────────────────────────────────

const SPEC_STYLES: Record<string, string> = {
  "Strength & Conditioning": "bg-[#C8F135]/10 text-[#C8F135] border-[#C8F135]/20",
  "Cardio & HIIT":           "bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/20",
  "Yoga & Flexibility":      "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Physiotherapy":           "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Massage Therapy":         "bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/20",
  "Nutrition":               "bg-orange-500/10 text-orange-400 border-orange-500/20",
};
const DEFAULT_SPEC = "bg-zinc-800 text-zinc-300 border-zinc-700";

function specStyle(s: string) {
  return SPEC_STYLES[s] ?? DEFAULT_SPEC;
}

const AVATAR_GRADIENTS = [
  "from-[#C8F135]/30 to-[#C8F135]/5",
  "from-[#00D4AA]/30 to-[#00D4AA]/5",
  "from-purple-500/30 to-purple-500/5",
  "from-blue-500/30 to-blue-500/5",
  "from-orange-500/30 to-orange-500/5",
];

function avatarGradient(name: string) {
  return AVATAR_GRADIENTS[name.charCodeAt(0) % AVATAR_GRADIENTS.length];
}

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

const DAY_ABBR: Record<string, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
  Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

// ─── Expanded trainer card (page-only) ──────────────────────────

function TrainerDetailCard({ trainer }: { trainer: Trainer }) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildGeneralEnquiryMessage()
  )}`;

  return (
    <article className="group relative flex flex-col bg-[#111115] border border-[#1F1F25] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C8F135]/30 hover:shadow-[0_0_32px_rgba(200,241,53,0.06)]">

      {/* Neon top line on hover */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8F135]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col flex-1 p-6 gap-5">

        {/* Avatar + identity */}
        <div className="flex items-start gap-4">
          <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${avatarGradient(trainer.name)} border border-[#1F1F25] flex items-center justify-center`}>
            <span className="font-syne text-lg font-bold text-white/90 tracking-tight">
              {initials(trainer.name)}
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#C8F135] border-2 border-[#111115]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h2 className="font-syne font-bold text-white text-base leading-tight truncate">
                  {trainer.name}
                </h2>
                <p className="text-[#71717A] text-sm mt-0.5">{trainer.role}</p>
              </div>


            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[#71717A] text-sm leading-relaxed">{trainer.bio}</p>

        {/* Specializations */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Award className="w-3.5 h-3.5 text-[#71717A]" />
            <span className="text-[#71717A] text-xs uppercase tracking-widest font-medium">
              Specializations
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {trainer.specializations.map((spec) => (
              <span
                key={spec}
                className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${specStyle(spec)}`}>
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {trainer.certifications.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <BadgeCheck className="w-3.5 h-3.5 text-[#71717A]" />
              <span className="text-[#71717A] text-xs uppercase tracking-widest font-medium">
                Certifications
              </span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {trainer.certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8F135]/60 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm leading-snug">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Schedule */}
        {trainer.schedule.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <Calendar className="w-3.5 h-3.5 text-[#71717A]" />
              <span className="text-[#71717A] text-xs uppercase tracking-widest font-medium">
                Available
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => {
                const active = trainer.schedule.includes(day);
                return (
                  <span
                    key={day}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                      active
                        ? "bg-[#C8F135]/10 text-[#C8F135] border-[#C8F135]/20"
                        : "bg-transparent text-[#71717A]/40 border-[#1F1F25]"
                    }`}>
                    {DAY_ABBR[day]}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer: Instagram + WhatsApp */}
        <div className="flex items-center gap-3 pt-1 mt-auto">
          {trainer.instagram && (
            <a
              href={`https://instagram.com/${trainer.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${trainer.name} on Instagram`}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#1F1F25] text-[#71717A] hover:text-white hover:border-zinc-600 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
              <Link2 className="w-4 h-4" />
            </a>
          )}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#C8F135]/10 hover:bg-[#C8F135]/20 border border-[#C8F135]/20 hover:border-[#C8F135]/40 text-[#C8F135] text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F135]/50">
            <MessageCircle className="w-4 h-4" />
            Train with {trainer.name.split(" ")[0]}
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────

export function TrainersPageClient() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTrainers()
      .then(setTrainers)
      .catch(() => setTrainers([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#09090B]">

      {/* ── Page header ── */}
      <div className="w-full border-b border-[#1F1F25] bg-[#09090B]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 min-h-[44px] px-3 rounded-xl text-[#71717A] hover:text-white hover:bg-white/5 border border-transparent hover:border-[#1F1F25] transition-all duration-200 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to home</span>
          </Link>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#71717A]">
            <span>Chairman Fitness Centre</span>
            <span className="text-[#1F1F25]">/</span>
            <span className="text-white">Trainers</span>
          </div>

          {/* Trainer count pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F1F25] border border-[#1F1F25]">
            <Users className="w-3.5 h-3.5 text-[#C8F135]" />
            <span className="text-white text-xs font-semibold">
              {loading ? "—" : `${trainers.length} Trainer${trainers.length !== 1 ? "s" : ""}`}
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero strip ── */}
      <section className="w-full pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8F135]/10 border border-[#C8F135]/20 mb-5">
              <Users className="w-3.5 h-3.5 text-[#C8F135]" />
              <span className="text-[#C8F135] text-xs font-semibold uppercase tracking-widest">
                Our Trainers
              </span>
            </div>
            <h1 className="font-syne font-bold text-white text-4xl sm:text-5xl leading-tight mb-4">
              Coached by the{" "}
              <span className="text-[#C8F135]">best.</span>
            </h1>
            <p className="text-[#71717A] text-base sm:text-lg max-w-xl leading-relaxed">
              Every trainer at Chairman Fitness Centre is certified, experienced, and invested in your progress — from day one.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Trainer grid ── */}
      <section className="w-full pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <TrainerCardSkeleton key={i} />
              ))}
            </div>
          ) : trainers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
              <Users className="w-10 h-10 text-[#1F1F25]" />
              <p className="text-[#71717A] text-base">No trainers found.</p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainers.map((trainer) => (
                <StaggerItem key={trainer.id}>
                  <TrainerDetailCard trainer={trainer} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* ── Floating back button (mobile) ── */}
      <div className="fixed bottom-6 left-4 z-50 sm:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-full bg-[#111115] border border-[#1F1F25] text-[#71717A] hover:text-white hover:border-zinc-600 shadow-lg transition-all duration-200 text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
      </div>
    </main>
  );
}