import { assetPath, cn } from "@/lib/utils";
import React from "react";

interface BackgroundGlowProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "yellow" | "green" | "combined";
}

export const BackgroundGlow = ({
  children,
  className,
}: BackgroundGlowProps) => {
  return (
    <div
      className={cn("w-full relative bg-[#1E140C] overflow-hidden", className)}
      style={{
        backgroundImage: `url('${assetPath("/images/backgrounds/fondo-madera.jpg")}')`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
      }}
    >
      {/* Subtle Dark Scrim (bg-black/35) to preserve 100% Natural Wood Color and High Text Contrast */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-black/35"
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const Component = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative bg-white overflow-hidden">
      {/* Soft Yellow Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #FFF991 0%, transparent 70%)
          `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundGlow;

