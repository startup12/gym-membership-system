import Link from "next/link";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

const WA_HREF = "https://wa.me/233546376114";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "Programmes", href: "/#programmes" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const SERVICE_LINKS = [
  { label: "Gym & Fitness Floor", href: "/#services" },
  { label: "Massage Therapy", href: "/#services" },
  { label: "Physiotherapy", href: "/#services" },
  { label: "Personal Training", href: "/#programmes" },
  { label: "Group Sessions", href: "/#programmes" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">

          {/* Column 1 — Brand */}
          <div className="space-y-6">
            <div>
              <p className="text-xl font-bold font-display tracking-tighter text-white">
                CHAIRMAN
              </p>
              <p className="text-xs font-mono tracking-[3px] text-brand-primary -mt-1">
                FITNESS CENTRE
              </p>
            </div>

            <p className="text-white/60 leading-relaxed max-w-xs">
              A serious gym for serious people. Strength. Discipline. Results.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border text-white/60 hover:text-white hover:border-brand-primary/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border text-white/60 hover:text-white hover:border-brand-primary/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href={WA_HREF}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border text-white/60 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[2px] text-white/70 mb-6">
              NAVIGATION
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-[15px] block focus-visible:underline focus-visible:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[2px] text-white/70 mb-6">
              SERVICES
            </p>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-[15px] block focus-visible:underline focus-visible:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[2px] text-white/70 mb-6">
              CONTACT
            </p>
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                <span className="text-white/70 text-[15px] leading-relaxed">
                  Accra, Ghana
                </span>
              </div>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                <div className="text-white/70 text-[15px] leading-relaxed">
                  Morning 5:30 – 10:00 am<br />
                  Evening 4:00 – 8:00 pm<br />
                  <span className="text-white/50 text-sm">Seven days a week</span>
                </div>
              </div>

              <div className="flex gap-3">
                <MessageCircle className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-[#22c55e] transition-colors text-[15px] font-medium"
                >
                  +233 546 376 114
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {CURRENT_YEAR} Chairman Fitness Centre. All rights reserved.
          </p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </footer>
  );
}