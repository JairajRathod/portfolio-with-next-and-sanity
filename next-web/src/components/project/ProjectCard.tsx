import { T } from "@/constant";
import { formateDate } from "@/helpers/formateDate";
import TechBadge from "../TechBadge";
import { ProjectDataInterface } from "@/types/projectData";

interface ProjectCardInterface<T> {
  project: ProjectDataInterface;
  onClick: (project: T) => void;
}

export default function ProjectCard<T>({
  project,
  onClick,
}: ProjectCardInterface<T>) {
  return (
    <div
      onClick={() => onClick(project)}
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: "12px",
        padding: "26px",
        cursor: "pointer",
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${T.borderAccent}`;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `1px solid ${T.border}`;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
        }}
      >
        <div>
          <h3
            style={{
              margin: "0 0 4px",
              fontFamily: T.font,
              fontSize: "17px",
              color: T.text,
              fontWeight: 700,
            }}
          >
            {project?.name}
          </h3>
          {project?.company && (
            <p
              style={{
                margin: 0,
                fontFamily: T.mono,
                fontSize: "11px",
                color: T.textDim,
              }}
            >
              @ {project?.company}
            </p>
          )}
        </div>
        <div
          style={{
            fontFamily: T.mono,
            fontSize: "10px",
            color: T.textDim,
            textAlign: "right",
            lineHeight: 1.5,
          }}
        >
          {formateDate(project?.startDate)}
          <br />
          <span style={{ color: !project?.endDate ? T.accent : T.textDim }}>
            {formateDate(project?.endDate)}
          </span>
        </div>
      </div>
      <p
        style={{
          margin: "0 0 16px",
          fontFamily: T.body,
          fontSize: "13px",
          color: T.textMuted,
          lineHeight: 1.65,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project?.description}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "16px",
        }}
      >
        {project?.technologies.map((t: string) => (
          <TechBadge key={t} tech={t} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href={project?.projectLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: T.mono,
            fontSize: "11px",
            color: T.accent,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View Project
        </a>
        <span
          style={{ fontFamily: T.mono, fontSize: "10px", color: T.textDim }}
        >
          {project?.screenshots.length} screenshots →
        </span>
      </div>
    </div>
  );
}
