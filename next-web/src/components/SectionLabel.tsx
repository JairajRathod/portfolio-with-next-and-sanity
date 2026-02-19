import { T } from "@/constant";
import { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 8px",
        fontFamily: T.mono,
        fontSize: "11px",
        color: T.accent,
        letterSpacing: "3px",
        textTransform: "uppercase",
      }}
    >
      — {children}
    </p>
  );
}
