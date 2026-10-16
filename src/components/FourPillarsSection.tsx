"use client";

import React from "react";
import {
  Globe,
  Zap,
  Bot,
  Layers,
  CheckCircle2,
  ArrowUpRight,
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
      ctaText: "Contact Us",
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
      ctaText: "Contact Us",
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
      ctaText: "Contact Us",
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
      ctaText: "Contact Us",
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
            margin: "0 auto 3.5rem auto",
          }}
        >
          <div className="infosys-tag">
            <LayoutGrid size={16} />
            <span>ENTERPRISE CAPABILITIES • WHAT WE BUILD</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1.2rem",
              color: "var(--text-primary)",
            }}
          >
            What We Build:{" "}
            <span className="text-gradient-sky">A Complete Package</span>
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

        {/* 2X2 CAPABILITY MATRIX GRID (INFOSYS ENTERPRISE STYLE) */}
        <div className="matrix-2x2-grid">
          {quadrants.map((q) => {
            const IconComp = q.icon;
            return (
              <div
                key={q.id}
                className="matrix-quadrant-card"
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  padding: "2.5rem 2.2rem",
                }}
              >
                {/* Watermark Number */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.75rem",
                    fontSize: "3rem",
                    fontFamily: "var(--font-mono, monospace)",
                    fontWeight: 800,
                    color: "var(--text-dim)",
                    opacity: 0.25,
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
                      gap: "0.75rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        backgroundColor: "var(--infosys-blue-light)",
                        border: "1px solid var(--infosys-blue-border)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--infosys-blue)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {q.quadrant}
                    </span>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {q.axis}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        backgroundColor: "var(--infosys-blue-light)",
                        border: "1px solid var(--infosys-blue-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--infosys-blue)",
                        flexShrink: 0,
                      }}
                    >
                      <IconComp size={24} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          lineHeight: 1.25,
                        }}
                      >
                        {q.title}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "var(--infosys-blue)",
                          marginTop: "0.2rem",
                        }}
                      >
                        {q.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginTop: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {q.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.65rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {q.benefits.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.45,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--infosys-blue)"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action & Metric */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "1.25rem",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.35rem 0.85rem",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-surface-2)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--infosys-blue)",
                    }}
                  >
                    {q.metricBadge}
                  </div>

                  <button
                    onClick={() => onOpenAudit(q.title)}
                    className="btn-infosys-primary btn-sm"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span>{q.ctaText}</span>
                    <ArrowUpRight size={15} />
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
