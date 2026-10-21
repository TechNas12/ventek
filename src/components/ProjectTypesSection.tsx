"use client";

import React, { useState } from "react";
import {
  FolderKanban,
  Cpu,
  Layout,
  GitFork,
  Check,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
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
    <section id="projects" className="section-wrapper project-types-root">
      <div className="site-container">
        {/* Infosys Header Row: Category Eyebrow on Left, Pagination Controls on Right */}
        <div
          className="stories-top-header"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.25rem",
            marginBottom: "2rem",
            borderBottom: "1px solid var(--border-glass)",
            paddingBottom: "1.25rem",
          }}
        >
          <div>
            <div className="infosys-tag">
              <Sparkles size={15} />
              <span>TALES OF TRANSFORMATION • TOP STORIES</span>
            </div>
            <h2
              className="stories-main-title"
              style={{
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.18,
                textWrap: "balance",
              }}
            >
              How Enterprises Navigate Their Next{" "}
              <span className="text-gradient-sky">With VenTek</span>
            </h2>
          </div>

          {/* Infosys Signature Top Right Controls: "← 1 / 4 →" */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <span
              style={{
                fontSize: "0.88rem",
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
                  width: "36px",
                  height: "36px",
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
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next story"
                style={{
                  width: "36px",
                  height: "36px",
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
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="stories-category-tabs">
          {projectTypes.map((pt, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pt.id}
                onClick={() => setActiveTab(idx)}
                className={`category-tab-btn ${isActive ? "active" : ""}`}
                style={{
                  borderRadius: "9999px",
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
                  whiteSpace: "nowrap",
                }}
              >
                {pt.title}
              </button>
            );
          })}
        </div>

        {/* ======================================================================== */}
        {/* INFOSYS SIGNATURE HORIZONTAL SPLIT STORY CARD                           */}
        {/* ======================================================================== */}
        <div className="infosys-story-card" style={{ marginBottom: "1.75rem" }}>
          {/* Left Side: Generative 3D Visual Art / Tech Wave Stage */}
          <div
            className="story-left-media"
            style={{
              background: currentProject.gradient,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
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

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.3rem 0.85rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                <CurrentIcon size={15} />
                <span>{currentProject.accentTag}</span>
              </div>

              <h3
                className="story-company-name"
                style={{
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: "0.65rem",
                }}
              >
                {currentProject.caseStudy.company}
              </h3>

              <div
                className="story-subtitle-text"
                style={{
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
              className="story-badges-row"
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.65rem",
                marginTop: "1.75rem",
              }}
            >
              <div
                style={{
                  padding: "0.4rem 0.85rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.18)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                }}
              >
                Turnaround: {currentProject.turnaround}
              </div>
              <div
                style={{
                  padding: "0.4rem 0.85rem",
                  borderRadius: "9999px",
                  background: "rgba(16, 185, 129, 0.25)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  fontSize: "0.78rem",
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
            className="story-right-editorial"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <div>
              {/* Problem vs Solution Editorial Split */}
              <div style={{ marginBottom: "1.25rem" }}>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#ef4444",
                    marginBottom: "0.25rem",
                  }}
                >
                  The Friction
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {currentProject.caseStudy.problem}
                </p>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--infosys-blue)",
                    marginBottom: "0.25rem",
                  }}
                >
                  The VenTek Architecture
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  {currentProject.caseStudy.solution}
                </p>
              </div>

              {/* What We Deliver */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: "0.65rem",
                  }}
                >
                  Included Systems & Capabilities:
                </div>
                <div className="deliverables-grid">
                  {currentProject.deliverables.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.45rem",
                        fontSize: "0.825rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Check
                        size={14}
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
              className="story-action-row"
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.85rem",
              }}
            >
              <button
                onClick={() => onOpenAudit(currentProject.title)}
                className="btn-infosys-primary story-deploy-btn"
                style={{ padding: "0.7rem 1.6rem" }}
              >
                <span>Deploy This System</span>
                <ArrowUpRight size={15} />
              </button>

              <button
                onClick={() => onOpenAudit(currentProject.title)}
                className="link-know-more"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <span>Read Full Architecture Spec</span>
                <ArrowUpRight size={14} className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Secondary Story Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "1rem",
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
                        gap: "0.55rem",
                        marginBottom: "0.65rem",
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          backgroundColor: "var(--infosys-blue-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--infosys-blue)",
                        }}
                      >
                        <ItemIcon size={15} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
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
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.caseStudy.company}
                    </h4>

                    <p
                      style={{
                        fontSize: "0.8rem",
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
                      paddingTop: "0.65rem",
                      marginTop: "0.85rem",
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
                        fontSize: "0.72rem",
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

      <style jsx>{`
        .stories-main-title {
          font-size: clamp(1.9rem, 4vw, 3rem);
        }

        .stories-category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 2rem;
        }

        .category-tab-btn {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
        }

        .story-left-media {
          padding: 3.5rem 2.5rem;
          min-height: 380px;
        }

        .story-company-name {
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
        }

        .story-subtitle-text {
          font-size: 1.05rem;
        }

        .story-right-editorial {
          padding: 3rem 2.5rem;
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .stories-main-title {
            font-size: clamp(1.5rem, 5.5vw, 2.1rem) !important;
          }

          .stories-category-tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.4rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .stories-category-tabs::-webkit-scrollbar {
            display: none;
          }

          .category-tab-btn {
            padding: 0.4rem 0.95rem !important;
            font-size: 0.78rem !important;
            flex-shrink: 0;
          }

          .story-left-media {
            padding: 2rem 1.25rem !important;
            min-height: auto !important;
          }

          .story-company-name {
            font-size: 1.35rem !important;
          }

          .story-subtitle-text {
            font-size: 0.9rem !important;
          }

          .story-right-editorial {
            padding: 1.65rem 1.25rem !important;
          }

          .deliverables-grid {
            grid-template-columns: 1fr !important;
            gap: 0.4rem !important;
          }

          .story-action-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .story-deploy-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
