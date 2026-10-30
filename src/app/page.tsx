"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { AboutBanner } from "@/components/sections/AboutBanner";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { BackgroundGlow } from "@/components/ui/background-components";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Solicitar Cotización");

  const handleOpenQuoteModal = (title?: string) => {
    setModalTitle(title || "Solicitar Cotización");
    setModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section with Integrated Transparent Top Navbar (Full-Bleed, Borderless) */}
      <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Soft Glow Ambient Background Component across all white sections */}
      <BackgroundGlow variant="combined">
        {/* Quality & Efficiency Bento Grid */}
        <QualitySection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Key Capabilities Industrial Gallery */}
        <CapabilitiesSection />

        {/* Human Capital & Plant Workers Tribute */}
        <TeamSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Performance & Impact Metrics Banner */}
        <MetricsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Industrial Plant Yaracuy Banner */}
        <AboutBanner onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Structured Footer */}
        <Footer onOpenQuoteModal={handleOpenQuoteModal} />
      </BackgroundGlow>

      {/* Quote & WhatsApp Direct Modal */}
      <QuoteModal
        isOpen={modalOpen}
        title={modalTitle}
        onClose={handleCloseQuoteModal}
      />
    </main>
  );
}
