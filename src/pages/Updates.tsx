import { Link } from "react-router-dom";
import { Zap, ExternalLink } from "lucide-react";
import { UPDATES, isUpdateNew } from "../data/updates";
import NewBadge from "../components/NewBadge";

export default function Updates() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">

      {/* Header */}

      <div className="mt-6 text-center">
        <Link to="/" className="text-sm font-medium text-brand hover:underline">
          ← Back to Home
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center gradient-brand text-white">
          <Zap size={12} fill="currentColor" />
        </span>
        <p className="eyebrow text-[11px]">Announcements</p>
      </div>
      <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
        Latest Updates
      </h1>
      <p className="mt-2 text-sm text-muted">
        New content, exam news, and site announcements — all in one place.
      </p>

      {/* Update list */}
      <div className="mt-8 space-y-2">
        {UPDATES.map((update) => {
          const hasLink = update.href || update.driveUrl;
          const Component = hasLink ? "a" : "div";
          const linkProps = hasLink
            ? {
                href: update.driveUrl || update.href,
                ...(update.driveUrl && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                }),
              }
            : {};

          return (
            <Component
              key={update.id}
              {...linkProps}
              className={`flex items-start gap-4 p-4 transition-all ${
                hasLink
                  ? "card-interactive group cursor-pointer"
                  : "card"
              }`}
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-fg">{update.text}</p>
                  {isUpdateNew(update) && <NewBadge />}
                </div>
                {update.date && (
                  <p className="mt-1 font-mono text-[10px] text-muted">{update.date}</p>
                )}
              </div>
              {hasLink && (
                <ExternalLink
                  size={15}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              )}
            </Component>
          );
        })}
      </div>

    </section>
  );
}
