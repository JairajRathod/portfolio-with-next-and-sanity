import { T } from "@/constant";
import ModalOverlay from "./ModalOverlay";
import ModalClose from "./ModalClose";

export default function SkillModal({ skill, onClose }) {
  if (!skill) return null;
  const pct = skill.rating;
  const cats = {
    Frontend: "#7c9eff",
    Backend: "#63cab7",
    Language: "#f7c59f",
    Database: "#e88cd8",
    DevOps: "#ff8c6b",
    Design: "#ffd166",
  };
  const color = cats[skill.category] || T.accent;

  return (
    <ModalOverlay onClose={onClose}>
      <div style={{ padding: "32px" }}>
        {/* Header */}
        <div className="flex flex-row justify-between items-start mb-7">
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "48px", lineHeight: 1 }}>
              {skill.icon}
            </span>
            <div>
              <div className="flex flex-row items-center gap-2.5 mb-1">
                <h2
                  className="m-0 text-[26px] font-bold"
                  style={{
                    fontFamily: T.font,
                    color: T.text,
                  }}
                >
                  {skill.name}
                </h2>
                {skill.featured && (
                  <span
                    style={{
                      fontFamily: T.mono,
                      fontSize: "10px",
                      padding: "2px 8px",
                      background: `rgba(${color === T.accent ? "99,202,183" : "124,158,255"},0.15)`,
                      border: `1px solid ${color}44`,
                      borderRadius: "4px",
                      color: color,
                      letterSpacing: "1px",
                    }}
                  >
                    FEATURED
                  </span>
                )}
              </div>
              <span
                style={{
                  fontFamily: T.mono,
                  fontSize: "12px",
                  padding: "3px 10px",
                  background: `${color}18`,
                  border: `1px solid ${color}44`,
                  borderRadius: "4px",
                  color: color,
                }}
              >
                {skill.category}
              </span>
            </div>
          </div>
          <ModalClose onClose={onClose} />
        </div>

        {/* Rating bar */}
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "11px",
                color: T.textDim,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Proficiency
            </span>
            <span
              style={{
                fontFamily: T.mono,
                fontSize: "14px",
                color: color,
                fontWeight: 700,
              }}
            >
              {pct}%
            </span>
          </div>
          <div
            style={{
              height: "6px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                background: `linear-gradient(90deg, ${color}88, ${color})`,
                borderRadius: "10px",
                transition: "width 0.6s ease",
              }}
            />
          </div>
        </div>

        {/* Info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            marginBottom: "20px",
          }}
        >
          {[
            ["Experience", skill.experience],
            ["Category", skill.category],
            ["Rating", `${skill.rating} / 100`],
            ["Featured", skill.featured ? "Yes ✦" : "No"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                background: T.surface,
                borderRadius: "10px",
                padding: "14px 16px",
                border: `1px solid ${T.border}`,
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
                {k}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: T.mono,
                  fontSize: "13px",
                  color: T.textMuted,
                }}
              >
                {v}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div
          style={{
            background: T.surface,
            borderRadius: "10px",
            padding: "18px 20px",
            border: `1px solid ${T.border}`,
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.textDim,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            About
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: T.body,
              fontSize: "13.5px",
              color: T.textMuted,
              lineHeight: 1.7,
            }}
          >
            {skill.description}
          </p>
        </div>
      </div>
    </ModalOverlay>
  );
}
