"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import FourPillarsSection from "@/components/FourPillarsSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";

export default function Home() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [prefillContext, setPrefillContext] = useState<string>("");

  const handleOpenAudit = (context?: string) => {
    if (context) {
      setPrefillContext(context);
    } else {
      setPrefillContext("");
    }
    setAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setAuditModalOpen(false);
    setPrefillContext("");
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Sticky Navigation Bar */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section with Problem vs Solution Transformation Matrix */}
        <HeroSection onOpenAudit={(ctx) => handleOpenAudit(ctx)} />

        {/* 2. Plain-language Reality Check: Why Businesses Get Stuck */}
        <ProblemsSection onOpenAudit={() => handleOpenAudit()} />

        {/* 3. Four Core Offerings: Websites, Automations, Agentic Interfaces, Full-Stack */}
        <FourPillarsSection onOpenAudit={(service) => handleOpenAudit(service)} />

        {/* 4. Four Specific Project Types: Management, GenAI & Agentic, Web Dev, Data Pipelines */}
        <ProjectTypesSection onOpenAudit={(proj) => handleOpenAudit(proj)} />

        {/* 5. How We Take You From Chaos to Autopilot (Process) */}
        <ProcessSection onOpenAudit={() => handleOpenAudit()} />

        {/* 6. Frequently Asked Questions */}
        <FaqSection onOpenAudit={() => handleOpenAudit()} />

        {/* 7. Final High-Conversion Closer CTA */}
        <CtaBanner onOpenAudit={() => handleOpenAudit()} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Free Audit Lead Capture Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={handleCloseAudit}
        prefillContext={prefillContext}
      />
    </div>
  );
}
