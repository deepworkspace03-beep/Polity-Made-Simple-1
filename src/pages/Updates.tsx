import { ExternalLink, ArrowRight, Send } from "lucide-react";
import { UPDATES } from "../data/updates";
import { SITE } from "../config";
import PageHeader from "../components/PageHeader";
import UpdateLink from "../components/UpdateLink";

export default function Updates() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <PageHeader
        crumb="Updates"
        eyebrow="Announcements"
        title="Latest Updates"
        subtitle="New content, exam news, and site announcements — all in one place."
      />

      {/* Update list — UpdateLink routes internal links client-side and
          opens Drive files in a new tab (same behaviour as the homepage). */}
      <div className="mt-7 space-y-2">
        {UPDATES.map((update) => {
          const hasLink = Boolean(update.href || update.driveUrl);
          return (
            <UpdateLink
              key={update.id}
              update={update}
              className={`flex items-start gap-4 p-4 transition-all ${
                hasLink ? "card-interactive group cursor-pointer" : "card"
              }`}
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-fg">{update.text}</p>
                  {update.isNew && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-500">
                      NEW
                    </span>
                  )}
                </div>
                {update.date && (
                  <p className="mt-1 font-mono text-[10px] text-muted">{update.date}</p>
                )}
              </div>
              {update.driveUrl && (
                <ExternalLink
                  size={15}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              )}
              {!update.driveUrl && update.href && (
                <ArrowRight
                  size={15}
                  className="mt-1 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                  aria-hidden="true"
                />
              )}
            </UpdateLink>
          );
        })}
      </div>

      {/* New material is announced on Telegram first — friendly pointer */}
      <div className="card mt-8 flex flex-col items-center gap-3 p-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          New material and exam alerts land on{" "}
          <span className="font-semibold text-fg">Telegram</span> first.
        </p>
        <a
          href={SITE.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tg shrink-0 rounded-lg px-3.5 py-2 text-xs"
        >
          <Send size={13} />
          Join the channel
        </a>
      </div>
    </section>
  );
}
