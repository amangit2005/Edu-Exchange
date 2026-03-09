// pages/Upload.jsx — file upload + categorisation form
import { useState, useRef } from "react";

export default function Upload() {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState(null);
  const ref = useRef(null);

  const fields = [
    { label: "Document Title",       placeholder: "e.g. Complete OS Notes – Unit 3" },
    { label: "Course Name",          placeholder: "e.g. BCA – Semester 4" },
    { label: "Professor / Instructor", placeholder: "e.g. Dr. Sharma" },
    { label: "Topic / Chapter",      placeholder: "e.g. CPU Scheduling, Deadlocks" },
  ];

  return (
    <div style={{ width:"100%", maxWidth:720, margin:"0 auto", padding:"40px 40px", display:"flex", flexDirection:"column", gap:24 }}>

      {/* ── Heading ── */}
      <div className="anim-fadeup">
        <p style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"var(--indigo)", marginBottom:6 }}>
          Contribute
        </p>
        <h1 className="serif" style={{ fontSize:30, color:"var(--ink)", marginBottom:4 }}>Share your materials</h1>
        <p style={{ fontSize:14, color:"var(--ink-3)" }}>
          Help fellow students excel — your notes could change someone's grade
        </p>
      </div>

      {/* ── Drag & drop zone ── */}
      <div
        className={`drag-zone anim-fadeup d1${drag ? " drag-on" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); setFile(e.dataTransfer.files[0]); }}
        onClick={() => ref.current?.click()}
      >
        <input
          ref={ref}
          type="file"
          style={{ display:"none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div style={{
          fontSize: 44, marginBottom: 12, display: "inline-block",
          animation: drag ? "none" : "floatY 3s ease-in-out infinite",
        }}>
          {file ? "✅" : "☁️"}
        </div>

        {file ? (
          <div>
            <p style={{ fontWeight:700, color:"var(--indigo)", fontSize:15 }}>{file.name}</p>
            <p style={{ fontSize:12, color:"var(--ink-4)", marginTop:4 }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB · Click to change
            </p>
          </div>
        ) : (
          <>
            <p style={{ fontWeight:700, color:"var(--ink)", fontSize:15, marginBottom:4 }}>
              Drop your file here, or click to browse
            </p>
            <p style={{ fontSize:13, color:"var(--ink-4)" }}>PDF, DOCX, PPTX · Max 50 MB</p>
          </>
        )}
      </div>

      {/* ── Categorisation form ── */}
      <div
        className="anim-fadeup d2"
        style={{
          background:"white", borderRadius:20,
          border:"1px solid var(--line)", padding:24,
          display:"flex", flexDirection:"column", gap:16,
          boxShadow:"var(--sh-card)",
        }}
      >
        {fields.map(({ label, placeholder }) => (
          <div key={label}>
            <label style={{
              display:"block", fontSize:12, fontWeight:700,
              color:"var(--ink-3)", textTransform:"uppercase",
              letterSpacing:".06em", marginBottom:6,
            }}>
              {label}
            </label>
            <input className="inp" placeholder={placeholder} />
          </div>
        ))}

        <div>
          <label style={{
            display:"block", fontSize:12, fontWeight:700,
            color:"var(--ink-3)", textTransform:"uppercase",
            letterSpacing:".06em", marginBottom:6,
          }}>
            Description
          </label>
          <textarea
            className="inp"
            rows={3}
            placeholder="What topics does this cover? Any tips for users?"
          />
        </div>

        <button
          className="btn btn-amber"
          style={{ width:"100%", padding:"14px", fontSize:15, borderRadius:12, marginTop:4 }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="17,8 12,3 7,8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Publish to Edu Exchange
        </button>
      </div>

    </div>
  );
}
