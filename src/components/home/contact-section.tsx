"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";

// ─── Schema ───────────────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

// ─── Static data ──────────────────────────────────────────────────────────────

const CONTACT_ITEMS = [
  {
    id: "location",
    Icon: MapPin,
    label: "Location",
    value: "Accra, Ghana",
    href: null as string | null,
  },
  {
    id: "hours",
    Icon: Clock,
    label: "Opening Hours",
    value: "Morning 5:30–10:00 am  ·  Evening 4:00–8:00 pm",
    href: null as string | null,
  },
  {
    id: "whatsapp",
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "+233 546 376 114",
    href: "https://wa.me/233546376114",
  },
];

// TODO: Replace with real address once confirmed
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127522.63216914177!2d-0.26968765!3d5.6036971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1718000000000!5m2!1sen!2sgh";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // TODO: Replace with real key
          subject: "New enquiry — Chairman Fitness Centre website",
          name: data.name,
          email: data.email,
          phone: data.phone ?? "",
          message: data.message,
        }),
      });

      const json = (await res.json()) as { success: boolean };
      if (json.success) {
        setSubmitted(true);
        reset();
      } else {
        setSubmitError(true);
      }
    } catch (_err) {
      setSubmitError(true);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-brand-primary/70 text-sm font-mono uppercase tracking-[3px] mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-white tracking-tighter mb-6">
              Ready to get stronger?
            </h2>
            <p className="text-white/60 text-lg">
              Whether you want to tour the facility, discuss membership, or ask about classes — we’re here.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info + Map */}
          <div className="space-y-6">
            {CONTACT_ITEMS.map((item, i) => {
              const { Icon } = item;
              const isAccent = item.id === "whatsapp";

              const cardContent = (
                <div className="group flex items-start gap-5 p-6 rounded-3xl border border-brand-border bg-brand-surface hover:border-brand-primary/30 transition-all duration-300">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${isAccent ? "bg-brand-primary/10" : "bg-white/5"}`}>
                    <Icon className={`w-6 h-6 ${isAccent ? "text-brand-primary" : "text-white/70 group-hover:text-white"}`} />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[2px] text-brand-muted mb-1.5">
                      {item.label}
                    </p>
                    <p className={`text-[15px] font-medium leading-snug ${isAccent ? "text-brand-primary" : "text-white"}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <FadeUp key={item.id} delay={i * 0.08}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark rounded-3xl"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </FadeUp>
              );
            })}

            {/* Map */}
            <FadeUp delay={0.35}>
              <div className="rounded-3xl overflow-hidden border border-brand-border shadow-xl shadow-black/60 h-[260px] lg:h-[300px]">
                <iframe
                  src={MAP_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chairman Fitness Centre Location"
                />
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Form */}
          <FadeUp delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center rounded-3xl border border-brand-primary/20 bg-brand-surface p-12 min-h-[460px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary/10 mb-8">
                  <CheckCircle2 className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Message Received
                </h3>
                <p className="text-white/60 max-w-xs">
                  Thank you. We’ll get back to you within a few hours. 
                  For immediate response, reach us on WhatsApp.
                </p>
              </div>
            ) : (
              <div className="rounded-3xl border border-brand-border bg-brand-surface p-8 lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="cf-name" className="block text-xs font-mono uppercase tracking-widest text-white/70">
                        Name <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        id="cf-name"
                        type="text"
                        {...register("name")}
                        className="w-full rounded-2xl border border-brand-border bg-brand-dark px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1.5 text-xs text-red-400">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cf-email" className="block text-xs font-mono uppercase tracking-widest text-white/70">
                        Email <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        {...register("email")}
                        className="w-full rounded-2xl border border-brand-border bg-brand-dark px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1.5 text-xs text-red-400">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cf-phone" className="block text-xs font-mono uppercase tracking-widest text-white/70">
                      Phone <span className="text-white/40 text-xs normal-case">(optional)</span>
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full rounded-2xl border border-brand-border bg-brand-dark px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cf-message" className="block text-xs font-mono uppercase tracking-widest text-white/70">
                      Message <span className="text-brand-primary">*</span>
                    </label>
                    <textarea
                      id="cf-message"
                      rows={5}
                      {...register("message")}
                      className="w-full rounded-3xl border border-brand-border bg-brand-dark px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-y"
                      placeholder="Tell us about your goals, ask about membership, or request a tour..."
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-400 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      Something went wrong. Please try again or message us directly on WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 rounded-2xl bg-brand-primary hover:bg-[#22c55e] text-brand-dark font-semibold py-4 text-base transition-all active:scale-[0.985] disabled:opacity-70 min-h-[52px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-brand-dark/30 border-t-brand-dark animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}