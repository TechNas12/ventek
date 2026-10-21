"use client";

import React from "react";
import { Zap, Mail, Phone, MessageSquare, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="site-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.55rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "var(--infosys-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <Zap size={16} strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--text-primary)",
                }}
              >
                VenTek<span style={{ color: "var(--infosys-blue)" }}>.</span>
              </span>
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
                maxWidth: "320px",
              }}
            >
              We don&apos;t just build tech. We build systems that work themselves for you while you just focus on growing your business.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
              }}
            >
              <Globe size={14} color="var(--infosys-blue)" />
              <span>Worldwide Remote Engineering</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              What We Build
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.875rem" }}>
              <a
                href="#services"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Websites That Sell
              </a>
              <a
                href="#services"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Business Automations
              </a>
              <a
                href="#services"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Agentic AI Assistants
              </a>
              <a
                href="#services"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Full-Stack Software
              </a>
            </div>
          </div>

          {/* Project Types */}
          <div>
            <h4
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              Our Project Types
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.875rem" }}>
              <a
                href="#projects"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Management Systems
              </a>
              <a
                href="#projects"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                GenAI & Agentic Systems
              </a>
              <a
                href="#projects"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Modern Web Development
              </a>
              <a
                href="#projects"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--infosys-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Automated Data Pipelines
              </a>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.825rem" }}>
                Ready to automate your operations? Reach out directly:
              </div>
              <a
                href="mailto:dahotresanket12@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  color: "var(--infosys-blue)",
                  fontWeight: 600,
                  wordBreak: "break-all",
                }}
              >
                <Mail size={15} />
                <span>dahotresanket12@gmail.com</span>
              </a>

              <a
                href="tel:9834317366"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                }}
              >
                <Phone size={15} color="var(--infosys-blue)" />
                <span>+91 9834317366</span>
              </a>

              <a
                href="https://wa.me/919834317366"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  color: "#25D366",
                  fontWeight: 600,
                  fontSize: "0.825rem",
                }}
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>

              <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
                Typical response time: Under 2 hours.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Assurance Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 VenTek AI & Tech Agency. All rights reserved.
          </div>
          <div className="footer-assurances">
            <span>No Fluff Guarantee</span>
            <span>Fixed-Price Commitments</span>
            <span>Worldwide Remote Delivery</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-root {
          background-color: var(--bg-surface-1);
          border-top: 1px solid var(--border-glass-strong);
          padding: 5rem 0 2.5rem 0;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-bottom-bar {
          border-top: 1px solid var(--border-glass);
          padding-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.2rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-assurances {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .footer-root {
            padding: 3.5rem 0 2rem 0 !important;
          }

          .footer-grid {
            gap: 2rem !important;
            margin-bottom: 2.5rem !important;
          }

          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.85rem !important;
            font-size: 0.8rem !important;
          }

          .footer-assurances {
            justify-content: center !important;
            gap: 1rem !important;
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
