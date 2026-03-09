// Modal.jsx — material detail modal with reviews
import { useState, useEffect } from "react";
import Stars  from "./shared/Stars";
import Badge  from "./shared/Badge";
import Avatar from "./shared/Avatar";

export default function Modal({ m, onClose }) {
  const [coms, setComs] = useState([
    { id: 1, user: "Ritika S.", init: "RS", hue: 270, text: "Saved my semester! Every concept is explained with examples — incredibly thorough.", rating: 5, date: "Nov 8, 2025" },
    { id: 2, user: "Mohit K.",  init: "MK", hue: 160, text: "Clean and well-organized. Could use more practice problems but overall excellent.", rating: 4, date: "Oct 30, 2025" },
  ]);
  const [txt,  setTxt]  = useState("");
  const [star, setStar] = useState(0);
  const [hov,  setHov]  = useState(0);
  const [ok,   setOk]   = useState(false);

  // Close on Escape key
  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  const submit = () => {
    if (!txt.trim() || !star) return;
    setComs((prev) => [
      { id: Date.now(), user: "You", init: "YO", hue: 239, text: txt, rating: star, date: "Just now" },
      ...prev,
    ]);
    setTxt(""); setStar(0); setOk(true);
    setTimeout(() => setOk(false), 3000);
  };

  const fmt = (d) =>
    new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>

        {/* ── Colour strip ── */}
        <div style={{
          height: 4,
          background: `linear-gradient(90deg,hsl(${m.hue},68%,55%),hsl(${(m.hue+55)%360},68%,65%))`,
          borderRadius: "28px 28px 0 0",
        }}/>

        {/* ── Sticky header ── */}
        <div style={{
          position: "sticky", top: 0, zIndex: 10,
          background: "rgba(255,255,255,.95)", backdropFilter: "blur(12px)",
          padding: "15px 24px", borderBottom: "1px solid var(--line)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: `hsl(${m.hue},80%,96%)`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}>
              {m.emoji}
            </div>
            <div>
              <Badge type={m.type} />
              <p style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 2 }}>{m.course}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 34, height: 34, borderRadius: "50%",
              background: "var(--bg)", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E2E8F0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* ── Scrollable content ── */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 22 }}>

          {/* Title + rating */}
          <div>
            <h2 className="serif" style={{ fontSize: 22, color: "var(--ink)", lineHeight: 1.3, marginBottom: 10 }}>
              {m.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
              <Stars val={m.rating} size={15} />
              <span style={{ fontWeight: 800, color: "#B45309", fontSize: 14 }}>{m.rating}</span>
              <span style={{ color: "var(--ink-4)", fontSize: 13 }}>({m.reviews} reviews)</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--line)" }}/>
              <span style={{ fontSize: 13, color: "var(--ink-3)" }}>{m.dl} downloads</span>
            </div>
          </div>

          {/* Stats: pages / size / date */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
            {[["📄","Pages",m.pages],["💾","Size",m.size],["📅","Uploaded",fmt(m.date)]].map(([ico,lbl,val]) => (
              <div key={lbl} style={{ background: "var(--bg)", borderRadius: 12, padding: "14px 10px", textAlign: "center", border: "1px solid var(--line)" }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>{ico}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>{val}</div>
                <div style={{ fontSize: 11, color: "var(--ink-4)", marginTop: 2 }}>{lbl}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 8 }}>About</p>
            <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.72 }}>{m.desc}</p>
          </div>

          {/* Info grid */}
          <div style={{ background: "var(--indigo-bg)", borderRadius: 14, padding: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[["Professor",m.professor],["Topic",m.topic],["Uploaded by",m.uploader],["Subject",m.subject]].map(([l,v]) => (
              <div key={l}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#818CF8", textTransform: "uppercase", letterSpacing: ".05em" }}>{l}</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", marginTop: 3 }}>{v}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {m.tags.map((t) => (
              <span key={t} className="tag" style={{ background: "white", border: "1.5px solid var(--line)" }}>#{t}</span>
            ))}
          </div>

          {/* Download CTA */}
          <button className="btn btn-amber" style={{ width: "100%", padding: "15px", fontSize: 15, borderRadius: 14 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Instant Download — Free
          </button>

          <div className="divider"/>

          {/* Community Reviews */}
          <div>
            <p style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              💬 Community Feedback
              <span className="count-pill">{coms.length}</span>
            </p>

            {/* Write review form */}
            <div style={{ background: "var(--bg)", borderRadius: 14, padding: 16, marginBottom: 16, border: "1px solid var(--line)" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 10 }}>
                Write a review
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
                <Stars interactive val={star} hover={hov} onHover={setHov} onSet={setStar} size={18} />
                {star > 0 && (
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#B45309", marginLeft: 6 }}>
                    {["","Poor","Fair","Good","Great","Excellent!"][star]}
                  </span>
                )}
              </div>
              <textarea
                className="inp"
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
                placeholder="What did you find helpful?"
                rows={3}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                {ok && <span style={{ fontSize: 12, fontWeight: 700, color: "var(--green)" }}>✓ Review posted!</span>}
                <button
                  className="btn btn-indigo"
                  style={{ marginLeft: "auto", padding: "9px 18px", fontSize: 13, opacity: (!txt.trim() || !star) ? 0.45 : 1 }}
                  onClick={submit}
                >
                  Post Review
                </button>
              </div>
            </div>

            {/* Review list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {coms.map((c) => (
                <div key={c.id} style={{ display: "flex", gap: 12 }}>
                  <Avatar init={c.init} hue={c.hue} size={34} />
                  <div style={{ flex: 1, background: "white", border: "1px solid var(--line)", borderRadius: 12, padding: "12px 14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{c.user}</span>
                      <span style={{ fontSize: 11, color: "var(--ink-4)" }}>{c.date}</span>
                    </div>
                    <Stars val={c.rating} size={11} />
                    <p style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 7, lineHeight: 1.62 }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
