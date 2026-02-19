import { SKILLS } from "@/sampleData";
import { useState } from "react";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import { T } from "@/constant";
import SkillModal from "./modals/SkillModal";

export default function SkillsSection() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(SKILLS.map((s) => s.category)))];
  const filtered =
    filter === "All" ? SKILLS : SKILLS.filter((s) => s.category === filter);
  const catColors = {
    Frontend: "#7c9eff",
    Backend: "#63cab7",
    Language: "#f7c59f",
    Database: "#e88cd8",
    DevOps: "#ff8c6b",
    Design: "#ffd166",
  };

  return (
    <section
      id="skills"
      style={{ padding: "100px 24px", borderBottom: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <SectionLabel>Expertise</SectionLabel>
          <SectionHeading>Skills</SectionHeading>
          <p
            style={{
              margin: "12px 0 0",
              color: T.textDim,
              fontFamily: T.body,
              fontSize: "14px",
            }}
          >
            Click any skill to see full details.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "6px 16px",
                borderRadius: "6px",
                border:
                  filter === c
                    ? `1px solid ${T.accent}`
                    : `1px solid ${T.border}`,
                background: filter === c ? T.accentDim : "transparent",
                color: filter === c ? T.accent : T.textDim,
                fontFamily: T.mono,
                fontSize: "11px",
                cursor: "pointer",
                letterSpacing: "0.5px",
                transition: "all 0.15s",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "14px",
          }}
        >
          {filtered.map((skill) => {
            const color = catColors[skill.category] || T.accent;
            return (
              <div
                key={skill.id}
                onClick={() => setSelected(skill)}
                style={{
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: "12px",
                  padding: "20px 16px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `1px solid ${color}55`;
                  e.currentTarget.style.background = T.surfaceHover;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = `1px solid ${T.border}`;
                  e.currentTarget.style.background = T.surface;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {skill.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: color,
                    }}
                  />
                )}
                <div className="text-[32px] mb-2.5" style={{ lineHeight: 1 }}>
                  {skill.icon}
                </div>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontFamily: T.font,
                    fontSize: "14px",
                    color: T.text,
                    fontWeight: 700,
                  }}
                >
                  {skill.name}
                </p>
                <p
                  style={{
                    margin: "0 0 10px",
                    fontFamily: T.mono,
                    fontSize: "10px",
                    color: color,
                    letterSpacing: "0.5px",
                  }}
                >
                  {skill.category}
                </p>
                <div
                  className="h-1 rounded-xs overflow-hidden"
                  style={{
                    background: T.border,
                  }}
                >
                  <div
                    className="h-full rounded-xs"
                    style={{
                      width: `${skill.rating}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selected && (
        <SkillModal skill={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
