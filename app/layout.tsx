import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("aria-teams-theme")==="light"?"light":"dark"}catch{document.documentElement.dataset.theme="dark"}`;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://broosaction.github.io/aria-workplace-teams";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aria Workplace teams",
    template: "%s · Aria Workplace",
  },
  description:
    "Discover portable AI teams for sales, marketing, research, operations, coding, and everyday work.",
  openGraph: {
    title: "Aria Workplace teams",
    description: "Pick a team, connect your apps, and turn it on.",
    type: "website",
    siteName: "Aria Workplace",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aria Workplace teams" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria Workplace teams",
    description: "Pick a team, connect your apps, and turn it on.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable} data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
