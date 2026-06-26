import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {ProgrammesSection} from "@/components/home/programmes-section";

export const metadata = {
  title: "Training Programmes | Chairman Fitness Centre",
  description:
    "Explore our training programmes — Strength, Cardio, HIIT, Functional Training, Body Composition, and Recovery. Message us on WhatsApp to get started.",
};

export default function ClassesPage() {
  return (
    <main>
      <div className="px-4 pt-24 pb-2 max-w-7xl mx-auto">
        <Link
          href="/#hero"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted hover:text-brand-neon transition-colors duration-200 min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md"
          aria-label="Back to homepage">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <ProgrammesSection />
    </main>
  );
}