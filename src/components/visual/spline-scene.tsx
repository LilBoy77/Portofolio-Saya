"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { FallbackOrb } from "./fallback-orb";

interface SplineSceneProps {
  sceneUrl: string;
}

export function SplineScene({ sceneUrl }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError || !sceneUrl) {
    return <FallbackOrb />;
  }

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <FallbackOrb />
        </div>
      )}
      <Spline
        scene={sceneUrl}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className="w-full h-full pointer-events-auto"
      />
    </div>
  );
}
