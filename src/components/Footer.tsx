"use client";

import React from "react";
import { Zap, Mail, Phone, MessageSquare, ArrowUpRight, Shield, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-surface-1)",
        borderTop: "1px solid var(--border-glass-strong)",
        padding: "5.5rem 0 2.5rem 0",
        position: "relative",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--infosys-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <Zap size={18} strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: "1.45rem",
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
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                maxWidth: "320px",
              }}
            >
              We don&apos;t just build tech. We build systems that work themselves for you while you just focus on growing your business.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              <Globe size={15} color="var(--infosys-blue)" />
              <span>Worldwide Remote Engineering</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              What We Build
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
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
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              Our Project Types
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
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
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.9rem" }}>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                Ready to automate your operations? Reach out directly:
              </div>
              <a
                href="mailto:dahotresanket12@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--infosys-blue)",
                  fontWeight: 600,
                  wordBreak: "break-all",
                }}
              >
                <Mail size={16} />
                <span>dahotresanket12@gmail.com</span>
              </a>

              <a
                href="tel:9834317366"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                }}
              >
                <Phone size={16} color="var(--infosys-blue)" />
                <span>+91 9834317366</span>
              </a>

              <a
                href="https://wa.me/919834317366"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#25D366",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                Typical response time: Under 2 hours.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Assurance Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-glass)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © 2026 VenTek AI & Tech Agency. All rights reserved.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            <span>No Fluff Guarantee</span>
            <span>Fixed-Price Commitments</span>
            <span>Worldwide Remote Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
