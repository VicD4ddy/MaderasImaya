import { cn, assetPath } from "@/lib/utils";
import React from "react";
import Image from "next/image";

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
    <div className={cn("w-full relative bg-[#CDE5D4] overflow-hidden", className)}>
      {/* Natural Caribbean Pine Forest Background (Mobile scroll, high organic depth) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={assetPath("/images/background/bosque-pino-caribe-fondo.jpg")}
          alt="Bosque de Pino Caribe en Venezuela"
          fill
          sizes="100vw"
          className="object-cover object-top opacity-50 mix-blend-multiply"
          priority
        />
        {/* Soft atmospheric wash ensuring optimal WCAG contrast for all headings and cards */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D2EAD9]/60 via-[#D2EAD9]/70 to-[#D2EAD9]/80" />
      </div>

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

