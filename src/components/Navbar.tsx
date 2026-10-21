"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenAudit: () => void;
}

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Navigate your next", href: "#problem-solution" },
    { label: "Capabilities", href: "#services" },
    { label: "Tales of Transformation", href: "#projects" },
    { label: "Implementation Framework", href: "#process" },
    { label: "Insights & FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-glass)"
            : "1px solid transparent",
          padding: scrolled ? "0.65rem 0" : "1.1rem 0",
        }}
      >
        <div
          className="site-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Group: Circular Hamburger Menu & Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Circular Infosys Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="navbar-hamburger"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-surface-1)",
                border: "1px solid var(--border-glass-strong)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-primary)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--infosys-blue)";
                e.currentTarget.style.color = "var(--infosys-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-glass-strong)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Brand Logo (Infosys Minimal Wordmark Style) */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
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
              <div
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                VenTek
                <span style={{ color: "var(--infosys-blue)", marginLeft: "1px" }}>.</span>
              </div>
            </a>
          </div>

          {/* Center Group: Floating Pill Navigation Bar (Signature Infosys Design) */}
          <nav
            className="nav-desktop-links"
            style={{
              backgroundColor: "var(--nav-pill-bg)",
              border: "1px solid var(--border-glass-strong)",
              borderRadius: "9999px",
              padding: "0.45rem 1.4rem",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              gap: "1.5rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--infosys-blue)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Group: Theme Toggle & Infosys Capsule Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <ThemeToggle />

            {/* Infosys Capsule CTA Button (e.g. "Ask VenTek" / "Contact Us ↗") */}
            <button
              onClick={onOpenAudit}
              className="btn-infosys-dark btn-sm header-cta-pill"
              style={{
                borderRadius: "9999px",
                fontSize: "0.825rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Zap size={13} color="var(--sky-400)" />
              <span className="header-cta-text">Contact Us</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            .header-cta-pill {
              padding: 0.45rem 0.85rem !important;
            }
            .header-cta-text {
              display: none;
            }
          }
        `}</style>
      </header>

      {/* Enterprise Drawer / Overlay Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg-primary)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            zIndex: 999,
            padding: "2rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
            borderBottom: "1px solid var(--border-glass-strong)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--infosys-blue)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    padding: "0.8rem 0",
                    borderBottom: "1px solid var(--border-glass)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={17} color="var(--infosys-blue)" />
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              paddingTop: "2rem",
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="btn-infosys-primary"
              style={{ width: "100%", padding: "0.9rem" }}
            >
              <span>Contact Us</span>
              <ArrowUpRight size={17} />
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.45rem",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                textAlign: "center",
              }}
            >
              <ShieldCheck size={15} color="var(--infosys-blue)" />
              <span>Direct engineer consultation • Zero obligations</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
