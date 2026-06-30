import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { Update } from "../data/updates";

/**
 * Renders an update as a directly-clickable link.
 *  • If the update has a `driveUrl` → opens that file in a new tab.
 *  • Else if it has an `href` → routes to that page.
 *  • Otherwise → renders as plain, non-clickable text (e.g. placeholders).
 * Used by the desktop hero panel, the mobile ticker and the Updates page so
 * every linked update is clickable straight from the section (no "View All").
 *
 * `decorative` marks a visual duplicate (e.g. the second copy in a marquee
 * loop) as hidden from screen readers and keyboard focus.
 */
export default function UpdateLink({
  update,
  className,
  children,
  decorative = false,
}: {
  update: Update;
  className?: string;
  children: ReactNode;
  decorative?: boolean;
}) {
  const a11y = decorative ? { "aria-hidden": true, tabIndex: -1 } : {};

  if (update.driveUrl) {
    return (
      <a
        href={update.driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...a11y}
      >
        {children}
      </a>
    );
  }
  if (update.href) {
    return (
      <Link to={update.href} className={className} {...a11y}>
        {children}
      </Link>
    );
  }
  // No link → plain, non-clickable text (e.g. "More updates coming soon.").
  return (
    <span className={className} {...a11y}>
      {children}
    </span>
  );
}
