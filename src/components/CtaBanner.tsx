"use client";

import React from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenAudit: () => void;
}

export default function CtaBanner({ onOpenAudit }: CtaBannerProps) {
  return (
    <section
      style={{
        padding: "6.5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="site-container">
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 85, 0, 0.15) 0%, rgba(14, 14, 18, 0.98) 60%, rgba(20, 20, 26, 0.95) 100%)",
            border: "1px solid var(--border-orange)",
            borderRadius: "var(--radius-xl)",
            padding: "4.5rem 2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 85, 0, 0.2)",
          }}
        >
          {/* Subtle Ambient Orbs */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "400px",
              height: "200px",
              background:
                "radial-gradient(circle, rgba(255, 85, 0, 0.3) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative" }}>
            <div
              className="badge-pill orange-pill"
              style={{
                marginBottom: "1.5rem",
                padding: "0.45rem 1.15rem",
              }}
            >
              <Zap size={16} color="var(--orange-400)" />
              <span>TRANSFORM YOUR BUSINESS THIS MONTH</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: "1.4rem",
              }}
            >
              Stop Letting Manual Work Steal Your{" "}
              <span className="text-gradient-fire">Evenings & Weekends.</span>
            </h2>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
              }}
            >
              You started your business to grow it — not to spend 4 hours every day copying customer names into spreadsheets, replying to the same email questions, or losing deals to faster competitors. Let us build the systems that do the hard work for you.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem",
                marginBottom: "2.5rem",
              }}
            >
              <button
                onClick={onOpenAudit}
                className="btn-primary btn-lg"
                style={{
                  padding: "1.1rem 2.4rem",
                  fontSize: "1.05rem",
                }}
              >
                <span>Schedule Your Free 30-Min Tech Audit</span>
                <ArrowRight size={20} />
              </button>

              <button
                onClick={onOpenAudit}
                className="btn-secondary btn-lg"
                style={{
                  padding: "1.1rem 2rem",
                  fontSize: "1rem",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <MessageSquare size={18} color="var(--orange-400)" />
                <span>Instant Consultation Request</span>
              </button>
            </div>

            {/* Trust Assurances */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={18} color="var(--orange-400)" />
                <span style={{ color: "var(--text-secondary)" }}>100% Free Strategy Session</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={18} color="var(--orange-400)" />
                <span style={{ color: "var(--text-secondary)" }}>Fixed Cost • No Jargon • No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
