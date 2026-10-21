"use client";

import React from "react";
import {
  Globe,
  Zap,
  Bot,
  Layers,
  CheckCircle2,
  ArrowUpRight,
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
    <section id="services" className="section-wrapper four-pillars-root">
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 3rem auto",
          }}
        >
          <div className="infosys-tag">
            <LayoutGrid size={15} />
            <span>ENTERPRISE CAPABILITIES • WHAT WE BUILD</span>
          </div>

          <h2
            className="pillars-main-title"
            style={{
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: "1rem",
              color: "var(--text-primary)",
              textWrap: "balance",
            }}
          >
            What We Build:{" "}
            <span className="text-gradient-sky">A Complete Package</span>
          </h2>

          <p
            className="pillars-subtext"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              textWrap: "pretty",
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
              <div key={q.id} className="matrix-quadrant-card">
                {/* Watermark Number */}
                <div
                  className="quadrant-watermark-num"
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.5rem",
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
                      gap: "0.6rem",
                      marginBottom: "1.15rem",
                    }}
                  >
                    <span
                      style={{
                        padding: "0.25rem 0.7rem",
                        borderRadius: "9999px",
                        backgroundColor: "var(--infosys-blue-light)",
                        border: "1px solid var(--infosys-blue-border)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--infosys-blue)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {q.quadrant}
                    </span>

                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
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
                      gap: "0.85rem",
                      marginBottom: "0.65rem",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        backgroundColor: "var(--infosys-blue-light)",
                        border: "1px solid var(--infosys-blue-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--infosys-blue)",
                        flexShrink: 0,
                      }}
                    >
                      <IconComp size={22} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          lineHeight: 1.25,
                        }}
                      >
                        {q.title}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.825rem",
                          fontWeight: 600,
                          color: "var(--infosys-blue)",
                          marginTop: "0.15rem",
                        }}
                      >
                        {q.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginTop: "0.85rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {q.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.55rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {q.benefits.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          fontSize: "0.84rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.45,
                        }}
                      >
                        <CheckCircle2
                          size={15}
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
                  className="quadrant-footer-row"
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "1.15rem",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-surface-2)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--infosys-blue)",
                    }}
                  >
                    {q.metricBadge}
                  </div>

                  <button
                    onClick={() => onOpenAudit(q.title)}
                    className="btn-infosys-primary btn-sm quadrant-action-btn"
                  >
                    <span>{q.ctaText}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .pillars-main-title {
          font-size: clamp(1.9rem, 4vw, 3rem);
        }

        .pillars-subtext {
          font-size: 1.05rem;
        }

        .quadrant-watermark-num {
          font-size: 3rem;
        }

        @media (max-width: 768px) {
          .pillars-main-title {
            font-size: clamp(1.55rem, 5.5vw, 2.1rem) !important;
          }

          .pillars-subtext {
            font-size: 0.925rem !important;
          }

          .quadrant-watermark-num {
            font-size: 2.2rem !important;
          }

          .quadrant-footer-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .quadrant-action-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
