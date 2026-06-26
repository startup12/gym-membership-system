"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { label: "Classes", href: "/#programmes", section: "programmes" },
  { label: "Pricing", href: "/#pricing", section: "pricing" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

const SECTION_IDS = ["hero", "programmes", "pricing", "contact"];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);
  const waHref = buildGeneralEnquiryMessage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const isActive = (section: string) => {
    if (pathname === "/") return activeSection === section;
    return pathname === `/${section}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-lg border-b border-brand-border shadow-xl shadow-black/40"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center">
            <span className="text-brand-dark font-black text-lg leading-none mt-0.5">C</span>
          </div>
          <div className="font-display font-bold tracking-tighter text-2xl text-white">
            CHAIRMAN
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href, section }) => (
            <Link
              key={section}
              href={href}
              className={cn(
                "relative text-sm font-medium transition-all duration-200 py-1.5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded",
                isActive(section)
                  ? "text-white"
                  : "text-brand-muted hover:text-white"
              )}
            >
              {label}
              {isActive(section) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              min-h-[46px] px-7
              bg-brand-primary hover:bg-[#22C55E]
              text-brand-dark font-semibold text-sm
              rounded-2xl transition-all active:scale-[0.985]
              shadow-glow-sm hover:shadow-glow-md
            "
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex items-center justify-center min-h-[46px] min-w-[46px] text-brand-muted hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.8} />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-brand-dark border-brand-border w-[300px] p-0"
            >
              <div className="flex flex-col p-8">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center">
                      <span className="text-brand-dark font-black text-lg">C</span>
                    </div>
                    <span className="font-display font-bold text-2xl">CHAIRMAN</span>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-brand-muted">
                    <X size={26} />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map(({ label, href, section }) => (
                    <Link
                      key={section}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "py-4 text-lg transition-colors",
                        isActive(section)
                          ? "text-white font-medium"
                          : "text-brand-muted hover:text-white"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-10 flex items-center justify-center min-h-[52px] bg-brand-primary hover:bg-[#22C55E] text-brand-dark font-semibold text-base rounded-2xl transition-all"
                >
                  Join Now
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}