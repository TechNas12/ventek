"use client";

import React from "react";
import { Zap, Mail, ArrowUpRight, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#030304",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "5rem 0 2.5rem 0",
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
                gap: "0.75rem",
                marginBottom: "1.2rem",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #ff5500, #ff8c42)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={20} color="#000000" strokeWidth={2.6} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                VenTek<span style={{ color: "var(--orange-500)" }}>.</span>
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


          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "1.25rem",
              }}
            >
              What We Build
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              <a href="#services" style={{ color: "var(--text-secondary)" }}>Websites That Sell</a>
              <a href="#services" style={{ color: "var(--text-secondary)" }}>Business Automations</a>
              <a href="#services" style={{ color: "var(--text-secondary)" }}>Agentic AI Assistants</a>
              <a href="#services" style={{ color: "var(--text-secondary)" }}>Full-Stack Software</a>
            </div>
          </div>

          {/* Project Types */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "1.25rem",
              }}
            >
              Our Project Types
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              <a href="#projects" style={{ color: "var(--text-secondary)" }}>Management Systems</a>
              <a href="#projects" style={{ color: "var(--text-secondary)" }}>GenAI & Agentic Systems</a>
              <a href="#projects" style={{ color: "var(--text-secondary)" }}>Modern Web Development</a>
              <a href="#projects" style={{ color: "var(--text-secondary)" }}>Automated Data Pipelines</a>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "1.25rem",
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.9rem" }}>
              <div style={{ color: "var(--text-secondary)" }}>
                Ready to automate your operations? Reach out directly:
              </div>
              <a
                href="mailto:contact@ventek.agency"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--orange-400)",
                  fontWeight: 600,
                }}
              >
                <Mail size={16} />
                <span>contact@ventek.agency</span>
              </a>
              <div style={{ color: "var(--text-muted)", fontSize: "0.825rem" }}>
                Typical response time: Under 2 hours during business hours.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © 2026 VenTek AI & Tech Agency. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>No Fluff Guarantee</span>
            <span>Fixed-Price Commitments</span>
            <span>Worldwide Remote Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
