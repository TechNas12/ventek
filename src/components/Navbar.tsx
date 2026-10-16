"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X, ArrowUpRight, ArrowRight, ShieldCheck, Search } from "lucide-react";
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
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
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
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Circular Infosys Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                width: "42px",
                height: "42px",
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
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Brand Logo (Infosys Minimal Wordmark Style) */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                textDecoration: "none",
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
                <Zap size={18} strokeWidth={2.5} />
              </div>
              <div
                style={{
                  fontSize: "1.45rem",
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <ThemeToggle />

            {/* Infosys Capsule CTA Button (e.g. "Ask VenTek" / "Contact Us ↗") */}
            <button
              onClick={onOpenAudit}
              className="btn-infosys-dark btn-sm"
              style={{
                borderRadius: "9999px",
                padding: "0.55rem 1.35rem",
                fontSize: "0.86rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
              }}
            >
              <Zap size={14} color="var(--sky-400)" />
              <span>Contact Us</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* Enterprise Drawer / Overlay Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "74px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg-primary)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            zIndex: 999,
            padding: "2.5rem 1.5rem",
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
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--infosys-blue)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    padding: "0.85rem 0",
                    borderBottom: "1px solid var(--border-glass)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} color="var(--infosys-blue)" />
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingTop: "2.5rem",
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="btn-infosys-primary"
              style={{ width: "100%", padding: "1rem" }}
            >
              <span>Contact Us</span>
              <ArrowUpRight size={18} />
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "var(--text-muted)",
                fontSize: "0.825rem",
                textAlign: "center",
              }}
            >
              <ShieldCheck size={16} color="var(--infosys-blue)" />
              <span>Direct engineer consultation • Zero obligations</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
