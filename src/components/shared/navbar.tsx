"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Dumbbell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { buildGeneralEnquiryMessage } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus-visible:outline-none">
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-sm",
              "bg-brand-neon text-brand-dark",
              "transition-transform duration-200 group-hover:scale-110"
            )}
          >
            <Dumbbell size={16} strokeWidth={2.5} />
          </span>
          <span className="font-display font-extrabold text-white text-lg tracking-tight">
            CHAIRMAN<span className="text-brand-neon">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-md",
                    "transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon/50",
                    isActive
                      ? "text-brand-neon"
                      : "text-brand-muted hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-px h-px bg-brand-neon"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={buildGeneralEnquiryMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md",
              "bg-brand-neon text-brand-dark",
              "transition-all duration-200",
              "hover:shadow-neon-sm hover:scale-[1.03]",
              "active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon/50"
            )}
          >
            Join Now
          </a>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
  className={cn(
    "flex h-9 w-9 items-center justify-center rounded-md",
    "border border-brand-border text-brand-muted",
    "transition-colors duration-200 hover:text-white hover:border-brand-neon/40",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon/50"
  )}
  aria-label="Open menu"
>
  <Menu size={18} strokeWidth={1.5} />
</SheetTrigger>

            <SheetContent
              side="right"
              className="bg-brand-surface border-brand-border w-72 p-0"
            >
              <div className="flex flex-col h-full">

                {/* Mobile header */}
                <div className="flex items-center px-6 py-5 border-b border-brand-border">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand-neon text-brand-dark">
                      <Dumbbell size={14} strokeWidth={2.5} />
                    </span>
                    <span className="font-display font-extrabold text-white tracking-tight">
                      CHAIRMAN<span className="text-brand-neon">.</span>
                    </span>
                  </Link>
                </div>

                {/* Mobile links */}
                <ul className="flex flex-col px-4 py-6 gap-1">
                  <AnimatePresence>
                    {NAV_LINKS.map((link, i) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07, duration: 0.3 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex items-center px-4 py-3 rounded-md text-sm font-medium",
                              "transition-colors duration-200",
                              isActive
                                ? "bg-brand-neon/10 text-brand-neon"
                                : "text-brand-muted hover:text-white hover:bg-white/5"
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>

                {/* Mobile CTA */}
                <div className="mt-auto px-6 py-6 border-t border-brand-border">
                  <a
                    href={buildGeneralEnquiryMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-center w-full px-4 py-3 rounded-md",
                      "bg-brand-neon text-brand-dark text-sm font-semibold",
                      "transition-all duration-200 hover:shadow-neon-sm active:scale-[0.97]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon/50"
                    )}
                  >
                    Join Now via WhatsApp
                  </a>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
}