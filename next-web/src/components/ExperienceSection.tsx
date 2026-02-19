import { T } from "@/constant";
import { formatMonthYear } from "@/helpers/formatMonthYear";
import { EXPERIENCES } from "@/sampleData";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import TechBadge from "./TechBadge";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ padding: "100px 24px", borderBottom: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <SectionLabel>Career</SectionLabel>
          <SectionHeading>Experience</SectionHeading>
        </div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "131px",
              top: "12px",
              bottom: "12px",
              width: "1px",
              background: `linear-gradient(to bottom, ${T.accent}44, ${T.border}, transparent)`,
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "48px" }}
          >
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "32px",
                  alignItems: "start",
                }}
              >
                {/* Date column */}
                <div style={{ textAlign: "right", position: "relative" }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: T.mono,
                      fontSize: "11px",
                      color: T.textDim,
                      lineHeight: 1.6,
                    }}
                  >
                    {formatMonthYear(exp.startDate)}
                    <br />
                    <span
                      style={{ color: !exp.endDate ? T.accent : T.textDim }}
                    >
                      {exp.endDate ? formatMonthYear(exp.endDate) : "Present"}
                    </span>
                  </p>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      right: "-38px",
                      top: "4px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: i === 0 ? T.accent : T.border,
                      border: `2px solid ${i === 0 ? T.accent : T.textDim}`,
                      boxShadow: i === 0 ? `0 0 12px ${T.accent}66` : "none",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    background: T.surface,
                    border: `1px solid ${T.border}`,
                    borderRadius: "12px",
                    padding: "24px 26px",
                    transition: "border 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.border = `1px solid ${T.borderAccent}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.border = `1px solid ${T.border}`)
                  }
                >
                  <div style={{ marginBottom: "12px" }}>
                    <h3
                      style={{
                        margin: "0 0 4px",
                        fontFamily: T.font,
                        fontSize: "18px",
                        color: T.text,
                        fontWeight: 700,
                      }}
                    >
                      {exp.position}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: T.mono,
                        fontSize: "12px",
                        color: T.accent,
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <p
                    style={{
                      margin: "0 0 16px",
                      fontFamily: T.body,
                      fontSize: "13.5px",
                      color: T.textMuted,
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.description}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {exp.tech.map((t) => (
                      <TechBadge key={t} tech={t} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
