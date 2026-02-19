import { T } from "@/constant";
import { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: T.font,
        fontSize: "clamp(28px, 5vw, 44px)",
        color: T.text,
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: "-0.5px",
      }}
    >
      {children}
    </h2>
  );
}
