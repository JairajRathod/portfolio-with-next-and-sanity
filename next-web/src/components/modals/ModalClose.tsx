import { T } from "@/constant";

export default function ModalClose({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      style={{
        background: "rgba(255,255,255,0.06)",
        border: `1px solid ${T.border}`,
        borderRadius: "8px",
        color: T.textMuted,
        cursor: "pointer",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        flexShrink: 0,
        transition: "all 0.15s",
      }}
    >
      ×
    </button>
  );
}
