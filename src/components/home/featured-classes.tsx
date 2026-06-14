"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type GymClass } from "@/types/classes"
import { fetchAllClasses } from "@/services/class-service"
import { ClassCard } from "@/features/classes/components/class-card"
import { ClassCardSkeleton } from "@/features/classes/components/class-card-skeleton"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper"

export function FeaturedClasses() {
  const [classes, setClasses] = useState<GymClass[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllClasses()
      .then((data) => setClasses(data.slice(0, 3)))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-muted mb-3">
              Schedule
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-syne text-white leading-tight">
              Featured Classes
            </h2>
          </div>
          <Link
            href="/classes"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon rounded"
          >
            See All Classes
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </FadeUp>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => <ClassCardSkeleton key={i} />)}
          </div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((gymClass) => (
              <StaggerItem key={gymClass.id}>
                <ClassCard gymClass={gymClass} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* mobile see-all — hidden on sm+ where it appears in the header */}
        <div className="sm:hidden mt-8 flex justify-center">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 min-h-[44px] px-4 text-sm text-brand-muted hover:text-white transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon rounded"
          >
            See All Classes
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}