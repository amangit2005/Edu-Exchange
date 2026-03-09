// Navbar.jsx — sticky top navigation bar
import Avatar from "./shared/Avatar";

export default function Navbar({ tab, setTab }) {
  const tabs = ["Discover", "Upload", "Dashboard"];

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* ── Logo ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, boxShadow: "0 4px 12px rgba(79,70,229,.35)",
          }}>
            📚
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-.02em" }}>
            Edu<span style={{ color: "var(--indigo)" }}>Exchange</span>
          </span>
        </div>

        {/* ── Tab links ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {tabs.map((t) => (
            <button
              key={t}
              className={`nav-tab${tab === t ? " on" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Right side: Upload CTA + avatar ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            className="btn btn-amber"
            style={{ padding: "9px 16px", fontSize: 13, borderRadius: 10 }}
            onClick={() => setTab("Upload")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17,8 12,3 7,8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Upload
          </button>
          <Avatar init="AJ" hue={160} size={36} />
        </div>

      </div>
    </nav>
  );
}
