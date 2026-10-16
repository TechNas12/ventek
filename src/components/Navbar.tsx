"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

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
    { label: "Problems & Solutions", href: "#problem-solution" },
    { label: "What We Build", href: "#services" },
    { label: "Project Types", href: "#projects" },
    { label: "How It Works", href: "#process" },
    { label: "FAQ", href: "#faq" },
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
          background: scrolled
            ? "rgba(6, 6, 8, 0.88)"
            : "rgba(6, 6, 8, 0.5)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 85, 0, 0.2)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          padding: scrolled ? "0.75rem 0" : "1.2rem 0",
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
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #ff5500, #ff8c42)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 18px rgba(255, 85, 0, 0.45)",
              }}
            >
              <Zap size={22} color="#000000" strokeWidth={2.6} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                VenTek
                <span style={{ color: "var(--orange-500)" }}>.</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--orange-400)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="nav-desktop-actions">


            {/* High CTR CTA Button */}
            <button
              onClick={onOpenAudit}
              className="btn-primary btn-sm"
              style={{ fontSize: "0.88rem" }}
            >
              <span>Book Free Audit</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(6, 6, 8, 0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 999,
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--border-orange)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >


            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={18} color="var(--orange-400)" />
              </a>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingTop: "2rem",
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="btn-primary"
              style={{ width: "100%", padding: "1rem" }}
            >
              <span>Get Your Free Tech Audit</span>
              <ArrowRight size={18} />
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "var(--text-muted)",
                fontSize: "0.825rem",
              }}
            >
              <ShieldCheck size={16} color="var(--orange-500)" />
              <span>No technical talk. 100% free practical blueprint.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
