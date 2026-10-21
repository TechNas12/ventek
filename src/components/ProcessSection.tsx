"use client";

import React from "react";
import {
  PhoneCall,
  Compass,
  Code2,
  Rocket,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";

interface ProcessSectionProps {
  onOpenAudit: () => void;
}

export default function ProcessSection({ onOpenAudit }: ProcessSectionProps) {
  const steps = [
    {
      step: "01",
      icon: PhoneCall,
      title: "30-Min Discovery Conversation",
      timeline: "Day 1",
      description:
        "You tell us how your business works, which tasks take up too much time, and where leads get lost. We talk in plain English — zero tech jargon or buzzwords.",
      outcome: "We identify your 2 biggest operational bottlenecks.",
    },
    {
      step: "02",
      icon: Compass,
      title: "Interactive Prototype & Fixed Price",
      timeline: "Day 3 to 5",
      description:
        "We map out the exact website layout or automation flow so you can see how it works before writing a single line of code. You get a 100% fixed price and firm delivery date.",
      outcome: "Zero surprises. You see the solution clearly upfront.",
    },
    {
      step: "03",
      icon: Code2,
      title: "We Build, Connect & Stress-Test",
      timeline: "Day 6 to 18",
      description:
        "Our team develops your system with Next.js, hooks up your tools (WhatsApp, Gmail, Stripe, CRM), and tests every edge case to ensure flawless reliability.",
      outcome: "A battle-tested autonomous engine ready for your customers.",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Launch & 30-Min Staff Handover",
      timeline: "Day 19 to 21",
      description:
        "We train your team in under 30 minutes, hand you recorded video tutorials, and monitor the system live. Your business runs smoother from Day 1.",
      outcome: "Your team focuses on growth while the system does the work.",
    },
  ];

  return (
    <section id="process" className="section-wrapper process-section-root">
      <div className="site-container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "820px",
            margin: "0 auto 3rem auto",
          }}
        >
          <div className="infosys-tag">
            <ShieldCheck size={15} />
            <span>IMPLEMENTATION FRAMEWORK • 3-WEEK SPRINT</span>
          </div>

          <h2
            className="process-main-title"
            style={{
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: "1rem",
              color: "var(--text-primary)",
              textWrap: "balance",
            }}
          >
            How We Take Your Business From{" "}
            <span className="text-gradient-sky">Manual Chaos to Autopilot</span>
          </h2>

          <p
            className="process-subtext"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              textWrap: "pretty",
            }}
          >
            You don&apos;t need technical knowledge or weeks of boring meetings.
            Here is our proven 3-week sprint to get your system live and working for you.
          </p>
        </div>

        {/* 4 Connected Step Cards (Infosys Strategic Roadmap Grid) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="card-glass"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div>
                  {/* Step Top Bar: Icon on Left, Number on Right */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "var(--infosys-blue-light)",
                        border: "1px solid var(--infosys-blue-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--infosys-blue)",
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      style={{
                        fontSize: "1.65rem",
                        fontFamily: "var(--font-mono, monospace)",
                        fontWeight: 800,
                        color: "var(--text-dim)",
                        opacity: 0.35,
                      }}
                    >
                      {st.step}
                    </span>
                  </div>

                  {/* Timeline Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.25rem 0.7rem",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-surface-2)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--infosys-blue)",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <Calendar size={13} />
                    <span>{st.timeline}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      marginBottom: "0.65rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {st.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {st.description}
                  </p>
                </div>

                {/* Outcome Pill */}
                <div
                  style={{
                    padding: "0.65rem 0.9rem",
                    borderRadius: "8px",
                    backgroundColor: "var(--infosys-blue-light)",
                    borderLeft: "3px solid var(--infosys-blue)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--infosys-blue)",
                    lineHeight: 1.4,
                  }}
                >
                  {st.outcome}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onOpenAudit}
            className="btn-infosys-primary btn-lg process-bottom-btn"
          >
            <span>Book Your Day 1 Strategy Call</span>
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .process-main-title {
          font-size: clamp(1.9rem, 4vw, 3rem);
        }

        .process-subtext {
          font-size: 1.05rem;
        }

        @media (max-width: 768px) {
          .process-main-title {
            font-size: clamp(1.55rem, 5.5vw, 2.1rem) !important;
          }

          .process-subtext {
            font-size: 0.925rem !important;
          }

          .process-bottom-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
