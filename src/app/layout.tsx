import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { generateSiteMetadata, getPersonJsonLd } from "@/lib/metadata";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { AmbientBackground } from "@/components/visual/ambient-background";
import { GrainOverlay } from "@/components/visual/grain-overlay";
import { Navigation } from "@/components/layout/navigation";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Footer } from "@/components/layout/footer";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="id" className={`${fontSans.variable} ${fontMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary min-h-screen antialiased selection:bg-accent-soft selection:text-accent overflow-x-hidden">
        <SmoothScrollProvider>
          <AmbientBackground />
          <GrainOverlay />
          <Navigation />
          <ScrollProgress />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
