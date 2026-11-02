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
          backgroundImage: `radial-gradient(circle at center, #7DEAA1 0%, transparent 70%)`,
          opacity: 0.7,
          mixBlendMode: "multiply" as const,
        }
      : {
          backgroundImage: `
            radial-gradient(circle at 50% 12%, rgba(20, 136, 68, 0.22) 0%, transparent 65%),
            radial-gradient(circle at 15% 45%, rgba(228, 248, 178, 0.35) 0%, transparent 60%),
            radial-gradient(circle at 85% 75%, rgba(20, 136, 68, 0.20) 0%, transparent 65%)
          `,
          opacity: 0.85,
        };

  return (
    <div className={cn("w-full relative bg-[#D2EAD9] overflow-hidden", className)}>
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

