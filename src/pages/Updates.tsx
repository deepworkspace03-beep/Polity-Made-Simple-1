import { Link } from "react-router-dom";
import { Zap, ArrowRight } from "lucide-react";
import { UPDATES } from "../data/updates";

export default function Updates() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">

      {/* Header */}
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
        {UPDATES.map((update) =>
          update.href ? (
            <Link
              key={update.id}
              to={update.href}
              className="card-interactive group flex items-start gap-4 p-4"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-fg">{update.text}</p>
                {update.date && (
                  <p className="mt-1 font-mono text-[10px] text-muted">{update.date}</p>
                )}
              </div>
              <ArrowRight
                size={15}
                className="mt-1 shrink-0 text-muted transition-colors group-hover:text-brand"
              />
            </Link>
          ) : (
            <div key={update.id} className="card flex items-start gap-4 p-4">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-fg">{update.text}</p>
                {update.date && (
                  <p className="mt-1 font-mono text-[10px] text-muted">{update.date}</p>
                )}
              </div>
            </div>
          )
        )}
      </div>

      {/* Admin note */}
      <div className="mt-8 border border-dashed border-edge p-4 text-xs text-muted">
        <span className="font-semibold text-fg">Admin:</span> To add or edit announcements,
        open the file{" "}
        <code className="font-mono text-brand">src/data/updates.ts</code> — instructions
        are written inside that file in plain language.
      </div>

      <div className="mt-6 text-center">
        <Link to="/" className="text-sm font-medium text-brand hover:underline">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
