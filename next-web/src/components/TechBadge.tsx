import { T } from "@/constant";

export default function TechBadge({ tech }: { tech: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        background: T.accentDim,
        border: `1px solid rgba(99,202,183,0.3)`,
        borderRadius: "4px",
        fontSize: "11px",
        fontFamily: T.mono,
        color: T.accent,
        letterSpacing: "0.5px",
      }}
    >
      {tech}
    </span>
  );
}
