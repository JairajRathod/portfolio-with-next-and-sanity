import { T } from "@/constant";
import { useEffect } from "react";

export default function ModalOverlay({ children, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(5,5,15,0.88)",
        backdropFilter: "blur(14px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "820px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0c0c1c",
          border: `1px solid ${T.border}`,
          borderRadius: "16px",
          boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,202,183,0.08)`,
          animation: "slideUp 0.25s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}
