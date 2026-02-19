import { T } from "@/constant";

export default function Nav({ active }: { active: string }) {
  const links = ["Hero", "Skills", "Experience", "Projects", "Contact"];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: "rgba(5,5,16,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${T.border}`,
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
      <div style={{ display: "flex", gap: "30px" }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: T.mono,
              fontSize: "12px",
              color: active === l.toLowerCase() ? T.accent : T.textDim,
              textDecoration: "none",
              letterSpacing: "1px",
              transition: "color 0.2s",
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
