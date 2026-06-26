"use client";

import Image from "next/image";
import { ChevronRight, MessageCircle } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";

// ─── WhatsApp ────────────────────────────────────────────────────────────────

const WA_NUMBER = "233546376114";

function waEnquiry(service: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi Chairman Fitness Centre! I'd like to find out more about your ${service} services.`
  )}`;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "gym",
    label: "Gym Training",
    heading: "State-of-the-Art Gym",
    description:
      "Full equipment access — free weights, machines, and cardio. Train at your pace with everything you need to hit your goals.",
    src: "/images/gym.jpeg",
    alt: "Chairman Fitness Centre gym floor with training equipment",
  },
  {
    id: "massage",
    label: "Massage Therapy",
    heading: "Therapeutic Massage",
    description:
      "Professional massage therapy to speed up recovery, reduce stress, and keep you performing at your best.",
    src: "/images/massage.jpeg",
    alt: "Professional massage therapy session at Chairman Fitness Centre",
  },
  {
    id: "physiotherapy",
    label: "Physiotherapy",
    heading: "Physiotherapy",
    description:
      "Expert physiotherapy for injury rehabilitation, pain relief, and restored movement.",
    src: "/images/physiotherapy.jpeg",
    alt: "Physiotherapy treatment session at Chairman Fitness Centre",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function ServicesBento() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeUp>
          <p className="text-brand-primary/70 text-sm font-mono uppercase tracking-[3px] mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tighter">
            Everything you need,{" "}
            <span className="text-brand-primary">under one roof.</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Professional facilities and expert care designed for serious results.
          </p>
        </FadeUp>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-16">
          {/* Gym — Large Card */}
          <div className="md:col-span-2 md:row-span-2">
            <FadeUp delay={0.1}>
              <a
                href={waEnquiry(SERVICES[0].label)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${SERVICES[0].label} on WhatsApp`}
                className="group block relative overflow-hidden rounded-3xl h-[380px] md:h-[560px] 
                           cursor-pointer shadow-2xl shadow-black/50
                           focus-visible:outline-none focus-visible:ring-2 
                           focus-visible:ring-brand-primary focus-visible:ring-offset-4 
                           focus-visible:ring-offset-brand-dark transition-all duration-300 hover:shadow-green-950/50"
              >
                <Image
                  src={SERVICES[0].src}
                  alt={SERVICES[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />

                {/* Enhanced gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/95 via-black/70 to-black/20"
                />

                {/* Subtle grain overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_0.8px,transparent_1px)] bg-[length:3px_3px] pointer-events-none" />

                {/* Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-brand-primary/30 bg-black/60 backdrop-blur-md text-brand-primary">
                    {SERVICES[0].label}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-3 tracking-tight">
                    {SERVICES[0].heading}
                  </h3>
                  <p className="text-white/75 text-[15px] leading-relaxed max-w-md">
                    {SERVICES[0].description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-brand-primary font-medium group-hover:gap-3 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span>Enquire on WhatsApp</span>
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </FadeUp>
          </div>

          {/* Massage Therapy */}
          <FadeUp delay={0.2}>
            <a
              href={waEnquiry(SERVICES[1].label)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${SERVICES[1].label} on WhatsApp`}
              className="group block relative overflow-hidden rounded-3xl h-[300px] md:h-[272px]
                         cursor-pointer shadow-xl shadow-black/40 hover:shadow-green-950/40
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-brand-primary focus-visible:ring-offset-4 
                         focus-visible:ring-offset-brand-dark transition-all duration-300"
            >
              <Image
                src={SERVICES[1].src}
                alt={SERVICES[1].alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30"
              />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_0.8px,transparent_1px)] bg-[length:3px_3px]" />

              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-brand-primary/30 bg-black/60 backdrop-blur-md text-brand-primary">
                  {SERVICES[1].label}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {SERVICES[1].heading}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {SERVICES[1].description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-brand-primary font-medium">
                  <MessageCircle className="w-4 h-4" />
                  <span>Book a session</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </FadeUp>

          {/* Physiotherapy */}
          <FadeUp delay={0.3}>
            <a
              href={waEnquiry(SERVICES[2].label)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${SERVICES[2].label} on WhatsApp`}
              className="group block relative overflow-hidden rounded-3xl h-[300px] md:h-[272px]
                         cursor-pointer shadow-xl shadow-black/40 hover:shadow-green-950/40
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-brand-primary focus-visible:ring-offset-4 
                         focus-visible:ring-offset-brand-dark transition-all duration-300"
            >
              <Image
                src={SERVICES[2].src}
                alt={SERVICES[2].alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30"
              />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_0.8px,transparent_1px)] bg-[length:3px_3px]" />

              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-brand-primary/30 bg-black/60 backdrop-blur-md text-brand-primary">
                  {SERVICES[2].label}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {SERVICES[2].heading}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {SERVICES[2].description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-brand-primary font-medium">
                  <MessageCircle className="w-4 h-4" />
                  <span>Book a session</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}