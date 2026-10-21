"use client";

import React from "react";
import {
  Clock,
  TrendingDown,
  FileQuestion,
  UserX,
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

interface ProblemsSectionProps {
  onOpenAudit: () => void;
}

export default function ProblemsSection({ onOpenAudit }: ProblemsSectionProps) {
  const problems = [
    {
      num: "01",
      icon: Clock,
      title: "Get your work done quicker",
      description:
        "Your team didn't go to university to copy-paste customer names between spreadsheets, send manual reminder emails, or generate PDF invoices one by one. You're paying skilled salaries for work that simple software can do in 0.5 seconds.",
      loss: "Average waste: 15 to 25 hours per employee every single week.",
    },
    {
      num: "02",
      icon: UserX,
      title: "Losing Interested Customers Because of Slow Replies",
      description:
        "When an interested person visits your website or messages your company at 8 PM or over the weekend, they expect a prompt response. If they have to wait 12 hours for an email, they get impatient and buy from your faster competitor.",
      loss: "Average loss: 40% of inbound inquiries go cold due to delay.",
    },
    {
      num: "03",
      icon: TrendingDown,
      title: "Having a Website That Doesn't Bring In New Clients",
      description:
        "Most websites are built like digital business cards that just sit there. If your site doesn't load instantly, doesn't address the customer's exact problem, and doesn't make it effortless to book or buy, it is costing you money instead of making it.",
      loss: "Average impact: 9 out of 10 visitors bounce without leaving contact details.",
    },
    {
      num: "04",
      icon: FileQuestion,
      title: "Managing Operations Through 8 Different Spreadsheets",
      description:
        "When customer orders, invoices, and job progress are tracked in messy Excel sheets or WhatsApp groups, mistakes happen. Payments get forgotten, deadlines get missed, and the business owner can never take a day off.",
      loss: "Average risk: Expensive human errors and endless daily stress.",
    },
  ];

  return (
    <section className="section-wrapper problems-section-root">
      <div className="site-container">
        {/* Section Eyebrow & Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 3rem auto",
          }}
        >
          <div className="infosys-tag">
            <ShieldAlert size={15} />
            <span>THE REALITY CHECK • WHY BUSINESSES GET STUCK</span>
          </div>

          <h2
            className="problems-main-title"
            style={{
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: "1rem",
              color: "var(--text-primary)",
              textWrap: "balance",
            }}
          >
            Is Your Business Working For You...{" "}
            <span className="text-gradient-sky">
              Or Are You Working For Your Business?
            </span>
          </h2>

          <p
            className="problems-subtext"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              maxWidth: "750px",
              textWrap: "pretty",
            }}
          >
            Every day without the right technology, your company leaks time, money, and valuable clients.
            You don&apos;t need complicated buzzwords — you just need reliable systems that handle the daily grind for you.
          </p>
        </div>

        {/* 4 Clean Enterprise Problem Cards (Infosys Modular Grid) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
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
                  borderRadius: "16px",
                  border: "1px solid var(--card-border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Number watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--text-dim)",
                    opacity: 0.35,
                    fontFamily: "var(--font-mono, monospace)",
                  }}
                >
                  {prob.num}
                </div>

                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ef4444",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <IconComp size={20} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {prob.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {prob.description}
                  </p>
                </div>

                {/* Quantitative Impact Indicator */}
                <div
                  style={{
                    padding: "0.65rem 0.9rem",
                    borderRadius: "8px",
                    backgroundColor: "rgba(239, 68, 68, 0.06)",
                    borderLeft: "3px solid #ef4444",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#ef4444",
                    lineHeight: 1.4,
                  }}
                >
                  {prob.loss}
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================================== */}
        {/* SIGNATURE INFOSYS "CRAFTING INTELLIGENT EXPERIENCES" CALLOUT BANNER     */}
        {/* ======================================================================== */}
        <div
          className="commitment-callout-card"
          style={{
            borderRadius: "20px",
            background: "linear-gradient(135deg, #091222 0%, #0d1e3d 60%, #10264f 100%)",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(9, 18, 34, 0.35)",
            textAlign: "center",
          }}
        >
          {/* Subtle Accent Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "450px",
              height: "150px",
              background: "radial-gradient(circle, rgba(0, 124, 195, 0.35) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "#7dd3fc",
                fontWeight: 700,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
              }}
            >
              <CheckCircle2 size={15} color="#38bdf8" />
              <span>THE VENTEK COMMITMENT</span>
            </div>

            <h3
              className="commitment-title"
              style={{
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "0.85rem",
                textWrap: "balance",
              }}
            >
              You don&apos;t need to become a programmer.{" "}
              <span style={{ color: "#38bdf8" }}>We build the exact system for you.</span>
            </h3>

            <p
              className="commitment-subtext"
              style={{
                color: "#cbd5e1",
                lineHeight: 1.6,
                maxWidth: "700px",
                margin: "0 auto 1.75rem auto",
              }}
            >
              In a free 30-minute discovery chat, we inspect your current business workflow, pinpoint
              your biggest time drains, and show you exactly how custom software or AI will fix it.
            </p>

            <button
              onClick={onOpenAudit}
              className="btn-infosys-primary btn-lg"
              style={{
                boxShadow: "0 4px 20px rgba(0, 124, 195, 0.4)",
              }}
            >
              <span>Contact Us</span>
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .problems-main-title {
          font-size: clamp(1.9rem, 4vw, 3rem);
        }

        .problems-subtext {
          font-size: 1.05rem;
        }

        .commitment-callout-card {
          padding: 3.5rem 2.5rem;
        }

        .commitment-title {
          font-size: clamp(1.65rem, 3.5vw, 2.4rem);
        }

        .commitment-subtext {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .problems-main-title {
            font-size: clamp(1.55rem, 5.5vw, 2.1rem) !important;
          }

          .problems-subtext {
            font-size: 0.925rem !important;
          }

          .commitment-callout-card {
            padding: 2.25rem 1.25rem !important;
            border-radius: 16px !important;
          }

          .commitment-title {
            font-size: clamp(1.35rem, 5vw, 1.75rem) !important;
          }

          .commitment-subtext {
            font-size: 0.88rem !important;
          }
        }
      `}</style>
    </section>
  );
}
