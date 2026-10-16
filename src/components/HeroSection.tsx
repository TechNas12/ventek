"use client";

import React, { useState } from "react";
import {
  Zap,
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Globe,
  Bot,
  Layers,
  Database,
  ChevronRight,
} from "lucide-react";

interface HeroSectionProps {
  onOpenAudit: (prefillProblem?: string) => void;
}

export default function HeroSection({ onOpenAudit }: HeroSectionProps) {
  const [activeInsight, setActiveInsight] = useState<number | null>(null);

  const problemSolutions = [
    {
      domain: "Website & Digital Presence",
      tagline: "Conversion Architecture",
      icon: Globe,
      problem: "Slow, outdated website that visitors leave in 5 seconds without contacting you.",
      solution: "Blazing-fast modern web experience engineered to convert visitors into paying clients.",
    },
    {
      domain: "Client Inquiries & Support",
      tagline: "24/7 Response Engine",
      icon: Bot,
      problem: "Waiting 12+ hours to reply to customer messages, losing them to faster competitors.",
      solution: "24/7 intelligent AI assistant that answers questions in 3 seconds and books meetings.",
    },
    {
      domain: "Daily Operations & Admin",
      tagline: "Autonomous Workflows",
      icon: Layers,
      problem: "Staff wasting 20+ hours a week on repetitive data entry, invoicing, and follow-ups.",
      solution: "Automatic background workflows that connect your apps and eliminate manual busywork.",
    },
    {
      domain: "Enterprise Data & Control",
      tagline: "Single Source of Truth",
      icon: Database,
      problem: "Client records, invoices, and job progress scattered across 8 messy spreadsheets.",
      solution: "One custom-built management dashboard where your entire company runs with 100% clarity.",
    },
  ];

  return (
    <section
      id="problem-solution"
      style={{
        position: "relative",
        paddingTop: "7.5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* Infosys Hero Cinematic Stage */}
      <div
        style={{
          position: "relative",
          margin: "0 1.25rem",
          borderRadius: "24px",
          background: "linear-gradient(180deg, #070c18 0%, #0d1527 50%, #101c36 100%)",
          color: "#ffffff",
          padding: "5rem 2rem 6.5rem 2rem",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(7, 12, 24, 0.4)",
        }}
      >
        {/* Abstract Fluid Blue Waves Background (Infosys Signature Aesthetic) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `
              radial-gradient(circle at 80% 20%, rgba(0, 124, 195, 0.35) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.2) 0%, transparent 60%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
              linear-gradient(225deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%)
            `,
            backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px",
            opacity: 0.85,
            pointerEvents: "none",
          }}
        />

        {/* Ambient Top Glow Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "15%",
            right: "15%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #007cc3, #38bdf8, transparent)",
          }}
        />

        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          {/* Top Manifesto Tag (Infosys Navigate Your Next Style) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.4rem 1.2rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(12px)",
                fontSize: "0.825rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#7dd3fc",
                textTransform: "uppercase",
              }}
            >
              <Sparkles size={15} color="#38bdf8" />
              <span>Navigate your next • The Autonomous Tech Engine</span>
            </div>
          </div>

          {/* Hero Headline & Manifesto */}
          <div
            style={{
              textAlign: "center",
              maxWidth: "980px",
              margin: "0 auto",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                marginBottom: "1.5rem",
                color: "#ffffff",
              }}
            >
              Build Systems{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 20%, #38bdf8 70%, #007cc3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That Work For You
              </span>
              . Adapt To The AI Era.
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: "#cbd5e1",
                maxWidth: "840px",
                margin: "0 auto 2.5rem auto",
                fontWeight: 400,
              }}
            >
              Still using worksheets with manual effort to manage operations of your business?{" "}
              <strong style={{ color: "#ffffff", fontWeight: 700 }}>VenTek</strong> builds custom
              websites, smart AI helpers, and management software that do the hard work for you — 24
              hours a day, 7 days a week.
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem",
                marginBottom: "3rem",
              }}
            >
              <button
                onClick={() => onOpenAudit()}
                className="btn-infosys-primary btn-lg"
                style={{
                  boxShadow: "0 6px 20px rgba(0, 124, 195, 0.45)",
                }}
              >
                <span>Contact Us</span>
                <ArrowUpRight size={18} />
              </button>

              <a
                href="#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.borderColor = "#38bdf8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
              >
                <span>Explore 2×2 Capability Matrix</span>
                <ArrowDown size={16} color="#38bdf8" />
              </a>
            </div>

            {/* Enterprise Trust Ribbon */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "2.2rem",
                color: "#94a3b8",
                fontSize: "0.88rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#38bdf8" />
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>Fast Agile Development</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#38bdf8" />
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>No Tech Experience Required</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#38bdf8" />
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>Industry Standard Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================== */}
        {/* SIGNATURE INFOSYS BOTTOM FLOATING INSIGHTS STRIP                          */}
        {/* ======================================================================== */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            marginTop: "4.5rem",
            maxWidth: "1260px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
              padding: "0 0.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Zap size={14} color="#38bdf8" />
              <span>THE VENTEK TRANSFORMATION MATRIX</span>
            </div>
            <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
              Explore Operational Shifts
            </div>
          </div>

          {/* 4 Floating Cards (Directly matching Infosys homepage bottom row) */}
          <div className="hero-insight-cards-grid">
            {problemSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="hero-insight-card"
                  onClick={() => onOpenAudit(item.domain)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <div
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "8px",
                          backgroundColor: "var(--infosys-blue-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--infosys-blue)",
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.tagline}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.35,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.domain}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.825rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.45,
                        marginBottom: "0.75rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.solution}
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span className="link-know-more">
                      <span>Know More</span>
                      <ArrowUpRight size={14} className="arrow-icon" />
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono, monospace)",
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Performance Metrics Ribbon */}
      <div className="site-container" style={{ marginTop: "2.5rem" }}>
        <div
          style={{
            padding: "1.5rem 2rem",
            borderRadius: "16px",
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            boxShadow: "var(--shadow-card)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--infosys-blue)",
                letterSpacing: "-0.03em",
              }}
            >
              20+ Hours
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              Saved Per Week on Busywork
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--infosys-blue)",
                letterSpacing: "-0.03em",
              }}
            >
              3.4x Faster
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              Inquiry Response Speed
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--infosys-blue)",
                letterSpacing: "-0.03em",
              }}
            >
              100% Owned
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              Zero Expensive SaaS Lock-In
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--infosys-blue)",
                letterSpacing: "-0.03em",
              }}
            >
              14-21 Days
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              Average Project Deployment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
