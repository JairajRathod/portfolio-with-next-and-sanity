import { useState } from "react";
import ModalOverlay from "./ModalOverlay";
import { T } from "@/constant";
import ModalClose from "./ModalClose";
import { formateDate } from "@/helpers/formateDate";
import TechBadge from "../TechBadge";

export default function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  if (!project) return null;

  return (
    <ModalOverlay onClose={onClose}>
      {/* Header */}
      <div
        style={{
          padding: "28px 32px 20px",
          borderBottom: `1px solid ${T.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontFamily: T.font,
              fontSize: "24px",
              color: T.text,
              fontWeight: 700,
            }}
          >
            {project.name}
          </h2>
          {project.company && (
            <p
              style={{
                margin: "6px 0 0",
                fontFamily: T.mono,
                fontSize: "12px",
                color: T.accent,
              }}
            >
              @ {project.company}
            </p>
          )}
        </div>
        <ModalClose onClose={onClose} />
      </div>

      {/* Screenshots */}
      <div style={{ padding: "24px 32px 0" }}>
        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            border: `1px solid ${T.border}`,
            marginBottom: "10px",
            position: "relative",
          }}
        >
          <img
            src={project.screenshots[activeImg]}
            alt=""
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(0,0,0,0.65)",
              borderRadius: "6px",
              padding: "4px 10px",
              fontFamily: T.mono,
              fontSize: "11px",
              color: T.textDim,
            }}
          >
            {activeImg + 1} / {project.screenshots.length}
          </div>
        </div>
        {project.screenshots.length > 1 && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
            {project.screenshots.map((s, i) => (
              <img
                key={i}
                src={s}
                alt=""
                onClick={() => setActiveImg(i)}
                style={{
                  width: "72px",
                  height: "48px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  cursor: "pointer",
                  border:
                    i === activeImg
                      ? `2px solid ${T.accent}`
                      : "2px solid transparent",
                  opacity: i === activeImg ? 1 : 0.45,
                  transition: "all 0.15s",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div
        style={{
          padding: "20px 32px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px",
        }}
      >
        <div
          style={{
            gridColumn: "1 / -1",
            background: T.surface,
            borderRadius: "10px",
            padding: "18px 20px",
            border: `1px solid ${T.border}`,
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.textDim,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Description
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
            {project.fullDescription}
          </p>
        </div>
        {[
          ["Start Date", formateDate(project.startDate)],
          ["End Date", formateDate(project.endDate)],
        ].map(([k, v]) => (
          <div
            key={k}
            style={{
              background: T.surface,
              borderRadius: "10px",
              padding: "16px 20px",
              border: `1px solid ${T.border}`,
            }}
          >
            <p
              style={{
                margin: "0 0 5px",
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
                color:
                  !project.endDate && k === "End Date" ? T.accent : T.textMuted,
              }}
            >
              {v}
            </p>
          </div>
        ))}
        <div
          style={{
            gridColumn: "1 / -1",
            background: T.surface,
            borderRadius: "10px",
            padding: "16px 20px",
            border: `1px solid ${T.border}`,
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontFamily: T.mono,
              fontSize: "10px",
              color: T.textDim,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Technologies
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.technologies.map((t: string) => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>
        </div>
        <div
          style={{
            gridColumn: "1 / -1",
            background: T.accentDim,
            borderRadius: "10px",
            padding: "16px 20px",
            border: `1px solid ${T.borderAccent}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 3px",
                fontFamily: T.mono,
                fontSize: "10px",
                color: T.textDim,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Project Link
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: T.mono,
                fontSize: "12px",
                color: T.accent,
              }}
            >
              {project.projectLink}
            </p>
          </div>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "9px 18px",
              background: T.accent,
              color: "#050510",
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: T.mono,
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Visit
          </a>
        </div>
      </div>
    </ModalOverlay>
  );
}
