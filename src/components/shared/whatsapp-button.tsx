"use client";

import { MessageCircle } from "lucide-react";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

export function WhatsAppButton() {
  return (
    <a
      href={buildGeneralEnquiryMessage()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "flex h-14 w-14 items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg",
        "transition-transform duration-200 hover:scale-110 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50",
        "animate-pulse-slow"
      )}
    >
      <MessageCircle size={26} strokeWidth={1.5} fill="white" />
    </a>
  );
}