// DocCard.jsx — study material card shown in the discovery grid
import Stars  from "./shared/Stars";
import Badge  from "./shared/Badge";
import Avatar from "./shared/Avatar";

export default function DocCard({ m, onSelect, idx }) {
  // stagger animation delay class
  const delay = ["d1","d2","d3","d4","d5","d6"][Math.min(idx, 5)];

  return (
    <div
      className={`card anim-fadeup ${delay}`}
      onClick={() => onSelect(m)}
    >
      {/* ── Top colour strip ── */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg,
            hsl(${m.hue},68%,55%),
            hsl(${(m.hue + 55) % 360},68%,65%))`,
        }}
      />

      {/* ── Card body ── */}
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 13, flex: 1 }}>

        {/* Header: emoji + badge + title */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: `hsl(${m.hue},80%,96%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, flexShrink: 0,
          }}>
            {m.emoji}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Badge type={m.type} />
            <p className="clamp2" style={{ marginTop: 6, fontSize: 14, fontWeight: 700, lineHeight: 1.45, color: "var(--ink)" }}>
              {m.title}
            </p>
          </div>
        </div>

        {/* Course & Professor */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--ink-2)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
            </svg>
            <span style={{ fontWeight: 600 }}>{m.course}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--ink-4)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>{m.professor}</span>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {m.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag">#{t}</span>
          ))}
          {m.tags.length > 3 && (
            <span className="tag" style={{ color: "var(--ink-4)" }}>
              +{m.tags.length - 3}
            </span>
          )}
        </div>

        <div className="divider" />

        {/* Rating + download count */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Stars val={m.rating} />
            <span style={{ fontSize: 12, fontWeight: 800, color: "#B45309" }}>{m.rating}</span>
            <span style={{ fontSize: 12, color: "var(--ink-4)" }}>({m.reviews})</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--ink-4)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span style={{ fontWeight: 600 }}>{m.dl}</span>
          </div>
        </div>

        {/* Uploader + Download button */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar init={m.uInit} hue={m.hue} size={28} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", maxWidth: 90, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {m.uploader}
            </span>
          </div>
          <button
            className="dl-btn"
            onClick={(e) => { e.stopPropagation(); onSelect(m); }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </button>
        </div>

      </div>
    </div>
  );
}
