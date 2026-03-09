// Badge.jsx — coloured type badge (Notes / Exam Paper / Assignment / Guide)
import { TYPE_STYLE } from "../../data/mockData";

export default function Badge({ type }) {
  const s = TYPE_STYLE[type] || { bg: "#F1F5F9", color: "#475569", dot: "#94A3B8" };

  return (
    <span
      className="badge"
      style={{ background: s.bg, color: s.color }}
    >
      {/* coloured dot */}
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: s.dot,
          display: "inline-block",
        }}
      />
      {type}
    </span>
  );
}
