"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

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
    <section
      id="faq"
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
            margin: "0 auto 3.5rem auto",
          }}
        >
          <div
            className="badge-pill orange-pill"
            style={{ marginBottom: "1rem" }}
          >
            <HelpCircle size={15} color="var(--orange-400)" />
            <span>CLEAR ANSWERS</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              marginBottom: "1.2rem",
            }}
          >
            Frequently Asked{" "}
            <span className="text-gradient-fire">Questions</span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Straight answers to real business questions. No technical jargon, no vague promises.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto 3rem auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: isOpen
                    ? "var(--bg-surface-2)"
                    : "var(--bg-surface-1)",
                  border: isOpen
                    ? "1px solid var(--border-orange)"
                    : "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: "100%",
                    padding: "1.35rem 1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                  }}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: isOpen ? "var(--orange-400)" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.75rem 1.5rem 1.75rem",
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                      paddingTop: "1rem",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            Have a unique question about your company&apos;s specific tools or workflow?
          </p>
          <button
            onClick={onOpenAudit}
            className="btn-secondary"
            style={{ padding: "0.85rem 1.75rem" }}
          >
            <span>Ask Us Directly on a 15-Minute Call</span>
            <ArrowRight size={16} color="var(--orange-400)" />
          </button>
        </div>
      </div>
    </section>
  );
}
