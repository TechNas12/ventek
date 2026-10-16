"use client";

import React, { useState } from "react";
import {
  FolderKanban,
  Cpu,
  Layout,
  GitFork,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
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
      title: "1. Management Systems",
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
    },
    {
      id: "agentic",
      title: "2. GenAI & Agentic Systems",
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
    },
    {
      id: "web-dev",
      title: "3. Web Development",
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
    },
    {
      id: "data-pipelines",
      title: "4. Data Pipelines",
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
    },
  ];

  const currentProject = projectTypes[activeTab];
  const CurrentIcon = currentProject.icon;

  return (
    <section
      id="projects"
      style={{
        padding: "6.5rem 0",
        position: "relative",
        backgroundColor: "var(--bg-black)",
        borderTop: "1px solid var(--border-glass)",
        borderBottom: "1px solid var(--border-glass)",
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 3.5rem auto",
          }}
        >
          <div
            className="badge-pill orange-pill"
            style={{ marginBottom: "1rem" }}
          >
            <Sparkles size={15} color="var(--orange-400)" />
            <span>OUR 4 PROJECT SPECIALTIES</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              marginBottom: "1.2rem",
            }}
          >
            Types of Systems We Engineer For{" "}
            <span className="text-gradient-fire">Growing Companies</span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Every business is unique. We don&apos;t force one-size-fits-all software onto you.
            Here are the four primary types of systems we build to solve real operational bottlenecks.
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.85rem",
            marginBottom: "2.5rem",
          }}
        >
          {projectTypes.map((proj, idx) => {
            const Icon = proj.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: isSelected
                    ? "var(--bg-surface-3)"
                    : "rgba(255, 255, 255, 0.02)",
                  border: isSelected
                    ? "1px solid var(--orange-500)"
                    : "1px solid var(--border-glass)",
                  color: isSelected ? "#ffffff" : "var(--text-secondary)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  boxShadow: isSelected
                    ? "0 0 20px rgba(255, 85, 0, 0.2)"
                    : "none",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: isSelected
                      ? "var(--orange-500)"
                      : "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isSelected ? "#000000" : "var(--text-muted)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={19} />
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                  {proj.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Deep Dive Card */}
        <div
          className="card-glass"
          style={{
            padding: "3rem 2.5rem",
            backgroundColor: "var(--bg-surface-1)",
            border: "1px solid var(--border-orange)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 20px 45px rgba(0, 0, 0, 0.7)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* Left Column: Overview & Deliverables */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "var(--orange-subtle)",
                    border: "1px solid var(--border-orange)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--orange-400)",
                  }}
                >
                  <CurrentIcon size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    {currentProject.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--orange-400)",
                      fontWeight: 600,
                    }}
                  >
                    {currentProject.subtitle}
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                {currentProject.summary}
              </p>

              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#ffffff",
                  marginBottom: "1rem",
                }}
              >
                What We Deliver In This System:
              </h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  marginBottom: "2.5rem",
                }}
              >
                {currentProject.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "var(--orange-subtle)",
                        border: "1px solid var(--border-orange)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--orange-400)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <button
                  onClick={() => onOpenAudit(currentProject.title)}
                  className="btn-primary"
                  style={{ padding: "0.9rem 1.8rem" }}
                >
                  <span>Build This System For My Company</span>
                  <ArrowRight size={17} />
                </button>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                  }}
                >
                  <Clock size={16} color="var(--orange-400)" />
                  <span>Timeline: {currentProject.turnaround}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Real-World Case Study Box */}
            <div
              style={{
                backgroundColor: "var(--bg-surface-2)",
                border: "1px solid var(--border-glass-strong)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
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
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-mono)",
                      color: "var(--orange-400)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    REAL-WORLD CLIENT TRANSFORMATION
                  </span>
                  <ShieldCheck size={18} color="var(--orange-400)" />
                </div>

                <div
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "1.25rem",
                  }}
                >
                  {currentProject.caseStudy.company}
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#f87171",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.3rem",
                    }}
                  >
                    The Friction:
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {currentProject.caseStudy.problem}
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--orange-400)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.3rem",
                    }}
                  >
                    The VenTek System:
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {currentProject.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(255, 85, 0, 0.1)",
                  border: "1px solid rgba(255, 85, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div className="pulse-dot" />
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--orange-400)",
                      textTransform: "uppercase",
                    }}
                  >
                    Verified Business Impact:
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {currentProject.caseStudy.result}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
