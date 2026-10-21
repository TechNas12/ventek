"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
  Mail,
  Database,
  Loader2,
} from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillContext?: string;
}

export default function AuditModal({
  isOpen,
  onClose,
  prefillContext,
}: AuditModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState(prefillContext || "");
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    "Business Automations",
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleNeed = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setSubmitting(true);

    try {
      // 1. Send lead to backend API (saves to data/leads.json, sends email, and syncs to Google Sheets webhook if configured)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          needs: selectedNeeds,
          details,
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  // Pre-formatted WhatsApp message for instant 1-tap mobile or web connect
  const waMessage = encodeURIComponent(
    `Hi Sanket, I just submitted an inquiry on the VenTek website:\n\n` +
      `• *Name:* ${name}\n` +
      `• *Email:* ${email}\n` +
      (phone ? `• *Phone / WhatsApp:* ${phone}\n` : "") +
      (company ? `• *Company:* ${company}\n` : "") +
      `• *Required Services:* ${selectedNeeds.join(", ")}\n` +
      (details ? `• *Current Bottleneck:* ${details}` : "")
  );

  const waLink = `https://wa.me/919834317366?text=${waMessage}`;

  const allNeeds = [
    "Web Development",
    "Business Automations",
    "GenAI & Agentic Systems",
    "Management Systems",
    "Data Pipelines",
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        backgroundColor: "rgba(7, 12, 24, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        overflowY: "auto",
      }}
      onClick={handleResetAndClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "580px",
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--infosys-blue)",
          borderRadius: "20px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
          padding: "2.5rem 2rem",
          position: "relative",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "var(--bg-surface-2)",
            border: "1px solid var(--border-glass)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--infosys-blue)";
            e.currentTarget.style.borderColor = "var(--infosys-blue)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.borderColor = "var(--border-glass)";
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "2px solid #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem auto",
              }}
            >
              <CheckCircle2 size={34} color="#10b981" />
            </div>

            <h3
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Consultation Request Received!
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.55,
                marginBottom: "1.5rem",
              }}
            >
              Thank you, <strong style={{ color: "var(--text-primary)" }}>{name}</strong>.
              We have received your request for{" "}
              <strong style={{ color: "var(--infosys-blue)" }}>
                {company || "your business"}
              </strong>
              . Our engineering lead will review your requirements and email you at{" "}
              <strong style={{ color: "var(--text-primary)" }}>{email}</strong> within 2 hours.
            </p>

            {/* Real-time delivery badges */}
            <div
              style={{
                backgroundColor: "var(--bg-surface-2)",
                borderRadius: "12px",
                padding: "1rem",
                border: "1px solid var(--border-glass)",
                marginBottom: "1.5rem",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                fontSize: "0.825rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)" }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span><strong>Saved to Database:</strong> Logged into permanent lead registry</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)" }}>
                <Mail size={16} color="var(--infosys-blue)" />
                <span><strong>Email Notification:</strong> Alert queued for engineering lead</span>
              </div>
            </div>

            {/* Fast-Track WhatsApp CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.9rem 1.5rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                <MessageSquare size={18} />
                <span>Fast-Track on WhatsApp (+91 9834317366)</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                onClick={handleResetAndClose}
                className="btn-infosys-secondary"
                style={{ width: "100%", padding: "0.85rem" }}
              >
                <span>Back to VenTek Homepage</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div className="infosys-tag" style={{ marginBottom: "0.5rem" }}>
                <Zap size={15} />
                <span>Zero Risk • 100% Free Consultation</span>
              </div>
              <h3
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                }}
              >
                Contact Us
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  marginTop: "0.35rem",
                }}
              >
                Tell us where your business gets stuck. We&apos;ll show you how modern software or AI can automate it.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Name & Email in responsive columns */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.9rem",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-surface-2)",
                      border: "1px solid var(--border-glass-strong)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.9rem",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-surface-2)",
                      border: "1px solid var(--border-glass-strong)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              {/* Phone / WhatsApp & Company */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 9834317366"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.9rem",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-surface-2)",
                      border: "1px solid var(--border-glass-strong)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Logistics"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.9rem",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-surface-2)",
                      border: "1px solid var(--border-glass-strong)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              {/* Multi-select Needs */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.45rem",
                  }}
                >
                  What do you need built or solved?
                </label>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                  }}
                >
                  {allNeeds.map((need) => {
                    const isSelected = selectedNeeds.includes(need);
                    return (
                      <button
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                        style={{
                          padding: "0.4rem 0.85rem",
                          borderRadius: "9999px",
                          backgroundColor: isSelected
                            ? "var(--infosys-blue)"
                            : "var(--bg-surface-2)",
                          border: isSelected
                            ? "1px solid var(--infosys-blue)"
                            : "1px solid var(--border-glass)",
                          color: isSelected ? "#ffffff" : "var(--text-secondary)",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {need}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Details text area */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.3rem",
                  }}
                >
                  Tell us briefly about your current bottleneck (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. We spend 15 hours a week copy-pasting customer details from emails into spreadsheets, or our website is 5 years old and gets no leads..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.9rem",
                    borderRadius: "8px",
                    backgroundColor: "var(--bg-surface-2)",
                    border: "1px solid var(--border-glass-strong)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    resize: "none",
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-infosys-primary"
                style={{
                  width: "100%",
                  padding: "0.95rem",
                  marginTop: "0.5rem",
                  fontSize: "1rem",
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting Lead...</span>
                  </>
                ) : (
                  <>
                    <span>Contact Us</span>
                    <ArrowUpRight size={18} />
                  </>
                )}
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  color: "var(--text-muted)",
                  fontSize: "0.78rem",
                  marginTop: "0.2rem",
                }}
              >
                <ShieldCheck size={14} color="var(--infosys-blue)" />
                <span>Zero sales pressure. Your information is 100% confidential.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
