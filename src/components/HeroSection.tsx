"use client";

import React, { useState } from "react";
import {
  Zap,
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  Globe,
  Bot,
  Layers,
  Database,
} from "lucide-react";

interface HeroSectionProps {
  onOpenAudit: (prefillProblem?: string) => void;
}

export default function HeroSection({ onOpenAudit }: HeroSectionProps) {
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
      className="hero-section-root"
      style={{
        position: "relative",
        paddingTop: "6.5rem",
        paddingBottom: "4.5rem",
        overflow: "hidden",
      }}
    >
      {/* Infosys Hero Cinematic Stage */}
      <div
        className="hero-stage-container"
        style={{
          position: "relative",
          borderRadius: "24px",
          background: "linear-gradient(180deg, #070c18 0%, #0d1527 50%, #101c36 100%)",
          color: "#ffffff",
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
              marginBottom: "1.5rem",
            }}
          >
            <div
              className="hero-manifesto-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(12px)",
                fontWeight: 700,
                color: "#7dd3fc",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              <Sparkles size={14} color="#38bdf8" />
              <span>Navigate your next • The Autonomous Tech Engine</span>
            </div>
          </div>

          {/* Hero Headline & Manifesto */}
          <div
            style={{
              textAlign: "center",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            <h1
              className="hero-main-title"
              style={{
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
                color: "#ffffff",
                textWrap: "balance",
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
              className="hero-subtext"
              style={{
                color: "#cbd5e1",
                maxWidth: "800px",
                margin: "0 auto 2rem auto",
                fontWeight: 400,
                textWrap: "pretty",
              }}
            >
              Still using worksheets with manual effort to manage operations of your business?{" "}
              <strong style={{ color: "#ffffff", fontWeight: 700 }}>VenTek</strong> builds custom
              websites, smart AI helpers, and management software that do the hard work for you — 24
              hours a day, 7 days a week.
            </p>

            {/* Primary Action Buttons */}
            <div
              className="hero-actions-group"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <button
                onClick={() => onOpenAudit()}
                className="btn-infosys-primary btn-lg hero-action-btn"
                style={{
                  boxShadow: "0 6px 20px rgba(0, 124, 195, 0.45)",
                }}
              >
                <span>Contact Us</span>
                <ArrowUpRight size={18} />
              </button>

              <a
                href="#services"
                className="hero-action-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.85rem 1.75rem",
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
                <span>Explore Capability Matrix</span>
                <ArrowDown size={15} color="#38bdf8" />
              </a>
            </div>

            {/* Enterprise Trust Ribbon */}
            <div
              className="hero-trust-ribbon"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
                color: "#94a3b8",
                fontSize: "0.85rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={15} color="#38bdf8" />
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>Fast Agile Development</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={15} color="#38bdf8" />
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>No Tech Experience Required</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={15} color="#38bdf8" />
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>Industry Standard Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================== */}
        {/* SIGNATURE INFOSYS BOTTOM FLOATING INSIGHTS STRIP                          */}
        {/* ======================================================================== */}
        <div
          className="hero-insights-outer"
          style={{
            position: "relative",
            zIndex: 3,
            marginTop: "3.5rem",
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
              marginBottom: "0.85rem",
              padding: "0 0.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
              }}
            >
              <Zap size={13} color="#38bdf8" />
              <span>THE VENTEK TRANSFORMATION MATRIX</span>
            </div>
            <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
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
                        marginBottom: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          backgroundColor: "var(--infosys-blue-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--infosys-blue)",
                        }}
                      >
                        <Icon size={17} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.tagline}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.domain}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.825rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.45,
                        marginBottom: "0.65rem",
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
                      paddingTop: "0.65rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span className="link-know-more">
                      <span>Know More</span>
                      <ArrowUpRight size={13} className="arrow-icon" />
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
      <div className="site-container" style={{ marginTop: "2rem" }}>
        <div className="hero-metrics-grid">
          <div>
            <div className="hero-metric-val">20+ Hours</div>
            <div className="hero-metric-lbl">Saved Per Week on Busywork</div>
          </div>
          <div>
            <div className="hero-metric-val">3.4x Faster</div>
            <div className="hero-metric-lbl">Inquiry Response Speed</div>
          </div>
          <div>
            <div className="hero-metric-val">100% Owned</div>
            <div className="hero-metric-lbl">Zero Expensive SaaS Lock-In</div>
          </div>
          <div>
            <div className="hero-metric-val">14-21 Days</div>
            <div className="hero-metric-lbl">Average Project Deployment</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-stage-container {
          margin: 0 1.25rem;
          padding: 4.5rem 2rem 5.5rem 2rem;
        }

        .hero-main-title {
          font-size: clamp(2.3rem, 5vw, 4.2rem);
        }

        .hero-subtext {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          lineHeight: 1.6;
        }

        .hero-manifesto-badge {
          padding: 0.4rem 1.2rem;
          font-size: 0.825rem;
          letter-spacing: 0.08em;
        }

        .hero-metrics-grid {
          padding: 1.5rem 2rem;
          border-radius: 16px;
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          box-shadow: var(--shadow-card);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          text-align: center;
        }

        .hero-metric-val {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--infosys-blue);
          letter-spacing: -0.03em;
        }

        .hero-metric-lbl {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-section-root {
            padding-top: 5rem !important;
            padding-bottom: 2.5rem !important;
          }

          .hero-stage-container {
            margin: 0 0.5rem !important;
            padding: 2.75rem 1rem 3.5rem 1rem !important;
            border-radius: 18px !important;
          }

          .hero-main-title {
            font-size: clamp(1.65rem, 6.5vw, 2.4rem) !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }

          .hero-subtext {
            font-size: 0.925rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.75rem !important;
          }

          .hero-manifesto-badge {
            padding: 0.35rem 0.8rem !important;
            font-size: 0.68rem !important;
            letter-spacing: 0.04em !important;
          }

          .hero-actions-group {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }

          .hero-action-btn {
            width: 100% !important;
          }

          .hero-trust-ribbon {
            gap: 0.5rem 1rem !important;
            font-size: 0.78rem !important;
          }

          .hero-insights-outer {
            margin-top: 2.5rem !important;
          }

          .hero-metrics-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1rem !important;
            padding: 1.25rem 0.85rem !important;
          }

          .hero-metric-val {
            font-size: 1.35rem !important;
          }

          .hero-metric-lbl {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
