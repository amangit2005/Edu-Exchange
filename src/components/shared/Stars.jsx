// Stars.jsx — reusable star rating component
// Props:
//   val        — numeric rating (0–5), used for display
//   interactive — if true, user can click to set rating
//   hover      — hovered star index (controlled from parent)
//   onHover    — setter for hover state
//   onSet      — setter for chosen rating
//   size       — pixel size of each star

export default function Stars({
  val = 0,
  interactive = false,
  hover = 0,
  onHover,
  onSet,
  size = 13,
}) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => {
        // ── Interactive (click-to-rate) mode ──
        if (interactive) {
          const filled = (hover || val) >= s;
          return (
            <button
              key={s}
              className="star-btn"
              onMouseEnter={() => onHover(s)}
              onMouseLeave={() => onHover(0)}
              onClick={() => onSet(s)}
            >
              <svg width={size + 3} height={size + 3} viewBox="0 0 24 24">
                <path
                  d="M12 2l2.9 5.9L21 9l-4.5 4.4 1.1 6.6L12 17l-5.6 3 1.1-6.6L3 9l6.1-1.1z"
                  fill={filled ? "#F59E0B" : "#E2E8F0"}
                />
              </svg>
            </button>
          );
        }

        // ── Display mode (partial fill support) ──
        const filled  = val >= s;
        const partial = !filled && val > s - 1;
        const pct     = partial ? `${(val - (s - 1)) * 100}%` : "0%";
        const gid     = `grad-${s}`;

        return (
          <svg key={s} width={size} height={size} viewBox="0 0 24 24">
            {partial && (
              <defs>
                <linearGradient id={gid}>
                  <stop offset={pct}  stopColor="#F59E0B" />
                  <stop offset={pct}  stopColor="#E2E8F0" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M12 2l2.9 5.9L21 9l-4.5 4.4 1.1 6.6L12 17l-5.6 3 1.1-6.6L3 9l6.1-1.1z"
              fill={filled ? "#F59E0B" : partial ? `url(#${gid})` : "#E2E8F0"}
            />
          </svg>
        );
      })}
    </div>
  );
}
