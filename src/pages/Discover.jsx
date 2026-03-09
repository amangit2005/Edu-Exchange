// pages/Discover.jsx — main search & browse page
import { useState, useMemo } from "react";
import DocCard from "../components/DocCard";
import { DATA, SUBJECTS, SEMESTERS, TYPES, SORTS, TYPE_EMOJI } from "../data/mockData";

export default function Discover({ onSelect }) {
  const [q,    setQ]    = useState("");
  const [subj, setSubj] = useState("All Subjects");
  const [sem,  setSem]  = useState("All Semesters");
  const [type, setType] = useState("All Types");
  const [sort, setSort] = useState("Most Downloaded");

  // ── Filtered + sorted results ──
  const results = useMemo(() => {
    let r = DATA.filter((m) => {
      const lq   = q.toLowerCase();
      const mQ   = !q
        || m.title.toLowerCase().includes(lq)
        || m.subject.toLowerCase().includes(lq)
        || m.professor.toLowerCase().includes(lq)
        || m.tags.some((t) => t.toLowerCase().includes(lq));
      const mS   = subj === "All Subjects"  || m.subject === subj;
      const mSm  = sem  === "All Semesters" || m.course.includes(sem.replace("Semester ","Semester "));
      const mT   = type === "All Types"     || m.type === type;
      return mQ && mS && mSm && mT;
    });

    if      (sort === "Most Downloaded") r = [...r].sort((a,b) => b.dl      - a.dl);
    else if (sort === "Highest Rated")   r = [...r].sort((a,b) => b.rating  - a.rating);
    else if (sort === "Newest First")    r = [...r].sort((a,b) => new Date(b.date) - new Date(a.date));
    else                                 r = [...r].sort((a,b) => b.reviews - a.reviews);
    return r;
  }, [q, subj, sem, type, sort]);

  const hasFilters = subj !== "All Subjects" || sem !== "All Semesters" || type !== "All Types";
  const clearAll   = () => { setSubj("All Subjects"); setSem("All Semesters"); setType("All Types"); };

  return (
    <div style={{ width: "100%", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 24 }}>

      {/* ════════════════ Hero banner ════════════════ */}
      <div
        className="anim-fadeup"
        style={{
          borderRadius: 24, padding: "40px 44px",
          position: "relative", overflow: "hidden",
          background: "linear-gradient(135deg,#0F172A 0%,#1E1B4B 45%,#312E81 100%)",
        }}
      >
        {/* ambient blobs */}
        <div style={{ position:"absolute", top:-50, right:-50, width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,.35),transparent 70%)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:-70, left:80,  width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle,rgba(245,158,11,.2),transparent 70%)",  pointerEvents:"none" }}/>

        <div style={{ position: "relative" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#818CF8", marginBottom:8 }}>
            Edu Exchange · Campus Hub
          </p>
          <h1 className="serif" style={{ fontSize:36, color:"white", lineHeight:1.18, marginBottom:7 }}>
            Discover Study Materials
          </h1>
          <p style={{ fontSize:15, color:"#94A3B8", marginBottom:28 }}>
            {DATA.length} free resources from your campus community
          </p>

          {/* Search input */}
          <div style={{ position:"relative", maxWidth:640 }}>
            <svg style={{ position:"absolute", left:15, top:"50%", transform:"translateY(-50%)", color:"#94A3B8", pointerEvents:"none" }}
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="inp"
              style={{
                paddingLeft:46, paddingRight:44, paddingTop:14, paddingBottom:14,
                fontSize:15, borderRadius:14,
                border:"1.5px solid rgba(255,255,255,.1)",
                background:"rgba(255,255,255,.09)", color:"white",
                backdropFilter:"blur(8px)", boxShadow:"0 4px 24px rgba(0,0,0,.22)",
              }}
              placeholder="Search by topic, course, professor…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            {q && (
              <button
                onClick={() => setQ("")}
                style={{
                  position:"absolute", right:13, top:"50%", transform:"translateY(-50%)",
                  background:"rgba(255,255,255,.15)", border:"none", borderRadius:"50%",
                  width:22, height:22, cursor:"pointer",
                  display:"flex", alignItems:"center", justifyContent:"center", color:"white",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>

          {/* Quick type pills */}
          <div className="scroll-x" style={{ marginTop:14 }}>
            {TYPES.slice(1).map((t) => (
              <button
                key={t}
                className={`pill ${type === t ? "pill-on" : "pill-off"}`}
                onClick={() => setType(type === t ? "All Types" : t)}
              >
                {TYPE_EMOJI[t]}{" "}{t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════ Filter bar ════════════════ */}
      <div
        className="anim-fadeup d1"
        style={{
          background:"white", borderRadius:16, padding:"14px 20px",
          display:"flex", alignItems:"center", flexWrap:"wrap", gap:10,
          border:"1px solid rgba(226,232,240,.8)", boxShadow:"var(--sh-card)",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color:"var(--ink-4)" }}>
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
        <span style={{ fontSize:13, fontWeight:600, color:"var(--ink-4)" }}>Filter:</span>

        <select className="inp" style={{ width:"auto", flex:"0 1 190px", fontSize:13 }} value={subj} onChange={(e) => setSubj(e.target.value)}>
          {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
        </select>

        <select className="inp" style={{ width:"auto", flex:"0 1 155px", fontSize:13 }} value={sem} onChange={(e) => setSem(e.target.value)}>
          {SEMESTERS.map((s) => <option key={s}>{s}</option>)}
        </select>

        {hasFilters && (
          <button
            className="btn"
            style={{ background:"#FFF1F2", color:"var(--rose)", borderRadius:8, padding:"9px 14px", fontSize:12 }}
            onClick={clearAll}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Clear
          </button>
        )}

        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:13, color:"var(--ink-4)" }}>Sort:</span>
          <select className="inp" style={{ width:"auto", fontSize:13 }} value={sort} onChange={(e) => setSort(e.target.value)}>
            {SORTS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* ════════════════ Result count ════════════════ */}
      <div className="anim-fadeup d2" style={{ display:"flex", alignItems:"center", gap:8 }}>
        <span style={{ fontSize:14, color:"var(--ink-2)" }}>
          <strong style={{ color:"var(--ink)" }}>{results.length}</strong>{" "}
          {results.length === 1 ? "resource" : "resources"}
          {q && <> for "<strong style={{ color:"var(--indigo)" }}>{q}</strong>"</>}
        </span>
        {hasFilters && (
          <span className="badge" style={{ background:"var(--indigo-bg)", color:"var(--indigo)" }}>Filtered</span>
        )}
      </div>

      {/* ════════════════ Card grid ════════════════ */}
      {results.length === 0 ? (
        <div
          className="anim-fadeup"
          style={{
            display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
            padding:"80px 24px", background:"white", borderRadius:24, border:"1px solid var(--line)",
          }}
        >
          <div style={{ fontSize:48, marginBottom:12 }}>🔍</div>
          <h3 style={{ fontSize:18, fontWeight:800, color:"var(--ink)", marginBottom:6 }}>No results found</h3>
          <p style={{ fontSize:14, color:"var(--ink-4)", marginBottom:20 }}>Try different keywords or clear your filters</p>
          <button className="btn btn-indigo" onClick={() => { setQ(""); clearAll(); }}>Clear all filters</button>
        </div>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:18 }}>
          {results.map((m, i) => (
            <DocCard key={m.id} m={m} onSelect={onSelect} idx={i} />
          ))}
        </div>
      )}

    </div>
  );
}
