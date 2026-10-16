"use client";

import React from "react";
import {
  PhoneCall,
  Compass,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
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
    <section
      id="process"
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
            maxWidth: "800px",
            margin: "0 auto 4rem auto",
          }}
        >
          <div
            className="badge-pill orange-pill"
            style={{ marginBottom: "1rem" }}
          >
            <ShieldCheck size={15} color="var(--orange-400)" />
            <span>TRANSPARENT 4-STEP ROADMAP</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              marginBottom: "1.2rem",
            }}
          >
            How We Take Your Business From{" "}
            <span className="text-gradient-fire">Manual Chaos to Autopilot</span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            You don&apos;t need technical knowledge or weeks of boring meetings.
            Here is our proven 3-week sprint to get your system live and working for you.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
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
                  padding: "2rem 1.75rem",
                  backgroundColor: "var(--bg-surface-1)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.5rem",
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
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {st.timeline}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      color: "var(--orange-400)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Step {st.step}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "0.85rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {st.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {st.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(255, 85, 0, 0.08)",
                    borderLeft: "3px solid var(--orange-500)",
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    color: "#ffb076",
                  }}
                >
                  <CheckCircle2 size={15} color="var(--orange-400)" style={{ flexShrink: 0 }} />
                  <span>{st.outcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <button
            onClick={onOpenAudit}
            className="btn-primary btn-lg"
            style={{ padding: "1rem 2.2rem" }}
          >
            <span>Start Step 1: Book Your 30-Min Discovery Call</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
