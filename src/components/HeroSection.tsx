"use client";

import React from "react";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Globe,
  Bot,
  Layers,
  Database,
  ArrowDown,
} from "lucide-react";

interface HeroSectionProps {
  onOpenAudit: (prefillProblem?: string) => void;
}

export default function HeroSection({ onOpenAudit }: HeroSectionProps) {
  const problemSolutions = [
    {
      domain: "Website & Growth",
      icon: Globe,
      problem: "Slow, outdated website that visitors leave in 5 seconds without contacting you.",
      solution: "Blazing-fast modern web experience engineered to convert visitors into paying clients.",
    },
    {
      domain: "Inquiries & Support",
      icon: Bot,
      problem: "Waiting 12+ hours to reply to customer messages, losing them to faster competitors.",
      solution: "24/7 intelligent AI assistant that answers questions in 3 seconds and books meetings.",
    },
    {
      domain: "Daily Operations",
      icon: Layers,
      problem: "Staff wasting 20+ hours a week on repetitive data entry, invoicing, and follow-ups.",
      solution: "Automatic background workflows that connect your apps and eliminate manual busywork.",
    },
    {
      domain: "Business Tracking",
      icon: Database,
      problem: "Client records, invoices, and job progress scattered across 8 messy spreadsheets.",
      solution: "One custom-built management dashboard where your entire company runs with 100% clarity.",
    },
  ];

  return (
    <section
      id="problem-solution"
      style={{
        paddingTop: "7.5rem",
        paddingBottom: "5.5rem",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Top Announcement Pill */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <div
            className="badge-pill orange-pill"
            style={{
              padding: "0.45rem 1.15rem",
              fontSize: "0.85rem",
            }}
          >
            <Sparkles size={16} color="var(--orange-400)" />
            <span>Dont Ignore The AI Era</span>
          </div>
        </div>

        {/* Big Bold Headline */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "960px",
            margin: "0 auto 1.5rem auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              marginBottom: "1.25rem",
            }}
          >
            Build Systems{" "}
            <span className="text-gradient-fire">
              That Work For You
            </span>{" "}
            . Adapt To The AI Era.
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Still using worksheets with manual effort to manage operations of your bussiness.
            <strong style={{ color: "#ffffff", fontWeight: 600 }}> VenTek</strong> builds custom websites, smart AI helpers, and management software that do the hard work for you — 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2.2rem",
            marginBottom: "2.5rem",
          }}
        >
          <button
            onClick={() => onOpenAudit()}
            className="btn-primary btn-lg"
            style={{
              fontSize: "1.05rem",
              padding: "1rem 2.2rem",
            }}
          >
            <span>Claim Your Free 30-Min Tech Audit</span>
            <ArrowRight size={20} />
          </button>

          <a
            href="#transformation-showcase"
            className="btn-secondary btn-lg"
            style={{
              fontSize: "1rem",
              padding: "1rem 1.8rem",
            }}
          >
            <span>See What We Solve Below</span>
            <ArrowDown size={16} color="var(--orange-400)" />
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.8rem",
            color: "var(--text-muted)",
            fontSize: "0.875rem",
            marginBottom: "4.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <CheckCircle2 size={16} color="var(--orange-400)" />
            <span style={{ color: "var(--text-secondary)" }}>Fast Development</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <CheckCircle2 size={16} color="var(--orange-400)" />
            <span style={{ color: "var(--text-secondary)" }}>No Tech Experience Required</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <CheckCircle2 size={16} color="var(--orange-400)" />
            <span style={{ color: "var(--text-secondary)" }}>Industry Standard Development</span>
          </div>
        </div>

        {/* ======================================================================== */}
        {/* HERO PROBLEMS VS SOLUTIONS TRANSFORMATION SHOWCASE                       */}
        {/* ======================================================================== */}
        <div
          id="transformation-showcase"
          style={{
            background: "linear-gradient(180deg, var(--bg-surface-1) 0%, var(--bg-surface-2) 100%)",
            border: "1px solid var(--border-orange)",
            borderRadius: "var(--radius-xl)",
            padding: "2.75rem 2rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 85, 0, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "280px",
              height: "280px",
              background: "radial-gradient(circle, rgba(255, 85, 0, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Showcase Header */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.2rem",
              marginBottom: "2.25rem",
              borderBottom: "1px solid var(--border-glass)",
              paddingBottom: "1.5rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--orange-400)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.3rem",
                }}
              >
                <Zap size={18} />
                <span>The VenTek Transformation</span>
              </div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                How We Turn Daily Bottlenecks Into Autonomous Systems
              </h2>
            </div>

            <button
              onClick={() => onOpenAudit()}
              className="btn-primary btn-sm"
              style={{ padding: "0.65rem 1.3rem" }}
            >
              <span>Solve These In My Business</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* 4 Direct Problem vs Solution Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {problemSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid var(--border-glass-strong)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div>
                    {/* Header with Icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "var(--orange-subtle)",
                          border: "1px solid var(--border-orange)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--orange-400)",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#ffffff",
                        }}
                      >
                        {item.domain}
                      </span>
                    </div>

                    {/* The Problem */}
                    <div
                      style={{
                        backgroundColor: "rgba(239, 68, 68, 0.08)",
                        border: "1px solid rgba(239, 68, 68, 0.25)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.85rem 1rem",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#f87171",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: "0.3rem",
                        }}
                      >
                        <AlertTriangle size={13} />
                        <span>The Problem:</span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#fca5a5",
                          lineHeight: 1.45,
                          margin: 0,
                        }}
                      >
                        {item.problem}
                      </p>
                    </div>

                    {/* The VenTek Solution */}
                    <div
                      style={{
                        backgroundColor: "rgba(255, 85, 0, 0.09)",
                        border: "1px solid rgba(255, 85, 0, 0.35)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.85rem 1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--orange-400)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: "0.3rem",
                        }}
                      >
                        <Sparkles size={13} />
                        <span>VenTek Solution:</span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#ffcbb3",
                          lineHeight: 1.45,
                          margin: 0,
                        }}
                      >
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Results Bar */}
          <div
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "rgba(255, 85, 0, 0.08)",
              border: "1px solid rgba(255, 85, 0, 0.25)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "1.5rem",
              textAlign: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--orange-400)" }}>
                20+ Hours
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                Saved Per Week on Busywork
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--orange-400)" }}>
                3.4x Faster
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                Inquiry Response Speed
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--orange-400)" }}>
                100% Owned
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                Zero Expensive SaaS Lock-In
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--orange-400)" }}>
                14-21 Days
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                Average Project Deployment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
