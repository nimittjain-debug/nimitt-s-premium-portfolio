import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed font-body font-bold"
      style={{
        bottom: 32,
        right: 32,
        zIndex: 50,
        background: "#E8A838",
        color: "#0D1B2A",
        fontSize: 10,
        letterSpacing: "2px",
        padding: "12px 16px",
        borderRadius: 0,
        border: "none",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
    >
      ↑ TOP
    </button>
  );
};

export default BackToTop;
