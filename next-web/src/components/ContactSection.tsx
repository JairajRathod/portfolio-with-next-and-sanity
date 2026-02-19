import { inputStyle, T } from "@/constant";
import { PERSON } from "@/sampleData";
import { useState } from "react";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  interface ContactLinkInterface {
    icon: string;
    label: string;
    href: string;
  }

  const ContactLink = ({ icon, label, href }: ContactLinkInterface) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-row items-center gap-3.5 px-4 py-5 border border-black rounded-[10px] decoration-none"
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        textDecoration: "none",
        color: T.text,
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${T.borderAccent}`;
        e.currentTarget.style.color = T.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `1px solid ${T.border}`;
        e.currentTarget.style.color = T.text;
      }}
    >
      <span style={{ color: T.accent, fontSize: "18px" }}>{icon}</span>
      <span style={{ fontFamily: T.mono, fontSize: "12px" }}>{label}</span>
    </a>
  );

  return (
    <section id="contact" style={{ padding: "100px 24px 80px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionHeading>Contact</SectionHeading>
          <p
            style={{
              margin: "12px 0 0",
              color: T.textDim,
              fontFamily: T.body,
              fontSize: "14px",
              maxWidth: "480px",
            }}
          >
            Have a project in mind or just want to say hello? My inbox is always
            open.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Left: links */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <ContactLink
              icon="✉"
              label={PERSON.email}
              href={`mailto:${PERSON.email}`}
            />
            <ContactLink
              icon="📱"
              label={PERSON.phone}
              href={`tel:${PERSON.phone}`}
            />
            <ContactLink icon="in" label="LinkedIn" href={PERSON.linkedin} />
            <ContactLink
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              }
              label="GitHub"
              href={PERSON.github}
            />
            <div
              style={{
                padding: "16px 20px",
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontFamily: T.mono,
                  fontSize: "10px",
                  color: T.textDim,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Location
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: T.mono,
                  fontSize: "12px",
                  color: T.textMuted,
                }}
              >
                📍 {PERSON.location}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  background: T.accentDim,
                  borderRadius: "12px",
                  border: `1px solid ${T.borderAccent}`,
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>✦</div>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontFamily: T.font,
                    fontSize: "22px",
                    color: T.accent,
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: T.body,
                    fontSize: "13px",
                    color: T.textMuted,
                  }}
                >
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.border = `1px solid ${T.accent}`)
                  }
                  onBlur={(e) =>
                    (e.target.style.border = `1px solid ${T.border}`)
                  }
                />
                <input
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.border = `1px solid ${T.accent}`)
                  }
                  onBlur={(e) =>
                    (e.target.style.border = `1px solid ${T.border}`)
                  }
                />
                <textarea
                  placeholder="Your message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) =>
                    (e.target.style.border = `1px solid ${T.accent}`)
                  }
                  onBlur={(e) =>
                    (e.target.style.border = `1px solid ${T.border}`)
                  }
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "14px",
                    background: T.accent,
                    color: "#050510",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: T.mono,
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: `1px solid ${T.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: T.font,
              fontSize: "18px",
              color: T.text,
              fontWeight: 900,
            }}
          >
            AM<span style={{ color: T.accent }}>.</span>
          </span>
          <p
            style={{
              margin: 0,
              fontFamily: T.mono,
              fontSize: "11px",
              color: T.textDim,
            }}
          >
            © {new Date().getFullYear()} {PERSON.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
