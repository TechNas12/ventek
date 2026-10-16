"use client";

import React from "react";
import {
  Clock,
  TrendingDown,
  FileQuestion,
  UserX,
  ArrowRight,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

interface ProblemsSectionProps {
  onOpenAudit: () => void;
}

export default function ProblemsSection({ onOpenAudit }: ProblemsSectionProps) {
  const problems = [
    {
      icon: Clock,
      title: "Get your work done quicker",
      description:
        "Your team didn't go to university to copy-paste customer names between spreadsheets, send manual reminder emails, or generate PDF invoices one by one. You're paying skilled salaries for work that simple software can do in 0.5 seconds.",
      loss: "Average waste: 15 to 25 hours per employee every single week.",
    },
    {
      icon: UserX,
      title: "Losing Interested Customers Because of Slow Replies",
      description:
        "When an interested person visits your website or messages your company at 8 PM or over the weekend, they expect a prompt response. If they have to wait 12 hours for an email, they get impatient and buy from your faster competitor.",
      loss: "Average loss: 40% of inbound inquiries go cold due to delay.",
    },
    {
      icon: TrendingDown,
      title: "Having a Website That Doesn't Bring In New Clients",
      description:
        "Most websites are built like digital business cards that just sit there. If your site doesn't load instantly, doesn't address the customer's exact problem, and doesn't make it effortless to book or buy, it is costing you money instead of making it.",
      loss: "Average impact: 9 out of 10 visitors bounce without leaving contact details.",
    },
    {
      icon: FileQuestion,
      title: "Managing Operations Through 8 Different Spreadsheets",
      description:
        "When customer orders, invoices, and job progress are tracked in messy Excel sheets or WhatsApp groups, mistakes happen. Payments get forgotten, deadlines get missed, and the business owner can never take a day off.",
      loss: "Average risk: Expensive human errors and endless daily stress.",
    },
  ];

  return (
    <section
      style={{
        padding: "6rem 0",
        position: "relative",
        backgroundColor: "var(--bg-black)",
        borderTop: "1px solid var(--border-glass)",
        borderBottom: "1px solid var(--border-glass)",
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 3.5rem auto",
          }}
        >
          <div
            className="badge-pill orange-pill"
            style={{ marginBottom: "1rem" }}
          >
            <ShieldAlert size={15} color="var(--orange-400)" />
            <span>THE REALITY CHECK</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1.2rem",
            }}
          >
            Is Your Business Working For You...{" "}
            <span className="text-gradient-fire">
              Or Are You Working For Your Business?
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Every day without the right technology, your company leaks time, money, and valuable clients.
            You don&apos;t need complicated buzzwords — you just need reliable systems that handle the daily grind for you.
          </p>
        </div>

        {/* 4 Problems Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {problems.map((prob, idx) => {
            const IconComp = prob.icon;
            return (
              <div
                key={idx}
                className="card-glass"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "var(--bg-surface-1)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(239, 68, 68, 0.12)",
                      border: "1px solid rgba(239, 68, 68, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f87171",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "0.85rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {prob.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {prob.description}
                  </p>
                </div>

                <div
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                    borderLeft: "3px solid #ef4444",
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    color: "#fca5a5",
                  }}
                >
                  {prob.loss}
                </div>
              </div>
            );
          })}
        </div>

        {/* The Solution Bridge Callout */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(255, 85, 0, 0.12) 0%, rgba(20, 20, 26, 0.95) 100%)",
            border: "1px solid var(--border-orange)",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--orange-400)",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              <CheckCircle size={16} />
              <span>THE VENTEK COMMITMENT</span>
            </div>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.6rem",
              }}
            >
              You don&apos;t need to become a programmer. We build the exact system for you.
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              In a free 30-minute discovery chat, we inspect your current business workflow, pinpoint your biggest time drains, and show you exactly how custom software or AI will fix it.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="btn-primary"
            style={{ padding: "0.95rem 1.8rem" }}
          >
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
