"use client";

import React, { useState } from "react";
import {
  FolderKanban,
  Cpu,
  Layout,
  GitFork,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

interface ProjectTypesSectionProps {
  onOpenAudit: (projectType?: string) => void;
}

export default function ProjectTypesSection({
  onOpenAudit,
}: ProjectTypesSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const projectTypes = [
    {
      id: "management",
      index: "01",
      title: "Management Systems",
      icon: FolderKanban,
      subtitle: "Custom portals, operations hubs & client dashboards",
      summary:
        "Replace messy Excel sheets and disconnected software with a single custom-built management system tailored to how your business actually runs.",
      caseStudy: {
        company: "Commercial Logistics & Contracting Co.",
        problem:
          "Lost 12 hours every week managing driver schedules, client job orders, and paper delivery invoices across 6 messy spreadsheets.",
        solution:
          "We engineered a custom Web Management Portal with real-time job status, client sign-off, and automated QuickBooks billing.",
        result: "Saved 48 hours/month and cut billing errors to zero.",
      },
      deliverables: [
        "Custom staff and manager permission roles",
        "Client self-service portal to track status and download invoices",
        "Automated alerts for pending tasks and overdue payments",
        "One-click executive business health dashboard",
      ],
      turnaround: "18 to 24 Days",
      gradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0f172a 100%)",
      accentTag: "Enterprise Portal Architecture",
    },
    {
      id: "agentic",
      index: "02",
      title: "GenAI & Agentic Systems",
      icon: Cpu,
      subtitle: "Autonomous AI workers trained specifically on your company data",
      summary:
        "Smart AI agents that don't just chat — they take actions: scheduling appointments, checking stock, answering client questions, and drafting contracts.",
      caseStudy: {
        company: "Specialized Legal & Advisory Firm",
        problem:
          "Lawyers spent 3 hours per client reviewing standard intake contracts and answering the same 20 preliminary compliance questions.",
        solution:
          "We built a secure internal AI agent that reads incoming contracts, extracts key risk clauses, and prepares preliminary briefs in 5 seconds.",
        result: "Client intake time reduced by 72% with zero factual errors.",
      },
      deliverables: [
        "Secure AI trained strictly on your internal documents & policies",
        "Multi-channel support (Website Chat, WhatsApp, Email, Slack)",
        "Automated calendar booking and lead qualification logic",
        "Human-in-the-loop controls for sensitive customer actions",
      ],
      turnaround: "14 to 20 Days",
      gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 50%, #0a0f1d 100%)",
      accentTag: "Autonomous Generative Intelligence",
    },
    {
      id: "web-dev",
      index: "03",
      title: "Web Development",
      icon: Layout,
      subtitle: "High-performance web applications and conversion-focused flagships",
      summary:
        "Modern websites built on Next.js that load in under 1 second, look phenomenal on any smartphone, and guide your visitors directly into becoming paying clients.",
      caseStudy: {
        company: "Enterprise Architectural Hardware Studio",
        problem:
          "Outdated WordPress site was taking 4.2 seconds to load on mobile and generated fewer than 3 inquiries per month.",
        solution:
          "Re-architected from scratch with Next.js, featuring an interactive project cost estimator and direct WhatsApp consultation booking.",
        result: "Inbound quote requests jumped from 3/month to 28/month in 60 days.",
      },
      deliverables: [
        "Sub-second load times on 4G/5G mobile connections",
        "Interactive cost calculators and instant booking widgets",
        "Complete Google search (SEO) optimization & structured schema",
        "Easy-to-use admin panel for posting news, case studies, and photos",
      ],
      turnaround: "10 to 14 Days",
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #07101e 100%)",
      accentTag: "Sub-Second Next.js Performance",
    },
    {
      id: "data-pipelines",
      index: "04",
      title: "Data Pipelines",
      icon: GitFork,
      subtitle: "Automated real-time data bridges between your apps & dashboards",
      summary:
        "Stop manually downloading CSVs and copy-pasting numbers. We connect your marketing, sales, inventory, and accounting into one real-time live reporting pipeline.",
      caseStudy: {
        company: "Multi-Store Retail & E-Commerce Brand",
        problem:
          "Owner spent every Sunday afternoon manually merging sales from Shopify, physical POS, Meta Ads, and bank feeds to see if they were profitable.",
        solution:
          "Engineered an automated data pipeline that aggregates revenue, advertising spend, and inventory levels every 15 minutes into a clean dashboard.",
        result: "Freed up the owner's entire weekend and caught ad budget leaks immediately.",
      },
      deliverables: [
        "Automated syncing between your CRM, ads, billing, and accounting",
        "Live executive KPI dashboards accessible on your mobile phone",
        "Instant anomaly alerts (e.g. sudden drop in sales or spike in ad costs)",
        "Zero manual CSV exports or copy-pasting forever",
      ],
      turnaround: "12 to 16 Days",
      gradient: "linear-gradient(135deg, #38bdf8 0%, #0369a1 50%, #0b1329 100%)",
      accentTag: "Real-Time Telemetry & Bridges",
    },
  ];

  const currentProject = projectTypes[activeTab];
  const CurrentIcon = currentProject.icon;

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? projectTypes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === projectTypes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      style={{
        padding: "6.5rem 0",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Infosys Header Row: Category Eyebrow on Left, Pagination Controls on Right */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "2.5rem",
            borderBottom: "1px solid var(--border-glass)",
            paddingBottom: "1.5rem",
          }}
        >
          <div>
            <div className="infosys-tag">
              <Sparkles size={16} />
              <span>TALES OF TRANSFORMATION • TOP STORIES</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.18,
              }}
            >
              How Enterprises Navigate Their Next{" "}
              <span className="text-gradient-sky">With VenTek</span>
            </h2>
          </div>

          {/* Infosys Signature Top Right Controls: "← 1 / 4 →" */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-mono, monospace)",
              }}
            >
              {activeTab + 1} / {projectTypes.length}
            </span>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <button
                onClick={handlePrev}
                aria-label="Previous story"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-glass-strong)",
                  backgroundColor: "var(--bg-surface-1)",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--infosys-blue)";
                  e.currentTarget.style.color = "var(--infosys-blue)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-glass-strong)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next story"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-glass-strong)",
                  backgroundColor: "var(--bg-surface-1)",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--infosys-blue)";
                  e.currentTarget.style.color = "var(--infosys-blue)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-glass-strong)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "2.5rem",
          }}
        >
          {projectTypes.map((pt, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pt.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: "0.55rem 1.35rem",
                  borderRadius: "9999px",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: isActive
                    ? "var(--infosys-blue)"
                    : "var(--bg-surface-1)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: isActive
                    ? "1px solid var(--infosys-blue)"
                    : "1px solid var(--border-glass)",
                  boxShadow: isActive
                    ? "0 4px 14px rgba(0, 124, 195, 0.3)"
                    : "none",
                }}
              >
                {pt.title}
              </button>
            );
          })}
        </div>

        {/* ======================================================================== */}
        {/* INFOSYS SIGNATURE HORIZONTAL SPLIT STORY CARD (Macy's Comp Style)       */}
        {/* ======================================================================== */}
        <div className="infosys-story-card" style={{ marginBottom: "2rem" }}>
          {/* Left Side: Generative 3D Visual Art / Tech Wave Stage */}
          <div
            style={{
              background: currentProject.gradient,
              padding: "3.5rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              minHeight: "380px",
              color: "#ffffff",
            }}
          >
            {/* Visual Fluid Waves Artwork */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: `
                  radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                  radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.35) 0%, transparent 60%)
                `,
                pointerEvents: "none",
              }}
            />

            {/* Abstract Decorative Lines */}
            <svg
              viewBox="0 0 400 300"
              style={{
                position: "absolute",
                right: "-40px",
                bottom: "-40px",
                width: "360px",
                height: "280px",
                opacity: 0.22,
                pointerEvents: "none",
              }}
            >
              <path
                d="M10 280 C 120 180, 240 320, 380 120 C 440 40, 320 0, 240 80"
                fill="none"
                stroke="#ffffff"
                strokeWidth="12"
              />
              <path
                d="M50 290 C 160 190, 260 280, 390 150"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="6"
              />
            </svg>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.95rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                <CurrentIcon size={16} />
                <span>{currentProject.accentTag}</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.18,
                  marginBottom: "0.75rem",
                }}
              >
                {currentProject.caseStudy.company}
              </h3>

              <div
                style={{
                  fontSize: "1.05rem",
                  color: "#e2e8f0",
                  lineHeight: 1.5,
                  maxWidth: "480px",
                }}
              >
                {currentProject.subtitle}
              </div>
            </div>

            {/* Bottom Metrics Pills inside Left Media Panel */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.18)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  fontSize: "0.825rem",
                  fontWeight: 700,
                }}
              >
                Turnaround: {currentProject.turnaround}
              </div>
              <div
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(16, 185, 129, 0.25)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  fontSize: "0.825rem",
                  fontWeight: 700,
                  color: "#6ee7b7",
                }}
              >
                {currentProject.caseStudy.result}
              </div>
            </div>
          </div>

          {/* Right Side: Case Study Breakdown & Deliverables */}
          <div
            style={{
              padding: "3rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <div>
              {/* Problem vs Solution Editorial Split */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#ef4444",
                    marginBottom: "0.3rem",
                  }}
                >
                  The Friction
                </div>
                <p
                  style={{
                    fontSize: "0.925rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {currentProject.caseStudy.problem}
                </p>
              </div>

              <div style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--infosys-blue)",
                    marginBottom: "0.3rem",
                  }}
                >
                  The VenTek Architecture
                </div>
                <p
                  style={{
                    fontSize: "0.925rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  {currentProject.caseStudy.solution}
                </p>
              </div>

              {/* What We Deliver */}
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Included Systems & Capabilities:
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.5rem",
                  }}
                >
                  {currentProject.deliverables.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Check
                        size={15}
                        color="var(--infosys-blue)"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "1.5rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <button
                onClick={() => onOpenAudit(currentProject.title)}
                className="btn-infosys-primary"
                style={{ padding: "0.75rem 1.8rem" }}
              >
                <span>Deploy This System</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={() => onOpenAudit(currentProject.title)}
                className="link-know-more"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <span>Read Full Architecture Spec</span>
                <ArrowUpRight size={15} className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Secondary Story Cards (Directly matching Infosys layout) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projectTypes
            .filter((_, idx) => idx !== activeTab)
            .map((item) => {
              const ItemIcon = item.icon;
              const targetIdx = projectTypes.findIndex((p) => p.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(targetIdx)}
                  className="card-glass"
                  style={{
                    cursor: "pointer",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
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
                        <ItemIcon size={16} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.caseStudy.company}
                    </h4>

                    <p
                      style={{
                        fontSize: "0.825rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.45,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "0.75rem",
                      marginTop: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span className="link-know-more">
                      <span>Explore Story</span>
                      <ArrowUpRight size={13} className="arrow-icon" />
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono, monospace)",
                      }}
                    >
                      {item.index}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
