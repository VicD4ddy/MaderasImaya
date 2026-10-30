import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundGlowProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "yellow" | "green" | "combined";
}

export const BackgroundGlow = ({
  children,
  className,
  variant = "combined",
}: BackgroundGlowProps) => {
  const backgroundStyle =
    variant === "yellow"
      ? {
          backgroundImage: `radial-gradient(circle at center, #FFF991 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "multiply" as const,
        }
      : variant === "green"
      ? {
          backgroundImage: `radial-gradient(circle at center, #8FFFB0 0%, transparent 70%)`,
          opacity: 0.65,
          mixBlendMode: "multiply" as const,
        }
      : {
          backgroundImage: `
            radial-gradient(circle at 50% 15%, rgba(143, 255, 176, 0.45) 0%, transparent 60%),
            radial-gradient(circle at 20% 50%, rgba(255, 249, 145, 0.35) 0%, transparent 55%),
            radial-gradient(circle at 80% 85%, rgba(143, 255, 176, 0.4) 0%, transparent 60%)
          `,
          opacity: 0.75,
          mixBlendMode: "multiply" as const,
        };

  return (
    <div className={cn("w-full relative bg-white overflow-hidden", className)}>
      {/* Soft Glow Ambient Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={backgroundStyle}
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

