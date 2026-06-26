import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactSection from "@/components/home/contact-section";

export const metadata = {
  title: "Contact Us | Chairman Fitness Centre",
  description:
    "Get in touch with Chairman Fitness Centre. Message us on WhatsApp or send a message and we will get back to you.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="px-4 pt-24 pb-2 max-w-7xl mx-auto">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted hover:text-brand-neon transition-colors duration-200 min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md"
          aria-label="Back to homepage">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <ContactSection />
    </main>
  );
}