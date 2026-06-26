import { HeroSection } from "@/components/home/hero-section"
import { ServicesBento } from "@/components/home/services-bento"
import { ProgrammesSection } from "@/components/home/programmes-section";
import PricingSection from "@/components/home/pricing-section";
import CtaBanner from "@/components/home/cta-banner";
import ContactSection from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>

      <ServicesBento />

      <section id="programmes">
  <ProgrammesSection />
</section>


      {/* Phase 3 — PricingSection */}
      <div id="pricing">
        <PricingSection />
      </div>

      <CtaBanner />

      {/* Phase 4 — ContactSection */}
      <div id="contact">
        <ContactSection />
      </div>
    </>
  )
}