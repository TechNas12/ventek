"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";

interface FaqSectionProps {
  onOpenAudit: () => void;
}

export default function FaqSection({ onOpenAudit }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "I am not a tech person. Will I be able to manage this after you build it?",
      answer:
        "Yes, absolutely. We design every system with simplicity in mind. If you or your staff know how to send an email or use WhatsApp, you will easily know how to use your new dashboard or website. Furthermore, we train your team directly and provide simple 2-minute screen-recorded video guides you can refer to anytime.",
    },
    {
      question: "How is this different from buying generic software off the shelf?",
      answer:
        "Generic software (like rigid CRM platforms) charges you thousands of dollars in monthly subscriptions and forces your team to change how you work. We build custom systems tailored 100% to your existing workflow. Your software connects all your tools together, works for you in the background, and you own it without recurring per-seat fees.",
    },
    {
      question: "Do I need expensive AI subscriptions every single month?",
      answer:
        "No. We build directly on high-efficiency modern AI APIs. For most small to mid-sized businesses, the actual cost of running an AI assistant that answers hundreds of customer questions, checks documents, and schedules appointments is typically just $15 to $35 per month.",
    },
    {
      question: "How long does it take from our first call until the system is live?",
      answer:
        "Most of our projects launch within 14 to 21 days. We work in dedicated, focused sprints so you don't wait months for results. We show you an interactive prototype within the first 5 days, so you always know exactly what is being built.",
    },
    {
      question: "What happens if our business processes change or we need updates later?",
      answer:
        "We build all systems using clean, modular architecture that easily scales as you hire more people or add new services. We offer continuous monitoring, rapid feature updates, and dedicated support packages so you never have to worry about technology breaking.",
    },
    {
      question: "How do we get started, and is there any commitment upfront?",
      answer:
        "Getting started is 100% risk-free. You simply schedule a free 30-minute discovery call. We listen to your daily bottlenecks, show you what can be automated, and provide a clear fixed-price plan. You only move forward if you are completely confident in the return on investment.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-wrapper faq-section-root">
      <div className="site-container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 3rem auto",
          }}
        >
          <div className="infosys-tag">
            <HelpCircle size={15} />
            <span>KNOWLEDGE & INSIGHTS • CLEAR ANSWERS</span>
          </div>

          <h2
            className="faq-main-title"
            style={{
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: "1rem",
              color: "var(--text-primary)",
              textWrap: "balance",
            }}
          >
            Frequently Asked{" "}
            <span className="text-gradient-sky">Questions</span>
          </h2>

          <p
            className="faq-subtext"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              textWrap: "pretty",
            }}
          >
            Straight answers to real business questions. No technical jargon, no vague promises.
          </p>
        </div>

        {/* FAQ Accordion List (Infosys Knowledge Architecture Style) */}
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto 2.5rem auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: isOpen
                    ? "var(--bg-surface-1)"
                    : "var(--card-bg)",
                  border: isOpen
                    ? "1px solid var(--infosys-blue)"
                    : "1px solid var(--border-glass)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(0, 124, 195, 0.12)"
                    : "var(--shadow-card)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="faq-accordion-btn"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--text-primary)",
                  }}
                >
                  <span
                    className="faq-question-text"
                    style={{
                      fontWeight: 700,
                      lineHeight: 1.4,
                      color: isOpen ? "var(--infosys-blue)" : "var(--text-primary)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: isOpen
                        ? "var(--infosys-blue-light)"
                        : "var(--bg-surface-2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "var(--infosys-blue)" : "var(--text-muted)",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="faq-bottom-callout">
          <div>
            <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>
              Have a specific question about your business workflow?
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "0.15rem" }}>
              Ask directly or schedule an exploratory 1-on-1 session.
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="btn-infosys-primary btn-sm faq-callout-btn"
          >
            <span>Ask VenTek Directly</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .faq-main-title {
          font-size: clamp(1.9rem, 4vw, 3rem);
        }

        .faq-subtext {
          font-size: 1.05rem;
        }

        .faq-accordion-btn {
          padding: 1.35rem 1.75rem;
        }

        .faq-question-text {
          font-size: 1.05rem;
        }

        .faq-answer-body {
          padding: 0 1.75rem 1.5rem 1.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.65;
          border-top: 1px solid var(--border-subtle);
          padding-top: 0.95rem;
        }

        .faq-bottom-callout {
          max-width: 880px;
          margin: 0 auto;
          padding: 1.5rem 1.85rem;
          border-radius: 16px;
          background-color: var(--bg-surface-1);
          border: 1px solid var(--border-glass-strong);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justifyContent: space-between;
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .faq-main-title {
            font-size: clamp(1.55rem, 5.5vw, 2.1rem) !important;
          }

          .faq-subtext {
            font-size: 0.925rem !important;
          }

          .faq-accordion-btn {
            padding: 1.1rem 1.15rem !important;
          }

          .faq-question-text {
            font-size: 0.95rem !important;
          }

          .faq-answer-body {
            padding: 0 1.15rem 1.15rem 1.15rem !important;
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
          }

          .faq-bottom-callout {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 1.25rem 1.15rem !important;
          }

          .faq-callout-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
