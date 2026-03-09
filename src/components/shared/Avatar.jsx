// Avatar.jsx — circular avatar with initials and hue-based colour
// Props:
//   init  — 1–2 character string e.g. "EM"
//   hue   — number 0–360 for HSL background colour
//   size  — pixel size (default 32)

export default function Avatar({ init, hue, size = 32 }) {
  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `hsl(${hue}, 68%, 52%)`,
      }}
    >
      {String(init).slice(0, 2)}
    </div>
  );
}
