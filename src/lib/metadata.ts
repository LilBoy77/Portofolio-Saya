import { Metadata } from "next";
import { portfolio } from "@/data/portfolio";

export function generateSiteMetadata(customTitle?: string, customDescription?: string): Metadata {
  const title = customTitle
    ? `${customTitle} | ${portfolio.identity.name}`
    : `${portfolio.identity.name} — ${portfolio.identity.role}`;
  const description = customDescription || portfolio.identity.intro;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ulilarsyad.dev"),
    title,
    description,
    keywords: [
      portfolio.identity.name,
      portfolio.identity.role,
      "Creative Developer",
      "Frontend Engineer",
      "Next.js Portfolio",
      "GSAP ScrollTrigger",
      "TypeScript",
      "Indonesia Developer",
    ],
    authors: [{ name: portfolio.identity.name }],
    creator: portfolio.identity.name,
    openGraph: {
      title,
      description,
      url: "https://ulilarsyad.dev",
      siteName: `${portfolio.identity.name} Portfolio`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: portfolio.identity.name,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
      creator: "@ulilarsyad",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.identity.name,
    jobTitle: portfolio.identity.role,
    url: "https://ulilarsyad.dev",
    email: portfolio.identity.email,
    sameAs: [
      portfolio.socials.github,
      portfolio.socials.linkedin,
      portfolio.socials.instagram,
    ].filter(Boolean),
    knowsAbout: portfolio.skills,
  };
}
