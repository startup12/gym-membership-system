import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Navbar } from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chairman Fitness Centre | Premium Gym in Accra",
    template: "%s | Chairman Fitness Centre",
  },
  description:
    "Serious training for serious results. Ghana's premier fitness destination offering state-of-the-art equipment, expert coaching, and recovery services in Accra.",
  keywords: [
    "gym Accra",
    "fitness centre Ghana",
    "personal training Accra",
    "best gym Ghana",
    "group fitness classes",
    "physiotherapy Accra",
    "massage therapy",
  ],
  authors: [{ name: "Chairman Fitness Centre" }],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Chairman Fitness Centre",
    images: [
      {
        url: "/og-image.jpg", // TODO: Add a proper OG image
        width: 1200,
        height: 630,
        alt: "Chairman Fitness Centre",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${syne.variable}`}
    >
      <body className="bg-brand-dark text-white antialiased font-geist-sans min-h-screen flex flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}