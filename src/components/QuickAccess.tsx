import { Link } from "react-router-dom";
import { quickAccess } from "../data/quickAccess";

/**
 * Six quick-access tiles. Each tile either filters the materials
 * section, opens another page, or shows a "coming soon" note.
 */
export default function QuickAccess({
  onPick,
  onComingSoon,
}: {
  onPick: (type: string) => void;
  onComingSoon: (message: string) => void;
}) {
  const cardClass =
    "card-interactive group flex items-center gap-3 p-4 text-left";

  return (
    <section className="border-b border-edge bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="eyebrow">Quick Access</p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {quickAccess.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand/10 text-brand transition-colors group-hover:gradient-brand group-hover:text-white">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold">{item.title}</span>
                  <span className="block truncate text-xs text-muted">
                    {item.description}
                  </span>
                </span>
              </>
            );

            // Route tile → real link.
            if (item.action.kind === "route") {
              return (
                <Link key={item.title} to={item.action.to} className={cardClass}>
                  {inner}
                </Link>
              );
            }

            // Filter / coming-soon tile → button.
            return (
              <button
                key={item.title}
                className={cardClass}
                onClick={() => {
                  if (item.action.kind === "filter") {
                    onPick(item.action.type);
                  } else {
                    onComingSoon(`${item.title} — coming soon. Stay tuned!`);
                  }
                }}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
