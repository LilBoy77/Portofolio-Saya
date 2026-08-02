"use client";

import dynamic from "next/dynamic";
import { FallbackOrb } from "./fallback-orb";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const DynamicSplineScene = dynamic(
  () => import("./spline-scene").then((mod) => mod.SplineScene),
  {
    ssr: false,
    loading: () => <FallbackOrb />,
  }
);

interface HeroSceneProps {
  splineSceneUrl?: string;
}

export function HeroScene({ splineSceneUrl }: HeroSceneProps) {
  const prefersReducedMotion = useReducedMotion();

  // If Spline URL is empty or user prefers reduced motion, render FallbackOrb directly
  if (!splineSceneUrl || prefersReducedMotion) {
    return <FallbackOrb />;
  }

  return <DynamicSplineScene sceneUrl={splineSceneUrl} />;
}
