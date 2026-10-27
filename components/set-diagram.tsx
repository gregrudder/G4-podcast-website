export function SetDiagram({
  variant,
}: {
  variant: "couch" | "desk";
}) {
  const title = variant === "couch" ? "Couch set" : "Desk set";
  return (
    <figure className="border border-line bg-raised">
      <svg
        viewBox="0 0 640 360"
        role="img"
        aria-label={`${title} diagram. Not a photograph of the studio.`}
        className="h-auto w-full"
      >
        <rect width="640" height="360" fill="#141414" />
        <rect
          x="32"
          y="28"
          width="576"
          height="304"
          fill="none"
          stroke="#2e2e2e"
          strokeWidth="1.5"
        />
        <rect x="48" y="48" width="120" height="68" fill="#3a1218" stroke="#d01010" />
        <text x="108" y="88" textAnchor="middle" fill="#f4f1ea" fontSize="14">
          TV
        </text>
        {variant === "couch" ? (
          <rect
            x="180"
            y="200"
            width="280"
            height="72"
            rx="16"
            fill="none"
            stroke="#f4f1ea"
            strokeWidth="2"
          />
        ) : (
          <>
            <rect
              x="210"
              y="168"
              width="220"
              height="28"
              fill="none"
              stroke="#f4f1ea"
              strokeWidth="2"
            />
            <rect
              x="230"
              y="210"
              width="36"
              height="36"
              fill="none"
              stroke="#c8c2b8"
            />
            <rect
              x="374"
              y="210"
              width="36"
              height="36"
              fill="none"
              stroke="#c8c2b8"
            />
          </>
        )}
        {[150, 300, 450].map((x) => (
          <g key={x} stroke="#f4f1ea" fill="none" strokeWidth="1.5">
            <rect x={x} y="120" width="28" height="18" />
            <path d={`M${x + 14} 138 L${x + 14} 160`} />
            <path d={`M${x + 4} 160 L${x + 24} 160`} />
          </g>
        ))}
      </svg>
      <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
        {title}. Diagram only. This is not a photograph of the room or of any person.
      </figcaption>
    </figure>
  );
}
