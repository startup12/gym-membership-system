import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Navbar } from "@/components/shared/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Chairman Fitness Centre  |  Build And Stay Fit",
    template: "%s | Chairman Fitness Centre",
  },
  description:
    "Train harder, live stronger. Ghana's premier fitness centre offering expert coaching, premium equipment, and a community that pushes you forward.",
  keywords: ["gym", "fitness", "Ghana", "Accra", "personal training", "group classes"],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Chairman Fitness Centre",
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
      <body className="bg-brand-dark text-white antialiased font-sans min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
           <Navbar />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}