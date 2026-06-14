"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { TrainerCard } from "@/features/trainers/components/trainer-card";
import { TrainerCardSkeleton } from "@/features/trainers/components/trainer-card-skeleton";
import { fetchAllTrainers } from "@/services/trainer-service";
import type { Trainer } from "@/types/trainer";

export function TrainersSection() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTrainers()
      .then((data) => setTrainers(data.slice(0, 3))) // homepage shows 3
      .catch(() => setTrainers([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8F135]/10 border border-[#C8F135]/20 mb-4">
                <Users className="w-3.5 h-3.5 text-[#C8F135]" />
                <span className="text-[#C8F135] text-xs font-semibold uppercase tracking-widest">
                  Our Trainers
                </span>
              </div>
              <h2 className="font-syne font-bold text-white text-3xl sm:text-4xl leading-tight">
                Coached by the{" "}
                <span className="text-[#C8F135]">best.</span>
              </h2>
              <p className="text-[#71717A] text-base mt-3 max-w-md">
                Every trainer at Chairman Fitness Centre is certified, experienced, and invested in your progress.
              </p>
            </div>

            <a
              href="/trainers"
              className="inline-flex items-center gap-2 text-sm text-[#71717A] hover:text-white transition-colors duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-lg px-1"
            >
              View all trainers
              <span aria-hidden="true" className="text-[#C8F135]">→</span>
            </a>
          </div>
        </FadeUp>

        {/* Cards grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TrainerCardSkeleton />
            <TrainerCardSkeleton />
            <TrainerCardSkeleton />
          </div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <StaggerItem key={trainer.id}>
                <TrainerCard trainer={trainer} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}