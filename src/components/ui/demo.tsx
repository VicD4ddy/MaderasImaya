import React from "react";

export const Component = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative bg-white overflow-hidden">
      {/* Soft Green Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #8FFFB0, transparent)
          `,
          opacity: 0.65,
          mixBlendMode: "multiply",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Component;
