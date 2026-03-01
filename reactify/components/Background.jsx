export default function Background({ bg }) {
  const type = bg?.type || "solid";

  if (type === "gradient") {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background:
            bg.gradient || "linear-gradient(135deg, #0b0d10, #111827)",
        }}
      />
    );
  }

  if (type === "image") {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          backgroundImage: `url(${bg.src})`,
          backgroundSize: bg.size || "cover",
          backgroundPosition: bg.position || "center",
          filter: bg.filter || "none",
          transform: "scale(1.02)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: bg.overlay || "rgba(0,0,0,0.55)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: bg?.solid || "#0b0d10",
      }}
    />
  );
}
