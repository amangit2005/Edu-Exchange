// pages/Dashboard.jsx — personal stats and uploads list
import { DATA } from "../data/mockData";
import Badge from "../components/shared/Badge";

const STATS = [
  { label: "Uploads",    value: "12",    icon: "📤", hue: 239 },
  { label: "Downloads",  value: "1,204", icon: "📥", hue: 160 },
  { label: "Reviews",    value: "48",    icon: "⭐", hue: 38  },
  { label: "Avg Rating", value: "4.7",   icon: "🏆", hue: 0   },
];

export default function Dashboard() {
  return (
    <div style={{ width:"100%", padding:"40px 40px", display:"flex", flexDirection:"column", gap:24 }}>

      {/* ── Heading ── */}
      <div className="anim-fadeup">
        <p style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"var(--indigo)", marginBottom:6 }}>
          Dashboard
        </p>
        <h1 className="serif" style={{ fontSize:30, color:"var(--ink)" }}>Your impact</h1>
      </div>

      {/* ── Stat cards ── */}
      <div
        className="anim-fadeup d1"
        style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14 }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              background:"white", borderRadius:20, padding:20,
              border:"1px solid var(--line)", boxShadow:"var(--sh-card)",
              textAlign:"center",
            }}
          >
            <div style={{ fontSize:28, marginBottom:8 }}>{s.icon}</div>
            <div style={{ fontSize:26, fontWeight:900, color:`hsl(${s.hue},68%,45%)` }}>{s.value}</div>
            <div style={{ fontSize:12, color:"var(--ink-4)", fontWeight:500, marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Uploads list ── */}
      <div
        className="anim-fadeup d2"
        style={{
          background:"white", borderRadius:20,
          border:"1px solid var(--line)", padding:24,
          boxShadow:"var(--sh-card)",
        }}
      >
        <p style={{ fontSize:15, fontWeight:800, color:"var(--ink)", marginBottom:16 }}>My Uploads</p>

        {DATA.slice(0, 4).map((m, i) => (
          <div
            key={m.id}
            style={{
              display:"flex", alignItems:"center", gap:14, padding:"12px 0",
              borderBottom: i < 3 ? "1px solid var(--line)" : "none",
            }}
          >
            {/* emoji icon */}
            <div style={{
              width:42, height:42, borderRadius:10,
              background:`hsl(${m.hue},80%,96%)`,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:20, flexShrink:0,
            }}>
              {m.emoji}
            </div>

            {/* title + meta */}
            <div style={{ flex:1, minWidth:0 }}>
              <p style={{
                fontSize:13, fontWeight:700, color:"var(--ink)",
                overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
              }}>
                {m.title}
              </p>
              <p style={{ fontSize:12, color:"var(--ink-4)", marginTop:2 }}>
                {m.dl} downloads · {m.rating}★
              </p>
            </div>

            <Badge type={m.type} />
          </div>
        ))}
      </div>

    </div>
  );
}
