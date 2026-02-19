export const T = {
  bg: "#050510",
  surface: "rgba(255,255,255,0.025)",
  surfaceHover: "rgba(255,255,255,0.045)",
  border: "rgba(255,255,255,0.08)",
  borderAccent: "rgba(99,202,183,0.35)",
  text: "#f0ece4",
  textMuted: "#9090a8",
  textDim: "#6b6b80",
  accent: "#63cab7",
  accentDim: "rgba(99,202,183,0.12)",
  font: "'Playfair Display', serif",
  mono: "'JetBrains Mono', monospace",
  body: "'Lora', serif",
};

export const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: T.surface,
  border: `1px solid ${T.border}`,
  borderRadius: "8px",
  color: T.text,
  fontFamily: T.body,
  fontSize: "13.5px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border 0.2s",
};
