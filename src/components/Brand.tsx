import { useId } from "react";

export function AppIcon({ size }: { size: number }) {
  return (
    <span className="app-icon" style={{ width: size, height: size }}>
      <img className="icon-light" src="/app-icon.svg" alt="" />
      <img className="icon-dark" src="/app-icon-dark.svg" alt="" />
    </span>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#" aria-label="FausCrew ana sayfa">
      <AppIcon size={38} />
      <span>
        FausCrew<span className="brand-dot">.</span>
      </span>
    </a>
  );
}

/** The roof-F of the app icon (1024 grid), stroked with the brand gradient. */
export function FausMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  const gradient = `faus-mark-${useId().replace(/[^\w-]/g, "")}`;
  return (
    <svg
      className={`faus-mark ${animated ? "mark-animated" : ""} ${className ?? ""}`}
      viewBox="0 0 1024 1024"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradient}
          gradientUnits="userSpaceOnUse"
          x1="332"
          y1="246"
          x2="692"
          y2="778"
        >
          <stop offset="0" className="mark-stop-1" />
          <stop offset="0.35" className="mark-stop-2" />
          <stop offset="1" className="mark-stop-3" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={`url(#${gradient})`}
        strokeWidth="76"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          className="mark-roof"
          pathLength={1}
          d="M692 398 L512 246 L332 398 V778"
        />
        <path className="mark-arm" pathLength={1} d="M332 578 H512" />
      </g>
      <circle
        className="mark-dot"
        cx="622"
        cy="578"
        r="44"
        fill={`url(#${gradient})`}
      />
    </svg>
  );
}

/** FausCrew's own house glyph (24 grid), shared by iOS and Android. */
export function FausHouseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      className="faus-house"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.75 11.25 12 3.5l9.25 7.75M16.25 6.9V4.75M5.25 9.4v9.1q0 2 2 2h9.5q2 0 2-2V9.4M9.75 20.5v-4.25q0-2.25 2.25-2.25t2.25 2.25v4.25" />
    </svg>
  );
}

/**
 * Port of the app's `MainScreenBackground` line field: static, irregular curves in
 * apricot, orange and berry that give empty space a little depth.
 */
const curves: [string, "apricot" | "orange" | "berry", number, number][] = [
  ["M-8 17C4 5 15 1 36-7", "apricot", 0.17, 0.85],
  ["M-6 30C11 17 30 7 52-6", "berry", 0.18, 0.8],
  ["M-10 8C30 14 74-6 110 26", "orange", 0.2, 1.15],
  ["M108 2C65 24 70 50-8 61", "berry", 0.18, 0.85],
  ["M72-7C89 5 102 13 108 31", "berry", 0.15, 0.8],
  ["M-12 33C28 20 58 74 112 64", "apricot", 0.16, 1.25],
  ["M24-6C12 39 42 59 90 108", "orange", 0.15, 0.9],
  ["M110 39C55 31 23 86-10 91", "berry", 0.17, 1],
  ["M-10 72C34 49 78 83 108 102", "apricot", 0.13, 0.8],
  ["M62 108C73 90 94 92 108 74", "orange", 0.15, 0.85],
  ["M42 106C58 92 83 88 107 60", "berry", 0.17, 0.8],
];

export function AmbientLines({
  className,
  weight = 1,
}: {
  className?: string;
  weight?: number;
}) {
  return (
    <svg
      className={`ambient-lines ${className ?? ""}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {curves.map(([d, tone, opacity, width]) => (
        <path
          key={d}
          d={d}
          className={`line-${tone}`}
          strokeOpacity={opacity}
          strokeWidth={width * weight}
          vectorEffect="non-scaling-stroke"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** Decorative geometry of the app's `BrandHeroCardBackground`. */
export function HeroGeometry() {
  return (
    <span className="hero-geometry" aria-hidden="true">
      <span className="geo-disc" />
      <span className="geo-ring geo-ring-1" />
      <span className="geo-ring geo-ring-2" />
      <span className="geo-capsule geo-capsule-white" />
      <span className="geo-capsule geo-capsule-orange" />
    </span>
  );
}
