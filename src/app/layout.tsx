import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata, getPersonJsonLd } from "@/lib/metadata";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/motion/preloader";
import { PageTransitionOverlay } from "@/components/motion/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = generateSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getPersonJsonLd();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${fontMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${interTight.variable} bg-background text-text-primary min-h-screen antialiased selection:bg-accent selection:text-white overflow-x-hidden`}>
        <Preloader />
        <PageTransitionOverlay />
        <SmoothScrollProvider>
          <Navigation />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
