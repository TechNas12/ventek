"use client";

import React from "react";
import {
  Globe,
  Zap,
  Bot,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  LayoutGrid,
} from "lucide-react";

interface FourPillarsSectionProps {
  onOpenAudit: (serviceName?: string) => void;
}

export default function FourPillarsSection({
  onOpenAudit,
}: FourPillarsSectionProps) {
  const quadrants = [
    {
      id: "websites",
      quadrant: "QUADRANT 01",
      axis: "FRONT-OFFICE • ACQUISITION",
      icon: Globe,
      number: "01",
      title: "Websites That Actually Sell",
      tagline: "Turn visitors into paying clients 24/7",
      description:
        "We build blazing-fast, mobile-friendly websites designed specifically to win trust and convert clicks into paying customers. No generic WordPress templates or confusing clutter.",
      benefits: [
        "Loads in under 0.8 seconds on any phone or desktop",
        "Clear, persuasive copywriting that answers 'Why buy from you?'",
        "Built-in consultation booking and lead qualification forms",
        "Full SEO optimization so local and global customers find you first",
      ],
      metricBadge: "Sub-0.8s Load Speed • 3.4x Conversion Lift",
      ctaText: "Build My Website",
    },
    {
      id: "agentic-ai",
      quadrant: "QUADRANT 02",
      axis: "FRONT-OFFICE • ENGAGEMENT",
      icon: Bot,
      number: "02",
      title: "Agentic Interfaces & AI Helpers",
      tagline: "A tireless 24/7 digital employee that never sleeps",
      description:
        "We build smart AI assistants trained specifically on your company's documents, pricing, and service catalog. They talk to customers, answer questions, and book qualified meetings on your calendar.",
      benefits: [
        "Responds to customer inquiries in 3 seconds at 2 AM or on Sunday",
        "Pre-qualifies buyers by asking for their budget and requirements",
        "Reads and summarizes customer contracts, receipts, and documents",
        "Directly syncs booked calls with Google Calendar or Outlook",
      ],
      metricBadge: "3s Response Time • Zero Lost Inquiries",
      ctaText: "Deploy An AI Agent",
    },
    {
      id: "automations",
      quadrant: "QUADRANT 03",
      axis: "BACK-OFFICE • WORKFLOWS",
      icon: Zap,
      number: "03",
      title: "Business Automations",
      tagline: "Never copy-paste between apps ever again",
      description:
        "We connect your email, WhatsApp, payment gateways, accounting, and calendar so routine business workflows execute themselves instantly without human intervention.",
      benefits: [
        "Automatic invoice generation and payment receipts",
        "Instant WhatsApp & email notifications when a new client pays",
        "Automated customer onboarding and file organization in the cloud",
        "Eliminates 15-30 hours of manual data entry every single week",
      ],
      metricBadge: "20+ Hours Reclaimed Weekly • 0 Human Errors",
      ctaText: "Automate My Tasks",
    },
    {
      id: "fullstack",
      quadrant: "QUADRANT 04",
      axis: "BACK-OFFICE • ARCHITECTURE",
      icon: Layers,
      number: "04",
      title: "Full-Stack Custom Development",
      tagline: "Software built exactly for your company's workflow",
      description:
        "Stop paying $1,500/month for 5 different rigid SaaS tools that don't talk to each other. We engineer custom client portals, staff dashboards, and internal operating systems built 100% around your business.",
      benefits: [
        "Private client portals where customers view progress and pay bills",
        "Custom staff task management and team tracking screens",
        "Bank-grade security with role-based access control",
        "You own 100% of the intellectual property and code forever",
      ],
      metricBadge: "100% Code Ownership • Zero Monthly SaaS Lock-In",
      ctaText: "Build Custom Software",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "6.5rem 0",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 3rem auto",
          }}
        >
          <div
            className="badge-pill orange-pill"
            style={{ marginBottom: "1rem" }}
          >
            <LayoutGrid size={15} color="var(--orange-400)" />
            <span>The Solutions</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              marginBottom: "1.2rem",
            }}
          >
            What We Build:{" "}
            <span className="text-gradient-fire">The 2×2 System Matrix</span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Our technology architecture is organized into four interconnected quadrants — from the front-office systems that acquire and engage your customers, to the back-office engines that automate and power your business.
          </p>
        </div>

        {/* Matrix Column Guide (Desktop Only Indicator) */}
        <div
          className="matrix-axis-guide"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.75rem",
            marginBottom: "1rem",
            padding: "0 0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "var(--orange-400)",
              textTransform: "uppercase",
              paddingBottom: "0.5rem",
              borderBottom: "1px dashed rgba(255, 85, 0, 0.3)",
            }}
          >

          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "var(--orange-400)",
              textTransform: "uppercase",
              paddingBottom: "0.5rem",
              borderBottom: "1px dashed rgba(255, 85, 0, 0.3)",
            }}
          >

          </div>
        </div>

        {/* ======================================================================== */}
        {/* 2X2 CAPABILITY MATRIX GRID                                               */}
        {/* ======================================================================== */}
        <div className="matrix-2x2-grid">
          {quadrants.map((q) => {
            const IconComp = q.icon;
            return (
              <div key={q.id} className="matrix-quadrant-card">
                {/* Subtle Quadrant Watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.5rem",
                    fontSize: "2.8rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    color: "rgba(255, 255, 255, 0.03)",
                    pointerEvents: "none",
                  }}
                >
                  {q.number}
                </div>

                <div>
                  {/* Quadrant Badge Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "var(--radius-pill)",
                        backgroundColor: "var(--orange-subtle)",
                        border: "1px solid var(--border-orange)",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "var(--orange-400)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      <span>{q.quadrant}</span>
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {q.axis}
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1.15rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        backgroundColor: "var(--orange-subtle)",
                        border: "1px solid var(--border-orange)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--orange-400)",
                        flexShrink: 0,
                        boxShadow: "0 0 15px rgba(255, 85, 0, 0.2)",
                      }}
                    >
                      <IconComp size={24} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "#ffffff",
                          lineHeight: 1.2,
                        }}
                      >
                        {q.title}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--orange-400)",
                          fontWeight: 600,
                          marginTop: "2px",
                        }}
                      >
                        {q.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Plain Language Description */}
                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {q.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.65rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {q.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          fontSize: "0.88rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--orange-400)"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Verified Impact Pill */}
                  <div
                    style={{
                      padding: "0.6rem 0.85rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "rgba(255, 85, 0, 0.08)",
                      borderLeft: "3px solid var(--orange-500)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#ffc299",
                      marginBottom: "1.25rem",
                    }}
                  >
                    ⚡ {q.metricBadge}
                  </div>

                  {/* Card CTA Trigger */}
                  <button
                    onClick={() => onOpenAudit(q.title)}
                    className="btn-secondary"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      padding: "0.85rem 1.25rem",
                      borderColor: "var(--border-glass-strong)",
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>{q.ctaText}</span>
                    <ArrowRight size={16} color="var(--orange-400)" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
