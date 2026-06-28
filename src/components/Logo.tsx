import { useId } from "react";

/**
 * Polity Made Simple logo — a minimal "institution" mark (pediment +
 * columns) on a blue→teal gradient. Pure SVG, so it stays crisp at any
 * size and looks the same in light and dark mode.
 *
 * To restyle: change the two gradient stop colors below.
 */
export default function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  // Unique gradient id so multiple logos on one page never clash.
  const gradId = "pmsGrad-" + useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label="Polity Made Simple"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B6BFF" />
          <stop offset="1" stopColor="#34D39E" />
        </linearGradient>
      </defs>

      {/* rounded square background */}
      <rect width="48" height="48" rx="12" fill={`url(#${gradId})`} />

      {/* white institution glyph: pediment, lintel, columns, base */}
      <g fill="#ffffff">
        <path d="M24 11 L35.5 17.6 H12.5 Z" />
        <rect x="12.5" y="18.8" width="23" height="2.4" rx="1.2" />
        <rect x="15.4" y="22.4" width="2.6" height="10.6" rx="1" />
        <rect x="22.7" y="22.4" width="2.6" height="10.6" rx="1" />
        <rect x="30" y="22.4" width="2.6" height="10.6" rx="1" />
        <rect x="11.8" y="34.2" width="24.4" height="2.6" rx="1.2" />
      </g>
    </svg>
  );
}
