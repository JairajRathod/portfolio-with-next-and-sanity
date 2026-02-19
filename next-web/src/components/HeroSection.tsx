import { T } from "@/constant";
import { PERSON } from "@/sampleData";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(99,202,183,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(99,202,183,0.3), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "780px",
          width: "100%",
          textAlign: "center",
          position: "relative",
        }}
      >
        <p
          style={{
            fontFamily: T.mono,
            fontSize: "12px",
            color: T.accent,
            letterSpacing: "4px",
            textTransform: "uppercase",
            margin: "0 0 24px",
            animation: "fadeIn 0.6s ease",
          }}
        >
          ✦ Available for new opportunities
        </p>

        <h1
          style={{
            margin: "0 0 16px",
            fontFamily: T.font,
            fontSize: "clamp(52px, 10vw, 90px)",
            color: T.text,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-2px",
            animation: "slideUp 0.5s ease",
          }}
        >
          {PERSON.name}
        </h1>

        <p
          style={{
            margin: "0 0 20px",
            fontFamily: T.mono,
            fontSize: "clamp(13px, 2vw, 16px)",
            color: T.accent,
            letterSpacing: "2px",
            textTransform: "uppercase",
            animation: "slideUp 0.6s ease",
          }}
        >
          {PERSON.designation}
        </p>

        <p
          style={{
            margin: "0 0 48px",
            fontSize: "16px",
            color: T.textMuted,
            lineHeight: 1.7,
            fontFamily: T.body,
            maxWidth: "520px",
            marginInline: "auto",
            animation: "fadeIn 0.8s ease",
          }}
        >
          {PERSON.bio}
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeIn 1s ease",
          }}
        >
          <a
            href={`mailto:${PERSON.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: T.accent,
              color: "#050510",
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: T.mono,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              transition: "opacity 0.2s",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Hire Me
          </a>
          <a
            href="#"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "transparent",
              color: T.accent,
              border: `1px solid ${T.borderAccent}`,
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: T.mono,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              transition: "all 0.2s",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "fadeIn 1.2s ease",
          }}
        >
          <span
            style={{
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.textDim,
              letterSpacing: "2px",
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: `linear-gradient(to bottom, ${T.accent}, transparent)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
