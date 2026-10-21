"use client";

import React from "react";
import { ArrowUpRight, MessageSquare, ShieldCheck, Zap } from "lucide-react";

interface CtaBannerProps {
  onOpenAudit: () => void;
}

export default function CtaBanner({ onOpenAudit }: CtaBannerProps) {
  return (
    <section className="section-wrapper cta-section-root">
      <div className="site-container">
        <div className="cta-box-container">
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
              className="cta-eyebrow-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(12px)",
                fontWeight: 700,
                color: "#7dd3fc",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              <Zap size={14} color="#38bdf8" />
              <span>TRANSFORM YOUR BUSINESS THIS MONTH</span>
            </div>

            <h2
              className="cta-main-title"
              style={{
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "#ffffff",
                textWrap: "balance",
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
              className="cta-subtext"
              style={{
                color: "#cbd5e1",
                lineHeight: 1.6,
                maxWidth: "780px",
                margin: "0 auto 2.25rem auto",
                textWrap: "pretty",
              }}
            >
              You started your business to grow it — not to spend 4 hours every day copying customer
              names into spreadsheets, replying to the same email questions, or losing deals to
              faster competitors. Let us build the systems that do the hard work for you.
            </p>

            {/* CTAs */}
            <div className="cta-actions-row">
              <button
                onClick={onOpenAudit}
                className="btn-infosys-primary btn-lg cta-action-btn"
                style={{
                  boxShadow: "0 6px 25px rgba(0, 124, 195, 0.45)",
                }}
              >
                <span>Contact Us</span>
                <ArrowUpRight size={17} />
              </button>

              <a
                href="https://wa.me/919834317366"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-action-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.55rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.85rem 1.85rem",
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
                <MessageSquare size={17} color="#25D366" />
                <span>Chat on WhatsApp (+91 9834317366)</span>
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="cta-trust-row">
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span style={{ color: "#e2e8f0" }}>100% Free Strategy Session</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span style={{ color: "#e2e8f0" }}>Fixed Cost • No Jargon • No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-box-container {
          background: linear-gradient(135deg, #070c18 0%, #0c152a 50%, #0f1c38 100%);
          border: 1px solid rgba(0, 124, 195, 0.35);
          border-radius: 24px;
          padding: 5rem 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(7, 12, 24, 0.35);
          color: #ffffff;
        }

        .cta-eyebrow-pill {
          padding: 0.4rem 1.2rem;
          font-size: 0.825rem;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
        }

        .cta-main-title {
          font-size: clamp(2rem, 4.5vw, 3.6rem);
          margin-bottom: 1.25rem;
        }

        .cta-subtext {
          font-size: 1.1rem;
        }

        .cta-actions-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .cta-trust-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          color: #94a3b8;
          font-size: 0.88rem;
        }

        @media (max-width: 768px) {
          .cta-box-container {
            padding: 2.75rem 1.15rem !important;
            border-radius: 18px !important;
          }

          .cta-eyebrow-pill {
            padding: 0.35rem 0.8rem !important;
            font-size: 0.68rem !important;
            letter-spacing: 0.04em !important;
            margin-bottom: 1rem !important;
          }

          .cta-main-title {
            font-size: clamp(1.55rem, 5.5vw, 2.2rem) !important;
            margin-bottom: 1rem !important;
          }

          .cta-subtext {
            font-size: 0.925rem !important;
            margin-bottom: 1.75rem !important;
          }

          .cta-actions-row {
            flex-direction: column !important;
            gap: 0.75rem !important;
            margin-bottom: 1.75rem !important;
          }

          .cta-action-btn {
            width: 100% !important;
            padding: 0.85rem 1.25rem !important;
            font-size: 0.9rem !important;
          }

          .cta-trust-row {
            flex-direction: column !important;
            gap: 0.6rem !important;
            font-size: 0.825rem !important;
          }
        }
      `}</style>
    </section>
  );
}
