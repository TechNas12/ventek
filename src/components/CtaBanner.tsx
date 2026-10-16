"use client";

import React from "react";
import { ArrowUpRight, MessageSquare, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenAudit: () => void;
}

export default function CtaBanner({ onOpenAudit }: CtaBannerProps) {
  return (
    <section
      style={{
        padding: "6.5rem 0",
        position: "relative",
      }}
    >
      <div className="site-container">
        <div
          style={{
            background: "linear-gradient(135deg, #070c18 0%, #0c152a 50%, #0f1c38 100%)",
            border: "1px solid rgba(0, 124, 195, 0.35)",
            borderRadius: "24px",
            padding: "5rem 2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(7, 12, 24, 0.35)",
            color: "#ffffff",
          }}
        >
          {/* Subtle Ambient Radial Glows */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "250px",
              background: "radial-gradient(circle, rgba(0, 124, 195, 0.35) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1.2rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(12px)",
                fontSize: "0.825rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#7dd3fc",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              <Zap size={15} color="#38bdf8" />
              <span>TRANSFORM YOUR BUSINESS THIS MONTH</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.035em",
                marginBottom: "1.5rem",
                color: "#ffffff",
              }}
            >
              Stop Letting Manual Work Steal Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 20%, #38bdf8 70%, #007cc3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Evenings & Weekends.
              </span>
            </h2>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "#cbd5e1",
                lineHeight: 1.6,
                marginBottom: "2.75rem",
                maxWidth: "780px",
                margin: "0 auto 2.75rem auto",
              }}
            >
              You started your business to grow it — not to spend 4 hours every day copying customer
              names into spreadsheets, replying to the same email questions, or losing deals to
              faster competitors. Let us build the systems that do the hard work for you.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
                marginBottom: "3rem",
              }}
            >
              <button
                onClick={onOpenAudit}
                className="btn-infosys-primary btn-lg"
                style={{
                  boxShadow: "0 6px 25px rgba(0, 124, 195, 0.45)",
                }}
              >
                <span>Contact Us</span>
                <ArrowUpRight size={18} />
              </button>

              <a
                href="https://wa.me/919834317366"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "0.95rem 2rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.borderColor = "#25D366";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
              >
                <MessageSquare size={18} color="#25D366" />
                <span>Chat on WhatsApp (+91 9834317366)</span>
              </a>
            </div>

            {/* Trust Assurances */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "2.2rem",
                color: "#94a3b8",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={18} color="#38bdf8" />
                <span style={{ color: "#e2e8f0" }}>100% Free Strategy Session</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={18} color="#38bdf8" />
                <span style={{ color: "#e2e8f0" }}>Fixed Cost • No Jargon • No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
